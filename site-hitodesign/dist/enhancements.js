const principles = [
  ["01", "L’humain", "Vos usages, vos contraintes, vos objectifs et votre identité sont la matière première du projet."],
  ["02", "La méthode", "Écouter, clarifier, prioriser et arbitrer : la clarté protège le projet comme les personnes qui le portent."],
  ["03", "Le réel", "Un lieu doit être beau, fluide et singulier — mais aussi faisable, durable et exploitable au quotidien."],
];

const projects = [
  {
    title: "Boutique Galerie Girondins",
    category: "Architecture",
    meta: "Retail · Architecture intérieure",
    image: "/assets/project-boutique-fcgb.jpg",
    alt: "Boutique du FC Girondins de Bordeaux conçue par HITO Design",
    description: "Conception et maîtrise d’œuvre d’une surface de vente de 700 m² au Matmut Atlantique, pensée comme un lieu identitaire et exploitable.",
    contribution: "Traduire l’image du club en expérience spatiale, tenir les usages d’une forte fréquentation et coordonner le projet jusqu’à la livraison.",
    proof: "700 m² · Matmut Atlantique · Budget et délais tenus",
  },
  {
    title: "Hospitality & restauration",
    category: "Design",
    meta: "Design global · Parcours client",
    image: "/assets/project-restaurant.jpg",
    alt: "Restaurant aménagé avec espaces de repas et séparation textile",
    description: "Concilier l’expérience client, les flux, la maintenance et une identité de lieu durable dans le temps.",
    contribution: "Tenir ensemble la promesse faite au client et la réalité quotidienne des équipes : parcours, lumière, matière, entretien et exploitation.",
    proof: "Expérience client · Flux équipe · Durabilité",
  },
  {
    title: "Identité de lieu",
    category: "Design",
    meta: "Scénographie · Expérience",
    image: "/assets/project-trophies.jpg",
    alt: "Scénographie de trophées sur une composition de volumes blancs",
    description: "Transformer les objets, les usages et l’histoire d’une organisation en expérience spatiale lisible et mémorable.",
    contribution: "Hiérarchiser les signes, organiser le regard et créer un récit spatial qui donne du sens sans surcharger l’espace.",
    proof: "Récit · Mise en scène · Mémoire collective",
  },
  {
    title: "Lieux de vie sur mesure",
    category: "Architecture",
    meta: "Architecture intérieure · Habitat",
    image: "/assets/hero-interior.jpg",
    alt: "Intérieur contemporain avec suspensions sculpturales et espace de vie",
    description: "Composer un lieu à partir des usages réels, de la lumière, des volumes et de la personnalité de celles et ceux qui l’habitent.",
    contribution: "Écouter avant de dessiner, clarifier les priorités puis développer chaque détail pour préserver l’intention jusqu’au chantier.",
    proof: "Usages · Matières · Lumière · Détails",
  },
  {
    title: "AMO & coordination",
    category: "AMO",
    meta: "Assistance · Arbitrage · Équipe",
    image: "/assets/mission-amo.jpg",
    alt: "Équipe réunie autour de documents de conception et de coordination",
    description: "Aider une maîtrise d’ouvrage ou une équipe à poser les bonnes questions, décider au bon moment et sécuriser les interfaces.",
    contribution: "Rendre le projet lisible, installer une méthode de décision et constituer l’équipe pluridisciplinaire adaptée au contexte.",
    proof: "Cadrage · Budget · Planning · Interfaces",
  },
  {
    title: "Formation & workshops",
    category: "Formation",
    meta: "Transmission · Méthodologie design",
    image: "/assets/mission-formation.jpg",
    alt: "Atelier collectif de formation à la méthodologie design",
    description: "Transmettre une pratique concrète du design pour mieux écouter, structurer, prototyper, décider et partager.",
    contribution: "Construire des formats ancrés dans les situations réelles des participants, avec des outils immédiatement réutilisables.",
    proof: "Enseignement depuis 2014 · Bachelor & Mastère",
  },
  {
    title: "TRANSMETTRE",
    category: "Formation",
    meta: "Livre · Design pédagogique",
    image: "/assets/livre-transmettre.jpg",
    alt: "Livre TRANSMETTRE de Chris Reati consacré à la pédagogie",
    description: "Un travail d’auteur sur la transmission, le rôle du designer et la manière de rendre une démarche partageable.",
    contribution: "Mettre en mots l’expérience, relier pratique professionnelle et pédagogie, et faire de la méthode un outil d’autonomie.",
    proof: "Écriture · Pédagogie · Culture design",
  },
];

