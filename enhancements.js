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
    title: "Salon des trophées Girondins",
    category: "Design",
    meta: "FC Girondins · Scénographie",
    image: "/assets/project-girondins.jpg",
    alt: "Salon des trophées du FC Girondins de Bordeaux au Matmut Atlantique",
    description: "Mettre en scène le palmarès et l’histoire du club dans un espace de réception au Matmut Atlantique.",
    contribution: "Hiérarchiser les signes, organiser le regard et créer un récit spatial qui donne du sens sans surcharger l’espace.",
    proof: "FCGB · Matmut Atlantique · Récit · Mémoire collective",
  },
  {
    title: "Appartement 01",
    category: "Architecture",
    meta: "Architecture intérieure · Habitat",
    image: "/assets/hero-interior.jpg",
    alt: "Intérieur contemporain avec suspensions sculpturales et espace de vie",
    description: "Composer un lieu à partir des usages réels, de la lumière, des volumes et de la personnalité de celles et ceux qui l’habitent.",
    contribution: "Écouter avant de dessiner, clarifier les priorités puis développer chaque détail pour préserver l’intention jusqu’au chantier.",
    proof: "Usages · Matières · Lumière · Détails",
  },
  {
    title: "Balaïtous Hospitality",
    category: "AMO",
    meta: "Stratégie · Cluster · Hospitality",
    image: "/assets/clients/balaitous-hospitality.png",
    imageFit: "contain",
    alt: "Logo Balaïtous Hospitality",
    description: "Création et coordination d’un cluster réunissant quatre entreprises autour d’une vision commune de l’hospitality.",
    contribution: "Mettre le design au service du dialogue entre industrie, éclairage, architecture intérieure et exploitation hôtelière.",
    proof: "2023–2025 · Stratégie · Coordination · Développement",
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

const documentedMissions = [
  ["Retail sportif", "Conception globale, scénographie et maîtrise d’œuvre de lieux de marque à forte fréquentation."],
  ["Restaurant ERP", "Restructuration, accessibilité, contraintes réglementaires et coordination des intervenants."],
  ["Patrimoine & réhabilitation", "Relevé de l’existant, diagnostic, faisabilité et transformation de bâtisses anciennes."],
  ["Habitat & investissement", "Études de potentiel, programmes, plans et arbitrages pour des lieux de vie sur mesure."],
  ["Hospitality", "Expérience client, flux des équipes, identité, maintenance et réalité économique de l’exploitation."],
  ["Stratégie collective", "Mise en relation de métiers complémentaires et construction d’une vision de projet partagée."],
];

const clientReferences = [
  ["FC Girondins de Bordeaux", "fc-girondins-bordeaux.png"],
  ["Stade Atlantique", "stade-atlantique.png"],
  ["Union Bordeaux Bègles", "ubb.png"],
  ["Adidas", "adidas.png"],
  ["Puma", "puma.png"],
  ["Kappa", "kappa.jpg"],
  ["Bordeaux Métropole", "bordeaux-metropole.png"],
  ["Région Nouvelle-Aquitaine", "region-nouvelle-aquitaine.png"],
  ["Conseil général de la Gironde", "conseil-general-gironde.png"],
  ["SAFER Nouvelle-Aquitaine", "safer.png"],
  ["Balaïtous Hospitality", "balaitous-hospitality.png"],
  ["Restaurant Les Frangins", "restaurant-les-frangins.png"],
  ["Restaurant Les Criquets", "restaurant-les-criquets.png"],
  ["Chez Max", "restaurant-chez-max.png"],
  ["Château Talbot", "chateau-talbot.png"],
  ["Château Gloria", "chateau-gloria.png"],
  ["Château Saint-Pierre", "chateau-saint-pierre.png"],
  ["Château Pichon Longueville Baron", "chateau-pichon-longueville-baron.png"],
  ["Château Belair", "chateau-belair.png"],
  ["Edena Spa", "edena-spa.png"],
  ["FICOFI", "ficofi.png"],
  ["Mobil M", "mobilm.png"],
  ["Point Virgule", "point-virgule.png"],
  ["Ouïe Prothèse Auditive", "ouie-prothese-auditive.png"],
  ["100% Quali", "100-quali.png"],
  ["L’Équipe Magazine", "lequipe.png"],
  ["Agence Sigma – Corbis", "agence-sigma.png"],
  ["Equilan Retail & Design", "equilan.png"],
];

const carnetEntries = [
  ["Études de cas & références", "Les projets, les contextes et les recommandations dans leur version détaillée.", "https://sites.google.com/view/hitodesign/références"],
  ["Design + architecture intérieure", "Pourquoi la méthode de décision et la maîtrise du réel doivent rester liées.", "https://sites.google.com/view/hitodesign/offres-et-métiers/architecture-intérieure"],
  ["Parcours & transmission", "Une carrière, une pédagogie et des convictions nourries par plus de vingt-cinq ans de pratique.", "https://sites.google.com/view/hitodesign/a-propos"],
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function manifestoMarkup() {
  return `
    <section id="approche" class="manifesto-section">
      <div class="manifesto-statement">
        <p class="kicker light">Le sens avant le style</p>
        <h2>Un lieu n’est jamais qu’un lieu.</h2>
        <p class="manifesto-lead">Concevoir, c’est traduire la complexité humaine en espace habitable.</p>
        <p>Le doute ouvre la réflexion, la méthode donne un cap et la maîtrise technique permet de préserver le sens jusqu’au réel.</p>
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

function documentedMissionsMarkup() {
  return `
    <div class="documented-missions">
      <div class="documented-heading">
        <p class="kicker">D’autres projets documentés</p>
        <p>Le mémoire professionnel rassemble également des missions de faisabilité, de réhabilitation, d’ERP, d’habitat et d’accompagnement stratégique.</p>
      </div>
      <div class="documented-grid">
        ${documentedMissions.map(([title, text], index) => `
          <article><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}
      </div>
    </div>`;
}

function referencesMarkup() {
  return `
    <section id="references" class="section references-section">
      <div class="section-heading horizontal-heading">
        <div><p class="kicker">Références clients</p><h2>Ils nous ont fait confiance.</h2></div>
        <p>Sport, retail, institutions, hospitality, vignobles et services : une pratique construite au contact d’organisations très différentes.</p>
      </div>
      <div class="clients-grid">
        ${clientReferences.map(([name, logo], index) => `
          <article class="client-logo" data-client-index="${index}" ${index >= 14 ? "hidden" : ""}>
            <img src="/assets/clients/${logo}" alt="Logo ${name}"><span>${name}</span>
          </article>`).join("")}
      </div>
      <button class="button clients-toggle" type="button" aria-expanded="false">Voir les 28 références</button>
      <div class="reference-proof">
        <blockquote>« Votre capacité à combler le fossé entre le design, l’industrie et l’hôtellerie a été essentielle. »</blockquote>
        <p>Équipe B.lux · Projet Balaïtous Hospitality</p>
      </div>
    </section>`;
}

function carnetsMarkup() {
  return `
    <section id="carnets" class="carnets-section">
      <div class="carnets-intro">
        <p class="kicker light">Les Carnets HITO</p>
        <h2>Le lieu où les projets prennent le temps de se raconter.</h2>
        <p>Le site principal présente l’essentiel. Le Google Sites devient l’espace éditorial pour approfondir les projets, la méthode et la transmission.</p>
        <a class="button button-primary" href="https://sites.google.com/view/hitodesign/accueil" target="_blank" rel="noreferrer">Accéder aux Carnets HITO</a>
      </div>
      <div class="carnets-grid">
        ${carnetEntries.map(([title, text, href], index) => `
          <a href="${href}" target="_blank" rel="noreferrer">
            <span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text}</p><strong>Lire dans les Carnets →</strong>
          </a>`).join("")}
      </div>
    </section>`;
}

function projectCard(project) {
  return `
    <button class="project-card" type="button" data-project-title="${project.title}" data-project-category="${project.category}">
      <img class="${project.imageFit === "contain" ? "is-contained" : ""}" src="${project.image}" alt="${project.alt}">
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
      <img class="${project.imageFit === "contain" ? "is-contained" : ""}" src="${project.image}" alt="${project.alt}">
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
    const aboutButton = Array.from(navigation.querySelectorAll("button")).find((item) => item.textContent === "À propos");
    if (aboutButton) {
      const referencesButton = document.createElement("button");
      referencesButton.type = "button";
      referencesButton.textContent = "Références";
      referencesButton.addEventListener("click", () => scrollToSection("references"));
      aboutButton.replaceWith(referencesButton);
    }
    if (!navigation.querySelector("[data-carnets-link]")) {
      const carnetsLink = document.createElement("a");
      carnetsLink.dataset.carnetsLink = "true";
      carnetsLink.href = "https://sites.google.com/view/hitodesign/accueil";
      carnetsLink.target = "_blank";
      carnetsLink.rel = "noreferrer";
      carnetsLink.textContent = "Carnets";
      navigation.append(carnetsLink);
    }
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
  const referencesButton = document.createElement("button");
  referencesButton.type = "button";
  referencesButton.textContent = "Références";
  referencesButton.addEventListener("click", () => {
    drawer.querySelector(".drawer-close")?.click();
    setTimeout(() => scrollToSection("references"), 20);
  });
  const contactButton = Array.from(drawer.querySelectorAll(":scope > button:not(.drawer-close)")).find((item) => item.textContent === "Me contacter");
  drawer.insertBefore(referencesButton, contactButton || null);
  const carnetsLink = document.createElement("a");
  carnetsLink.href = "https://sites.google.com/view/hitodesign/accueil";
  carnetsLink.target = "_blank";
  carnetsLink.rel = "noreferrer";
  carnetsLink.textContent = "Les Carnets HITO";
  drawer.append(carnetsLink);
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
  grid.insertAdjacentHTML("afterend", documentedMissionsMarkup());
}

function enrichAbout() {
  const about = document.querySelector(".about-copy");
  const list = about?.querySelector("ul");
  if (!about || !list) return;
  const listening = document.createElement("p");
  listening.textContent = "Avant de dessiner, j’écoute. Pas pour simplement prendre note, mais pour comprendre ce qui est essentiel, ce qui doit évoluer et ce qui ne doit pas être trahi.";
  list.before(listening);
  const conviction = document.createElement("p");
  conviction.textContent = "Ma posture tient dans une conviction : ne jamais simplifier le métier au point d’en perdre l’épaisseur, la nuance et la responsabilité.";
  listening.after(conviction);
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

function enrichReferences() {
  const projectsSection = document.getElementById("projets");
  if (!projectsSection || document.getElementById("references")) return;
  projectsSection.insertAdjacentHTML("afterend", referencesMarkup());
  const section = document.getElementById("references");
  const toggle = section.querySelector(".clients-toggle");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    section.querySelectorAll("[data-client-index]").forEach((item) => {
      if (Number(item.dataset.clientIndex) >= 14) item.hidden = expanded;
    });
    toggle.setAttribute("aria-expanded", String(!expanded));
    toggle.textContent = expanded ? "Voir les 28 références" : "Réduire la liste";
  });
}

function enrichCarnets() {
  const contact = document.getElementById("contact");
  if (contact && !document.getElementById("carnets")) contact.insertAdjacentHTML("beforebegin", carnetsMarkup());
}

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-section");
  const missions = document.getElementById("missions");
  if (hero && !document.getElementById("approche")) hero.insertAdjacentHTML("afterend", manifestoMarkup());
  if (missions && !document.querySelector(".singularity-section")) missions.insertAdjacentHTML("afterend", singularityMarkup());
  enrichNavigation();
  enrichProjects();
  enrichReferences();
  enrichAbout();
  enrichCarnets();
  enrichMobileDrawer();

  const observer = new MutationObserver(enrichMobileDrawer);
  observer.observe(document.getElementById("root"), { childList: true, subtree: true });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProjectModal();
});
