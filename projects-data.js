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
    cover: "img/id/duplex-madeleine.jpg",
    images: ["img/id/duplex-madeleine.jpg"]
    // Note : 1 seule photo disponible pour ce projet
  },

  "marbeuf": {
    name: "Marbeuf",
    loc: "Paris 8e",
    type: "Rénovation & aménagement",
    surface: "220 m²",
    style: "Haussmannien contemporain",
    fr: "Un grand appartement haussmannien au cœur du 8e arrondissement. Moulures restaurées, luminaire sculptural sur mesure, mobilier conçu pièce par pièce — un résultat intemporel et résolument contemporain.",
    en: "A grand Haussmann apartment in the heart of the 8th arrondissement. Restored mouldings, custom sculptural lighting, furniture designed piece by piece — a result both timeless and resolutely contemporary.",
    cover: "img/id/marbeuf.jpg",
    images: ["img/id/marbeuf.jpg", "img/id/marbeuf-2.jpg", "img/id/marbeuf-3.jpg", "img/id/marbeuf-4.jpg", "img/id/marbeuf-5.jpg", "img/id/marbeuf-6.jpg"]
  },

  "triplex-spa": {
    name: "Triplex avec Spa",
    loc: "Paris 1er",
    type: "Rénovation de prestige",
    surface: "320 m²",
    style: "Contemporain raffiné",
    fr: "Trois niveaux, une ambiance unique. Le marbre sélectionné veine par veine, la robinetterie dorée posée au millimètre — ce triplex est une déclaration de raffinement absolu.",
    en: "Three levels, one unique atmosphere. Marble selected vein by vein, golden fixtures positioned to the millimetre — this triplex is a declaration of absolute refinement.",
    cover: "img/id/triplex-spa.jpg",
    images: ["img/id/triplex-spa.jpg", "img/id/triplex-spa-2.jpg", "img/id/triplex-spa-3.jpg", "img/id/triplex-spa-4.jpg", "img/id/triplex-spa-5.jpg", "img/id/triplex-spa-6.jpg"]
  },

  "arcade": {
    name: "Arcade",
    loc: "Paris 8e",
    type: "Rénovation complète",
    surface: "130 m²",
    style: "Contemporain raffiné",
    fr: "Un appartement de caractère réinventé autour d'une palette de matières nobles — marbre gris, chêne clair, laiton brossé. Chaque pièce dialogue avec l'histoire du lieu.",
    en: "A character apartment reinvented around a palette of noble materials — grey marble, light oak, brushed brass. Every room in dialogue with the history of the place.",
    cover: "img/id/arcade.jpg",
    images: ["img/id/arcade.jpg", "img/id/arcade-2.jpg", "img/id/arcade-3.jpg", "img/id/arcade-4.jpg", "img/id/arcade-5.jpg", "img/id/arcade-6.jpg"]
  },

  "sous-les-toits": {
    name: "Sous les toits de Paris",
    loc: "Paris",
    type: "Rénovation & décoration",
    surface: "90 m²",
    style: "Contemporain poétique",
    fr: "Sous les poutres centenaires, une chambre d'exception. Le bois ancien dialogue avec un mobilier sur mesure dans une palette de lin, de noyer et de blanc.",
    en: "Beneath centuries-old beams, an exceptional suite. Ancient wood in dialogue with bespoke furniture in a palette of linen, walnut and white.",
    cover: "img/id/sous-les-toits.jpg",
    images: ["img/id/sous-les-toits.jpg", "img/id/sous-les-toits-p2.jpg", "img/id/sous-les-toits-p3.jpg", "img/id/sous-les-toits-p4.jpg", "img/id/sous-les-toits-p5.jpg", "img/id/sous-les-toits-p6.jpg"]
  },

  "patio": {
    name: "Patio",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "110 m²",
    style: "Minimaliste luxueux",
    fr: "Un appartement conçu autour de la lumière et du silence. Matières douces, volumes généreux, finitions hôtelières — un intérieur pensé pour être vécu.",
    en: "An apartment conceived around light and silence. Soft materials, generous volumes, hotel-grade finishes — an interior designed to be lived in.",
    cover: "img/id/patio.jpg",
    images: ["img/id/patio.jpg", "img/id/patio-2.jpg", "img/id/patio-3.jpg", "img/id/patio-4.jpg", "img/id/patio-5.jpg", "img/id/patio-6.jpg"]
  },

  "louvres": {
    name: "Louvres",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "95 m²",
    style: "Contemporain chaleureux",
    fr: "Les lignes contemporaines du noyer et les tons ambrés — un équilibre entre exigence et confort, à deux pas du Louvre.",
    en: "The contemporary lines of walnut and amber tones — a balance between high standards and comfort, steps from the Louvre.",
    cover: "img/id/louvres.jpg",
    images: ["img/id/louvres.jpg", "img/id/louvres-2.jpg", "img/id/louvres-3.jpg", "img/id/louvres-4.jpg", "img/id/louvres-5.jpg", "img/id/louvres-6.jpg"]
  },

  "champs-elysees": {
    name: "Champs Élysées",
    loc: "Paris 8e",
    type: "Rénovation de prestige",
    surface: "200 m²",
    style: "Haussmannien contemporain",
    fr: "Adresse de prestige, ambition maximale. Le vocabulaire classique de l'architecture haussmannienne rencontre une écriture intérieure résolument contemporaine.",
    en: "A prestigious address, maximum ambition. The classical vocabulary of Haussmann architecture meets a resolutely contemporary interior design language.",
    cover: "img/id/champs-elysees.jpg",
    images: ["img/id/champs-elysees.jpg", "img/id/champs-elysees-2.jpg", "img/id/champs-elysees-3.jpg", "img/id/champs-elysees-4.jpg", "img/id/champs-elysees-5.jpg", "img/id/champs-elysees-6.jpg"]
  },

  "rivoli": {
    name: "Rivoli",
    loc: "Paris 1er",
    type: "Restructuration locative",
    surface: "70 m²",
    style: "Contemporain parisien",
    fr: "Un ensemble locatif repensé rue de Rivoli. Chaque appartement conçu comme un objet singulier — même ambition, expressions différentes.",
    en: "A rental property reinvented on rue de Rivoli. Each apartment conceived as a singular object — the same ambition, different expressions.",
    cover: "img/id/rivoli.jpg",
    images: ["img/id/rivoli.jpg", "img/id/rivoli-2.jpg", "img/id/rivoli-3.jpg", "img/id/rivoli-4.jpg", "img/id/rivoli-5.jpg", "img/id/rivoli-6.jpg"]
  },

  "dechargeurs": {
    name: "Déchargeurs",
    loc: "Paris 1er",
    type: "Restructuration complète",
    surface: "80 m²",
    style: "Contemporain raffiné",
    fr: "Restructuration complète d'un bien de caractère aux Halles. De la conception au suivi de chantier, un projet mené de A à Z avec une exigence absolue.",
    en: "Complete restructuring of a character property at Les Halles. From conception to construction supervision, a project led from A to Z with absolute rigour.",
    cover: "img/id/dechargeurs.jpg",
    images: ["img/id/dechargeurs.jpg", "img/id/dechargeurs-2.jpg", "img/id/dechargeurs-3.jpg", "img/id/dechargeurs-4.jpg", "img/id/dechargeurs-5.jpg", "img/id/dechargeurs-6.jpg"]
  },

  "madeleine": {
    name: "Madeleine",
    loc: "Paris 8e",
    type: "Rénovation & décoration",
    surface: "65 m²",
    style: "Contemporain élégant",
    fr: "À deux pas de la Madeleine, un appartement réinventé dans une palette de beiges dorés et de bois chaleureux. L'épure au service de l'élégance.",
    en: "Steps from La Madeleine, an apartment reinvented in a palette of golden beiges and warm woods. Simplicity in the service of elegance.",
    cover: "img/id/madeleine.jpg",
    images: ["img/id/madeleine.jpg", "img/id/madeleine-2.jpg", "img/id/madeleine-3.jpg", "img/id/madeleine-4.jpg", "img/id/madeleine-5.jpg", "img/id/madeleine-6.jpg"]
  },

  "malesherbes": {
    name: "Malesherbes",
    loc: "Paris 17e",
    type: "Réaménagement familial",
    surface: "120 m²",
    style: "Contemporain familial",
    fr: "Un appartement familial aux volumes redéfinis. Les cloisons bougent, la lumière circule — l'espace prend enfin tout son sens.",
    en: "A family apartment with redefined volumes. Walls move, light flows — the space finally realises its full potential.",
    cover: "img/id/malesherbes.jpg",
    images: ["img/id/malesherbes.jpg", "img/id/malesherbes-2.jpg", "img/id/malesherbes-3.jpg", "img/id/malesherbes-4.jpg", "img/id/malesherbes-5.jpg", "img/id/malesherbes-6.jpg"]
  },

  "chatelet": {
    name: "Châtelet",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "85 m²",
    style: "Contemporain parisien",
    fr: "Proximité du centre, intimité préservée. Cet appartement du Châtelet démontre qu'élégance et praticité ne s'opposent jamais.",
    en: "Central location, preserved intimacy. This Châtelet apartment demonstrates that elegance and practicality need never oppose each other.",
    cover: "img/id/chatelet.jpg",
    images: ["img/id/chatelet.jpg", "img/id/chatelet-2.jpg", "img/id/chatelet-3.jpg", "img/id/chatelet-4.jpg", "img/id/chatelet-5.jpg", "img/id/chatelet-6.jpg"]
  },

  "deux-pieces": {
    name: "Deux Pièces Chic",
    loc: "Paris",
    type: "Optimisation d'espace",
    surface: "45 m²",
    style: "Minimaliste chic",
    fr: "Preuve que les petits espaces peuvent être grands. Ce deux-pièces repensé de A à Z dégage une générosité de volume inattendue.",
    en: "Proof that small spaces can feel grand. This two-room apartment, redesigned from scratch, exudes an unexpected generosity of volume.",
    cover: "img/id/deux-pieces.jpg",
    images: ["img/id/deux-pieces.jpg", "img/id/deux-pieces-2.jpg", "img/id/deux-pieces-3.jpg", "img/id/deux-pieces-4.jpg", "img/id/deux-pieces-5.jpg", "img/id/deux-pieces-6.jpg"]
  },

  "cannes": {
    name: "Cannes",
    loc: "Cannes",
    type: "Décoration & aménagement",
    surface: "100 m²",
    style: "Méditerranéen contemporain",
    fr: "Un intérieur conçu pour la lumière du Sud. Palettes claires, matières naturelles, ouverture maximale sur l'extérieur.",
    en: "An interior conceived for southern light. Light palettes, natural materials, maximum openness to the outside.",
    cover: "img/id/cannes.webp",
    images: ["img/id/cannes.webp", "img/id/cannes-2.webp", "img/id/cannes-3.webp", "img/id/cannes-4.webp", "img/id/cannes-5.webp", "img/id/cannes-6.webp"]
  },

  "iena": {
    name: "Iéna",
    loc: "Paris 16e",
    type: "Rénovation & décoration",
    surface: "140 m²",
    style: "Classique contemporain",
    fr: "Dans le 16e arrondissement, un appartement qui réinterprète le classicisme parisien avec des matières contemporaines et une lumière maîtrisée.",
    en: "In the 16th arrondissement, an apartment that reinterprets Parisian classicism with contemporary materials and controlled light.",
    cover: "img/id/iena.webp",
    images: ["img/id/iena.webp", "img/id/iena-2.webp", "img/id/iena-3.webp", "img/id/iena-4.webp", "img/id/iena-5.webp", "img/id/iena-6.webp"]
  },

  "toits-2": {
    name: "Sous les toits II",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "75 m²",
    style: "Contemporain poétique",
    fr: "Second chapitre sous les toits parisiens. Une suite qui joue sur les rythmes du bois, la douceur des tissus et la chaleur tamisée d'une lumière travaillée.",
    en: "A second chapter beneath the Parisian rooftops. A suite that plays on the rhythms of wood, the softness of fabrics and the filtered warmth of considered light.",
    cover: "img/id/sous-les-toits-2.jpg",
    images: ["img/id/sous-les-toits-2.jpg", "img/id/toits-2-2.jpg", "img/id/toits-2-3.jpg", "img/id/toits-2-4.jpg", "img/id/toits-2-5.jpg", "img/id/toits-2-6.jpg"]
  },

  "toits-3": {
    name: "Sous les toits III",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "70 m²",
    style: "Contemporain singulier",
    fr: "Troisième variation sur le thème des combles parisiens. Même géographie, autre personnalité — chaque appartement est un portrait singulier.",
    en: "A third variation on the theme of Parisian attics. Same geography, another personality — each apartment is its own singular portrait.",
    cover: "img/id/sous-les-toits-3.jpg",
    images: ["img/id/sous-les-toits-3.jpg", "img/id/toits-3-2.jpg", "img/id/toits-3-3.jpg", "img/id/toits-3-4.jpg", "img/id/toits-3-5.jpg", "img/id/toits-3-6.jpg"]
  },

  "workspace": {
    name: "Work Space",
    loc: "Paris",
    type: "Aménagement professionnel",
    surface: "80 m²",
    style: "Contemporain professionnel",
    fr: "Concevoir un lieu de travail qui inspire autant qu'il protège l'image. Un espace de réception pensé pour la marque autant que pour le confort.",
    en: "Designing a workspace that inspires as much as it protects brand image. A reception space conceived for the brand as much as for comfort.",
    cover: "img/id/workspace.webp",
    images: ["img/id/workspace.webp", "img/id/workspace-2.webp", "img/id/workspace-3.webp", "img/id/workspace-4.webp"]
  }

};