const filterNames = ["Tous", "Architecture", "Design", "AMO", "Formation"];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function manifestoMarkup() {
  return `
    <section id="approche" class="manifesto-section">
      <div class="manifesto-statement">
        <p class="kicker light">Le sens avant le style</p>
        <h2>Un lieu n’est jamais qu’un lieu.</h2>
        <p class="manifesto-lead">C’est un usage, une économie, une équipe, une culture, une histoire à raconter — et des arbitrages à assumer.</p>
        <p>HITO Design est une identité d’auteur en architecture intérieure et design : sensible, humaine, contextuelle et responsable.</p>
      </div>
      <div class="principles-grid">
        ${principles.map(([number, title, text]) => `
          <article class="principle-card">
            <span>${number}</span><h3>${title}</h3><p>${text}</p>
          </article>`).join("")}
      </div>
    </section>`;
}

function singularityMarkup() {
  return `
    <section class="singularity-section">
      <div class="singularity-title">
        <p class="kicker">La singularité HITO</p>
        <h2>Tenir le design et l’architecture intérieure ensemble.</h2>
      </div>
      <div class="singularity-columns">
        <article>
          <span>Design</span><h3>Donner une direction juste.</h3>
          <p>Clarifier le besoin, structurer les décisions, prioriser, tester et arbitrer pour que chaque choix serve une intention partagée.</p>
        </article>
        <div class="singularity-plus" aria-hidden="true">+</div>
        <article>
          <span>Architecture intérieure</span><h3>Rendre cette direction possible.</h3>
          <p>Transformer la clarté en plans, volumes, matières, lumière, détails, faisabilité et coordination jusqu’à la mise en œuvre.</p>
        </article>
      </div>
      <p class="singularity-conclusion">C’est souvent ce qui fait la différence entre un projet séduisant et un projet qui fonctionne vraiment — sans perdre le sens en route.</p>
    </section>`;
}

function projectCard(project) {
  return `
    <button class="project-card" type="button" data-project-title="${project.title}" data-project-category="${project.category}">
      <img src="${project.image}" alt="${project.alt}">
      <span class="project-meta">${project.meta}</span>
      <strong>${project.title}</strong>
      <span class="project-link">Découvrir</span>
    </button>`;
}

function closeProjectModal() {
  document.querySelector(".enhancement-modal")?.remove();
  document.body.classList.remove("no-scroll");
}

function openProjectModal(project) {
  closeProjectModal();
  const wrapper = document.createElement("div");
  wrapper.className = "modal-backdrop enhancement-modal";
  wrapper.setAttribute("role", "presentation");
  wrapper.innerHTML = `
    <article class="project-modal" role="dialog" aria-modal="true" aria-labelledby="enhancement-modal-title">
      <button class="modal-close enhancement-close" type="button" aria-label="Fermer la présentation">Fermer</button>
      <img src="${project.image}" alt="${project.alt}">
      <div>
        <p class="kicker">${project.meta}</p>
        <h2 id="enhancement-modal-title">${project.title}</h2>
        <p>${project.description}</p>
        <div class="modal-detail"><span>La contribution HITO</span><p>${project.contribution}</p></div>
        <p class="modal-proof">${project.proof}</p>
        <button class="button button-primary enhancement-contact" type="button">Parler d’un projet similaire</button>
      </div>
    </article>`;
  wrapper.addEventListener("mousedown", (event) => {
    if (event.target === wrapper) closeProjectModal();
  });
  wrapper.querySelector(".enhancement-close").addEventListener("click", closeProjectModal);
  wrapper.querySelector(".enhancement-contact").addEventListener("click", () => {
    closeProjectModal();
    scrollToSection("contact");
  });
  document.body.appendChild(wrapper);
  document.body.classList.add("no-scroll");
}

