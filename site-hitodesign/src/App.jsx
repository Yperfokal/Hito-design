import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChalkboardTeacher,
  CompassTool,
  List,
  Phone,
  SquaresFour,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const missions = [
  {
    id: "design-global",
    title: "Design global",
    icon: SquaresFour,
    description:
      "Clarifier les usages, l’identité et le concept avant de dessiner l’espace.",
    detail:
      "Une mission de cadrage pour aligner l’expérience, l’image, l’exploitation et les décisions structurantes du projet.",
  },
  {
    id: "architecture-interieure",
    title: "Architecture intérieure",
    icon: CompassTool,
    description:
      "Concevoir des lieux sensibles, fonctionnels, durables et réellement exploitables.",
    detail:
      "Du concept à la mise en œuvre : programmes, plans, matières, lumière, détails et coordination selon le périmètre.",
  },
  {
    id: "amo",
    title: "AMO · Assistance aux équipes",
    icon: UsersThree,
    description:
      "Clarifier, arbitrer et sécuriser chaque étape sans perdre le sens du projet.",
    detail:
      "Un accompagnement indépendant pour fiabiliser les choix, le budget, le calendrier et les interfaces entre acteurs.",
  },
  {
    id: "formation",
    title: "Formation & workshops",
    icon: ChalkboardTeacher,
    description:
      "Installer une méthodologie design concrète dans les pratiques des équipes.",
    detail:
      "Des formats construits autour de vos situations réelles, avec des livrables, des décisions et des outils réutilisables.",
  },
];

const projects = [
  {
    title: "Boutique Galerie Girondins",
    category: "Architecture",
    meta: "Retail · Architecture intérieure",
    image: "/assets/project-boutique-fcgb.jpg",
    alt: "Boutique du FC Girondins de Bordeaux conçue par HITO Design",
    description:
      "Conception et maîtrise d’œuvre d’une surface de vente de 700 m² au Matmut Atlantique, pensée comme un lieu identitaire et exploitable.",
    contribution:
      "Traduire l’image du club en expérience spatiale, tenir les usages d’une forte fréquentation et coordonner le projet jusqu’à la livraison.",
    proof: "700 m² · Matmut Atlantique · Budget et délais tenus",
  },
  {
    title: "Hospitality & restauration",
    category: "Design",
    meta: "Design global · Parcours client",
    image: "/assets/project-restaurant.jpg",
    alt: "Restaurant aménagé avec espaces de repas et séparation textile",
    description:
      "Concilier l’expérience client, les flux, la maintenance et une identité de lieu durable dans le temps.",
    contribution:
      "Tenir ensemble la promesse faite au client et la réalité quotidienne des équipes : parcours, lumière, matière, entretien et exploitation.",
    proof: "Expérience client · Flux équipe · Durabilité",
  },
  {
    title: "Identité de lieu",
    category: "Design",
    meta: "Scénographie · Expérience",
    image: "/assets/project-trophies.jpg",
    alt: "Scénographie de trophées sur une composition de volumes blancs",
    description:
      "Transformer les objets, les usages et l’histoire d’une organisation en expérience spatiale lisible et mémorable.",
    contribution:
      "Hiérarchiser les signes, organiser le regard et créer un récit spatial qui donne du sens sans surcharger l’espace.",
    proof: "Récit · Mise en scène · Mémoire collective",
  },
  {
    title: "Lieux de vie sur mesure",
    category: "Architecture",
    meta: "Architecture intérieure · Habitat",
    image: "/assets/hero-interior.jpg",
    alt: "Intérieur contemporain avec suspensions sculpturales et espace de vie",
    description:
      "Composer un lieu à partir des usages réels, de la lumière, des volumes et de la personnalité de celles et ceux qui l’habitent.",
    contribution:
      "Écouter avant de dessiner, clarifier les priorités puis développer chaque détail pour préserver l’intention jusqu’au chantier.",
    proof: "Usages · Matières · Lumière · Détails",
  },
  {
    title: "AMO & coordination",
    category: "AMO",
    meta: "Assistance · Arbitrage · Équipe",
    image: "/assets/mission-amo.jpg",
    alt: "Équipe réunie autour de documents de conception et de coordination",
    description:
      "Aider une maîtrise d’ouvrage ou une équipe à poser les bonnes questions, décider au bon moment et sécuriser les interfaces.",
    contribution:
      "Rendre le projet lisible, installer une méthode de décision et constituer l’équipe pluridisciplinaire adaptée au contexte.",
    proof: "Cadrage · Budget · Planning · Interfaces",
  },
  {
    title: "Formation & workshops",
    category: "Formation",
    meta: "Transmission · Méthodologie design",
    image: "/assets/mission-formation.jpg",
    alt: "Atelier collectif de formation à la méthodologie design",
    description:
      "Transmettre une pratique concrète du design pour mieux écouter, structurer, prototyper, décider et partager.",
    contribution:
      "Construire des formats ancrés dans les situations réelles des participants, avec des outils immédiatement réutilisables.",
    proof: "Enseignement depuis 2014 · Bachelor & Mastère",
  },
  {
    title: "TRANSMETTRE",
    category: "Formation",
    meta: "Livre · Design pédagogique",
    image: "/assets/livre-transmettre.jpg",
    alt: "Livre TRANSMETTRE de Chris Reati consacré à la pédagogie",
    description:
      "Un travail d’auteur sur la transmission, le rôle du designer et la manière de rendre une démarche partageable.",
    contribution:
      "Mettre en mots l’expérience, relier pratique professionnelle et pédagogie, et faire de la méthode un outil d’autonomie.",
    proof: "Écriture · Pédagogie · Culture design",
  },
];

