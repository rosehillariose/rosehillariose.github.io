/* Portfolio data — pulled verbatim from the original Wix site */
window.RH_WORK = [
  {
    slug: "sm-posts",
    title: "Social Media Posts",
    type: "Design collection",
    category: "brand",
    img: "assets/img/sm-posts.jpg",
    alt: "App-promo social media design — three phone mockups on pink pedestals showing dark fitness-app screens",
    desc: "Social media posts like Facebook Story, Facebook Cover, Facebook Post, invitation for a product exhibition, and flyer.",
    meta: "Facebook Story · Cover · Post · Invitation · Flyer",
    gallery: [
      { src: "assets/img/gallery-christmas.jpg", alt: "Christmas-themed Facebook story design with festive typography" },
      { src: "assets/img/gallery-siloam.jpg", alt: "Invitation artwork for a Siloam event" },
      { src: "assets/img/gallery-varna-post.jpg", alt: "Fashion label Instagram post for Varna Designs" },
      { src: "assets/img/gallery-varna-cover.jpg", alt: "Fashion label Facebook cover banner for Varna Designs" },
      { src: "assets/img/gallery-academy.jpg", alt: "Poster design for Waffle Writers Academy" }
    ]
  },
  {
    slug: "mobile-apps-money",
    title: "Mobile Apps & Money",
    type: "Article",
    category: "tech",
    img: "assets/img/mobile-apps-money.jpg",
    alt: "Designer sketching mobile app wireframes beside printed UI screens and colour swatches",
    desc: "This article sheds light on the significance and versatility of mobile applications in our day-to-day lives. Skillfully blending information with insightful examples, it dives deep into various revenue generation models adopted by app developers. With an analytical approach, the article offers practical strategies for maximizing profits, ensuring readers leave with a clear understanding of the mobile app business landscape.",
    meta: "App monetisation · Business models",
    gallery: []
  },
  {
    slug: "branding-gone-wrong",
    title: "Branding Gone Wrong",
    type: "Case study",
    category: "brand",
    img: "assets/img/branding-gone-wrong.jpg",
    alt: "Minimal body-care brand packaging — pastel gradient bottles, jars and tubes on a grey studio set",
    desc: "This case study delves into notable branding mishaps from giants in their respective industries. The study also proposes an alternate approach for Dove, suggesting a focus on product essence over packaging, aligned with its \"Real Beauty\" ethos. The narrative style seamlessly blends descriptive analysis with constructive critiques, particularly evident in the reimagined Dove campaign that advises prioritising product value over aesthetic packaging.",
    meta: "Brand critique · Dove case",
    gallery: []
  }
,
  {
    slug: "light-sound-sensor",
    title: "Light, Sound & Sensor",
    type: "Article",
    category: "tech",
    img: "assets/img/light-sound-sensor.jpg",
    alt: "Two students exploring a tablet together in a classroom",
    desc: "This article delves into three fundamental concepts: Light, Sound, and Sensor. The narrative style seamlessly combines relatable analogies with scientific principles, making complex ideas accessible and engaging. Through anecdotes, examples, and thought-provoking questions, it effortlessly guides readers through a comprehensive understanding of each concept, highlighting both their everyday significance and scientific intricacies.",
    meta: "Science explainer · Analogies",
    gallery: []
  },
  {
    slug: "the-pregnant-king",
    title: "The Pregnant King",
    type: "Book review",
    category: "editorial",
    img: "assets/img/pregnant-king.jpg",
    alt: "Row of well-thumbed books lined up on a dark shelf",
    desc: "This thoughtful review of Devdutt Pattanaik's \"The Pregnant King\" unveils the layers of a novel that brilliantly reimagines the Mahabharata. The analysis spotlights the intricate weave of characters that defy traditional gender boundaries, and applauds Pattanaik's unique narrative style. The description aptly encapsulates the novel's exploration of desire versus destiny and the intricate dance of gender roles.",
    meta: "Devdutt Pattanaik · Literary analysis",
    gallery: []
  },
  {
    slug: "supply-chain",
    title: "Supply Chain Cyber Attack",
    type: "Article",
    category: "tech",
    img: "assets/img/supply-chain.jpg",
    alt: "Design studio desk with a monitor showing an editorial website and colour swatches on the desk",
    desc: "This article explores the intricacies of supply chain management and the looming threats of cyber attacks targeting these systems. Through a blend of illustrative examples and prescriptive measures, the narrative combines a thorough analysis with actionable insights, presented in a lucid and structured manner.",
    meta: "Cybersecurity · Operations",
    gallery: []
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    type: "Article",
    category: "editorial",
    img: "assets/img/dental-implants.jpg",
    alt: "Dentist in blue gloves examining a smiling patient with a mirror instrument in a clinic",
    desc: "This article delves into the world of dental implants, accentuating their significance in restoring one's smile and functionality. Using a mix of poetic flair and informative precision, the article frames teeth as the essential, living elements of one's appearance and well-being, while also detailing the durability, reliability, and process of dental implants. The article's blend of artistic analogies and clinical descriptions offers readers a holistic understanding, presented in a vivid and eloquent style.",
    meta: "Health editorial · Analogies",
    gallery: []
  },
  {
    slug: "evolution-branding",
    title: "Evolution of Branding in Post COVID-19",
    type: "Article",
    category: "brand",
    img: "assets/img/evolution-branding.jpg",
    alt: "Bold snack packaging lineup — Radical Toast chip bags held in hands",
    desc: "This article examines the seismic shifts in branding strategy amid the \"New Normal\" post-COVID-19. Emphasising the need for a fusion of online and offline engagements and underscoring evolving consumer expectations, it cites real-world brand adaptations like Apple and Nike. The prose, woven with reflective insights and vivid illustrations, adopts a contemplative style, calling on brands to reinvent their narratives with authenticity and social relevance.",
    meta: "Brand strategy · Apple & Nike",
    gallery: []
  }
];