function enrichNavigation() {
  const navigation = document.querySelector(".desktop-nav");
  if (navigation && !navigation.querySelector("[data-approach-link]")) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.approachLink = "true";
    button.textContent = "Approche";
    button.addEventListener("click", () => scrollToSection("approche"));
    navigation.prepend(button);
    const methodButton = Array.from(navigation.querySelectorAll("button")).find((item) => item.textContent === "Méthode");
    methodButton?.remove();
  }
}

function enrichMobileDrawer() {
  const drawer = document.querySelector(".mobile-drawer");
  if (!drawer || drawer.querySelector("[data-approach-link]")) return;
  const firstNavButton = Array.from(drawer.querySelectorAll(":scope > button:not(.drawer-close)"))[0];
  if (!firstNavButton) return;
  const button = document.createElement("button");
  button.type = "button";
  button.dataset.approachLink = "true";
  button.textContent = "Approche";
  button.addEventListener("click", () => {
    drawer.querySelector(".drawer-close")?.click();
    setTimeout(() => scrollToSection("approche"), 20);
  });
  drawer.insertBefore(button, firstNavButton);
}

function enrichProjects() {
  const section = document.getElementById("projets");
  const grid = section?.querySelector(".projects-grid");
  if (!section || !grid) return;

  const kicker = section.querySelector(".horizontal-heading .kicker");
  const heading = section.querySelector(".horizontal-heading h2");
  const intro = section.querySelector(".horizontal-heading > p");
  if (kicker) kicker.textContent = "Réalisations & terrains d’intervention";
  if (heading) heading.textContent = "Plus qu’un portfolio : une manière d’agir.";
  if (intro) intro.textContent = "Réalisations livrées, typologies accompagnées et travail de transmission : chaque entrée montre une facette concrète du métier.";

  grid.innerHTML = projects.map(projectCard).join("");
  grid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-project-title]");
    if (!card) return;
    const project = projects.find((item) => item.title === card.dataset.projectTitle);
    if (project) openProjectModal(project);
  });

  const filters = document.createElement("div");
  filters.className = "project-filters";
  filters.setAttribute("aria-label", "Filtrer les réalisations");
  filters.innerHTML = filterNames.map((filter, index) => `
    <button type="button" class="${index === 0 ? "is-active" : ""}" aria-pressed="${index === 0}" data-filter="${filter}">${filter}</button>`).join("");
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    filters.querySelectorAll("button").forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    grid.querySelectorAll("[data-project-category]").forEach((card) => {
      card.hidden = button.dataset.filter !== "Tous" && card.dataset.projectCategory !== button.dataset.filter;
    });
  });
  section.insertBefore(filters, grid);
}

function enrichAbout() {
  const about = document.querySelector(".about-copy");
  const list = about?.querySelector("ul");
  if (!about || !list) return;
  const listening = document.createElement("p");
  listening.textContent = "Avant de dessiner, j’écoute. Pas pour simplement prendre note, mais pour comprendre ce qui est essentiel, ce qui doit évoluer et ce qui ne doit pas être trahi.";
  list.before(listening);
  list.outerHTML = `
    <div class="about-facts">
      <article><strong>25 ans</strong><span>d’architecture intérieure et de design global</span></article>
      <article><strong>UNAID</strong><span>Architecte d’intérieur qualifié · n°3320</span></article>
      <article><strong>Depuis 2014</strong><span>Enseignant en Bachelor et Mastère</span></article>
    </div>
    <div class="about-journey">
      <p><span>Depuis 2022</span> HITO Design · identité d’auteur</p>
      <p><span>2012 — 2022</span> Atelier YF Aaidg</p>
      <p><span>2004 — 2011</span> Reati-Design</p>
    </div>`;
}

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-section");
  const missions = document.getElementById("missions");
  if (hero && !document.getElementById("approche")) hero.insertAdjacentHTML("afterend", manifestoMarkup());
  if (missions && !document.querySelector(".singularity-section")) missions.insertAdjacentHTML("afterend", singularityMarkup());
  enrichNavigation();
  enrichProjects();
  enrichAbout();
  enrichMobileDrawer();

  const observer = new MutationObserver(enrichMobileDrawer);
  observer.observe(document.getElementById("root"), { childList: true, subtree: true });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
});
