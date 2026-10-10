/* Skill chips — sourced from the resume PDF, rendered on index + resume pages */
(function () {
  "use strict";
  var AI = ["Rubric-based evaluation", "Annotation QA", "Data labeling", "Side-by-side ranking", "Peer review", "QC checklists", "Adversarial red-teaming", "Prompt injection testing", "Jailbreak design", "Multi-turn manipulation", "Generative AI guardrails", "Model behavior monitoring"];
  var CONTENT = ["Prompt engineering", "RLHF data quality", "Content strategy", "User intent mapping", "Knowledge base management", "SEO writing", "Copywriting", "Technical writing", "UI/UX writing", "Video scripting", "Proofreading", "Root cause analysis"];
  var TOOLS = ["Jasper AI", "Canva", "Grammarly", "Google Ads", "SEMRush", "Wrike", "CMS (Brain)", "SharePoint", "WordPress", "JSON", "XML", "REST APIs"];
  var OPS = ["Zero missed sign-offs", "CMS product activation at scale", "QC protocols", "Stakeholder alignment", "Root cause analysis", "Process discipline"];

  var PLANS = {
    svc1: { list: AI, variant: "chip" },
    svc2: { list: CONTENT, variant: "chip" },
    svc3: { list: OPS, variant: "chip" },
    sk1: { list: AI, variant: "chip chip-accent" },
    sk2: { list: CONTENT, variant: "chip chip-accent" },
    sk3: { list: TOOLS, variant: "chip chip-accent" },
    rsk1: { list: AI, variant: "chip chip-accent" },
    rsk2: { list: CONTENT, variant: "chip chip-accent" },
    rsk3: { list: TOOLS, variant: "chip chip-accent" }
  };

  function fill(id, plan) {
    var host = document.getElementById(id);
    if (!host || host.children.length) return;
    plan.list.forEach(function (label) {
      var chip = document.createElement("span");
      chip.className = plan.variant;
      chip.textContent = label;
      var li = document.createElement("li");
      li.appendChild(chip);
      host.appendChild(li);
    });
  }

  function run() {
    Object.keys(PLANS).forEach(function (id) { fill(id, PLANS[id]); });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();