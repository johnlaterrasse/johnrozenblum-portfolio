/* ============================================
   PROJETS — Données & textes bilingues
   ============================================ */

const PROJECTS = {

  "duplex-madeleine": {
    name: "Duplex Madeleine",
    loc: "Paris 9e",
    type: "Rénovation complète",
    surface: "180 m²",
    style: "Contemporain haussmannien",
    fr: "Un duplex pensé comme une maison dans la ville. Séjour traversant baigné de lumière, canapé modulaire enveloppant, détails dorés — l'art de vivre à la parisienne dans toute sa splendeur.",
    en: "A duplex conceived as a house within the city. A light-filled through-living room, an enveloping modular sofa, golden details — Parisian art de vivre in all its splendour.",
    cover: "1 - Interior Design/Duplex Madeleine/duplex madeleine - photo du séjour.jpg",
    images: [
      "1 - Interior Design/Duplex Madeleine/duplex madeleine - photo du séjour.jpg"
    ]
  },

  "marbeuf": {
    name: "Marbeuf",
    loc: "Paris 8e",
    type: "Rénovation & aménagement",
    surface: "220 m²",
    style: "Haussmannien contemporain",
    fr: "Un grand appartement haussmannien au cœur du 8e arrondissement. Moulures restaurées, luminaire sculptural sur mesure, mobilier conçu pièce par pièce — un résultat intemporel et résolument contemporain.",
    en: "A grand Haussmann apartment in the heart of the 8th arrondissement. Restored mouldings, custom sculptural lighting, furniture designed piece by piece — a result both timeless and resolutely contemporary.",
    cover: "1 - Interior Design/Marbeuf/684ae9ed05cfd25582b47ed6_Marbeuf1-v2-07-min.jpg",
    images: [
      "1 - Interior Design/Marbeuf/684ae9ed05cfd25582b47ed6_Marbeuf1-v2-07-min.jpg",
      "1 - Interior Design/Marbeuf/684ae9ed05cfd25582b47ed6_Marbeuf1-v2-07-min.jpg"
    ]
  },

  "triplex-spa": {
    name: "Triplex avec Spa",
    loc: "Paris 1er",
    type: "Rénovation de prestige",
    surface: "320 m²",
    style: "Contemporain raffiné",
    fr: "Trois niveaux, une ambiance unique. Le marbre sélectionné veine par veine, la robinetterie dorée posée au millimètre — ce triplex est une déclaration de raffinement absolu.",
    en: "Three levels, one unique atmosphere. Marble selected vein by vein, golden fixtures positioned to the millimetre — this triplex is a declaration of absolute refinement.",
    cover: "1 - Interior Design/Triplex avec spa/6846b2f712f4980053b4ed3f_dechargeursR01-29.jpg",
    images: [
      "1 - Interior Design/Triplex avec spa/6846b2f712f4980053b4ed3f_dechargeursR01-29.jpg"
    ]
  },

  "arcade": {
    name: "Arcade",
    loc: "Paris 8e",
    type: "Rénovation complète",
    surface: "130 m²",
    style: "Contemporain raffiné",
    fr: "Un appartement de caractère réinventé autour d'une palette de matières nobles — marbre gris, chêne clair, laiton brossé. Chaque pièce dialogue avec l'histoire du lieu.",
    en: "A character apartment reinvented around a palette of noble materials — grey marble, light oak, brushed brass. Every room in dialogue with the history of the place.",
    cover: "1 - Interior Design/Arcade/69c2ae9243ef6b5725252818_IMG_6776.jpg",
    images: [
      "1 - Interior Design/Arcade/69c2ae9243ef6b5725252818_IMG_6776.jpg"
    ]
  },

  "sous-les-toits": {
    name: "Sous les toits de Paris",
    loc: "Paris",
    type: "Rénovation & décoration",
    surface: "90 m²",
    style: "Contemporain poétique",
    fr: "Sous les poutres centenaires, une chambre d'exception. Le bois ancien dialogue avec un mobilier sur mesure dans une palette de lin, de noyer et de blanc.",
    en: "Beneath centuries-old beams, an exceptional suite. Ancient wood in dialogue with bespoke furniture in a palette of linen, walnut and white.",
    cover: "1 - Interior Design/Sous les toits de Paris/685e60908e35d8be488321d3_dechargeurs501-02.jpg",
    images: [
      "1 - Interior Design/Sous les toits de Paris/685e60908e35d8be488321d3_dechargeurs501-02.jpg"
    ]
  },

  "patio": {
    name: "Patio",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "110 m²",
    style: "Minimaliste luxueux",
    fr: "Un appartement conçu autour de la lumière et du silence. Matières douces, volumes généreux, finitions hôtelières — un intérieur pensé pour être vécu.",
    en: "An apartment conceived around light and silence. Soft materials, generous volumes, hotel-grade finishes — an interior designed to be lived in.",
    cover: "1 - Interior Design/Patio/6846b5e21013a7b5a9606277_dechargeurs114-19.jpg",
    images: [
      "1 - Interior Design/Patio/6846b5e21013a7b5a9606277_dechargeurs114-19.jpg"
    ]
  },

  "louvres": {
    name: "Louvres",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "95 m²",
    style: "Contemporain chaleureux",
    fr: "Les lignes contemporaines du noyer et les tons ambrés — un équilibre entre exigence et confort, à deux pas du Louvre.",
    en: "The contemporary lines of walnut and amber tones — a balance between high standards and comfort, steps from the Louvre.",
    cover: "1 - Interior Design/Louvres/6846b16f0f8bfcfce772d55c_dechargeurs211-27.jpg",
    images: [
      "1 - Interior Design/Louvres/6846b16f0f8bfcfce772d55c_dechargeurs211-27.jpg"
    ]
  },

  "champs-elysees": {
    name: "Champs Élysées",
    loc: "Paris 8e",
    type: "Rénovation de prestige",
    surface: "200 m²",
    style: "Haussmannien contemporain",
    fr: "Adresse de prestige, ambition maximale. Le vocabulaire classique de l'architecture haussmannienne rencontre une écriture intérieure résolument contemporaine.",
    en: "A prestigious address, maximum ambition. The classical vocabulary of Haussmann architecture meets a resolutely contemporary interior design language.",
    cover: "1 - Interior Design/Champs Elysées/6846c512f4ae1fb81382c923_Marbeuf2-v2-04.jpg",
    images: [
      "1 - Interior Design/Champs Elysées/6846c512f4ae1fb81382c923_Marbeuf2-v2-04.jpg"
    ]
  },

  "rivoli": {
    name: "Rivoli",
    loc: "Paris 1er",
    type: "Restructuration locative",
    surface: "70 m²",
    style: "Contemporain parisien",
    fr: "Un ensemble locatif repensé rue de Rivoli. Chaque appartement conçu comme un objet singulier — même ambition, expressions différentes.",
    en: "A rental property reinvented on rue de Rivoli. Each apartment conceived as a singular object — the same ambition, different expressions.",
    cover: "1 - Interior Design/Rivoli/6846b4378c1020615ebc44d0_dechargeurs112-06.jpg",
    images: [
      "1 - Interior Design/Rivoli/6846b4378c1020615ebc44d0_dechargeurs112-06.jpg"
    ]
  },

  "dechargeurs": {
    name: "Déchargeurs",
    loc: "Paris 1er",
    type: "Restructuration complète",
    surface: "80 m²",
    style: "Contemporain raffiné",
    fr: "Restructuration complète d'un bien de caractère aux Halles. De la conception au suivi de chantier, un projet mené de A à Z avec une exigence absolue.",
    en: "Complete restructuring of a character property at Les Halles. From conception to construction supervision, a project led from A to Z with absolute rigour.",
    cover: "1 - Interior Design/Dechargeurs/6846b911484243f47e4a71a5_dechargeurs201-08.jpg",
    images: [
      "1 - Interior Design/Dechargeurs/6846b911484243f47e4a71a5_dechargeurs201-08.jpg"
    ]
  },

  "madeleine": {
    name: "Madeleine",
    loc: "Paris 8e",
    type: "Rénovation & décoration",
    surface: "65 m²",
    style: "Contemporain élégant",
    fr: "À deux pas de la Madeleine, un appartement réinventé dans une palette de beiges dorés et de bois chaleureux. L'épure au service de l'élégance.",
    en: "Steps from La Madeleine, an apartment reinvented in a palette of golden beiges and warm woods. Simplicity in the service of elegance.",
    cover: "1 - Interior Design/Madeleine/68c41e5f29fbf5700828adbd_sd (23).jpg",
    images: [
      "1 - Interior Design/Madeleine/68c41e5f29fbf5700828adbd_sd (23).jpg"
    ]
  },

  "malesherbes": {
    name: "Malesherbes",
    loc: "Paris 17e",
    type: "Réaménagement familial",
    surface: "120 m²",
    style: "Contemporain familial",
    fr: "Un appartement familial aux volumes redéfinis. Les cloisons bougent, la lumière circule — l'espace prend enfin tout son sens.",
    en: "A family apartment with redefined volumes. Walls move, light flows — the space finally realises its full potential.",
    cover: "1 - Interior Design/Malesherbes/68c427861c722985f610b725_sd (3).jpg",
    images: [
      "1 - Interior Design/Malesherbes/68c427861c722985f610b725_sd (3).jpg"
    ]
  },

  "chatelet": {
    name: "Châtelet",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "85 m²",
    style: "Contemporain parisien",
    fr: "Proximité du centre, intimité préservée. Cet appartement du Châtelet démontre qu'élégance et praticité ne s'opposent jamais.",
    en: "Central location, preserved intimacy. This Châtelet apartment demonstrates that elegance and practicality need never oppose each other.",
    cover: "1 - Interior Design/Chatelet/695fdc0b2679813ed15e1a93_dechargeursR02-11.jpg",
    images: [
      "1 - Interior Design/Chatelet/695fdc0b2679813ed15e1a93_dechargeursR02-11.jpg"
    ]
  },

  "deux-pieces": {
    name: "Deux Pièces Chic",
    loc: "Paris",
    type: "Optimisation d'espace",
    surface: "45 m²",
    style: "Minimaliste chic",
    fr: "Preuve que les petits espaces peuvent être grands. Ce deux-pièces repensé de A à Z dégage une générosité de volume inattendue.",
    en: "Proof that small spaces can feel grand. This two-room apartment, redesigned from scratch, exudes an unexpected generosity of volume.",
    cover: "1 - Interior Design/Deux pièces chic/6846bcc04cb371e6b52ebab1_PAF-Arcade42-15.jpg",
    images: [
      "1 - Interior Design/Deux pièces chic/6846bcc04cb371e6b52ebab1_PAF-Arcade42-15.jpg"
    ]
  },

  "cannes": {
    name: "Cannes",
    loc: "Cannes",
    type: "Décoration & aménagement",
    surface: "100 m²",
    style: "Méditerranéen contemporain",
    fr: "Un intérieur conçu pour la lumière du Sud. Palettes claires, matières naturelles, ouverture maximale sur l'extérieur.",
    en: "An interior conceived for southern light. Light palettes, natural materials, maximum openness to the outside.",
    cover: "1 - Interior Design/Cannes/johnmagueule_A_modern_bedroom_with_white_and_yellow_bedding_sho_2455b18c-a9da-4f7d-bd7a-b31bf25d95e1.webp",
    images: [
      "1 - Interior Design/Cannes/johnmagueule_A_modern_bedroom_with_white_and_yellow_bedding_sho_2455b18c-a9da-4f7d-bd7a-b31bf25d95e1.webp"
    ]
  },

  "iena": {
    name: "Iéna",
    loc: "Paris 16e",
    type: "Rénovation & décoration",
    surface: "140 m²",
    style: "Classique contemporain",
    fr: "Dans le 16e arrondissement, un appartement qui réinterprète le classicisme parisien avec des matières contemporaines et une lumière maîtrisée.",
    en: "In the 16th arrondissement, an apartment that reinterprets Parisian classicism with contemporary materials and controlled light.",
    cover: "1 - Interior Design/Iena/johnmagueule_A_bedroom_with_an_oak_headboard_woven_wall_panels__7be7c7ed-1b39-49e1-b572-9ff1640615b9.webp",
    images: [
      "1 - Interior Design/Iena/johnmagueule_A_bedroom_with_an_oak_headboard_woven_wall_panels__7be7c7ed-1b39-49e1-b572-9ff1640615b9.webp"
    ]
  },

  "toits-2": {
    name: "Sous les toits II",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "75 m²",
    style: "Contemporain poétique",
    fr: "Second chapitre sous les toits parisiens. Une suite qui joue sur les rythmes du bois, la douceur des tissus et la chaleur tamisée d'une lumière travaillée.",
    en: "A second chapter beneath the Parisian rooftops. A suite that plays on the rhythms of wood, the softness of fabrics and the filtered warmth of considered light.",
    cover: "1 - Interior Design/Sous les toits de Paris 2/695fc621acd5693fa4f09986_dechargeurs-411-01.jpg",
    images: [
      "1 - Interior Design/Sous les toits de Paris 2/695fc621acd5693fa4f09986_dechargeurs-411-01.jpg"
    ]
  },

  "toits-3": {
    name: "Sous les toits III",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "70 m²",
    style: "Contemporain singulier",
    fr: "Troisième variation sur le thème des combles parisiens. Même géographie, autre personnalité — chaque appartement est un portrait singulier.",
    en: "A third variation on the theme of Parisian attics. Same geography, another personality — each apartment is its own singular portrait.",
    cover: "1 - Interior Design/Sous les toits de paris 3/6996e0bccac5e26eca2d6f91_sd (12).jpg",
    images: [
      "1 - Interior Design/Sous les toits de paris 3/6996e0bccac5e26eca2d6f91_sd (12).jpg"
    ]
  },

  "workspace": {
    name: "Work Space",
    loc: "Paris",
    type: "Aménagement professionnel",
    surface: "80 m²",
    style: "Contemporain professionnel",
    fr: "Concevoir un lieu de travail qui inspire autant qu'il protège l'image. Un espace de réception pensé pour la marque autant que pour le confort.",
    en: "Designing a workspace that inspires as much as it protects brand image. A reception space conceived for the brand as much as for comfort.",
    cover: "1 - Interior Design/Work space/johnmagueule_espacio_de_trabajo_comodo_y_relejado_para_jovenes._24e90040-cc4d-4b48-a4ef-40f47582eaae.webp",
    images: [
      "1 - Interior Design/Work space/johnmagueule_espacio_de_trabajo_comodo_y_relejado_para_jovenes._24e90040-cc4d-4b48-a4ef-40f47582eaae.webp"
    ]
  }

};
