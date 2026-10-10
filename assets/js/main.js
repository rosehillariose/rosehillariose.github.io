/* Rosemol Hillariose — site behaviours (no dependencies) */
(function () {
  "use strict";

  /* footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* mobile nav */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* reveal on scroll */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (t) { t.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(function (t) {
      if (t.style.getPropertyValue("--d")) { /* stagger delay from inline style */ }
      io.observe(t);
    });
  }

  /* lightbox helpers (portfolio page wires the rest) */
  window.RH = window.RH || {};
  window.RH.lightbox = function (root) {
    var dialog = root.querySelector(".lightbox-dialog");
    var closeBtn = root.querySelector(".lightbox-close");
    var lastFocus = null;
    function open() {
      lastFocus = document.activeElement;
      root.classList.add("is-open");
      root.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      root.classList.remove("is-open");
      root.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    root.addEventListener("click", function (e) {
      if (e.target === root || e.target.classList.contains("lightbox-backdrop")) close();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("is-open")) close();
    });
    return { open: open, close: close };
  };
})();