(function () {
  "use strict";
  var work = window.RH_WORK || [];
  var grid = document.getElementById("workGrid");
  var lightboxRoot = document.getElementById("lightbox");
  var api = lightboxRoot ? window.RH.lightbox(lightboxRoot) : null;

  function render(list) {
    grid.innerHTML = "";
    list.forEach(function (item, i) {
      var card = document.createElement("button");
      card.className = "work-card";
      card.type = "button";
      card.setAttribute("data-reveal", "");
      card.setAttribute("data-slug", item.slug);
      card.setAttribute("aria-haspopup", "dialog");
      card.style.setProperty("--d", (i % 3) * 70 + "ms");
      card.innerHTML =
        '<span class="work-media"><img loading="lazy" alt="' + item.alt + '" src="' + item.img + '">' +
        '<span class="work-type">' + item.type + "</span>" +
        (item.gallery.length ? '<span class="gallery-badge">+ ' + item.gallery.length + ' images</span>' : "") +
        '</span>' +
        '<span class="work-body"><h3>' + item.title + "</h3>" +
        '<span class="work-meta">' + item.meta + "</span>" +
        '<span class="work-excerpt">' + item.desc + "</span>" +
        '<span class="work-count">Open details →</span></span>';
      card.querySelector("img").alt = item.alt;
      card.addEventListener("click", function () { openItem(item.slug); });
      grid.appendChild(card);
      card.classList.add("is-visible");
    });
    if (!list.length) {
      grid.innerHTML = '<p style="grid-column:1/-1;color:var(--muted)">No pieces in this category yet.</p>';
    }
  }

  function openItem(slug) {
    var item = work.filter(function (w) { return w.slug === slug; })[0];
    if (!item || !api) return;
    lightboxRoot.querySelector("#lbImg").src = item.img;
    lightboxRoot.querySelector("#lbImg").alt = item.alt;
    lightboxRoot.querySelector("#lbTitle").textContent = item.title;
    lightboxRoot.querySelector("#lbType").textContent = item.type;
    lightboxRoot.querySelector("#lbDesc").textContent = item.desc;
    lightboxRoot.querySelector("#lbMeta").textContent = item.meta + (item.gallery.length ? " · " + item.gallery.length + " images" : "");
    var strip = lightboxRoot.querySelector("#lbStrip");
    var row = lightboxRoot.querySelector("#lbStripRow");
    if (item.gallery.length) {
      row.innerHTML = "";
      item.gallery.forEach(function (g) {
        var img = document.createElement("img");
        img.src = g.src;
        img.alt = g.alt;
        img.loading = "lazy";
        row.appendChild(img);
      });
      strip.classList.add("is-open");
    } else {
      row.innerHTML = "";
      strip.classList.remove("is-open");
    }
    api.open();
  }

  /* filters */
  document.querySelectorAll(".filter").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      render(f === "all" ? work : work.filter(function (w) { return w.category === f; }));
    });
  });

  render(work);

  /* open from #hash (index featured links) */
  if (location.hash) {
    var slug = location.hash.slice(1);
    var target = work.filter(function (w) { return w.slug === slug; })[0];
    if (target) {
      setTimeout(function () { openItem(target.slug); }, 350);
      history.replaceState(null, "", location.pathname);
    }
  }
})();