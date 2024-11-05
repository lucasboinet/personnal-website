export interface Project {
  images: string[];
  name: string;
  description: string;
  technos: string[];
}

export default [
  {
    images: ["/projects/gamerhub.png", "/projects/gamerhub.webp"],
    name: "GamerHub",
    description:
      "Plateforme de jeux multijoueurs qui vous permet de jouer et de personnaliser des jeux comme Undercover, Speedrundle ou encore le Loup Garou.",
    technos: [
      "Vue 3",
      "Typescript",
      "Mongo",
      "ExpressJS",
      "TailwindCSS",
      "Stripe",
      "Dragonfly",
      "HeadlessUI",
    ],
  },
  {
    images: ["/projects/skyloud.png"],
    name: "Skyloud App",
    description: `
      Skyloud est une entreprise certifiée KCSP, CKA, CKS et spécialisée dans les nouvelles technologies Cloud. Elle aide ses clients, tels qu'Air France, CNRS et Indy, à construire et administrer des infrastructures disponibles, résilientes et scalables.
      <br><br>
      Mes responsabilités ont été de refondre graphiquement et d'enrichir les fonctionnalités de la Skyloud.App (Une application de monitoring d'infrastructure cloud et de gestion de tickets clients). 

      <br><br><br>
      - Refonte complète de l'interface de la Skyloud.App<br>
      - Implémentation d'une fonctionnalité de monitoring des applications clients, remontés d'incidents avec rapports.<br>
      - Création d'un espace pour les équipes internes pour améliorer la gestion des sprints et de la supervision globales des tickets clients.<br>
      - Enrichissements des fonctionnalités autour de la partie ticketing (labélisation, facturation, mise en attente)<br>
      - Ajout d'une vue client qui récapitule les dépenses du client sur la partie ticketing ainsi que divers statistiques sur l'ensemble des tickets qu'il à crée.<br>
    `,
    technos: [
      "Vue 3",
      "ExpressJS",
      "Mongo",
      "TailwindCSS",
      "Stripe",
      "Microservices",
    ],
  },
  {
    images: ["/projects/tokatab.png"],
    name: "Tokatab",
    description: `
      Tokatab est une entreprise spécialisée dans la création d'une plateforme d'apprentissage du piano en ligne visant à devenir un véritable professeur virtuel.
      <br><br>
      Mes responsabilités chez Tokatab incluent la refonte et l'amélioration de la plateforme pour optimiser l'expérience utilisateur et introduire de nouvelles fonctionnalités.
      <br><br>
      - Refonte complète de l'interface de Tokatab pour améliorer l'ergonomie et l'accessibilité.<br>
      - Intégration des abonnements payants et fonctionnalités premium.<br>
      - Ajout de méthode de connexion alternative via SSO (Google, Facebook & Apple)<br>
    `,
    technos: [
      "Quasar",
      "Vue 2",
      "TailwindCSS",
      "Stripe",
      "Laravel",
      "PostgreSQL",
    ],
  },
  {
    images: ["/projects/cv-maker.png", "/projects/cv_maker_editor.png", "/projects/cv_maker_docs_list.png"],
    name: "CV Maker",
    description:
      "Application qui permet de créer des CV en glissant et déposant des éléments personnalisables (image, texte, formes) dans un espace de travail.",
    technos: [
      "Next.js",
      "ExpressJS",
      "Typescript",
      "PostgreSQL",
      "Knex",
      "Styled Component",
      "Cloudinary",
    ],
  },
];