/* ============================================
   OBJETS — Données & textes bilingues
   ============================================ */

const OBJECTS = {

  "tables-organiques": {
    name: "Tables Organiques",
    fr: "Formes libres inspirées de la nature. Résine, bois massif, marbre — chaque table est une pièce unique, dessinée selon l'espace qui l'accueille.",
    en: "Free forms inspired by nature. Resin, solid wood, marble — each table is a unique piece, drawn to the space that receives it.",
    tag: "Sur devis",
    images: ["img/meubles/tables-organiques-1.webp", "img/meubles/tables-organiques-2.webp"]
  },

  "bouclette-chairs": {
    name: "Fauteuils Bouclette",
    fr: "Structure en chêne massif, assise et dossier en tissu bouclette. Un équilibre entre forme sculptée et confort enveloppant.",
    en: "Solid oak frame, bouclette fabric seat and back. A balance between sculptural form and enveloping comfort.",
    tag: "Sur devis",
    images: ["img/meubles/bouclette-chairs.webp"]
  },

  "suspension-feuilles-or": {
    name: "Suspension Feuilles d'Or",
    fr: "Luminaire sculptural en laiton brossé. Chaque feuille reflète la lumière différemment selon l'angle — un objet vivant.",
    en: "Sculptural brushed brass pendant. Each leaf reflects light differently depending on the angle — a living object.",
    tag: "Sur devis",
    images: ["img/meubles/suspension-feuilles-or.webp"]
  },

  "tourne-disques": {
    name: "Tourne-Disques",
    fr: "Design rétro-futuriste. Le vinyle retrouve ses lettres de noblesse dans un objet qui est autant à regarder qu'à écouter.",
    en: "Retro-futurist design. Vinyl reclaims its nobility in an object as beautiful to look at as to listen to.",
    tag: "Sur devis",
    images: ["img/meubles/tourne-disques.webp"]
  },

  "vasques-onyx": {
    name: "Vasques en Onyx",
    fr: "Vasques taillées dans l'onyx rose. La salle de bain devient un sanctuaire de pierre — chaque veinure est unique.",
    en: "Basins carved in pink onyx. The bathroom becomes a stone sanctuary — every vein is unique.",
    tag: "Sur devis",
    images: ["img/meubles/vasque.webp"]
  },

  "appliques-onix": {
    name: "Appliques Onix",
    fr: "Appliques murales en onyx rétroéclairé. La pierre translucide devient lumière, diffusant une chaleur rosée et organique.",
    en: "Backlit onyx wall lights. The translucent stone becomes a light source, diffusing a warm, organic rose glow.",
    tag: "Sur devis",
    images: ["img/meubles/appliques-onix.webp"]
  },

  "bougeoires": {
    name: "Bougeoires & Accessoires",
    fr: "Petits objets au grand pouvoir. Laiton, verre soufflé, marbre — des pièces de table qui définissent l'ambiance d'un espace.",
    en: "Small objects with great power. Brass, blown glass, marble — table pieces that define the atmosphere of a space.",
    tag: "Sur devis",
    images: ["img/meubles/bougeoires.webp"]
  },

  "tabourets": {
    name: "Tabourets & Tables d'appoint",
    fr: "Pieds en métal laqué, assises texturées — des pièces fonctionnelles pensées comme des sculptures.",
    en: "Lacquered metal legs, textured tops — functional pieces conceived as sculptures.",
    tag: "Sur devis",
    images: ["img/meubles/tabourets.webp"]
  },

  "lit-signature": {
    name: "Lit Signature",
    fr: "Tête de lit architecturale, rangements intégrés, finitions sur mesure. Un lit conçu comme une pièce maîtresse de la chambre.",
    en: "Architectural headboard, integrated storage, custom finishes. A bed designed as the centrepiece of the bedroom.",
    tag: "Sur devis",
    images: ["img/meubles/smart-bed.webp"]
  }

};