const projectFilters = ["Tous", "Architecture", "Design", "AMO", "Formation"];

const principles = [
  {
    number: "01",
    title: "L’humain",
    text: "Vos usages, vos contraintes, vos objectifs et votre identité sont la matière première du projet.",
  },
  {
    number: "02",
    title: "La méthode",
    text: "Écouter, clarifier, prioriser et arbitrer : la clarté protège le projet comme les personnes qui le portent.",
  },
  {
    number: "03",
    title: "Le réel",
    text: "Un lieu doit être beau, fluide et singulier — mais aussi faisable, durable et exploitable au quotidien.",
  },
];

const steps = [
  ["01", "Comprendre", "Écouter les usages, les enjeux, les contraintes et les ambitions."],
  ["02", "Concevoir", "Imaginer des solutions justes, créatives, réalistes et partageables."],
  ["03", "Réaliser", "Développer, arbitrer et coordonner chaque détail du projet."],
  ["04", "Accompagner", "Sécuriser la mise en œuvre et transmettre les clés d’usage."],
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectFilter, setProjectFilter] = useState("Tous");
  const [formSent, setFormSent] = useState(false);

  const visibleProjects = projectFilter === "Tous"
    ? projects
    : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen || Boolean(selectedProject));
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen, selectedProject]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormSent(true);
    event.currentTarget.reset();
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <List size={28} weight="regular" />
        </button>
        <button className="brand-button" type="button" onClick={() => scrollTo("accueil")}>
          <img src="/assets/hito-logo.png" alt="HITO Design" />
        </button>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <button type="button" onClick={() => scrollTo("approche")}>Approche</button>
          <button type="button" onClick={() => scrollTo("missions")}>Missions</button>
          <button type="button" onClick={() => scrollTo("projets")}>Projets</button>
          <button type="button" onClick={() => scrollTo("a-propos")}>À propos</button>
        </nav>
        <button className="header-cta" type="button" onClick={() => scrollTo("contact")}>
          Parler de votre projet <ArrowRight size={18} />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Menu">
          <button
            className="drawer-close"
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={30} />
          </button>
          <img src="/assets/hito-logo.png" alt="HITO Design" />
          {[
            ["approche", "Approche"],
            ["missions", "Missions"],
            ["projets", "Projets"],
            ["methode", "Méthode"],
            ["a-propos", "À propos"],
            ["contact", "Me contacter"],
          ].map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => scrollTo(id), 20);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <main>
        <section id="accueil" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">HITO DESIGN</p>
            <h1>Des lieux désirables, exploitables et durables.</h1>
            <p className="hero-services">
              Design global <span>·</span> Architecture intérieure <span>·</span> AMO <span>·</span> Formation
            </p>
            <p className="hero-intro">
              J’aide les porteurs de projet, hôteliers et équipes Retail à clarifier leurs choix,
              tenir le cap et transformer une intention en lieu exploitable.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => scrollTo("projets")}>
                Voir les projets <ArrowRight size={19} />
              </button>
              <button className="button button-secondary" type="button" onClick={() => scrollTo("contact")}>
                Parler de votre projet <ArrowRight size={19} />
              </button>
            </div>
            <div className="proof-line" aria-label="Repères professionnels">
              <span>25 ans d’expérience</span>
              <span>Hospitality & ERP</span>
              <span>Nouvelle-Aquitaine & Occitanie</span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src="/assets/hero-interior.jpg"
              alt="Réalisation d’architecture intérieure HITO Design avec suspensions sculpturales"
            />
          </div>
        </section>

        <section id="approche" className="manifesto-section">
          <div className="manifesto-statement">
            <p className="kicker light">Le sens avant le style</p>
            <h2>Un lieu n’est jamais qu’un lieu.</h2>
            <p className="manifesto-lead">
              C’est un usage, une économie, une équipe, une culture, une histoire à raconter
              — et des arbitrages à assumer.
            </p>
            <p>
              HITO Design est une identité d’auteur en architecture intérieure et design :
              sensible, humaine, contextuelle et responsable.
            </p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article key={principle.number} className="principle-card">
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="missions" className="section missions-section">
          <div className="section-heading">
            <p className="kicker">Nos missions</p>
            <h2>Quatre façons de faire avancer votre projet.</h2>
          </div>
          <div className="missions-grid">
            {missions.map((mission) => {
              const Icon = mission.icon;
              return (
                <article key={mission.id} className="mission-card">
                  <Icon size={38} weight="thin" aria-hidden="true" />
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                  <details>
                    <summary>En savoir plus</summary>
                    <p>{mission.detail}</p>
                  </details>
                </article>
              );
            })}
          </div>
        </section>

        <section className="singularity-section">
          <div className="singularity-title">
            <p className="kicker">La singularité HITO</p>
            <h2>Tenir le design et l’architecture intérieure ensemble.</h2>
          </div>
          <div className="singularity-columns">
            <article>
              <span>Design</span>
              <h3>Donner une direction juste.</h3>
              <p>
                Clarifier le besoin, structurer les décisions, prioriser, tester et arbitrer
                pour que chaque choix serve une intention partagée.
              </p>
            </article>
            <div className="singularity-plus" aria-hidden="true">+</div>
            <article>
              <span>Architecture intérieure</span>
              <h3>Rendre cette direction possible.</h3>
              <p>
                Transformer la clarté en plans, volumes, matières, lumière, détails,
                faisabilité et coordination jusqu’à la mise en œuvre.
              </p>
            </article>
          </div>
          <p className="singularity-conclusion">
            C’est souvent ce qui fait la différence entre un projet séduisant et un projet
            qui fonctionne vraiment — sans perdre le sens en route.
          </p>
        </section>

        <section id="projets" className="section projects-section">
          <div className="section-heading horizontal-heading">
            <div>
              <p className="kicker">Réalisations & terrains d’intervention</p>
              <h2>Plus qu’un portfolio : une manière d’agir.</h2>
            </div>
            <p>
              Réalisations livrées, typologies accompagnées et travail de transmission :
              chaque entrée montre une facette concrète du métier.
            </p>
          </div>
          <div className="project-filters" aria-label="Filtrer les réalisations">
            {projectFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === projectFilter ? "is-active" : ""}
                aria-pressed={filter === projectFilter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <button
                key={project.title}
                className="project-card"
                type="button"
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.alt} />
                <span className="project-meta">{project.meta}</span>
                <strong>{project.title}</strong>
                <span className="project-link">Découvrir <ArrowRight size={16} /></span>
              </button>
            ))}
          </div>
        </section>

        <section id="methode" className="section method-section">
          <div className="section-heading">
            <p className="kicker">Notre méthode en 4 étapes</p>
            <h2>De l’intention au réel, sans perdre le sens.</h2>
          </div>
          <div className="steps-grid">
            {steps.map(([number, title, description]) => (
              <article key={number} className="step-card">
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonial-section">
          <blockquote>
            « L’ouvrage livré a dépassé nos espérances : respect du cahier des charges,
            des délais et du budget. »
          </blockquote>
          <p>Vincent Repoux · Direction générale adjointe, FC Girondins de Bordeaux</p>
        </section>

        <section id="a-propos" className="about-section">
          <div className="about-image">
            <img src="/assets/chris-reati.jpg" alt="Chris Reati, designer et fondateur de HITO Design" />
          </div>
          <div className="about-copy">
            <p className="kicker">À propos</p>
            <h2>Chris Reati, designer</h2>
            <p className="about-lead">
              L’humain comme matière première, la méthode comme colonne vertébrale.
            </p>
            <p>
              Depuis 25 ans, Chris Reati conçoit et accompagne des projets d’architecture
              intérieure et de design global, avec une attention égale portée aux usages,
              à l’économie du projet et à l’identité du lieu.
            </p>
            <p>
              Avant de dessiner, j’écoute. Pas pour simplement prendre note, mais pour
              comprendre ce qui est essentiel, ce qui doit évoluer et ce qui ne doit pas
              être trahi.
            </p>
            <div className="about-facts">
              <article><strong>25 ans</strong><span>d’architecture intérieure et de design global</span></article>
              <article><strong>UNAID</strong><span>Architecte d’intérieur qualifié · n°3320</span></article>
              <article><strong>Depuis 2014</strong><span>Enseignant en Bachelor et Mastère</span></article>
            </div>
            <div className="about-journey">
              <p><span>Depuis 2022</span> HITO Design · identité d’auteur</p>
              <p><span>2012 — 2022</span> Atelier YF Aaidg</p>
              <p><span>2004 — 2011</span> Reati-Design</p>
            </div>
            <button className="text-link" type="button" onClick={() => scrollTo("contact")}>
              Échanger avec Chris Reati <ArrowRight size={18} />
            </button>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-intro">
            <p className="kicker light">Parlons de votre projet</p>
            <h2>Un premier échange pour clarifier vos enjeux.</h2>
            <p>
              Architecture intérieure, design global, AMO ou formation : décrivez votre
              contexte et nous identifierons ensemble la mission la plus juste.
            </p>
            <a className="phone-link" href="tel:+33651990746">
              <Phone size={22} /> 06 51 99 07 46
            </a>
          </div>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <label>
              Nom et prénom
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              E-mail
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Mission concernée
              <select name="mission" defaultValue="">
                <option value="" disabled>Choisir une mission</option>
                <option>Design global</option>
                <option>Architecture intérieure</option>
                <option>AMO · Assistance aux équipes</option>
                <option>Formation & workshops</option>
              </select>
            </label>
            <label>
              Votre projet
              <textarea name="message" rows="4" required />
            </label>
            <button className="button button-dark" type="submit">
              Envoyer la demande <ArrowRight size={19} />
            </button>
            {formSent && (
              <p className="form-success" role="status">
                Merci. Votre demande est prête pour l’envoi ; la connexion e-mail sera activée lors de la mise en ligne.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/assets/hito-logo.png" alt="HITO Design" />
        <p>Architecture intérieure · Design global · AMO · Formation</p>
        <p>Gers · Nouvelle-Aquitaine · Occitanie · Projets partout en France</p>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelectedProject(null)}>
          <article
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              type="button"
              aria-label="Fermer"
              onClick={() => setSelectedProject(null)}
            >
              <X size={26} />
            </button>
            <img src={selectedProject.image} alt={selectedProject.alt} />
            <div>
              <p className="kicker">{selectedProject.meta}</p>
              <h2 id="project-modal-title">{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
              <div className="modal-detail">
                <span>La contribution HITO</span>
                <p>{selectedProject.contribution}</p>
              </div>
              <p className="modal-proof">{selectedProject.proof}</p>
              <button
                className="button button-primary"
                type="button"
                onClick={() => {
                  setSelectedProject(null);
                  setTimeout(() => scrollTo("contact"), 20);
                }}
              >
                Parler d’un projet similaire <ArrowRight size={18} />
              </button>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
