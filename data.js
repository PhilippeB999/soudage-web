/* ============================================================
   SoudageQuest — Données du programme DEP 5382 (Soudage-assemblage)
   Données converties depuis l'app source vers le moteur web (PWA).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   Les questions QCM sont des EXEMPLES à valider par les enseignants du programme.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Soudage-assemblage", subtitle: "DEP 5382 — 1800 heures — 120 unités" },
  en: { title: "Welding-Fitting", subtitle: "DVS 5382 — 1800 hours — 120 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes": l'élève touche un terme puis
   sa définition correspondante. pairs: tableau de
   { term_fr, term_en, def_fr, def_en }. Toutes les paires doivent être
   associées correctement pour que la question soit considérée réussie. */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "situation complexe" (mise en situation): un court
   scénario réaliste suivi d'un choix multiple basé sur le jugement
   professionnel. Réutilise le même format "choices" qu'un QCM standard. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

/* Paliers de difficulté d'une quête. Chaque compétence est maintenant
   divisée en 3 paliers progressifs (tiers[]), débloqués l'un après l'autre:
   Débutant -> Intermédiaire -> Avancé. Réussir le palier 1 d'une compétence
   déverrouille la compétence suivante sur la carte; réussir le palier 3
   (Avancé) accorde le badge de maîtrise de la compétence. */
const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "soud01",
  "order": 1,
  "code": "304672",
  "hours": 30,
  "title_fr": "Métier et formation",
  "title_en": "Trade and Training",
  "icon": "🧭",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel diplôme obtient-on à la fin du programme Soudage-assemblage 5382?",
      "en": "What diploma is awarded at the end of the Welding-Fitting 5382 program?",
      "choices": [
       {
        "fr": "Un diplôme d'études professionnelles (DEP)",
        "en": "A Diploma of Vocational Studies (DVS)",
        "correct": true
       },
       {
        "fr": "Un diplôme d'études collégiales (DEC)",
        "en": "A Diploma of College Studies (DEC)",
        "correct": false
       },
       {
        "fr": "Une attestation d'études collégiales (AEC)",
        "en": "An Attestation of College Studies (AEC)",
        "correct": false
       },
       {
        "fr": "Un baccalauréat",
        "en": "A Bachelor's degree",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel métier ce programme prépare-t-il principalement à exercer?",
      "en": "What trade does this program mainly prepare students for?",
      "choices": [
       {
        "fr": "Soudeur(se)-monteur(se)",
        "en": "Welder-fitter",
        "correct": true
       },
       {
        "fr": "Électricien",
        "en": "Electrician",
        "correct": false
       },
       {
        "fr": "Plombier",
        "en": "Plumber",
        "correct": false
       },
       {
        "fr": "Comptable",
        "en": "Accountant",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le programme Soudage-assemblage 5382 comporte 27 modules.",
      "en": "The Welding-Fitting 5382 program has 27 modules.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Combien d'heures totalise le programme Soudage-assemblage 5382?",
      "en": "How many hours does the Welding-Fitting 5382 program total?",
      "choices": [
       {
        "fr": "1800 heures",
        "en": "1800 hours",
        "correct": true
       },
       {
        "fr": "1650 heures",
        "en": "1650 hours",
        "correct": false
       },
       {
        "fr": "900 heures",
        "en": "900 hours",
        "correct": false
       },
       {
        "fr": "1185 heures",
        "en": "1185 hours",
        "correct": false
       }
      ]
     },
     {
      "fr": "Combien d'unités totalise le programme (1 unité = 15 heures)?",
      "en": "How many credits does the program total (1 credit = 15 hours)?",
      "choices": [
       {
        "fr": "120 unités",
        "en": "120 credits",
        "correct": true
       },
       {
        "fr": "110 unités",
        "en": "110 credits",
        "correct": false
       },
       {
        "fr": "60 unités",
        "en": "60 credits",
        "correct": false
       },
       {
        "fr": "79 unités",
        "en": "79 credits",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le soudeur-monteur exécute des travaux de préparation, de soudage et d'assemblage selon différents procédés.",
      "en": "A welder-fitter performs preparation, welding and assembly work using different processes.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Le module « Assemblages de complexité moyenne » dure 120 heures. Combien d'unités cela représente-t-il?",
      "en": "The 'Medium-Complexity Assemblies' module lasts 120 hours. How many credits does that represent?",
      "choices": [
       {
        "fr": "8 unités",
        "en": "8 credits",
        "correct": true
       },
       {
        "fr": "6 unités",
        "en": "6 credits",
        "correct": false
       },
       {
        "fr": "7 unités",
        "en": "7 credits",
        "correct": false
       },
       {
        "fr": "5 unités",
        "en": "5 credits",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle proportion des heures du programme est consacrée aux compétences directement liées aux tâches du métier?",
      "en": "What proportion of the program's hours is dedicated to competencies directly tied to trade tasks?",
      "choices": [
       {
        "fr": "1260 heures sur 1800, le reste étant des compétences générales",
        "en": "1260 out of 1800 hours, with the rest being general competencies",
        "correct": true
       },
       {
        "fr": "Toutes les heures sans exception",
        "en": "All hours without exception",
        "correct": false
       },
       {
        "fr": "Moins de 100 heures",
        "en": "Less than 100 hours",
        "correct": false
       },
       {
        "fr": "Aucune heure spécifique n'est prévue",
        "en": "No specific hours are allocated",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La réussite du programme peut mener à des certificats délivrés par des instances reconnues.",
      "en": "Completing the program can lead to certificates issued by recognized bodies.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud02",
  "order": 2,
  "code": "254992",
  "hours": 30,
  "title_fr": "Santé et sécurité sur les chantiers de construction",
  "title_en": "Construction Site Health and Safety",
  "icon": "🦺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement de protection individuelle (EPI) est essentiel sur un chantier de construction?",
      "en": "What personal protective equipment (PPE) is essential on a construction site?",
      "choices": [
       {
        "fr": "Le casque, les lunettes de sécurité et les bottes à cap d'acier",
        "en": "A hard hat, safety glasses and steel-toe boots",
        "correct": true
       },
       {
        "fr": "Aucun équipement n'est requis",
        "en": "No equipment is required",
        "correct": false
       },
       {
        "fr": "Uniquement des gants de jardinage",
        "en": "Only gardening gloves",
        "correct": false
       },
       {
        "fr": "Uniquement une casquette",
        "en": "Only a cap",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la carte ASP Construction est-elle obligatoire pour travailler sur un chantier?",
      "en": "Why is the ASP Construction card mandatory to work on a job site?",
      "choices": [
       {
        "fr": "Elle atteste d'une formation de base en santé et sécurité",
        "en": "It attests to basic health and safety training",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Elle sert uniquement de carte d'identité",
        "en": "It's only used as an ID card",
        "correct": false
       },
       {
        "fr": "Elle n'est jamais requise",
        "en": "It is never required",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La signalisation de sécurité sur un chantier informe des dangers présents.",
      "en": "Safety signage on a job site informs workers of present hazards.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Que faire si l'on repère un danger non signalé sur un chantier?",
      "en": "What should you do if you spot an unmarked hazard on a job site?",
      "choices": [
       {
        "fr": "Le signaler immédiatement au superviseur",
        "en": "Immediately reporting it to the supervisor",
        "correct": true
       },
       {
        "fr": "L'ignorer",
        "en": "Ignoring it",
        "correct": false
       },
       {
        "fr": "Continuer à travailler sans rien dire",
        "en": "Continuing to work without saying anything",
        "correct": false
       },
       {
        "fr": "Le contourner sans avertir personne",
        "en": "Working around it without warning anyone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi respecter le périmètre de sécurité autour d'une zone de levage?",
      "en": "Why respect the safety perimeter around a lifting zone?",
      "choices": [
       {
        "fr": "Pour éviter les blessures graves en cas de chute de charge",
        "en": "To avoid serious injury in case of a load drop",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le périmètre est purement décoratif",
        "en": "The perimeter is purely decorative",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le cadenassage d'un équipement est une procédure facultative, utile seulement pour les gros équipements industriels.",
      "en": "Lockout of equipment is an optional procedure, useful only for large industrial equipment.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un collègue ne porte pas son équipement de protection sur le chantier. Quelle est la bonne pratique?",
      "en": "A coworker isn't wearing their protective equipment on the job site. What is the correct practice?",
      "choices": [
       {
        "fr": "L'aviser du danger et, si nécessaire, en informer le superviseur",
        "en": "Warning them of the danger and, if necessary, informing the supervisor",
        "correct": true
       },
       {
        "fr": "Ignorer la situation",
        "en": "Ignoring the situation",
        "correct": false
       },
       {
        "fr": "Se moquer de lui",
        "en": "Making fun of them",
        "correct": false
       },
       {
        "fr": "Faire pareil pour ne pas se démarquer",
        "en": "Doing the same to avoid standing out",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la formation continue en santé et sécurité est-elle importante même pour un travailleur expérimenté?",
      "en": "Why is ongoing health and safety training important even for an experienced worker?",
      "choices": [
       {
        "fr": "Les normes et les risques évoluent, et la vigilance ne doit jamais diminuer",
        "en": "Standards and risks evolve, and vigilance must never decrease",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Un travailleur expérimenté n'a jamais besoin de formation",
        "en": "An experienced worker never needs training",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec l'exécution",
        "en": "To follow an internal administrative step unrelated to execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La culture de sécurité sur un chantier est uniquement la responsabilité du superviseur; les autres travailleurs n'ont pas à s'en soucier.",
      "en": "A job site's safety culture is solely the supervisor's responsibility; other workers don't need to worry about it.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud03",
  "order": 3,
  "code": "304687",
  "hours": 105,
  "title_fr": "Soudage d'acier et d'acier inoxydable (GMAW) – positions à plat et horizontale",
  "title_en": "Steel and Stainless Steel Welding (GMAW) – Flat and Horizontal Positions",
  "icon": "🔥",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que signifie l'acronyme GMAW?",
      "en": "What does the acronym GMAW stand for?",
      "choices": [
       {
        "fr": "Gas Metal Arc Welding (soudage à l'arc sous protection gazeuse)",
        "en": "Gas Metal Arc Welding",
        "correct": true
       },
       {
        "fr": "Ground Manual Auto Welding",
        "en": "Ground Manual Auto Welding",
        "correct": false
       },
       {
        "fr": "General Metal Assembly Work",
        "en": "General Metal Assembly Work",
        "correct": false
       },
       {
        "fr": "Aucune signification particulière",
        "en": "No particular meaning",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel gaz de protection est couramment utilisé en GMAW pour l'acier?",
      "en": "What shielding gas is commonly used in GMAW for steel?",
      "choices": [
       {
        "fr": "Un mélange d'argon et de CO2",
        "en": "A mixture of argon and CO2",
        "correct": true
       },
       {
        "fr": "De l'oxygène pur",
        "en": "Pure oxygen",
        "correct": false
       },
       {
        "fr": "De l'azote pur",
        "en": "Pure nitrogen",
        "correct": false
       },
       {
        "fr": "Aucun gaz n'est utilisé",
        "en": "No gas is used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La position à plat est généralement considérée comme la plus facile à maîtriser en soudage.",
      "en": "The flat position is generally considered the easiest to master in welding.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi régler correctement la vitesse d'alimentation du fil en GMAW?",
      "en": "Why correctly set the wire feed speed in GMAW?",
      "choices": [
       {
        "fr": "Pour obtenir un arc stable et une soudure de qualité",
        "en": "To achieve a stable arc and a quality weld",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "La vitesse n'affecte jamais la soudure",
        "en": "Speed never affects the weld",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel défaut peut résulter d'un angle de torche incorrect en position horizontale?",
      "en": "What defect can result from an incorrect torch angle in the horizontal position?",
      "choices": [
       {
        "fr": "Un affaissement ou un manque de fusion",
        "en": "Sagging or lack of fusion",
        "correct": true
       },
       {
        "fr": "Les défauts dépendent uniquement de la qualité du métal, jamais de la technique",
        "en": "Defects depend only on the metal's quality, never on technique",
        "correct": false
       },
       {
        "fr": "Une soudure toujours parfaite",
        "en": "An always-perfect weld",
        "correct": false
       },
       {
        "fr": "Une augmentation automatique de la résistance",
        "en": "An automatic increase in strength",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'acier inoxydable se soude toujours avec exactement les mêmes paramètres que l'acier au carbone.",
      "en": "Stainless steel is always welded with exactly the same parameters as carbon steel.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure GMAW en position horizontale montre des projections excessives. Quelle est une cause probable?",
      "en": "A GMAW weld in the horizontal position shows excessive spatter. What is a likely cause?",
      "choices": [
       {
        "fr": "Une tension ou une vitesse de fil mal ajustée",
        "en": "Poorly adjusted voltage or wire speed",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix du fil-électrode",
        "en": "The price of the welding wire",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'usure normale de l'équipement, peu importe les symptômes",
        "en": "The cause is almost always related to normal equipment wear, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester ses réglages sur une chute de métal avant de souder la pièce finale?",
      "en": "Why test your settings on a scrap piece before welding the final part?",
      "choices": [
       {
        "fr": "Pour vérifier la qualité du cordon avant un travail irréversible",
        "en": "To check the bead quality before irreversible work",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour perdre du temps",
        "en": "To waste time",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape purement administrative",
        "en": "To follow a purely administrative step",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du GMAW en positions à plat et horizontale est une base essentielle avant d'aborder les positions plus difficiles.",
      "en": "Mastering GMAW in flat and horizontal positions is an essential foundation before tackling more difficult positions.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud04",
  "order": 4,
  "code": "304692",
  "hours": 30,
  "title_fr": "Calculs liés au soudage et à l'assemblage",
  "title_en": "Welding and Assembly Calculations",
  "icon": "🧮",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi calculer la longueur totale de soudure nécessaire avant de commencer un projet?",
      "en": "Why calculate the total weld length needed before starting a project?",
      "choices": [
       {
        "fr": "Pour estimer le temps et les matériaux nécessaires",
        "en": "To estimate the time and materials needed",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter les exigences internes de documentation",
        "en": "To follow internal documentation requirements",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel outil aide à mesurer précisément une pièce métallique avant de souder?",
      "en": "What tool helps precisely measure a metal piece before welding?",
      "choices": [
       {
        "fr": "Un ruban à mesurer ou un pied à coulisse",
        "en": "A tape measure or a caliper",
        "correct": true
       },
       {
        "fr": "Un thermomètre",
        "en": "A thermometer",
        "correct": false
       },
       {
        "fr": "Une balance de cuisine",
        "en": "A kitchen scale",
        "correct": false
       },
       {
        "fr": "Un chronomètre",
        "en": "A stopwatch",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une erreur de mesure, même petite, peut affecter l'ajustement final d'un assemblage soudé.",
      "en": "Even a small measurement error can affect a welded assembly's final fit.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Comment calcule-t-on le retrait (contraction) attendu après le soudage d'une pièce d'acier?",
      "en": "How do you calculate the expected shrinkage (contraction) after welding a steel piece?",
      "choices": [
       {
        "fr": "En utilisant des tables ou formules basées sur l'épaisseur et le type de joint",
        "en": "Using tables or formulas based on thickness and joint type",
        "correct": true
       },
       {
        "fr": "En devinant approximativement",
        "en": "By roughly guessing",
        "correct": false
       },
       {
        "fr": "Le retrait ne se calcule jamais",
        "en": "Shrinkage is never calculated",
        "correct": false
       },
       {
        "fr": "En ignorant complètement ce facteur",
        "en": "By completely ignoring this factor",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi calculer l'angle de biseau nécessaire pour un joint à pleine pénétration?",
      "en": "Why calculate the bevel angle needed for a full-penetration joint?",
      "choices": [
       {
        "fr": "Pour assurer une fusion complète du métal de base",
        "en": "To ensure complete fusion of the base metal",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "L'angle n'affecte jamais la qualité du joint",
        "en": "The angle never affects the joint's quality",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les calculs de soudage se font toujours uniquement en unités métriques au Québec, sans jamais de conversion.",
      "en": "Welding calculations are always done only in metric units in Quebec, with no conversions.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un calcul montre qu'une pièce risque de se déformer significativement après le soudage. Quelle est la bonne pratique?",
      "en": "A calculation shows a piece is likely to deform significantly after welding. What is the correct practice?",
      "choices": [
       {
        "fr": "Prévoir une séquence de soudage ou des ajustements pour limiter la distorsion",
        "en": "Planning a welding sequence or adjustments to limit distortion",
        "correct": true
       },
       {
        "fr": "Ignorer le calcul et souder normalement",
        "en": "Ignoring the calculation and welding normally",
        "correct": false
       },
       {
        "fr": "Abandonner le projet",
        "en": "Abandoning the project",
        "correct": false
       },
       {
        "fr": "Modifier les plans sans consulter personne",
        "en": "Modifying the plans with no consultation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi des calculs précis de matériaux réduisent-ils les coûts d'un projet d'assemblage?",
      "en": "Why do precise material calculations reduce an assembly project's costs?",
      "choices": [
       {
        "fr": "Ils minimisent le gaspillage de métal et les commandes excédentaires",
        "en": "They minimize metal waste and excess orders",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Les calculs augmentent toujours les coûts",
        "en": "Calculations always increase costs",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure interne sans lien direct avec l'exécution",
        "en": "To follow an internal procedure unrelated to execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des calculs liés au soudage est une compétence essentielle pour planifier des projets complexes.",
      "en": "Mastering welding-related calculations is an essential skill for planning complex projects.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud05",
  "order": 5,
  "code": "304703",
  "hours": 45,
  "title_fr": "Coupage et préparation mécaniques",
  "title_en": "Mechanical Cutting and Preparation",
  "icon": "🪚",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert au coupage mécanique de l'acier en atelier?",
      "en": "What tool is used for mechanically cutting steel in the workshop?",
      "choices": [
       {
        "fr": "Une scie à métaux ou une cisaille",
        "en": "A metal saw or a shear",
        "correct": true
       },
       {
        "fr": "Un couteau de cuisine",
        "en": "A kitchen knife",
        "correct": false
       },
       {
        "fr": "Une hache",
        "en": "An axe",
        "correct": false
       },
       {
        "fr": "Des ciseaux à papier",
        "en": "Paper scissors",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi porter des lunettes de sécurité lors du coupage mécanique?",
      "en": "Why wear safety glasses during mechanical cutting?",
      "choices": [
       {
        "fr": "Pour se protéger des éclats de métal projetés",
        "en": "To protect against flying metal shards",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour améliorer la précision de la coupe",
        "en": "To improve cutting precision",
        "correct": false
       },
       {
        "fr": "Cela dépend uniquement du type de client, jamais du type de travail",
        "en": "It depends only on the type of client, never on the type of work",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une préparation soignée des bords avant le soudage améliore la qualité du joint final.",
      "en": "Careful edge preparation before welding improves the final joint's quality.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ébavurer une pièce après le coupage mécanique?",
      "en": "Why deburr a piece after mechanical cutting?",
      "choices": [
       {
        "fr": "Pour éliminer les bords tranchants et faciliter les manipulations sécuritaires",
        "en": "To remove sharp edges and allow for safe handling",
        "correct": true
       },
       {
        "fr": "Cela n'a d'utilité que pour les très grands projets industriels",
        "en": "It is only useful for very large industrial projects",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure de vérification imposée par l'atelier",
        "en": "To follow a verification procedure required by the shop",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative sans lien direct avec la tâche",
        "en": "To follow an administrative step unrelated to the task",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel type de biseau est souvent requis pour un joint à pleine pénétration?",
      "en": "What type of bevel is often required for a full-penetration joint?",
      "choices": [
       {
        "fr": "Un biseau en V ou en J selon l'épaisseur du métal",
        "en": "A V or J bevel depending on the metal's thickness",
        "correct": true
       },
       {
        "fr": "Aucun biseau n'est jamais nécessaire",
        "en": "No bevel is ever necessary",
        "correct": false
       },
       {
        "fr": "Un biseau toujours identique peu importe l'épaisseur",
        "en": "Always the same bevel regardless of thickness",
        "correct": false
       },
       {
        "fr": "Un biseau uniquement décoratif",
        "en": "A purely decorative bevel",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les bords produits par une machine de coupage dépendent uniquement du type de métal, jamais du réglage de la machine.",
      "en": "Edges produced by a cutting machine depend only on the type of metal, never on the machine's settings.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une pièce coupée mécaniquement présente des bords irréguliers avant le soudage. Quelle est la bonne pratique?",
      "en": "A mechanically cut piece has uneven edges before welding. What is the correct practice?",
      "choices": [
       {
        "fr": "Corriger les bords par meulage avant de procéder au soudage",
        "en": "Correcting the edges by grinding before proceeding to welding",
        "correct": true
       },
       {
        "fr": "Souder tel quel sans correction",
        "en": "Welding as-is with no correction",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Jeter la pièce sans évaluation",
        "en": "Discarding the piece with no assessment",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la précision du coupage mécanique est-elle particulièrement importante pour des assemblages complexes?",
      "en": "Why is mechanical cutting precision particularly important for complex assemblies?",
      "choices": [
       {
        "fr": "Des erreurs de coupe s'accumulent et compliquent l'ajustement final des pièces",
        "en": "Cutting errors accumulate and complicate the final fit-up of the pieces",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "La précision n'affecte jamais l'assemblage final",
        "en": "Precision never affects the final assembly",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de fabrication standard, peu importe l'urgence",
        "en": "To follow the standard fabrication order, regardless of urgency",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne préparation mécanique des pièces facilite grandement les étapes de soudage qui suivent.",
      "en": "Good mechanical preparation of pieces greatly facilitates the welding steps that follow.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud06",
  "order": 6,
  "code": "304716",
  "hours": 90,
  "title_fr": "Plans d'assemblages simples et dessin de croquis",
  "title_en": "Simple Assembly Drawings and Sketching",
  "icon": "📐",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un plan d'assemblage en soudage?",
      "en": "What is an assembly drawing in welding?",
      "choices": [
       {
        "fr": "Un document technique qui montre comment les pièces doivent être assemblées et soudées",
        "en": "A technical document showing how the pieces should be assembled and welded",
        "correct": true
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       },
       {
        "fr": "Un contrat de vente",
        "en": "A sales contract",
        "correct": false
       },
       {
        "fr": "Une garantie de fabricant",
        "en": "A manufacturer's warranty",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que représente un symbole de soudage sur un plan?",
      "en": "What does a welding symbol on a drawing represent?",
      "choices": [
       {
        "fr": "Le type de joint et de soudure requis à cet endroit",
        "en": "The type of joint and weld required at that location",
        "correct": true
       },
       {
        "fr": "Uniquement le poids de la pièce",
        "en": "Only the piece's weight",
        "correct": false
       },
       {
        "fr": "Le prix de la pièce",
        "en": "The piece's price",
        "correct": false
       },
       {
        "fr": "Le nom du client",
        "en": "The client's name",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un croquis simple peut suffire pour communiquer une modification mineure sur un chantier.",
      "en": "A simple sketch can be enough to communicate a minor change on a job site.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier les cotes d'un plan avant de commencer l'assemblage?",
      "en": "Why check a drawing's dimensions before starting assembly?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs coûteuses de coupe et d'assemblage",
        "en": "To avoid costly cutting and assembly errors",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour respecter la séquence de montage imposée par le plan",
        "en": "To follow the assembly sequence required by the drawing",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une cote d'un plan semble incohérente avec le reste du dessin?",
      "en": "What should you do if a dimension on a drawing seems inconsistent with the rest of the drawing?",
      "choices": [
       {
        "fr": "Vérifier auprès du superviseur ou du concepteur avant de fabriquer",
        "en": "Checking with the supervisor or designer before fabricating",
        "correct": true
       },
       {
        "fr": "Fabriquer selon sa propre estimation",
        "en": "Fabricating based on your own estimate",
        "correct": false
       },
       {
        "fr": "Ignorer la cote et continuer",
        "en": "Ignoring the dimension and continuing",
        "correct": false
       },
       {
        "fr": "Modifier le plan sans consulter personne",
        "en": "Modifying the drawing without consulting anyone",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Chaque atelier utilise ses propres symboles de soudage; il n'existe aucune norme reconnue à l'échelle de l'industrie.",
      "en": "Each shop uses its own welding symbols; no industry-wide recognized standard exists.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un plan complexe comporte plusieurs vues et des symboles de soudage détaillés. Pourquoi est-ce nécessaire?",
      "en": "A complex drawing includes several views and detailed welding symbols. Why is this necessary?",
      "choices": [
       {
        "fr": "Pour représenter fidèlement toutes les dimensions et exigences de soudage d'une structure",
        "en": "To accurately represent all the dimensions and welding requirements of a structure",
        "correct": true
       },
       {
        "fr": "Pour respecter une norme de présentation du plan",
        "en": "To follow a drawing presentation standard",
        "correct": false
       },
       {
        "fr": "Une seule vue serait toujours suffisante",
        "en": "A single view would always be enough",
        "correct": false
       },
       {
        "fr": "Cela n'apporte aucune information utile",
        "en": "It provides no useful information",
        "correct": false
       }
      ]
     },
     {
      "fr": "Un superviseur demande un croquis rapide d'une modification sur le chantier. Quelle est la bonne pratique?",
      "en": "A supervisor asks for a quick sketch of a change on the job site. What is the correct practice?",
      "choices": [
       {
        "fr": "Dessiner clairement les dimensions et détails essentiels malgré la rapidité demandée",
        "en": "Clearly drawing the essential dimensions and details despite the requested speed",
        "correct": true
       },
       {
        "fr": "Faire un croquis vague sans dimensions",
        "en": "Making a vague sketch with no dimensions",
        "correct": false
       },
       {
        "fr": "Refuser de faire un croquis",
        "en": "Refusing to make a sketch",
        "correct": false
       },
       {
        "fr": "Ignorer la demande",
        "en": "Ignoring the request",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne interprétation et réalisation de plans réduit les erreurs et les reprises coûteuses.",
      "en": "Good drawing interpretation and creation reduces errors and costly rework.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud07",
  "order": 7,
  "code": "304722",
  "hours": 30,
  "title_fr": "Accès, levage et manutention",
  "title_en": "Access, Lifting and Handling",
  "icon": "🏗️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement sert à accéder à une zone de travail en hauteur de façon sécuritaire?",
      "en": "What equipment is used to safely access an elevated work area?",
      "choices": [
       {
        "fr": "Un échafaudage ou une plateforme élévatrice",
        "en": "Scaffolding or an elevated work platform",
        "correct": true
       },
       {
        "fr": "Une chaise de bureau",
        "en": "An office chair",
        "correct": false
       },
       {
        "fr": "Une pile de boîtes",
        "en": "A stack of boxes",
        "correct": false
       },
       {
        "fr": "Aucun équipement n'est jamais nécessaire",
        "en": "No equipment is ever necessary",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi vérifier la capacité de charge d'un dispositif de levage avant de l'utiliser?",
      "en": "Why check a lifting device's load capacity before using it?",
      "choices": [
       {
        "fr": "Pour éviter une surcharge dangereuse",
        "en": "To avoid a dangerous overload",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "La capacité de charge n'existe pas vraiment",
        "en": "Load capacity doesn't really exist",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les élingues et chaînes de levage n'ont besoin d'être inspectées qu'une seule fois, à l'achat.",
      "en": "Slings and lifting chains only need to be inspected once, at the time of purchase.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser des techniques de manutention appropriées pour déplacer des pièces lourdes?",
      "en": "Why use proper handling techniques to move heavy pieces?",
      "choices": [
       {
        "fr": "Pour éviter les blessures musculo-squelettiques",
        "en": "To avoid musculoskeletal injuries",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Les techniques de manutention n'ont aucun effet",
        "en": "Handling techniques have no effect",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de lever une pièce métallique avec un pont roulant?",
      "en": "What should be checked before lifting a metal piece with an overhead crane?",
      "choices": [
       {
        "fr": "Le poids de la pièce, l'équilibre de la charge et le dégagement autour",
        "en": "The piece's weight, load balance and surrounding clearance",
        "correct": true
       },
       {
        "fr": "Uniquement le numéro du projet dans le système",
        "en": "Only the project number in the system",
        "correct": false
       },
       {
        "fr": "Uniquement le poids approximatif de la pièce",
        "en": "Only the piece's approximate weight",
        "correct": false
       },
       {
        "fr": "Uniquement le modèle de la machine à souder",
        "en": "Only the welding machine's model",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une charge mal équilibrée pendant le levage représente un risque sérieux pour les travailleurs à proximité.",
      "en": "An unbalanced load during lifting poses a serious risk to nearby workers.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une pièce à lever est plus lourde que prévu selon une nouvelle estimation. Quelle est la bonne pratique?",
      "en": "A piece to be lifted is heavier than expected according to a new estimate. What is the correct practice?",
      "choices": [
       {
        "fr": "Vérifier la capacité de l'équipement et ajuster le plan de levage avant de continuer",
        "en": "Checking the equipment's capacity and adjusting the lifting plan before continuing",
        "correct": true
       },
       {
        "fr": "Lever la pièce quand même sans vérification",
        "en": "Lifting the piece anyway with no check",
        "correct": false
       },
       {
        "fr": "Ignorer le nouveau poids estimé",
        "en": "Ignoring the new estimated weight",
        "correct": false
       },
       {
        "fr": "Abandonner le projet",
        "en": "Abandoning the project",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi planifier soigneusement une opération de levage complexe impliquant plusieurs travailleurs?",
      "en": "Why carefully plan a complex lifting operation involving several workers?",
      "choices": [
       {
        "fr": "Pour coordonner les actions et minimiser les risques d'accident",
        "en": "To coordinate actions and minimize the risk of accidents",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "La planification ralentit toujours inutilement le travail",
        "en": "Planning always needlessly slows down the work",
        "correct": false
       },
       {
        "fr": "Une seule personne peut toujours tout gérer seule",
        "en": "One person can always handle everything alone",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les techniques de levage et de manutention ont peu d'influence sur les risques de blessure, qui dépendent surtout de la chance.",
      "en": "Lifting and handling techniques have little influence on injury risk, which mostly depends on luck.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud08",
  "order": 8,
  "code": "304733",
  "hours": 45,
  "title_fr": "Coupage thermique",
  "title_en": "Thermal Cutting",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel procédé utilise un jet de gaz ionisé pour couper le métal?",
      "en": "What process uses a jet of ionized gas to cut metal?",
      "choices": [
       {
        "fr": "Le coupage au plasma",
        "en": "Plasma cutting",
        "correct": true
       },
       {
        "fr": "Le sciage manuel",
        "en": "Manual sawing",
        "correct": false
       },
       {
        "fr": "Le pliage à froid",
        "en": "Cold bending",
        "correct": false
       },
       {
        "fr": "Le polissage",
        "en": "Polishing",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi porter un écran facial lors du coupage thermique?",
      "en": "Why wear a face shield during thermal cutting?",
      "choices": [
       {
        "fr": "Pour se protéger des étincelles et de la lumière intense",
        "en": "To protect against sparks and intense light",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour améliorer la précision de la coupe",
        "en": "To improve cutting precision",
        "correct": false
       },
       {
        "fr": "Cela n'est nécessaire que pour les très gros contrats",
        "en": "It is only necessary for very large contracts",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le coupage à l'oxycoupage fonctionne bien sur l'acier au carbone mais moins bien sur certains autres métaux.",
      "en": "Oxy-fuel cutting works well on carbon steel but less well on certain other metals.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi ajuster la vitesse de déplacement de la torche lors du coupage thermique?",
      "en": "Why adjust the torch travel speed during thermal cutting?",
      "choices": [
       {
        "fr": "Pour obtenir une coupe propre sans laitier excessif",
        "en": "To achieve a clean cut without excessive dross",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "La vitesse n'affecte jamais la qualité de coupe",
        "en": "Speed never affects cut quality",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel danger est associé au coupage thermique dans un espace mal ventilé?",
      "en": "What hazard is associated with thermal cutting in a poorly ventilated space?",
      "choices": [
       {
        "fr": "L'accumulation de fumées et de gaz nocifs",
        "en": "The buildup of harmful fumes and gases",
        "correct": true
       },
       {
        "fr": "Aucun danger particulier",
        "en": "No particular hazard",
        "correct": false
       },
       {
        "fr": "Une amélioration de la qualité de l'air",
        "en": "Improved air quality",
        "correct": false
       },
       {
        "fr": "Le refroidissement excessif de la pièce",
        "en": "Excessive cooling of the piece",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'oxycoupage est toujours plus rapide que le coupage au plasma, peu importe l'épaisseur du métal.",
      "en": "Oxy-fuel cutting is always faster than plasma cutting, regardless of metal thickness.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une coupe thermique présente des bords rugueux avec du laitier excessif. Quelle est une cause probable?",
      "en": "A thermal cut has rough edges with excessive dross. What is a likely cause?",
      "choices": [
       {
        "fr": "Une vitesse de coupe ou une pression de gaz mal ajustée",
        "en": "A poorly adjusted cutting speed or gas pressure",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de la machine",
        "en": "The machine's price",
        "correct": false
       },
       {
        "fr": "La cause est généralement impossible à confirmer sans remplacer toute la pièce",
        "en": "The cause is generally impossible to confirm without replacing the whole piece",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi choisir le coupage au plasma plutôt que l'oxycoupage pour couper de l'acier inoxydable?",
      "en": "Why choose plasma cutting over oxy-fuel cutting for cutting stainless steel?",
      "choices": [
       {
        "fr": "L'oxycoupage est peu efficace sur les métaux résistants à l'oxydation comme l'acier inoxydable",
        "en": "Oxy-fuel cutting is not very effective on oxidation-resistant metals like stainless steel",
        "correct": true
       },
       {
        "fr": "Les deux procédés fonctionnent toujours de façon identique",
        "en": "Both processes always work identically",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "L'oxycoupage est toujours préférable",
        "en": "Oxy-fuel cutting is always preferable",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le choix du bon procédé de coupage thermique dépend du type de métal et de l'épaisseur à couper.",
      "en": "Choosing the right thermal cutting process depends on the type of metal and thickness being cut.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud09",
  "order": 9,
  "code": "304746",
  "hours": 90,
  "title_fr": "Soudage d'acier (FCAW) – positions à plat et horizontale",
  "title_en": "Steel Welding (FCAW) – Flat and Horizontal Positions",
  "icon": "💨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que signifie l'acronyme FCAW?",
      "en": "What does the acronym FCAW stand for?",
      "choices": [
       {
        "fr": "Flux-Cored Arc Welding (soudage à l'arc avec fil fourré)",
        "en": "Flux-Cored Arc Welding",
        "correct": true
       },
       {
        "fr": "Fast Cutting Assembly Work",
        "en": "Fast Cutting Assembly Work",
        "correct": false
       },
       {
        "fr": "Final Coating and Welding",
        "en": "Final Coating and Welding",
        "correct": false
       },
       {
        "fr": "Aucune signification particulière",
        "en": "No particular meaning",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel avantage offre le FCAW par rapport au GMAW pour certains travaux extérieurs?",
      "en": "What advantage does FCAW offer over GMAW for some outdoor work?",
      "choices": [
       {
        "fr": "Une meilleure résistance au vent grâce au fondant intégré au fil",
        "en": "Better wind resistance thanks to the flux built into the wire",
        "correct": true
       },
       {
        "fr": "Aucun avantage particulier",
        "en": "No particular advantage",
        "correct": false
       },
       {
        "fr": "Le FCAW ne fonctionne jamais à l'extérieur",
        "en": "FCAW never works outdoors",
        "correct": false
       },
       {
        "fr": "Le FCAW est toujours plus lent",
        "en": "FCAW is always slower",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le FCAW peut être utilisé avec ou sans gaz de protection selon le type de fil utilisé.",
      "en": "FCAW can be used with or without shielding gas depending on the type of wire used.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi le laitier produit par le FCAW doit-il être retiré entre les passes?",
      "en": "Why must the slag produced by FCAW be removed between passes?",
      "choices": [
       {
        "fr": "Pour éviter les inclusions de laitier qui affaiblissent la soudure",
        "en": "To avoid slag inclusions that weaken the weld",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Le laitier améliore toujours la résistance",
        "en": "Slag always improves strength",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel défaut peut résulter d'un angle de torche incorrect en position horizontale avec le FCAW?",
      "en": "What defect can result from an incorrect torch angle in the horizontal position with FCAW?",
      "choices": [
       {
        "fr": "Un affaissement ou un manque de fusion",
        "en": "Sagging or lack of fusion",
        "correct": true
       },
       {
        "fr": "Un défaut est toujours visible immédiatement à l'œil nu, sans exception",
        "en": "A defect is always immediately visible to the naked eye, without exception",
        "correct": false
       },
       {
        "fr": "Une soudure toujours parfaite",
        "en": "An always-perfect weld",
        "correct": false
       },
       {
        "fr": "Une augmentation automatique de la résistance",
        "en": "An automatic increase in strength",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le FCAW est rarement utilisé en construction de structures d'acier en raison de sa faible productivité.",
      "en": "FCAW is rarely used in steel structure construction due to its low productivity.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure FCAW présente des porosités visibles. Quelle est une cause probable?",
      "en": "An FCAW weld shows visible porosity. What is a likely cause?",
      "choices": [
       {
        "fr": "Une contamination de la surface ou un mauvais réglage des paramètres",
        "en": "Surface contamination or poorly set parameters",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix du fil-électrode",
        "en": "The price of the welding wire",
        "correct": false
       },
       {
        "fr": "La cause dépend uniquement de la météo du jour",
        "en": "The cause depends only on that day's weather",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi tester ses réglages FCAW sur une chute de métal avant de souder la pièce finale?",
      "en": "Why test your FCAW settings on a scrap piece before welding the final part?",
      "choices": [
       {
        "fr": "Pour vérifier la qualité du cordon avant un travail irréversible",
        "en": "To check the bead quality before irreversible work",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Pour perdre du temps",
        "en": "To waste time",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape purement administrative",
        "en": "To follow a purely administrative step",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du FCAW en positions à plat et horizontale complète bien les compétences acquises en GMAW.",
      "en": "Mastering FCAW in flat and horizontal positions nicely complements the skills gained in GMAW.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud10",
  "order": 10,
  "code": "304754",
  "hours": 60,
  "title_fr": "Pliage et cintrage",
  "title_en": "Bending and Rolling",
  "icon": "🌀",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel équipement sert à plier une plaque de métal en une forme précise?",
      "en": "What equipment is used to bend a metal plate into a precise shape?",
      "choices": [
       {
        "fr": "Une presse plieuse",
        "en": "A press brake",
        "correct": true
       },
       {
        "fr": "Un tournevis",
        "en": "A screwdriver",
        "correct": false
       },
       {
        "fr": "Une pince",
        "en": "Pliers",
        "correct": false
       },
       {
        "fr": "Un marteau de sculpture seulement",
        "en": "A sculpting hammer alone",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce que le cintrage en métallurgie?",
      "en": "What is rolling in metalworking?",
      "choices": [
       {
        "fr": "Le fait de courber une pièce métallique pour créer une forme arrondie",
        "en": "Curving a metal piece to create a rounded shape",
        "correct": true
       },
       {
        "fr": "Une technique de peinture",
        "en": "A painting technique",
        "correct": false
       },
       {
        "fr": "Une méthode de mesure",
        "en": "A measurement method",
        "correct": false
       },
       {
        "fr": "Un type de soudure spéciale",
        "en": "A special type of weld",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le pliage à froid est couramment utilisé pour former des pièces d'acier de faible épaisseur.",
      "en": "Cold bending is commonly used to form thin steel pieces.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi calculer le rayon de pliage minimal avant de plier une pièce?",
      "en": "Why calculate the minimum bend radius before bending a piece?",
      "choices": [
       {
        "fr": "Pour éviter les fissures ou l'affaiblissement du métal",
        "en": "To avoid cracking or weakening the metal",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le rayon de pliage n'affecte jamais la pièce",
        "en": "Bend radius never affects the piece",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de cintrer une pièce à l'aide d'une rouleuse?",
      "en": "What should be checked before rolling a piece using a plate roller?",
      "choices": [
       {
        "fr": "L'épaisseur du métal et le rayon de courbure souhaité",
        "en": "The metal's thickness and the desired bend radius",
        "correct": true
       },
       {
        "fr": "Seulement la date du dernier entretien de la machine",
        "en": "Only the date of the machine's last maintenance",
        "correct": false
       },
       {
        "fr": "Uniquement le fournisseur du métal",
        "en": "Only the metal's supplier",
        "correct": false
       },
       {
        "fr": "Uniquement la marque de l'électrode utilisée",
        "en": "Only the brand of electrode used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'alignement lors du pliage n'a qu'un effet mineur sur les dimensions finales, qui dépendent surtout de l'épaisseur du métal.",
      "en": "Alignment during bending has only a minor effect on final dimensions, which mostly depend on metal thickness.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une pièce pliée montre une légère fissure au point de pliage. Quelle en est probablement la cause?",
      "en": "A bent piece shows a slight crack at the bend point. What is the likely cause?",
      "choices": [
       {
        "fr": "Un rayon de pliage trop serré pour l'épaisseur du métal",
        "en": "A bend radius too tight for the metal's thickness",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de la pièce",
        "en": "The piece's price",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'usure normale de l'équipement, peu importe les symptômes",
        "en": "The cause is almost always related to normal equipment wear, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi planifier soigneusement la séquence de pliage pour une pièce complexe avec plusieurs plis?",
      "en": "Why carefully plan the bending sequence for a complex piece with multiple bends?",
      "choices": [
       {
        "fr": "Pour éviter les interférences entre les plis et respecter les dimensions finales",
        "en": "To avoid interference between bends and meet final dimensions",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de fabrication standard, peu importe l'urgence",
        "en": "To follow the standard fabrication order, regardless of urgency",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du pliage et du cintrage permet de créer des formes complexes essentielles à de nombreux assemblages.",
      "en": "Mastering bending and rolling allows for creating complex shapes essential to many assemblies.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud11",
  "order": 11,
  "code": "304765",
  "hours": 75,
  "title_fr": "Soudage d'acier et d'acier inoxydable (GMAW) – positions verticale et au plafond",
  "title_en": "Steel and Stainless Steel Welding (GMAW) – Vertical and Overhead Positions",
  "icon": "🌋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi les positions verticale et au plafond sont-elles considérées plus difficiles que la position à plat?",
      "en": "Why are vertical and overhead positions considered more difficult than the flat position?",
      "choices": [
       {
        "fr": "La gravité rend le contrôle du bain de fusion plus exigeant",
        "en": "Gravity makes controlling the weld pool more demanding",
        "correct": true
       },
       {
        "fr": "Elles sont en fait toujours plus faciles",
        "en": "They are actually always easier",
        "correct": false
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Toutes les positions de soudage se maîtrisent avec la même quantité de pratique",
        "en": "All welding positions are mastered with the same amount of practice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel ajustement de paramètres est souvent nécessaire en soudage au plafond?",
      "en": "What parameter adjustment is often needed for overhead welding?",
      "choices": [
       {
        "fr": "Réduire légèrement le courant pour mieux contrôler le bain de fusion",
        "en": "Slightly reducing the current to better control the weld pool",
        "correct": true
       },
       {
        "fr": "Les ajustements dépendent uniquement du type de machine utilisée",
        "en": "Adjustments depend only on the type of machine used",
        "correct": false
       },
       {
        "fr": "Toujours augmenter le courant au maximum",
        "en": "Always increasing the current to the maximum",
        "correct": false
       },
       {
        "fr": "Éteindre complètement la machine",
        "en": "Completely turning off the machine",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La position verticale peut être soudée de bas en haut ou de haut en bas selon la technique choisie.",
      "en": "The vertical position can be welded bottom-up or top-down depending on the chosen technique.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser une technique de tissage (weaving) en soudage vertical?",
      "en": "Why use a weaving technique in vertical welding?",
      "choices": [
       {
        "fr": "Pour mieux contrôler l'apport de métal et la forme du cordon",
        "en": "To better control metal deposit and bead shape",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le tissage est utile uniquement en position à plat, jamais ailleurs",
        "en": "Weaving is only useful in the flat position, never elsewhere",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel équipement de protection est particulièrement important en soudage au plafond?",
      "en": "What protective equipment is particularly important for overhead welding?",
      "choices": [
       {
        "fr": "Une protection contre les projections tombant vers le bas (visière, vêtements ignifuges)",
        "en": "Protection against downward-falling spatter (face shield, fire-resistant clothing)",
        "correct": true
       },
       {
        "fr": "Aucun équipement particulier n'est nécessaire",
        "en": "No particular equipment is necessary",
        "correct": false
       },
       {
        "fr": "Uniquement des lunettes de soleil",
        "en": "Only sunglasses",
        "correct": false
       },
       {
        "fr": "Uniquement des gants de jardinage",
        "en": "Only gardening gloves",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La position verticale et au plafond se maîtrisent généralement dès la première tentative, sans besoin de pratique répétée.",
      "en": "Vertical and overhead positions are usually mastered on the first attempt, without needing repeated practice.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure verticale montre un affaissement important du métal déposé. Quelle est une cause probable?",
      "en": "A vertical weld shows significant sagging of the deposited metal. What is a likely cause?",
      "choices": [
       {
        "fr": "Un courant trop élevé ou une vitesse de déplacement trop lente",
        "en": "Too high a current or too slow a travel speed",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de la machine",
        "en": "The machine's price",
        "correct": false
       },
       {
        "fr": "La cause est généralement impossible à confirmer sans remplacer toute la pièce",
        "en": "The cause is generally impossible to confirm without replacing the whole piece",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la maîtrise des positions verticale et au plafond est-elle importante pour un soudeur professionnel?",
      "en": "Why is mastering vertical and overhead positions important for a professional welder?",
      "choices": [
       {
        "fr": "De nombreux chantiers exigent de souder dans toutes les positions, pas seulement à plat",
        "en": "Many job sites require welding in all positions, not just flat",
        "correct": true
       },
       {
        "fr": "Ces positions ne sont jamais utilisées en industrie",
        "en": "These positions are never used in industry",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Un soudeur travaille toujours uniquement à plat",
        "en": "A welder always works only in the flat position",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La certification de soudeur repose uniquement sur un examen théorique écrit, sans démonstration pratique.",
      "en": "Welder certification is based solely on a written theory exam, without a practical demonstration.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud12",
  "order": 12,
  "code": "304772",
  "hours": 30,
  "title_fr": "Perçage et boulonnage",
  "title_en": "Drilling and Bolting",
  "icon": "🔩",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quel outil sert à percer un trou précis dans une pièce d'acier?",
      "en": "What tool is used to drill a precise hole in a steel piece?",
      "choices": [
       {
        "fr": "Une perceuse à colonne ou une perceuse portative",
        "en": "A drill press or a portable drill",
        "correct": true
       },
       {
        "fr": "Un marteau",
        "en": "A hammer",
        "correct": false
       },
       {
        "fr": "Une pince",
        "en": "Pliers",
        "correct": false
       },
       {
        "fr": "Un tournevis",
        "en": "A screwdriver",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi serrer un boulon au couple spécifié (torque)?",
      "en": "Why tighten a bolt to the specified torque?",
      "choices": [
       {
        "fr": "Pour assurer une fixation solide sans endommager le matériel",
        "en": "To ensure a solid fastening without damaging the material",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Pour uniformiser l'apparence des boulons installés",
        "en": "To make the installed bolts look uniform",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une rondelle peut aider à répartir la pression et protéger la surface du matériau assemblé.",
      "en": "A washer can help distribute pressure and protect the assembled material's surface.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi marquer précisément l'emplacement d'un trou avant de percer?",
      "en": "Why precisely mark a hole's location before drilling?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs d'alignement dans l'assemblage final",
        "en": "To avoid alignment errors in the final assembly",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le marquage n'a jamais d'utilité",
        "en": "Marking never has any use",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel outil permet de vérifier que le serrage d'un boulon respecte les spécifications?",
      "en": "What tool checks that a bolt's tightening meets specifications?",
      "choices": [
       {
        "fr": "Une clé dynamométrique",
        "en": "A torque wrench",
        "correct": true
       },
       {
        "fr": "Un thermomètre",
        "en": "A thermometer",
        "correct": false
       },
       {
        "fr": "Une règle",
        "en": "A ruler",
        "correct": false
       },
       {
        "fr": "Un chronomètre",
        "en": "A stopwatch",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'alignement des trous n'a aucune influence sur la solidité d'un assemblage boulonné, seul le type de boulon compte.",
      "en": "Hole alignment has no influence on a bolted assembly's strength; only the type of bolt matters.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un trou percé n'est pas parfaitement aligné avec la pièce correspondante. Quelle est la bonne pratique?",
      "en": "A drilled hole isn't perfectly aligned with the corresponding piece. What is the correct practice?",
      "choices": [
       {
        "fr": "Évaluer la situation et corriger avant de poursuivre l'assemblage",
        "en": "Assessing the situation and correcting it before continuing assembly",
        "correct": true
       },
       {
        "fr": "Forcer l'assemblage malgré le désalignement",
        "en": "Forcing the assembly despite the misalignment",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Percer un nouveau trou sans évaluer l'impact structurel",
        "en": "Drilling a new hole with no assessment of the structural impact",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi certains assemblages structuraux exigent-ils des boulons à haute résistance avec un couple de serrage précis?",
      "en": "Why do some structural assemblies require high-strength bolts with a precise torque?",
      "choices": [
       {
        "fr": "Pour garantir la capacité portante et la sécurité de la structure",
        "en": "To guarantee the structure's load-bearing capacity and safety",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Le couple de serrage n'affecte jamais la structure",
        "en": "Torque never affects the structure",
        "correct": false
       },
       {
        "fr": "Pour respecter la séquence de montage recommandée par le plan",
        "en": "To follow the assembly sequence recommended by the drawing",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le perçage et le boulonnage sont des compétences complémentaires au soudage dans plusieurs types d'assemblages.",
      "en": "Drilling and bolting are skills that complement welding in several types of assemblies.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud13",
  "order": 13,
  "code": "304785",
  "hours": 75,
  "title_fr": "Assemblages simples",
  "title_en": "Simple Assemblies",
  "icon": "🧩",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un assemblage simple en soudage-assemblage?",
      "en": "What is a simple assembly in welding-fitting?",
      "choices": [
       {
        "fr": "Un montage de quelques pièces avec un nombre limité de joints",
        "en": "The fitting of a few pieces with a limited number of joints",
        "correct": true
       },
       {
        "fr": "Un projet impliquant des dizaines de pièces complexes",
        "en": "A project involving dozens of complex pieces",
        "correct": false
       },
       {
        "fr": "Un dessin technique uniquement",
        "en": "Only a technical drawing",
        "correct": false
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi effectuer un pointage (tack weld) avant de souder complètement un assemblage?",
      "en": "Why tack weld before fully welding an assembly?",
      "choices": [
       {
        "fr": "Pour maintenir les pièces en place et vérifier l'alignement avant le soudage final",
        "en": "To hold the pieces in place and check alignment before final welding",
        "correct": true
       },
       {
        "fr": "Cela n'a d'utilité que pour les très grands projets industriels",
        "en": "It is only useful for very large industrial projects",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le pointage n'est jamais nécessaire",
        "en": "Tack welding is never necessary",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un assemblage simple sert souvent de base pour développer les compétences avant d'aborder des assemblages plus complexes.",
      "en": "A simple assembly often serves as a foundation for developing skills before tackling more complex assemblies.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier l'équerrage (perpendicularité) d'un assemblage avant le soudage final?",
      "en": "Why check an assembly's squareness before final welding?",
      "choices": [
       {
        "fr": "Pour garantir que la pièce finale respecte les dimensions et angles prévus",
        "en": "To ensure the final piece meets the planned dimensions and angles",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter la séquence de montage recommandée",
        "en": "To follow the recommended assembly sequence",
        "correct": false
       },
       {
        "fr": "L'équerrage n'affecte jamais l'assemblage final",
        "en": "Squareness never affects the final assembly",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un assemblage montre un léger désalignement après le pointage?",
      "en": "What should you do if an assembly shows slight misalignment after tack welding?",
      "choices": [
       {
        "fr": "Corriger l'alignement avant de procéder au soudage final",
        "en": "Correcting the alignment before proceeding to final welding",
        "correct": true
       },
       {
        "fr": "Souder quand même sans correction",
        "en": "Welding anyway with no correction",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Jeter les pièces sans évaluation",
        "en": "Discarding the pieces with no assessment",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La séquence de soudage n'a aucun effet sur la distorsion finale d'un assemblage, peu importe l'ordre des passes.",
      "en": "The welding sequence has no effect on an assembly's final distortion, regardless of the order of passes.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un assemblage simple présente une distorsion visible après le soudage complet. Quelle est la bonne pratique?",
      "en": "A simple assembly shows visible distortion after full welding. What is the correct practice?",
      "choices": [
       {
        "fr": "Analyser la cause et corriger si possible, ou ajuster la séquence pour les prochains assemblages",
        "en": "Analyzing the cause and correcting if possible, or adjusting the sequence for future assemblies",
        "correct": true
       },
       {
        "fr": "Ignorer la distorsion",
        "en": "Ignoring the distortion",
        "correct": false
       },
       {
        "fr": "Jeter la pièce sans évaluation",
        "en": "Discarding the piece with no assessment",
        "correct": false
       },
       {
        "fr": "Répéter exactement la même erreur",
        "en": "Repeating the exact same error",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les assemblages simples sont-ils une étape importante avant d'aborder les assemblages de structures?",
      "en": "Why are simple assemblies an important step before tackling structural assemblies?",
      "choices": [
       {
        "fr": "Ils permettent de développer des compétences fondamentales de façon progressive",
        "en": "They allow for developing fundamental skills progressively",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Ils remplacent complètement les compétences en soudage",
        "en": "They completely replace welding skills",
        "correct": false
       },
       {
        "fr": "Ils retardent inutilement la formation",
        "en": "They needlessly delay training",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des assemblages simples est une base essentielle pour les projets plus complexes du programme.",
      "en": "Mastering simple assemblies is an essential foundation for the program's more complex projects.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud14",
  "order": 14,
  "code": "304795",
  "hours": 75,
  "title_fr": "Soudage d'acier et d'acier inoxydable (SMAW) – positions à plat et horizontale",
  "title_en": "Steel and Stainless Steel Welding (SMAW) – Flat and Horizontal Positions",
  "icon": "✨",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que signifie l'acronyme SMAW?",
      "en": "What does the acronym SMAW stand for?",
      "choices": [
       {
        "fr": "Shielded Metal Arc Welding (soudage à l'arc avec électrode enrobée)",
        "en": "Shielded Metal Arc Welding",
        "correct": true
       },
       {
        "fr": "Simple Manual Assembly Work",
        "en": "Simple Manual Assembly Work",
        "correct": false
       },
       {
        "fr": "Standard Metal Assembly Welding",
        "en": "Standard Metal Assembly Welding",
        "correct": false
       },
       {
        "fr": "Aucune signification particulière",
        "en": "No particular meaning",
        "correct": false
       }
      ]
     },
     {
      "fr": "Qu'est-ce qui protège le bain de fusion en SMAW?",
      "en": "What protects the weld pool in SMAW?",
      "choices": [
       {
        "fr": "L'enrobage de l'électrode, qui produit un gaz et un laitier protecteurs",
        "en": "The electrode's coating, which produces a protective gas and slag",
        "correct": true
       },
       {
        "fr": "Un gaz externe uniquement",
        "en": "An external gas only",
        "correct": false
       },
       {
        "fr": "Aucune protection n'est nécessaire",
        "en": "No protection is necessary",
        "correct": false
       },
       {
        "fr": "De l'eau froide",
        "en": "Cold water",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le SMAW est souvent surnommé « soudage à la baguette » en raison de l'électrode utilisée.",
      "en": "SMAW is often called 'stick welding' because of the electrode used.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi le SMAW est-il souvent utilisé sur les chantiers extérieurs?",
      "en": "Why is SMAW often used on outdoor job sites?",
      "choices": [
       {
        "fr": "Parce qu'il est peu sensible au vent, contrairement aux procédés utilisant un gaz de protection",
        "en": "Because it's not very sensitive to wind, unlike processes using a shielding gas",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Le SMAW ne fonctionne jamais à l'extérieur",
        "en": "SMAW never works outdoors",
        "correct": false
       },
       {
        "fr": "Le SMAW est toujours plus lent",
        "en": "SMAW is always slower",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi retirer le laitier entre les passes en SMAW?",
      "en": "Why remove slag between passes in SMAW?",
      "choices": [
       {
        "fr": "Pour éviter les inclusions de laitier qui affaiblissent la soudure",
        "en": "To avoid slag inclusions that weaken the weld",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "Le laitier améliore toujours la résistance",
        "en": "Slag always improves strength",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Toutes les électrodes enrobées produisent des soudures aux propriétés mécaniques identiques, peu importe le type choisi.",
      "en": "All coated electrodes produce welds with identical mechanical properties, regardless of the type chosen.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure SMAW présente un manque de fusion aux bords du joint. Quelle est une cause probable?",
      "en": "An SMAW weld shows lack of fusion at the joint edges. What is a likely cause?",
      "choices": [
       {
        "fr": "Un courant trop faible ou une vitesse de déplacement trop rapide",
        "en": "Too low a current or too fast a travel speed",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'électrode",
        "en": "The electrode's price",
        "correct": false
       },
       {
        "fr": "La cause dépend uniquement de la météo du jour",
        "en": "The cause depends only on that day's weather",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi conserver les électrodes SMAW dans un environnement sec avant utilisation?",
      "en": "Why keep SMAW electrodes in a dry environment before use?",
      "choices": [
       {
        "fr": "L'humidité peut affecter l'enrobage et causer des défauts de soudure",
        "en": "Moisture can affect the coating and cause weld defects",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "L'humidité améliore toujours la qualité",
        "en": "Moisture always improves quality",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec l'exécution",
        "en": "To follow an internal administrative step unrelated to execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du SMAW reste précieuse même à l'ère des procédés plus automatisés, notamment sur les chantiers.",
      "en": "SMAW mastery remains valuable even in the era of more automated processes, particularly on job sites.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud15",
  "order": 15,
  "code": "304807",
  "hours": 105,
  "title_fr": "Plans d'assemblages complexes",
  "title_en": "Complex Assembly Drawings",
  "icon": "📋",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qui distingue un plan d'assemblage complexe d'un plan simple?",
      "en": "What distinguishes a complex assembly drawing from a simple one?",
      "choices": [
       {
        "fr": "Un plus grand nombre de pièces, de vues et de symboles de soudage détaillés",
        "en": "A larger number of pieces, views and detailed welding symbols",
        "correct": true
       },
       {
        "fr": "Aucune différence n'existe entre les deux",
        "en": "There is no difference between the two",
        "correct": false
       },
       {
        "fr": "Un plan complexe contient toujours moins d'information",
        "en": "A complex drawing always contains less information",
        "correct": false
       },
       {
        "fr": "Un plan complexe n'a jamais de cotes",
        "en": "A complex drawing never has dimensions",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi une nomenclature (liste de pièces) accompagne-t-elle souvent un plan complexe?",
      "en": "Why does a parts list often accompany a complex drawing?",
      "choices": [
       {
        "fr": "Pour identifier clairement chaque pièce et sa quantité requise",
        "en": "To clearly identify each piece and its required quantity",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du plan",
        "en": "To follow a drawing presentation standard",
        "correct": false
       },
       {
        "fr": "Une nomenclature n'est jamais nécessaire",
        "en": "A parts list is never necessary",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un plan d'assemblage complexe peut inclure des vues éclatées pour clarifier l'ordre de montage.",
      "en": "A complex assembly drawing can include exploded views to clarify the assembly order.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi vérifier la cohérence entre plusieurs vues d'un plan complexe avant de commencer la fabrication?",
      "en": "Why check the consistency between several views of a complex drawing before starting fabrication?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs causées par des informations contradictoires entre les vues",
        "en": "To avoid errors caused by contradictory information between views",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les vues sont toujours automatiquement cohérentes",
        "en": "Views are always automatically consistent",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de contrôle qualité prévues",
        "en": "To follow the planned quality-control steps",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un plan complexe comporte une incohérence entre deux vues?",
      "en": "What should you do if a complex drawing has an inconsistency between two views?",
      "choices": [
       {
        "fr": "Vérifier auprès du concepteur avant de poursuivre la fabrication",
        "en": "Checking with the designer before continuing fabrication",
        "correct": true
       },
       {
        "fr": "Choisir arbitrairement une des deux versions",
        "en": "Arbitrarily choosing one of the two versions",
        "correct": false
       },
       {
        "fr": "Ignorer l'incohérence",
        "en": "Ignoring the inconsistency",
        "correct": false
       },
       {
        "fr": "Abandonner le projet",
        "en": "Abandoning the project",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les plans d'assemblages complexes peuvent généralement être suivis dans n'importe quel ordre sans conséquence.",
      "en": "Complex assembly drawings can generally be followed in any order without consequence.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un plan complexe comporte des dizaines de symboles de soudage différents. Quelle est une bonne pratique de lecture?",
      "en": "A complex drawing has dozens of different welding symbols. What is a good reading practice?",
      "choices": [
       {
        "fr": "Analyser méthodiquement chaque symbole avant de commencer la fabrication",
        "en": "Methodically analyzing each symbol before starting fabrication",
        "correct": true
       },
       {
        "fr": "Deviner la signification des symboles inconnus",
        "en": "Guessing at the meaning of unfamiliar symbols",
        "correct": false
       },
       {
        "fr": "Ignorer les symboles moins familiers",
        "en": "Ignoring less familiar symbols",
        "correct": false
       },
       {
        "fr": "Fabriquer sans vérifier les symboles",
        "en": "Fabricating without checking the symbols",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la lecture précise de plans complexes est-elle une compétence critique en soudage-assemblage industriel?",
      "en": "Why is precise complex drawing reading a critical skill in industrial welding-fitting?",
      "choices": [
       {
        "fr": "Une mauvaise interprétation peut entraîner des défauts structuraux coûteux ou dangereux",
        "en": "A misinterpretation can lead to costly or dangerous structural defects",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Les plans complexes ne sont jamais utilisés en industrie",
        "en": "Complex drawings are never used in industry",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de fabrication standard, peu importe l'urgence",
        "en": "To follow the standard fabrication order, regardless of urgency",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise de la lecture de plans complexes est essentielle pour les grands projets de structures métalliques.",
      "en": "Mastering complex drawing reading is essential for large metal structure projects.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud16",
  "order": 16,
  "code": "304817",
  "hours": 105,
  "title_fr": "Assemblages de structures",
  "title_en": "Structural Assemblies",
  "icon": "🏢",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un assemblage de structures en soudage-assemblage?",
      "en": "What is a structural assembly in welding-fitting?",
      "choices": [
       {
        "fr": "Le montage de poutres, colonnes et autres éléments porteurs d'un bâtiment ou d'un ouvrage",
        "en": "The assembly of beams, columns and other load-bearing elements of a building or structure",
        "correct": true
       },
       {
        "fr": "Un simple assemblage décoratif",
        "en": "A simple decorative assembly",
        "correct": false
       },
       {
        "fr": "Un dessin technique uniquement",
        "en": "Only a technical drawing",
        "correct": false
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la précision est-elle particulièrement cruciale dans les assemblages de structures?",
      "en": "Why is precision particularly crucial in structural assemblies?",
      "choices": [
       {
        "fr": "La sécurité et la capacité portante de la structure en dépendent directement",
        "en": "The structure's safety and load-bearing capacity directly depend on it",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "La précision n'affecte jamais une structure",
        "en": "Precision never affects a structure",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec l'exécution",
        "en": "To follow an internal administrative step unrelated to execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les assemblages de structures respectent souvent des normes de construction strictes.",
      "en": "Structural assemblies often comply with strict building codes.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi coordonner le travail avec d'autres corps de métier lors de l'assemblage d'une structure sur un chantier?",
      "en": "Why coordinate work with other trades when assembling a structure on a job site?",
      "choices": [
       {
        "fr": "Pour éviter les conflits d'installation et respecter l'échéancier global",
        "en": "To avoid installation conflicts and meet the overall schedule",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Les autres corps de métier ne sont jamais impliqués",
        "en": "Other trades are never involved",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes de validation prévues au projet",
        "en": "To follow the project's planned validation steps",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit-on vérifier avant de fixer définitivement un élément structural (poutre, colonne)?",
      "en": "What should be checked before permanently fixing a structural element (beam, column)?",
      "choices": [
       {
        "fr": "Son alignement, son niveau et sa conformité au plan",
        "en": "Its alignment, level and compliance with the drawing",
        "correct": true
       },
       {
        "fr": "Uniquement le nom du soudeur qui a fait l'inspection",
        "en": "Only the name of the welder who did the inspection",
        "correct": false
       },
       {
        "fr": "Uniquement le fournisseur de l'acier",
        "en": "Only the steel's supplier",
        "correct": false
       },
       {
        "fr": "Uniquement le modèle de la machine à souder",
        "en": "Only the welding machine's model",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La séquence d'assemblage d'une structure n'a aucune influence sur sa stabilité pendant les travaux.",
      "en": "A structure's assembly sequence has no influence on its stability during the work.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un élément structural déjà installé montre un léger désalignement. Quelle est la bonne pratique?",
      "en": "An already installed structural element shows slight misalignment. What is the correct practice?",
      "choices": [
       {
        "fr": "Évaluer l'impact structural et corriger selon les normes avant de poursuivre",
        "en": "Assessing the structural impact and correcting per code before continuing",
        "correct": true
       },
       {
        "fr": "Ignorer le désalignement",
        "en": "Ignoring the misalignment",
        "correct": false
       },
       {
        "fr": "Continuer l'assemblage sans vérification",
        "en": "Continuing the assembly with no check",
        "correct": false
       },
       {
        "fr": "Cacher le problème",
        "en": "Hiding the problem",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les inspections en cours de travaux sont-elles importantes pour les assemblages de structures?",
      "en": "Why are in-progress inspections important for structural assemblies?",
      "choices": [
       {
        "fr": "Pour détecter les défauts avant qu'ils ne deviennent difficiles ou coûteux à corriger",
        "en": "To detect defects before they become difficult or costly to correct",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Les inspections ne sont jamais nécessaires en construction",
        "en": "Inspections are never necessary in construction",
        "correct": false
       },
       {
        "fr": "Pour respecter l'ordre des travaux établi par le contremaître",
        "en": "To follow the work order set by the foreman",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les assemblages de structures sont une tâche mineure et rarement confiée aux soudeurs-monteurs.",
      "en": "Structural assemblies are a minor task rarely assigned to welder-fitters.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud17",
  "order": 17,
  "code": "304822",
  "hours": 30,
  "title_fr": "Procédures de soudage et de coupage",
  "title_en": "Welding and Cutting Procedures",
  "icon": "📜",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'une procédure de soudage (WPS)?",
      "en": "What is a welding procedure specification (WPS)?",
      "choices": [
       {
        "fr": "Un document qui définit les paramètres à respecter pour un soudage donné",
        "en": "A document that defines the parameters to follow for a given weld",
        "correct": true
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       },
       {
        "fr": "Un contrat de vente",
        "en": "A sales contract",
        "correct": false
       },
       {
        "fr": "Une garantie de fabricant",
        "en": "A manufacturer's warranty",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi suivre rigoureusement une procédure de soudage établie?",
      "en": "Why rigorously follow an established welding procedure?",
      "choices": [
       {
        "fr": "Pour garantir la qualité et la conformité de la soudure aux exigences du projet",
        "en": "To guarantee the weld's quality and compliance with the project's requirements",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Une procédure n'a jamais d'impact sur la qualité",
        "en": "A procedure never affects quality",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une procédure de soudage peut préciser le type d'électrode, le courant et la position à utiliser.",
      "en": "A welding procedure can specify the type of electrode, current and position to use.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi certaines industries exigent-elles des procédures de soudage qualifiées (WPQR)?",
      "en": "Why do some industries require qualified welding procedures (WPQR)?",
      "choices": [
       {
        "fr": "Pour prouver que la procédure produit des soudures fiables selon des normes reconnues",
        "en": "To prove the procedure produces reliable welds according to recognized standards",
        "correct": true
       },
       {
        "fr": "Cela n'a d'utilité que pour les très grands projets industriels",
        "en": "It is only useful for very large industrial projects",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le contremaître",
        "en": "To follow the production schedule set by the foreman",
        "correct": false
       },
       {
        "fr": "Les procédures qualifiées n'existent pas vraiment",
        "en": "Qualified procedures don't really exist",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit faire un soudeur si les conditions réelles diffèrent de celles prévues par la procédure?",
      "en": "What should a welder do if actual conditions differ from those planned by the procedure?",
      "choices": [
       {
        "fr": "En informer le superviseur avant de poursuivre",
        "en": "Informing the supervisor before continuing",
        "correct": true
       },
       {
        "fr": "Improviser sans en parler à personne",
        "en": "Improvising without telling anyone",
        "correct": false
       },
       {
        "fr": "Ignorer la différence",
        "en": "Ignoring the difference",
        "correct": false
       },
       {
        "fr": "Arrêter définitivement le travail sans explication",
        "en": "Permanently stopping work with no explanation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les procédures de coupage sont génériques et ne varient jamais selon le matériau ou l'épaisseur.",
      "en": "Cutting procedures are generic and never vary based on material or thickness.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une procédure de soudage semble incomplète pour un cas particulier rencontré sur le chantier. Quelle est la bonne pratique?",
      "en": "A welding procedure seems incomplete for a particular situation encountered on the job site. What is the correct practice?",
      "choices": [
       {
        "fr": "Consulter un superviseur ou un ingénieur avant de procéder",
        "en": "Consulting a supervisor or engineer before proceeding",
        "correct": true
       },
       {
        "fr": "Improviser une solution sans consultation",
        "en": "Improvising a solution with no consultation",
        "correct": false
       },
       {
        "fr": "Ignorer la procédure complètement",
        "en": "Completely ignoring the procedure",
        "correct": false
       },
       {
        "fr": "Abandonner le travail",
        "en": "Abandoning the work",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la documentation rigoureuse des procédures est-elle importante pour la traçabilité d'un projet?",
      "en": "Why is rigorous procedure documentation important for a project's traceability?",
      "choices": [
       {
        "fr": "Elle permet de retracer les décisions techniques en cas de problème futur",
        "en": "It allows technical decisions to be traced in case of a future problem",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "La documentation ralentit toujours inutilement le travail",
        "en": "Documentation always needlessly slows down the work",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le respect rigoureux des procédures de soudage et de coupage est essentiel dans les industries à normes strictes (aérospatiale, pipeline).",
      "en": "Rigorously following welding and cutting procedures is essential in industries with strict standards (aerospace, pipeline).",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud18",
  "order": 18,
  "code": "304833",
  "hours": 45,
  "title_fr": "Soudage d'acier (FCAW) – positions verticale et au plafond",
  "title_en": "Steel Welding (FCAW) – Vertical and Overhead Positions",
  "icon": "🌪️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi les positions verticale et au plafond sont-elles plus exigeantes avec le FCAW?",
      "en": "Why are vertical and overhead positions more demanding with FCAW?",
      "choices": [
       {
        "fr": "La gravité complique le contrôle du bain de fusion et du laitier",
        "en": "Gravity complicates control of the weld pool and slag",
        "correct": true
       },
       {
        "fr": "Elles sont en fait toujours plus faciles",
        "en": "They are actually always easier",
        "correct": false
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "La position à plat est toujours la plus difficile à maîtriser",
        "en": "The flat position is always the hardest to master",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel ajustement est souvent nécessaire pour le FCAW en position au plafond?",
      "en": "What adjustment is often needed for FCAW in the overhead position?",
      "choices": [
       {
        "fr": "Réduire légèrement le courant pour mieux contrôler le bain de fusion",
        "en": "Slightly reducing the current to better control the weld pool",
        "correct": true
       },
       {
        "fr": "Un seul ajustement initial suffit pour tous les projets futurs",
        "en": "A single initial adjustment is enough for all future projects",
        "correct": false
       },
       {
        "fr": "Toujours augmenter le courant au maximum",
        "en": "Always increasing the current to the maximum",
        "correct": false
       },
       {
        "fr": "Éteindre complètement la machine",
        "en": "Completely turning off the machine",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne protection du visage et du corps est encore plus importante en soudage au plafond en raison des projections.",
      "en": "Good face and body protection is even more important in overhead welding due to spatter.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi retirer soigneusement le laitier entre les passes en FCAW vertical?",
      "en": "Why carefully remove slag between passes in vertical FCAW?",
      "choices": [
       {
        "fr": "Pour éviter les inclusions qui affaiblissent la soudure, particulièrement visibles en position difficile",
        "en": "To avoid inclusions that weaken the weld, particularly noticeable in a difficult position",
        "correct": true
       },
       {
        "fr": "Cela sert seulement à respecter une habitude de l'atelier",
        "en": "It only serves to follow a shop habit",
        "correct": false
       },
       {
        "fr": "Le laitier améliore toujours la résistance",
        "en": "Slag always improves strength",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle technique aide à contrôler l'affaissement du métal en soudage vertical avec le FCAW?",
      "en": "What technique helps control metal sagging in vertical welding with FCAW?",
      "choices": [
       {
        "fr": "Un mouvement de tissage contrôlé et une vitesse de déplacement adaptée",
        "en": "A controlled weaving motion and an adapted travel speed",
        "correct": true
       },
       {
        "fr": "Une vitesse de déplacement toujours maximale",
        "en": "Always maximum travel speed",
        "correct": false
       },
       {
        "fr": "Aucune technique particulière n'est nécessaire",
        "en": "No particular technique is necessary",
        "correct": false
       },
       {
        "fr": "Souder sans jamais s'arrêter",
        "en": "Welding without ever stopping",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le FCAW en positions verticale et au plafond se maîtrise aussi facilement que la position à plat, sans pratique supplémentaire.",
      "en": "FCAW in vertical and overhead positions is mastered just as easily as the flat position, with no extra practice.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure FCAW verticale montre des porosités et un manque de fusion. Quelle est une cause probable?",
      "en": "A vertical FCAW weld shows porosity and lack of fusion. What is a likely cause?",
      "choices": [
       {
        "fr": "Des paramètres mal ajustés à la position ou une technique inadéquate",
        "en": "Parameters poorly adjusted to the position or an inadequate technique",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix du fil-électrode",
        "en": "The price of the welding wire",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'usure normale de l'équipement, peu importe les symptômes",
        "en": "The cause is almost always related to normal equipment wear, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la maîtrise du FCAW dans toutes les positions est-elle recherchée dans l'industrie de la construction navale ou pétrolière?",
      "en": "Why is FCAW mastery in all positions sought after in the shipbuilding or oil industry?",
      "choices": [
       {
        "fr": "Ces industries exigent souvent des soudures dans des positions difficiles à accéder",
        "en": "These industries often require welds in hard-to-access positions",
        "correct": true
       },
       {
        "fr": "Ces industries n'utilisent jamais le FCAW",
        "en": "These industries never use FCAW",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Un soudeur travaille toujours uniquement à plat",
        "en": "A welder always works only in the flat position",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La certification dans plusieurs positions élargit les possibilités d'emploi d'un soudeur.",
      "en": "Certification in multiple positions broadens a welder's job opportunities.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud19",
  "order": 19,
  "code": "304845",
  "hours": 75,
  "title_fr": "Soudage – systèmes automatisés et robotisés",
  "title_en": "Welding – Automated and Robotic Systems",
  "icon": "🤖",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un système de soudage robotisé?",
      "en": "What is a robotic welding system?",
      "choices": [
       {
        "fr": "Un système programmable qui exécute des soudures de façon automatisée",
        "en": "A programmable system that performs welds automatically",
        "correct": true
       },
       {
        "fr": "Un simple outil manuel",
        "en": "A simple hand tool",
        "correct": false
       },
       {
        "fr": "Un type d'électrode spéciale",
        "en": "A special type of electrode",
        "correct": false
       },
       {
        "fr": "Un logiciel de dessin uniquement",
        "en": "Only drafting software",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel est un avantage des systèmes robotisés en production de masse?",
      "en": "What is an advantage of robotic systems in mass production?",
      "choices": [
       {
        "fr": "Une constance élevée et une productivité accrue",
        "en": "High consistency and increased productivity",
        "correct": true
       },
       {
        "fr": "Aucun avantage particulier",
        "en": "No particular advantage",
        "correct": false
       },
       {
        "fr": "Les robots sont toujours plus lents que les humains",
        "en": "Robots are always slower than humans",
        "correct": false
       },
       {
        "fr": "Les robots produisent toujours des soudures de moins bonne qualité",
        "en": "Robots always produce lower-quality welds",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un technicien doit programmer et surveiller un système de soudage robotisé, même s'il est automatisé.",
      "en": "A technician must program and monitor a robotic welding system, even though it's automated.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi tester un programme de soudage robotisé sur une pièce d'essai avant la production?",
      "en": "Why test a robotic welding program on a test piece before production?",
      "choices": [
       {
        "fr": "Pour vérifier la précision du programme avant une production à grande échelle",
        "en": "To verify the program's accuracy before large-scale production",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour respecter le calendrier de production fixé par le contremaître",
        "en": "To follow the production schedule set by the foreman",
        "correct": false
       },
       {
        "fr": "Les robots ne se trompent jamais",
        "en": "Robots never make mistakes",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que doit faire un opérateur si un robot de soudage produit des soudures défectueuses en série?",
      "en": "What should an operator do if a welding robot produces defective welds in a series?",
      "choices": [
       {
        "fr": "Arrêter la production et vérifier la programmation et le réglage du robot",
        "en": "Stopping production and checking the robot's programming and settings",
        "correct": true
       },
       {
        "fr": "Continuer la production malgré les défauts",
        "en": "Continuing production despite the defects",
        "correct": false
       },
       {
        "fr": "Ignorer le problème",
        "en": "Ignoring the problem",
        "correct": false
       },
       {
        "fr": "Blâmer le matériau sans vérification",
        "en": "Blaming the material with no verification",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les systèmes robotisés de soudage ne nécessitent aucun entretien une fois installés.",
      "en": "Robotic welding systems require no maintenance once installed.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un système robotisé produit une erreur récurrente de positionnement. Quelle est la bonne pratique?",
      "en": "A robotic system produces a recurring positioning error. What is the correct practice?",
      "choices": [
       {
        "fr": "Analyser la cause (calibration, programmation) avant de reprendre la production",
        "en": "Analyzing the cause (calibration, programming) before resuming production",
        "correct": true
       },
       {
        "fr": "Ignorer l'erreur récurrente",
        "en": "Ignoring the recurring error",
        "correct": false
       },
       {
        "fr": "Continuer la production sans investigation",
        "en": "Continuing production with no investigation",
        "correct": false
       },
       {
        "fr": "Remplacer le système sans diagnostic",
        "en": "Replacing the system with no diagnosis",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la connaissance des systèmes automatisés est-elle de plus en plus recherchée chez les soudeurs?",
      "en": "Why is knowledge of automated systems increasingly sought after in welders?",
      "choices": [
       {
        "fr": "L'industrie adopte de plus en plus l'automatisation pour la production à grand volume",
        "en": "Industry is increasingly adopting automation for high-volume production",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "L'automatisation est en déclin dans l'industrie",
        "en": "Automation is declining in industry",
        "correct": false
       },
       {
        "fr": "Les compétences manuelles remplacent toujours l'automatisation",
        "en": "Manual skills always replace automation",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Les compétences manuelles en soudage deviennent inutiles dès qu'un atelier adopte des systèmes robotisés.",
      "en": "Manual welding skills become useless as soon as a shop adopts robotic systems.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud20",
  "order": 20,
  "code": "304858",
  "hours": 120,
  "title_fr": "Assemblages de complexité moyenne",
  "title_en": "Medium-Complexity Assemblies",
  "icon": "🔗",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qui caractérise un assemblage de complexité moyenne?",
      "en": "What characterizes a medium-complexity assembly?",
      "choices": [
       {
        "fr": "Un plus grand nombre de pièces et de joints qu'un assemblage simple, avec plusieurs étapes coordonnées",
        "en": "More pieces and joints than a simple assembly, with several coordinated steps",
        "correct": true
       },
       {
        "fr": "Un projet identique à un assemblage simple",
        "en": "A project identical to a simple assembly",
        "correct": false
       },
       {
        "fr": "Un dessin technique uniquement",
        "en": "Only a technical drawing",
        "correct": false
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi planifier soigneusement la séquence de fabrication d'un assemblage de complexité moyenne?",
      "en": "Why carefully plan the fabrication sequence of a medium-complexity assembly?",
      "choices": [
       {
        "fr": "Pour éviter les erreurs et les reprises coûteuses dans un projet à plusieurs étapes",
        "en": "To avoid errors and costly rework in a multi-step project",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "La planification n'a jamais d'impact",
        "en": "Planning never has an impact",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un assemblage de complexité moyenne combine souvent plusieurs procédés de soudage appris précédemment.",
      "en": "A medium-complexity assembly often combines several welding processes learned previously.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi effectuer des vérifications intermédiaires pendant la fabrication d'un assemblage complexe?",
      "en": "Why perform intermediate checks during the fabrication of a complex assembly?",
      "choices": [
       {
        "fr": "Pour détecter les erreurs tôt, avant qu'elles n'affectent les étapes suivantes",
        "en": "To catch errors early, before they affect subsequent steps",
        "correct": true
       },
       {
        "fr": "Cela n'a d'utilité que pour les très grands projets industriels",
        "en": "It is only useful for very large industrial projects",
        "correct": false
       },
       {
        "fr": "Pour suivre l'ordre de fabrication standard, peu importe l'urgence",
        "en": "To follow the standard fabrication order, regardless of urgency",
        "correct": false
       },
       {
        "fr": "Les vérifications intermédiaires ne sont jamais utiles",
        "en": "Intermediate checks are never useful",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si une étape intermédiaire d'un assemblage révèle une erreur dans une étape précédente?",
      "en": "What should you do if an intermediate step of an assembly reveals an error in a previous step?",
      "choices": [
       {
        "fr": "Évaluer l'impact et corriger avant de poursuivre les étapes suivantes",
        "en": "Assessing the impact and correcting it before continuing to subsequent steps",
        "correct": true
       },
       {
        "fr": "Ignorer l'erreur et continuer",
        "en": "Ignoring the error and continuing",
        "correct": false
       },
       {
        "fr": "Recommencer tout le projet depuis le début systématiquement",
        "en": "Systematically starting the entire project over",
        "correct": false
       },
       {
        "fr": "Cacher le problème",
        "en": "Hiding the problem",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La gestion du temps n'a que peu d'importance pour les assemblages de complexité moyenne, contrairement aux assemblages simples.",
      "en": "Time management matters little for medium-complexity assemblies, unlike simple assemblies.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un assemblage de complexité moyenne accumule une légère distorsion au fil des étapes. Quelle est la bonne pratique?",
      "en": "A medium-complexity assembly accumulates slight distortion over the course of the steps. What is the correct practice?",
      "choices": [
       {
        "fr": "Surveiller la distorsion à chaque étape et ajuster la séquence si nécessaire",
        "en": "Monitoring distortion at each step and adjusting the sequence if necessary",
        "correct": true
       },
       {
        "fr": "Ignorer la distorsion jusqu'à la fin du projet",
        "en": "Ignoring the distortion until the end of the project",
        "correct": false
       },
       {
        "fr": "Recommencer systématiquement tout le projet",
        "en": "Systematically restarting the entire project",
        "correct": false
       },
       {
        "fr": "Cacher le problème au superviseur",
        "en": "Hiding the problem from the supervisor",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi les assemblages de complexité moyenne représentent-ils une étape charnière dans la formation?",
      "en": "Why do medium-complexity assemblies represent a pivotal step in the training?",
      "choices": [
       {
        "fr": "Ils préparent progressivement aux assemblages complexes tout en consolidant les acquis",
        "en": "They progressively prepare students for complex assemblies while consolidating what they've learned",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Ils remplacent complètement les assemblages complexes",
        "en": "They completely replace complex assemblies",
        "correct": false
       },
       {
        "fr": "Ils retardent inutilement la formation",
        "en": "They needlessly delay training",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des assemblages de complexité moyenne démontre une bonne intégration des compétences en soudage et en fabrication.",
      "en": "Mastering medium-complexity assemblies demonstrates good integration of welding and fabrication skills.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud21",
  "order": 21,
  "code": "304866",
  "hours": 90,
  "title_fr": "Soudage d'acier et d'acier inoxydable (GTAW) – toutes positions",
  "title_en": "Steel and Stainless Steel Welding (GTAW) – All Positions",
  "icon": "💎",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Que signifie l'acronyme GTAW?",
      "en": "What does the acronym GTAW stand for?",
      "choices": [
       {
        "fr": "Gas Tungsten Arc Welding (soudage à l'arc avec électrode de tungstène)",
        "en": "Gas Tungsten Arc Welding",
        "correct": true
       },
       {
        "fr": "General Torch Assembly Work",
        "en": "General Torch Assembly Work",
        "correct": false
       },
       {
        "fr": "Ground Tank Assembly Welding",
        "en": "Ground Tank Assembly Welding",
        "correct": false
       },
       {
        "fr": "Aucune signification particulière",
        "en": "No particular meaning",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le GTAW est-il réputé pour produire des soudures de haute qualité?",
      "en": "Why is GTAW known for producing high-quality welds?",
      "choices": [
       {
        "fr": "Il offre un excellent contrôle du bain de fusion et une grande précision",
        "en": "It offers excellent weld pool control and great precision",
        "correct": true
       },
       {
        "fr": "Il est toujours le procédé le plus rapide",
        "en": "It is always the fastest process",
        "correct": false
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Il ne fonctionne que sur l'aluminium",
        "en": "It only works on aluminum",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le GTAW est souvent utilisé pour souder des matériaux nécessitant une grande précision, comme l'acier inoxydable de faible épaisseur.",
      "en": "GTAW is often used to weld materials requiring great precision, such as thin stainless steel.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi le GTAW est-il souvent plus lent que d'autres procédés comme le GMAW?",
      "en": "Why is GTAW often slower than other processes like GMAW?",
      "choices": [
       {
        "fr": "Il exige un contrôle manuel plus précis, notamment pour l'apport du métal d'apport",
        "en": "It requires more precise manual control, particularly for adding filler metal",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "Le GTAW est en fait toujours plus rapide",
        "en": "GTAW is actually always faster",
        "correct": false
       },
       {
        "fr": "La vitesse ne dépend jamais du procédé",
        "en": "Speed never depends on the process",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel gaz de protection est couramment utilisé en GTAW?",
      "en": "What shielding gas is commonly used in GTAW?",
      "choices": [
       {
        "fr": "L'argon pur",
        "en": "Pure argon",
        "correct": true
       },
       {
        "fr": "L'oxygène pur",
        "en": "Pure oxygen",
        "correct": false
       },
       {
        "fr": "Le dioxyde de carbone pur",
        "en": "Pure carbon dioxide",
        "correct": false
       },
       {
        "fr": "Aucun gaz n'est utilisé",
        "en": "No gas is used",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le GTAW est le procédé le plus facile à maîtriser dans toutes les positions, plus simple que le SMAW ou le GMAW.",
      "en": "GTAW is the easiest process to master in all positions, simpler than SMAW or GMAW.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure GTAW présente une contamination au tungstène. Quelle est une cause probable?",
      "en": "A GTAW weld shows tungsten contamination. What is a likely cause?",
      "choices": [
       {
        "fr": "Un contact accidentel de l'électrode de tungstène avec le bain de fusion",
        "en": "Accidental contact of the tungsten electrode with the weld pool",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'électrode",
        "en": "The electrode's price",
        "correct": false
       },
       {
        "fr": "La cause est généralement impossible à confirmer sans remplacer toute la pièce",
        "en": "The cause is generally impossible to confirm without replacing the whole piece",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le GTAW est-il souvent le procédé de choix pour les soudures critiques dans l'aérospatiale ou le nucléaire?",
      "en": "Why is GTAW often the process of choice for critical welds in aerospace or nuclear industries?",
      "choices": [
       {
        "fr": "Sa précision et sa qualité élevées répondent aux exigences strictes de ces industries",
        "en": "Its high precision and quality meet these industries' strict requirements",
        "correct": true
       },
       {
        "fr": "Il est toujours le procédé le moins cher",
        "en": "It is always the cheapest process",
        "correct": false
       },
       {
        "fr": "Ces industries n'utilisent jamais le GTAW",
        "en": "These industries never use GTAW",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le GTAW dans toutes les positions est considéré comme un procédé d'introduction, généralement enseigné avant le SMAW.",
      "en": "GTAW in all positions is considered an introductory process, usually taught before SMAW.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud22",
  "order": 22,
  "code": "304875",
  "hours": 75,
  "title_fr": "Soudage d'acier (SMAW) – positions verticale et au plafond",
  "title_en": "Steel Welding (SMAW) – Vertical and Overhead Positions",
  "icon": "🎇",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi les positions verticale et au plafond sont-elles plus exigeantes avec le SMAW?",
      "en": "Why are vertical and overhead positions more demanding with SMAW?",
      "choices": [
       {
        "fr": "La gravité complique le contrôle du métal en fusion et du laitier",
        "en": "Gravity complicates control of the molten metal and slag",
        "correct": true
       },
       {
        "fr": "Elles sont en fait toujours plus faciles",
        "en": "They are actually always easier",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Toutes les positions de soudage se maîtrisent avec la même quantité de pratique",
        "en": "All welding positions are mastered with the same amount of practice",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel ajustement de paramètres est souvent nécessaire en SMAW au plafond?",
      "en": "What parameter adjustment is often needed for overhead SMAW?",
      "choices": [
       {
        "fr": "Réduire légèrement le courant pour mieux contrôler le bain de fusion",
        "en": "Slightly reducing the current to better control the weld pool",
        "correct": true
       },
       {
        "fr": "Les ajustements dépendent uniquement du type de machine utilisée",
        "en": "Adjustments depend only on the type of machine used",
        "correct": false
       },
       {
        "fr": "Toujours augmenter le courant au maximum",
        "en": "Always increasing the current to the maximum",
        "correct": false
       },
       {
        "fr": "Éteindre complètement la machine",
        "en": "Completely turning off the machine",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Une bonne protection corporelle est particulièrement importante en SMAW au plafond en raison des projections tombantes.",
      "en": "Good body protection is particularly important in overhead SMAW due to falling spatter.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi utiliser une technique de tissage en soudage vertical avec le SMAW?",
      "en": "Why use a weaving technique in vertical welding with SMAW?",
      "choices": [
       {
        "fr": "Pour mieux contrôler l'apport de métal et éviter l'affaissement",
        "en": "To better control metal deposit and avoid sagging",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le tissage ralentit toujours le travail sans améliorer la qualité",
        "en": "Weaving always slows down the work without improving quality",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi retirer soigneusement le laitier entre les passes en SMAW vertical?",
      "en": "Why carefully remove slag between passes in vertical SMAW?",
      "choices": [
       {
        "fr": "Pour éviter les inclusions de laitier qui affaiblissent la soudure",
        "en": "To avoid slag inclusions that weaken the weld",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Le laitier améliore toujours la résistance",
        "en": "Slag always improves strength",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le SMAW en positions verticale et au plafond ne demande pas de pratique particulière, contrairement au GMAW.",
      "en": "SMAW in vertical and overhead positions doesn't require particular practice, unlike GMAW.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure SMAW verticale montre un affaissement important. Quelle est une cause probable?",
      "en": "A vertical SMAW weld shows significant sagging. What is a likely cause?",
      "choices": [
       {
        "fr": "Un courant trop élevé ou une vitesse de déplacement trop lente",
        "en": "Too high a current or too slow a travel speed",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'électrode",
        "en": "The electrode's price",
        "correct": false
       },
       {
        "fr": "La cause dépend uniquement de la météo du jour",
        "en": "The cause depends only on that day's weather",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la maîtrise du SMAW dans toutes les positions reste-t-elle recherchée dans l'industrie de la construction?",
      "en": "Why does SMAW mastery in all positions remain sought after in the construction industry?",
      "choices": [
       {
        "fr": "De nombreux chantiers exigent une grande polyvalence dans des conditions variées",
        "en": "Many job sites require great versatility under varied conditions",
        "correct": true
       },
       {
        "fr": "Le SMAW n'est jamais utilisé en construction",
        "en": "SMAW is never used in construction",
        "correct": false
       },
       {
        "fr": "Cela sert uniquement à remplir un champ obligatoire du rapport de production",
        "en": "It only serves to fill a mandatory field in the production report",
        "correct": false
       },
       {
        "fr": "Un soudeur travaille toujours uniquement à plat",
        "en": "A welder always works only in the flat position",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La certification en soudage exige souvent la démonstration de compétences en SMAW dans plusieurs positions.",
      "en": "Welding certification often requires demonstrating SMAW skills in multiple positions.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud23",
  "order": 23,
  "code": "304884",
  "hours": 60,
  "title_fr": "Soudage d'aluminium (GMAW) – toutes positions",
  "title_en": "Aluminum Welding (GMAW) – All Positions",
  "icon": "⚙️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle particularité de l'aluminium rend son soudage différent de celui de l'acier?",
      "en": "What particularity of aluminum makes welding it different from welding steel?",
      "choices": [
       {
        "fr": "Sa conductivité thermique élevée et sa couche d'oxyde à haut point de fusion",
        "en": "Its high thermal conductivity and its high-melting-point oxide layer",
        "correct": true
       },
       {
        "fr": "Aucune différence n'existe entre les deux métaux",
        "en": "There is no difference between the two metals",
        "correct": false
       },
       {
        "fr": "L'aluminium se soude toujours exactement comme l'acier",
        "en": "Aluminum always welds exactly like steel",
        "correct": false
       },
       {
        "fr": "L'aluminium n'a jamais besoin de préparation",
        "en": "Aluminum never needs preparation",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi nettoyer soigneusement la surface de l'aluminium avant de souder?",
      "en": "Why carefully clean the aluminum surface before welding?",
      "choices": [
       {
        "fr": "Pour retirer la couche d'oxyde et les contaminants qui nuisent à la qualité de la soudure",
        "en": "To remove the oxide layer and contaminants that harm weld quality",
        "correct": true
       },
       {
        "fr": "Cela dépend uniquement des préférences personnelles du soudeur",
        "en": "It depends only on the welder's personal preferences",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "L'aluminium ne nécessite jamais de nettoyage",
        "en": "Aluminum never needs cleaning",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le GMAW pour l'aluminium utilise généralement de l'argon pur comme gaz de protection.",
      "en": "GMAW for aluminum generally uses pure argon as the shielding gas.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi un préchauffage peut-il être nécessaire sur des pièces d'aluminium épaisses?",
      "en": "Why might preheating be necessary on thick aluminum pieces?",
      "choices": [
       {
        "fr": "Pour compenser la haute conductivité thermique qui dissipe rapidement la chaleur",
        "en": "To compensate for the high thermal conductivity that quickly dissipates heat",
        "correct": true
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       },
       {
        "fr": "Le préchauffage n'est jamais utile sur l'aluminium",
        "en": "Preheating is never useful on aluminum",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel défaut est fréquent en soudage d'aluminium si la vitesse de fil n'est pas bien ajustée?",
      "en": "What defect is common in aluminum welding if the wire speed isn't well adjusted?",
      "choices": [
       {
        "fr": "La porosité ou le manque de fusion",
        "en": "Porosity or lack of fusion",
        "correct": true
       },
       {
        "fr": "Les défauts dépendent uniquement de la qualité du métal, jamais de la technique",
        "en": "Defects depend only on the metal's quality, never on technique",
        "correct": false
       },
       {
        "fr": "Une soudure toujours parfaite",
        "en": "An always-perfect weld",
        "correct": false
       },
       {
        "fr": "Une augmentation automatique de la résistance",
        "en": "An automatic increase in strength",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'aluminium se soude toujours avec exactement les mêmes réglages de machine que l'acier.",
      "en": "Aluminum is always welded with exactly the same machine settings as steel.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure d'aluminium présente une porosité importante malgré un nettoyage adéquat. Quelle est une autre cause possible?",
      "en": "An aluminum weld shows significant porosity despite adequate cleaning. What is another possible cause?",
      "choices": [
       {
        "fr": "Une contamination du gaz de protection ou une humidité résiduelle",
        "en": "Shielding gas contamination or residual moisture",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix du fil-électrode",
        "en": "The price of the welding wire",
        "correct": false
       },
       {
        "fr": "La cause est presque toujours liée à l'usure normale de l'équipement, peu importe les symptômes",
        "en": "The cause is almost always related to normal equipment wear, regardless of symptoms",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le soudage d'aluminium dans toutes les positions est-il considéré comme une compétence avancée?",
      "en": "Why is aluminum welding in all positions considered an advanced skill?",
      "choices": [
       {
        "fr": "Les propriétés particulières de l'aluminium combinées aux défis de position exigent une grande maîtrise",
        "en": "Aluminum's particular properties combined with positional challenges require great skill",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "L'aluminium se soude toujours plus facilement que l'acier",
        "en": "Aluminum always welds more easily than steel",
        "correct": false
       },
       {
        "fr": "La position n'a jamais d'impact sur l'aluminium",
        "en": "Position never has an impact on aluminum",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La demande pour des soudeurs qualifiés en aluminium est forte dans des secteurs comme le transport et la marine.",
      "en": "Demand for qualified aluminum welders is strong in sectors like transportation and marine.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud24",
  "order": 24,
  "code": "304894",
  "hours": 60,
  "title_fr": "Soudage d'aluminium (GTAW) – toutes positions",
  "title_en": "Aluminum Welding (GTAW) – All Positions",
  "icon": "🛠️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Pourquoi le GTAW est-il souvent privilégié pour le soudage d'aluminium de précision?",
      "en": "Why is GTAW often preferred for precision aluminum welding?",
      "choices": [
       {
        "fr": "Il offre un excellent contrôle du bain de fusion, important pour ce métal sensible",
        "en": "It offers excellent weld pool control, important for this sensitive metal",
        "correct": true
       },
       {
        "fr": "Il est toujours le procédé le plus rapide",
        "en": "It is always the fastest process",
        "correct": false
       },
       {
        "fr": "Cela n'est utile que pour la paperasse administrative de l'atelier",
        "en": "It is only useful for the shop's administrative paperwork",
        "correct": false
       },
       {
        "fr": "Il ne fonctionne jamais sur l'aluminium",
        "en": "It never works on aluminum",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel courant est généralement utilisé pour souder l'aluminium en GTAW?",
      "en": "What current is generally used to weld aluminum in GTAW?",
      "choices": [
       {
        "fr": "Le courant alternatif (AC), qui aide à briser la couche d'oxyde",
        "en": "Alternating current (AC), which helps break the oxide layer",
        "correct": true
       },
       {
        "fr": "Uniquement le courant continu direct",
        "en": "Only direct current straight polarity",
        "correct": false
       },
       {
        "fr": "Aucun courant n'est nécessaire",
        "en": "No current is necessary",
        "correct": false
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le soudage GTAW de l'aluminium nécessite une bonne maîtrise du contrôle au pied ou à la main de l'intensité.",
      "en": "GTAW aluminum welding requires good mastery of foot or hand amperage control.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi la propreté de l'électrode de tungstène est-elle particulièrement importante en soudage d'aluminium?",
      "en": "Why is tungsten electrode cleanliness particularly important in aluminum welding?",
      "choices": [
       {
        "fr": "Une contamination peut affecter la stabilité de l'arc et la qualité de la soudure",
        "en": "Contamination can affect arc stability and weld quality",
        "correct": true
       },
       {
        "fr": "Cela ne concerne que la présentation visuelle de la pièce",
        "en": "It only concerns the piece's visual presentation",
        "correct": false
       },
       {
        "fr": "La propreté de l'électrode n'affecte jamais la soudure",
        "en": "Electrode cleanliness never affects the weld",
        "correct": false
       },
       {
        "fr": "Pour respecter une norme de présentation du dossier de production",
        "en": "To follow a production-file presentation standard",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quel défaut peut résulter d'un mauvais contrôle de la longueur d'arc en GTAW sur l'aluminium?",
      "en": "What defect can result from poor arc length control in GTAW on aluminum?",
      "choices": [
       {
        "fr": "Une instabilité de l'arc et un cordon irrégulier",
        "en": "Arc instability and an irregular bead",
        "correct": true
       },
       {
        "fr": "Un défaut est toujours visible immédiatement à l'œil nu, sans exception",
        "en": "A defect is always immediately visible to the naked eye, without exception",
        "correct": false
       },
       {
        "fr": "Une soudure toujours parfaite",
        "en": "An always-perfect weld",
        "correct": false
       },
       {
        "fr": "Une augmentation automatique de la résistance",
        "en": "An automatic increase in strength",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le GTAW sur l'aluminium se maîtrise aussi rapidement que sur l'acier au carbone, peu importe la position.",
      "en": "GTAW on aluminum is mastered just as quickly as on carbon steel, regardless of position.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Une soudure d'aluminium en GTAW présente une fissuration à chaud. Quelle est une cause probable?",
      "en": "A GTAW aluminum weld shows hot cracking. What is a likely cause?",
      "choices": [
       {
        "fr": "Un métal d'apport incompatible ou une contrainte excessive durant le refroidissement",
        "en": "Incompatible filler metal or excessive stress during cooling",
        "correct": true
       },
       {
        "fr": "La couleur du métal",
        "en": "The metal's colour",
        "correct": false
       },
       {
        "fr": "Le prix de l'électrode",
        "en": "The electrode's price",
        "correct": false
       },
       {
        "fr": "La cause est généralement impossible à confirmer sans remplacer toute la pièce",
        "en": "The cause is generally impossible to confirm without replacing the whole piece",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi le GTAW sur aluminium est-il souvent exigé pour les soudures critiques en aéronautique ou en marine?",
      "en": "Why is GTAW on aluminum often required for critical welds in aeronautics or marine work?",
      "choices": [
       {
        "fr": "Sa précision et sa qualité élevées répondent aux exigences strictes de sécurité de ces secteurs",
        "en": "Its high precision and quality meet these sectors' strict safety requirements",
        "correct": true
       },
       {
        "fr": "Il est toujours le procédé le moins cher",
        "en": "It is always the cheapest process",
        "correct": false
       },
       {
        "fr": "Ces secteurs n'utilisent jamais l'aluminium",
        "en": "These sectors never use aluminum",
        "correct": false
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise du GTAW sur l'aluminium dans toutes les positions représente un sommet de compétence technique pour un soudeur.",
      "en": "Mastering GTAW on aluminum in all positions represents a peak of technical skill for a welder.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud25",
  "order": 25,
  "code": "304908",
  "hours": 120,
  "title_fr": "Assemblages complexes",
  "title_en": "Complex Assemblies",
  "icon": "🌉",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qui distingue un assemblage complexe d'un assemblage de complexité moyenne?",
      "en": "What distinguishes a complex assembly from a medium-complexity assembly?",
      "choices": [
       {
        "fr": "Un plus grand nombre de pièces, de procédés combinés et d'exigences de précision",
        "en": "More pieces, combined processes and precision requirements",
        "correct": true
       },
       {
        "fr": "Aucune différence n'existe entre les deux",
        "en": "There is no difference between the two",
        "correct": false
       },
       {
        "fr": "Un assemblage complexe est toujours plus facile",
        "en": "A complex assembly is always easier",
        "correct": false
       },
       {
        "fr": "Un assemblage complexe ne nécessite jamais de plan",
        "en": "A complex assembly never requires a drawing",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi un assemblage complexe combine-t-il souvent plusieurs procédés de soudage?",
      "en": "Why does a complex assembly often combine several welding processes?",
      "choices": [
       {
        "fr": "Différentes parties du projet peuvent nécessiter des procédés adaptés à leurs exigences spécifiques",
        "en": "Different parts of the project may require processes suited to their specific requirements",
        "correct": true
       },
       {
        "fr": "Cela concerne surtout la paperasse du projet, jamais l'exécution technique",
        "en": "It mainly concerns the project's paperwork, never the technical execution",
        "correct": false
       },
       {
        "fr": "Un seul procédé suffit toujours",
        "en": "A single process is always enough",
        "correct": false
       },
       {
        "fr": "Pour respecter une procédure interne sans lien direct avec l'exécution",
        "en": "To follow an internal procedure unrelated to execution",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un assemblage complexe demande souvent une planification rigoureuse et une bonne coordination d'équipe.",
      "en": "A complex assembly often requires rigorous planning and good team coordination.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi documenter chaque étape d'un assemblage complexe?",
      "en": "Why document each step of a complex assembly?",
      "choices": [
       {
        "fr": "Pour assurer la traçabilité et faciliter la résolution de problèmes futurs",
        "en": "To ensure traceability and facilitate future problem-solving",
        "correct": true
       },
       {
        "fr": "Cela n'a d'utilité que pour les très grands projets industriels",
        "en": "It is only useful for very large industrial projects",
        "correct": false
       },
       {
        "fr": "Pour respecter une étape administrative interne sans lien direct avec l'exécution",
        "en": "To follow an internal administrative step unrelated to execution",
        "correct": false
       },
       {
        "fr": "La documentation n'est jamais nécessaire",
        "en": "Documentation is never necessary",
        "correct": false
       }
      ]
     },
     {
      "fr": "Que faire si un assemblage complexe prend du retard sur l'échéancier prévu?",
      "en": "What should you do if a complex assembly falls behind the planned schedule?",
      "choices": [
       {
        "fr": "Communiquer la situation et ajuster le plan de travail de façon réaliste",
        "en": "Communicating the situation and realistically adjusting the work plan",
        "correct": true
       },
       {
        "fr": "Cacher le retard aux superviseurs",
        "en": "Hiding the delay from supervisors",
        "correct": false
       },
       {
        "fr": "Précipiter le travail en négligeant la qualité",
        "en": "Rushing the work while neglecting quality",
        "correct": false
       },
       {
        "fr": "Abandonner le projet",
        "en": "Abandoning the project",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un assemblage complexe est toujours réalisé par un seul soudeur-monteur, sans collaboration d'équipe.",
      "en": "A complex assembly is always done by a single welder-fitter, with no team collaboration.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un défaut est détecté tard dans un assemblage complexe déjà bien avancé. Quelle est la bonne pratique?",
      "en": "A defect is detected late in an already well-advanced complex assembly. What is the correct practice?",
      "choices": [
       {
        "fr": "Évaluer sérieusement l'impact et corriger selon les normes, même si cela retarde le projet",
        "en": "Seriously assessing the impact and correcting it per standards, even if it delays the project",
        "correct": true
       },
       {
        "fr": "Ignorer le défaut pour respecter l'échéancier",
        "en": "Ignoring the defect to meet the schedule",
        "correct": false
       },
       {
        "fr": "Cacher le défaut au client",
        "en": "Hiding the defect from the client",
        "correct": false
       },
       {
        "fr": "Livrer le projet sans correction",
        "en": "Delivering the project with no correction",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la réussite d'assemblages complexes représente-t-elle un sommet de la formation en soudage-assemblage?",
      "en": "Why does successfully completing complex assemblies represent a pinnacle of welding-fitting training?",
      "choices": [
       {
        "fr": "Elle démontre l'intégration de toutes les compétences techniques et organisationnelles acquises",
        "en": "It demonstrates the integration of all the technical and organizational skills acquired",
        "correct": true
       },
       {
        "fr": "Uniquement pour respecter une norme esthétique de l'atelier",
        "en": "Only to meet the shop's appearance standards",
        "correct": false
       },
       {
        "fr": "C'est en fait la compétence la plus facile du programme",
        "en": "It is actually the easiest skill in the program",
        "correct": false
       },
       {
        "fr": "Elle ne nécessite aucune compétence acquise précédemment",
        "en": "It requires no previously acquired skills",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "La maîtrise des assemblages complexes a peu d'influence sur l'intégration au marché du travail, qui dépend surtout de l'ancienneté.",
      "en": "Mastering complex assemblies has little influence on workplace integration, which mostly depends on seniority.",
      "isTrue": false
     }
    ]
   }
  ]
 },
 {
  "id": "soud26",
  "order": 26,
  "code": "304911",
  "hours": 15,
  "title_fr": "Cheminement professionnel",
  "title_en": "Career Path Planning",
  "icon": "📈",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que le cheminement professionnel en soudage-assemblage?",
      "en": "What is career path planning in welding-fitting?",
      "choices": [
       {
        "fr": "La réflexion sur les possibilités d'évolution et de spécialisation dans le métier",
        "en": "Reflecting on opportunities for growth and specialization in the trade",
        "correct": true
       },
       {
        "fr": "Un simple document administratif",
        "en": "A simple administrative document",
        "correct": false
       },
       {
        "fr": "Une facture de matériaux",
        "en": "A materials invoice",
        "correct": false
       },
       {
        "fr": "Un plan de fabrication uniquement",
        "en": "Only a fabrication plan",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle certification peut être visée après le DEP pour se spécialiser davantage?",
      "en": "What certification can be pursued after the DVS to further specialize?",
      "choices": [
       {
        "fr": "Des certifications de soudeur qualifié selon différents procédés et positions",
        "en": "Qualified welder certifications for different processes and positions",
        "correct": true
       },
       {
        "fr": "Aucune certification n'existe dans ce domaine",
        "en": "No certification exists in this field",
        "correct": false
       },
       {
        "fr": "Uniquement un permis de conduire",
        "en": "Only a driver's licence",
        "correct": false
       },
       {
        "fr": "Uniquement un certificat de premiers soins",
        "en": "Only a first-aid certificate",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Réfléchir à son cheminement professionnel aide à orienter ses choix de formation continue.",
      "en": "Reflecting on your career path helps guide your ongoing training choices.",
      "isTrue": true
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pourquoi se renseigner sur les différents secteurs qui embauchent des soudeurs-monteurs?",
      "en": "Why learn about the different sectors that hire welder-fitters?",
      "choices": [
       {
        "fr": "Pour orienter sa carrière selon ses intérêts (construction, industrie, marine, etc.)",
        "en": "To guide your career based on your interests (construction, industry, marine, etc.)",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "Tous les secteurs sont toujours identiques",
        "en": "All sectors are always identical",
        "correct": false
       },
       {
        "fr": "Pour suivre un parcours de formation continue standard",
        "en": "To follow a standard continuing-education path",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi certains soudeurs choisissent-ils de se spécialiser dans un procédé particulier (ex. GTAW)?",
      "en": "Why do some welders choose to specialize in a particular process (e.g. GTAW)?",
      "choices": [
       {
        "fr": "Pour développer une expertise recherchée dans des secteurs spécifiques",
        "en": "To develop expertise sought after in specific sectors",
        "correct": true
       },
       {
        "fr": "Cela n'a aucune valeur sur le marché du travail",
        "en": "It has no value in the job market",
        "correct": false
       },
       {
        "fr": "La spécialisation nuit toujours à la carrière",
        "en": "Specialization always harms one's career",
        "correct": false
       },
       {
        "fr": "Pour suivre le rythme d'apprentissage recommandé par l'enseignant",
        "en": "To follow the learning pace recommended by the teacher",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le cheminement professionnel d'un soudeur se limite généralement à des objectifs à très court terme, sans planification à long terme.",
      "en": "A welder's career path is generally limited to very short-term goals, with no long-term planning.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Un élève hésite entre plusieurs avenues de carrière après le DEP. Quelle est une bonne pratique?",
      "en": "A student is torn between several career paths after the DVS. What is a good practice?",
      "choices": [
       {
        "fr": "Explorer différentes possibilités (stages, discussions avec des professionnels) avant de décider",
        "en": "Exploring different possibilities (internships, discussions with professionals) before deciding",
        "correct": true
       },
       {
        "fr": "Choisir au hasard sans réflexion",
        "en": "Choosing randomly with no thought",
        "correct": false
       },
       {
        "fr": "Ignorer la question jusqu'après l'obtention du diplôme",
        "en": "Ignoring the question until after graduating",
        "correct": false
       },
       {
        "fr": "Refuser de considérer plusieurs options",
        "en": "Refusing to consider multiple options",
        "correct": false
       }
      ]
     },
     {
      "fr": "Pourquoi la planification du cheminement professionnel est-elle utile même en début de carrière?",
      "en": "Why is career path planning useful even early in one's career?",
      "choices": [
       {
        "fr": "Elle aide à prendre des décisions éclairées sur la formation continue et les opportunités",
        "en": "It helps make informed decisions about ongoing training and opportunities",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à respecter le calendrier de production, sans lien avec la qualité",
        "en": "It only serves to follow the production schedule, unrelated to quality",
        "correct": false
       },
       {
        "fr": "La planification est utile uniquement en fin de carrière",
        "en": "Planning is only useful at the end of one's career",
        "correct": false
       },
       {
        "fr": "Pour respecter les étapes habituelles d'intégration en entreprise",
        "en": "To follow the usual company integration steps",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un bon cheminement professionnel tient compte à la fois de ses intérêts personnels et des besoins du marché du travail.",
      "en": "A good career path takes into account both personal interests and job market needs.",
      "isTrue": true
     }
    ]
   }
  ]
 },
 {
  "id": "soud27",
  "order": 27,
  "code": "304926",
  "hours": 90,
  "title_fr": "Intégration au milieu de travail",
  "title_en": "Workplace Integration",
  "icon": "🎓",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Lors d'une entrevue d'embauche pour un poste de soudeur-monteur, il est important de...",
      "en": "In a job interview for a welder-fitter position, it is important to...",
      "choices": [
       {
        "fr": "Préparer des exemples concrets de ses compétences et certifications",
        "en": "Preparing concrete examples of your skills and certifications",
        "correct": true
       },
       {
        "fr": "Ne rien préparer",
        "en": "Preparing nothing",
        "correct": false
       },
       {
        "fr": "Refuser de parler de ses compétences",
        "en": "Refusing to talk about your skills",
        "correct": false
       },
       {
        "fr": "Éviter toutes les questions",
        "en": "Avoiding all questions",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude convient le mieux dès le premier jour dans un nouvel atelier ou chantier?",
      "en": "Which attitude works best on the very first day at a new workshop or job site?",
      "choices": [
       {
        "fr": "Observer, poser des questions et suivre les consignes de sécurité",
        "en": "Observing, asking questions and following safety instructions",
        "correct": true
       },
       {
        "fr": "Tout changer immédiatement selon ses propres méthodes",
        "en": "Immediately changing everything to your own methods",
        "correct": false
       },
       {
        "fr": "Rester silencieux sans jamais poser de question",
        "en": "Staying silent and never asking questions",
        "correct": false
       },
       {
        "fr": "Ignorer les consignes de sécurité",
        "en": "Ignoring safety instructions",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "L'intégration au travail devrait se limiter strictement aux tâches techniques, sans aucune interaction sociale avec les collègues.",
      "en": "Workplace integration should be strictly limited to technical tasks, without any social interaction with coworkers.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Un bon comportement professionnel en stage inclut...",
      "en": "Good professional conduct during an internship includes...",
      "choices": [
       {
        "fr": "La ponctualité, le respect des consignes de sécurité et l'écoute des collègues",
        "en": "Punctuality, following safety instructions and listening to coworkers",
        "correct": true
       },
       {
        "fr": "Le retard fréquent",
        "en": "Frequent lateness",
        "correct": false
       },
       {
        "fr": "Le non-respect des règles de sécurité",
        "en": "Disregard for safety rules",
        "correct": false
       },
       {
        "fr": "L'absentéisme",
        "en": "Absenteeism",
        "correct": false
       }
      ]
     },
     {
      "fr": "Recevoir une rétroaction constructive d'un superviseur de stage devrait mener à...",
      "en": "Receiving constructive feedback from an internship supervisor should lead to...",
      "choices": [
       {
        "fr": "Ajuster son travail et poser des questions au besoin",
        "en": "Adjusting your work and asking questions as needed",
        "correct": true
       },
       {
        "fr": "Ignorer la rétroaction",
        "en": "Ignoring the feedback",
        "correct": false
       },
       {
        "fr": "Se sentir offensé et cesser d'essayer",
        "en": "Feeling offended and giving up",
        "correct": false
       },
       {
        "fr": "Contester systématiquement",
        "en": "Systematically arguing back",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Un stage réussi mène rarement à une offre d'emploi; la plupart des employeurs préfèrent embaucher à l'extérieur.",
      "en": "A successful internship rarely leads to a job offer; most employers prefer to hire externally.",
      "isTrue": false
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "fr": "Pendant un stage, on te demande d'effectuer une tâche pour laquelle tu ne te sens pas suffisamment formé(e). Quelle est la meilleure attitude?",
      "en": "During an internship, you're asked to do a task you don't feel adequately trained for. What is the best attitude?",
      "choices": [
       {
        "fr": "Communiquer honnêtement la situation à ton superviseur et demander de l'encadrement",
        "en": "Honestly communicate the situation to your supervisor and ask for guidance",
        "correct": true
       },
       {
        "fr": "Refuser d'obéir sans explication",
        "en": "Refuse to comply without explanation",
        "correct": false
       },
       {
        "fr": "Faire la tâche sans rien dire même en cas de doute sérieux sur la sécurité",
        "en": "Do the task without saying anything even with serious safety doubts",
        "correct": false
       },
       {
        "fr": "Quitter le stage immédiatement",
        "en": "Leave the internship immediately",
        "correct": false
       }
      ]
     },
     {
      "fr": "Quelle attitude professionnelle est la plus susceptible de mener à une embauche après le stage?",
      "en": "Which professional attitude is most likely to lead to a job offer after the internship?",
      "choices": [
       {
        "fr": "Faire preuve de rigueur, de fiabilité et d'un souci constant de la sécurité et de la qualité",
        "en": "Showing rigour, reliability and a constant concern for safety and quality",
        "correct": true
       },
       {
        "fr": "Faire le strict minimum sans engagement",
        "en": "Doing the bare minimum with no commitment",
        "correct": false
       },
       {
        "fr": "Éviter les interactions avec les collègues",
        "en": "Avoiding interactions with coworkers",
        "correct": false
       },
       {
        "fr": "Contester régulièrement les méthodes de l'atelier",
        "en": "Regularly challenging the workshop's methods",
        "correct": false
       }
      ]
     },
     {
      "type": "tf",
      "fr": "Le stage d'intégration au milieu de travail représente une part importante du programme, avec 90 heures qui lui sont consacrées.",
      "en": "The workplace integration internship represents a significant part of the program, with 90 hours dedicated to it.",
      "isTrue": true
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "SoudageQuest",
    tagline: "Deviens chef d'équipe soudage — DEP 5382",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! Badge débloqué 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "SoudageQuest",
    tagline: "Become a welding team lead — DVS 5382",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! Badge unlocked 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "dragon",
  "name_fr": "Dragon",
  "name_en": "Dragon",
  "title_fr": "Le Sage",
  "title_en": "The Sage",
  "stages": [
   "🥚",
   "🥚",
   "🦎",
   "🦎",
   "🐲",
   "🐲",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉",
   "🐉"
  ]
 },
 {
  "id": "licorne",
  "name_fr": "Licorne",
  "name_en": "Unicorn",
  "title_fr": "La Guérisseuse",
  "title_en": "The Healer",
  "stages": [
   "🥚",
   "🥚",
   "🐴",
   "🐴",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄",
   "🦄"
  ]
 },
 {
  "id": "phenix",
  "name_fr": "Phénix",
  "name_en": "Phoenix",
  "title_fr": "Le Résilient",
  "title_en": "The Resilient One",
  "stages": [
   "🥚",
   "🥚",
   "🐣",
   "🐣",
   "🐦",
   "🐦",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅",
   "🦅"
  ]
 },
 {
  "id": "griffon",
  "name_fr": "Griffon",
  "name_en": "Griffin",
  "title_fr": "Le Courageux",
  "title_en": "The Brave One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁",
   "🦁"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
