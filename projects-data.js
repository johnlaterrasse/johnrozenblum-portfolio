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
    fr: "Un duplex qui respire comme une maison. Le séjour s'ouvre sur deux niveaux, la lumière traverse librement — quelque chose ici ressemble à une déclaration.",
    en: "A duplex that breathes like a house. The living room unfolds across two levels, light moves freely — something here feels like a declaration.",
    cover: "img/id/duplex-madeleine.jpg",
    images: [
      "img/id/duplex-madeleine.jpg",
      "img/id/duplex-madeleine-2.jpg",
      "img/id/duplex-madeleine-3.jpg",
      "img/id/duplex-madeleine-4.jpg",
      "img/id/duplex-madeleine-5.jpg",
      "img/id/duplex-madeleine-6.jpg",
      "img/id/duplex-madeleine-7.jpg",
      "img/id/duplex-madeleine-8.jpg",
      "img/id/duplex-madeleine-9.jpg",
      "img/id/duplex-madeleine-10.jpg",
      "img/id/duplex-madeleine-11.jpg",
      "img/id/duplex-madeleine-12.jpg",
      "img/id/duplex-madeleine-13.jpg"
    ]
  },

  "marbeuf": {
    name: "Marbeuf",
    loc: "Paris 8e",
    type: "Rénovation & aménagement",
    surface: "220 m²",
    style: "Haussmannien contemporain",
    fr: "Les moulures d'époque, le luminaire conçu pour cet espace seul, chaque meuble pensé pour ce mur précis. Marbeuf est un intérieur où rien n'aurait pu être différent.",
    en: "Period mouldings, lighting conceived for this space alone, each piece of furniture thought for this precise wall. Marbeuf is an interior where nothing could have been otherwise.",
    cover: "img/id/marbeuf.jpg",
    images: ["img/id/marbeuf.jpg", "img/id/marbeuf-2.jpg", "img/id/marbeuf-4.jpg", "img/id/marbeuf-6.jpg", "img/id/marbeuf-5.jpg", "img/id/marbeuf-3.jpg"]
    // Ordre logique : v2-07(séjour), v2-08, v2-14, v2-15, v2-16, v2-32(fin)
  },

  "triplex-spa": {
    name: "Triplex avec Spa",
    loc: "Paris 1er",
    type: "Rénovation de prestige",
    surface: "320 m²",
    style: "Contemporain raffiné",
    fr: "Trois niveaux, une seule intention. Le marbre choisi veine par veine, la lumière dosée, l'eau à la bonne température — le luxe comme discipline.",
    en: "Three levels, one intention. Marble chosen vein by vein, light precisely measured, water at the right temperature — luxury as discipline.",
    cover: "img/id/triplex-spa.jpg",
    images: ["img/id/triplex-spa-4.jpg", "img/id/triplex-spa-6.jpg", "img/id/triplex-spa-3.jpg", "img/id/triplex-spa-2.jpg", "img/id/triplex-spa.jpg", "img/id/triplex-spa-5.jpg"]
    // Ordre logique : R01-07(séjour), R01-10, R01-14, R01-24, R01-29, R01-30
  },

  "arcade": {
    name: "Arcade",
    loc: "Paris 8e",
    type: "Rénovation complète",
    surface: "130 m²",
    style: "Contemporain raffiné",
    fr: "Un appartement qui portait en lui sa propre solution. Marbre gris, chêne clair, laiton brossé — la matière révélée plutôt qu'ajoutée.",
    en: "An apartment that carried its own solution within it. Grey marble, light oak, brushed brass — material revealed rather than added.",
    cover: "img/id/arcade.jpg",
    images: ["img/id/arcade.jpg", "img/id/arcade-2.jpg", "img/id/arcade-3.jpg", "img/id/arcade-4.jpg", "img/id/arcade-5.jpg", "img/id/arcade-6.jpg"]
  },

  "sous-les-toits": {
    name: "Sous les toits de Paris",
    loc: "Paris",
    type: "Rénovation & décoration",
    surface: "90 m²",
    style: "Contemporain poétique",
    fr: "Sous les poutres centenaires, un espace réinventé sans rien effacer. Le bois ancien s'y souvient. Le mobilier sur mesure y répond, doucement.",
    en: "Beneath centuries-old beams, a space reinvented without erasing anything. The ancient wood remembers. The bespoke furniture answers, softly.",
    cover: "img/id/sous-les-toits.jpg",
    images: ["img/id/sous-les-toits.jpg", "img/id/sous-les-toits-p2.jpg", "img/id/sous-les-toits-p3.jpg", "img/id/sous-les-toits-p4.jpg", "img/id/sous-les-toits-p5.jpg", "img/id/sous-les-toits-p6.jpg"]
  },

  "patio": {
    name: "Patio",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "110 m²",
    style: "Minimaliste luxueux",
    fr: "Un appartement construit autour d'une seule idée : le silence comme matière première. Volumes généreux, matières douces — un intérieur que l'on ressent avant de le voir.",
    en: "An apartment built around one idea: silence as a primary material. Generous volumes, soft surfaces — an interior felt before it is seen.",
    cover: "img/id/patio.jpg",
    images: ["img/id/patio.jpg", "img/id/patio-2.jpg", "img/id/patio-3.jpg", "img/id/patio-4.jpg", "img/id/patio-5.jpg", "img/id/patio-6.jpg"]
  },

  "louvres": {
    name: "Louvres",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "95 m²",
    style: "Contemporain chaleureux",
    fr: "À deux pas du Louvre, un intérieur qui n'emprunte rien au musée voisin. Le noyer contemporain, les tons ambrés — une maison sans ostentation.",
    en: "Steps from the Louvre, an interior that borrows nothing from its neighbour. Contemporary walnut, warm amber tones — a home without ostentation.",
    cover: "img/id/louvres.jpg",
    images: ["img/id/louvres.jpg", "img/id/louvres-2.jpg", "img/id/louvres-3.jpg", "img/id/louvres-4.jpg", "img/id/louvres-5.jpg", "img/id/louvres-6.jpg"]
  },

  "champs-elysees": {
    name: "Champs Élysées",
    loc: "Paris 8e",
    type: "Rénovation de prestige",
    surface: "200 m²",
    style: "Haussmannien contemporain",
    fr: "L'architecture haussmannienne comme socle, pas comme contrainte. Ici, le classique et le contemporain se répondent sans jamais se confondre.",
    en: "Haussmann architecture as foundation, not constraint. Here, classical and contemporary speak to each other without ever merging.",
    cover: "img/id/champs-elysees.jpg",
    images: ["img/id/champs-elysees.jpg", "img/id/champs-elysees-2.jpg", "img/id/champs-elysees-3.jpg", "img/id/champs-elysees-4.jpg", "img/id/champs-elysees-5.jpg", "img/id/champs-elysees-6.jpg"]
  },

  "rivoli": {
    name: "Rivoli",
    loc: "Paris 1er",
    type: "Restructuration locative",
    surface: "70 m²",
    style: "Contemporain parisien",
    fr: "Rue de Rivoli, un même immeuble, des appartements radicalement distincts. La contrainte comme source créative — chaque espace, son propre caractère.",
    en: "Rue de Rivoli, one building, radically distinct apartments. Constraint as a creative source — each space, its own character.",
    cover: "img/id/rivoli.jpg",
    images: ["img/id/rivoli.jpg", "img/id/rivoli-2.jpg", "img/id/rivoli-3.jpg", "img/id/rivoli-4.jpg", "img/id/rivoli-5.jpg", "img/id/rivoli-6.jpg"]
  },

  "dechargeurs": {
    name: "Déchargeurs",
    loc: "Paris 1er",
    type: "Restructuration complète",
    surface: "80 m²",
    style: "Contemporain raffiné",
    fr: "Un bien de caractère aux Halles, repensé jusqu'à la structure. Ce qu'on a gardé est aussi précieux que ce qu'on a créé.",
    en: "A character property at Les Halles, reconceived to its very structure. What was kept is as precious as what was created.",
    cover: "img/id/dechargeurs.jpg",
    images: ["img/id/dechargeurs.jpg", "img/id/dechargeurs-2.jpg", "img/id/dechargeurs-3.jpg", "img/id/dechargeurs-4.jpg", "img/id/dechargeurs-5.jpg", "img/id/dechargeurs-6.jpg"]
  },

  "madeleine": {
    name: "Madeleine",
    loc: "Paris 8e",
    type: "Rénovation & décoration",
    surface: "65 m²",
    style: "Contemporain élégant",
    fr: "Beiges dorés, bois chaleureux, ligne nette — un appartement où l'élégance ne se montre pas, elle se ressent.",
    en: "Golden beiges, warm wood, clean lines — an apartment where elegance doesn't show itself, it is felt.",
    cover: "img/id/madeleine.jpg",
    images: ["img/id/madeleine.jpg", "img/id/madeleine-2.jpg", "img/id/madeleine-3.jpg", "img/id/madeleine-4.jpg", "img/id/madeleine-5.jpg", "img/id/madeleine-6.jpg"]
  },

  "malesherbes": {
    name: "Malesherbes",
    loc: "Paris 17e",
    type: "Réaménagement familial",
    surface: "120 m²",
    style: "Contemporain familial",
    fr: "Les cloisons ont bougé. La lumière a suivi. Un appartement familial qui a trouvé sa vraie nature — généreux, ouvert, vivant.",
    en: "The walls moved. The light followed. A family apartment that found its true nature — generous, open, alive.",
    cover: "img/id/malesherbes.jpg",
    images: ["img/id/malesherbes.jpg", "img/id/malesherbes-2.jpg", "img/id/malesherbes-3.jpg", "img/id/malesherbes-4.jpg", "img/id/malesherbes-5.jpg", "img/id/malesherbes-6.jpg"]
  },

  "chatelet": {
    name: "Châtelet",
    loc: "Paris 1er",
    type: "Rénovation complète",
    surface: "85 m²",
    style: "Contemporain parisien",
    fr: "Au cœur de Paris, une intimité préservée. Élégance et praticité ne s'excluent pas — ici, elles coexistent naturellement.",
    en: "At the heart of Paris, an intimacy preserved. Elegance and practicality don't exclude one another — here, they coexist naturally.",
    cover: "img/id/chatelet.jpg",
    images: ["img/id/chatelet.jpg", "img/id/chatelet-2.jpg", "img/id/chatelet-3.jpg", "img/id/chatelet-4.jpg", "img/id/chatelet-5.jpg", "img/id/chatelet-6.jpg"]
  },

  "deux-pieces": {
    name: "Deux Pièces Chic",
    loc: "Paris",
    type: "Optimisation d'espace",
    surface: "45 m²",
    style: "Minimaliste chic",
    fr: "Quarante-cinq mètres carrés. Assez pour tout ce qui compte. Un espace repensé jusqu'au moindre centimètre — et qui donne l'impression de ne manquer de rien.",
    en: "Forty-five square metres. Enough for everything that matters. A space rethought to the last centimetre — and one that feels like nothing is missing.",
    cover: "img/id/deux-pieces.jpg",
    images: ["img/id/deux-pieces.jpg", "img/id/deux-pieces-2.jpg", "img/id/deux-pieces-3.jpg", "img/id/deux-pieces-4.jpg", "img/id/deux-pieces-5.jpg", "img/id/deux-pieces-6.jpg"]
  },

  "cannes": {
    name: "Cannes",
    loc: "Cannes",
    type: "Décoration & aménagement",
    surface: "100 m²",
    style: "Méditerranéen contemporain",
    fr: "La lumière du Sud comme architecte. Palettes claires, matières naturelles, ouvertures larges — un intérieur qui disparaît dans le paysage.",
    en: "Southern light as architect. Light palettes, natural materials, wide openings — an interior that dissolves into the landscape.",
    cover: "img/id/cannes.webp",
    images: ["img/id/cannes.webp", "img/id/cannes-2.webp", "img/id/cannes-3.webp", "img/id/cannes-4.webp", "img/id/cannes-5.webp", "img/id/cannes-6.webp"]
  },

  "iena": {
    name: "Iéna",
    loc: "Paris 16e",
    type: "Rénovation & décoration",
    surface: "140 m²",
    style: "Classique contemporain",
    fr: "Le classicisme parisien relu. Dans le 16e, un appartement qui garde la mémoire du lieu tout en vivant pleinement dans son époque.",
    en: "Parisian classicism reread. In the 16th, an apartment that holds the memory of the place while living fully in its own time.",
    cover: "img/id/iena.webp",
    images: ["img/id/iena.webp", "img/id/iena-2.webp", "img/id/iena-3.webp", "img/id/iena-4.webp", "img/id/iena-5.webp", "img/id/iena-6.webp"]
  },

  "toits-2": {
    name: "Sous les toits II",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "75 m²",
    style: "Contemporain poétique",
    fr: "Deuxième variation. Les combles, les poutres, la même géographie — et pourtant une atmosphère entièrement distincte. Le bois, les tissus, la lumière tamisée comme signature.",
    en: "A second variation. The attic, the beams, the same geography — and yet an entirely distinct atmosphere. Wood, textiles, filtered light as signature.",
    cover: "img/id/sous-les-toits-2.jpg",
    images: ["img/id/sous-les-toits-2.jpg", "img/id/toits-2-2.jpg", "img/id/toits-2-3.jpg", "img/id/toits-2-4.jpg", "img/id/toits-2-5.jpg", "img/id/toits-2-6.jpg"]
  },

  "toits-3": {
    name: "Sous les toits III",
    loc: "Paris",
    type: "Rénovation & aménagement",
    surface: "70 m²",
    style: "Contemporain singulier",
    fr: "Troisième voix. Même adresse, autre caractère. Ces appartements sous les toits de Paris ne se répètent pas — ils se répondent.",
    en: "A third voice. Same address, another character. These Parisian rooftop apartments don't repeat — they echo one another.",
    cover: "img/id/sous-les-toits-3.jpg",
    images: ["img/id/sous-les-toits-3.jpg", "img/id/toits-3-2.jpg", "img/id/toits-3-3.jpg", "img/id/toits-3-4.jpg", "img/id/toits-3-5.jpg", "img/id/toits-3-6.jpg"]
  },

  "workspace": {
    name: "Work Space",
    loc: "Paris",
    type: "Aménagement professionnel",
    surface: "80 m²",
    style: "Contemporain professionnel",
    fr: "Un espace de travail doit porter une image. Ici, la réception est un argument — sobre, précise, mémorable.",
    en: "A workspace must carry an image. Here, the reception space is a statement — sober, precise, memorable.",
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
    fr: "Une forme qui cherche sa place. Chaque table naît d'un dialogue entre la matière et l'espace qui l'accueille — unique, irremplaçable.",
    en: "A form that finds its place. Each table is born from a dialogue between material and the space that holds it — unique, irreplaceable.",
    tag: "Sur devis",
    images: ["img/meubles/tables-organiques-1.webp", "img/meubles/tables-organiques-2.webp"]
  },

  "bouclette-chairs": {
    name: "Fauteuils Bouclette",
    fr: "Le corps qui s'enfonce. La matière qui répond. Un fauteuil pensé comme un état.",
    en: "The body sinks in. The material responds. An armchair conceived as a state of being.",
    tag: "Sur devis",
    images: [
      "img/meubles/bouclette-chairs.webp",
      "img/meubles/bouclette-chairs-2.webp",
      "img/meubles/bouclette-chairs-3.webp",
      "img/meubles/bouclette-chairs-4.webp"
    ]
  },

  "suspension-feuilles-or": {
    name: "Suspension Feuilles d'Or",
    fr: "La lumière ne tombe pas — elle se pose. Chaque feuille est une décision, un angle de silence dans la partition de l'espace.",
    en: "Light doesn't fall — it settles. Each leaf is a decision, a note of silence in the score of the space.",
    tag: "Sur devis",
    images: ["img/meubles/suspension-feuilles-or.webp"]
  },

  "tourne-disques": {
    name: "Tourne-Disques",
    fr: "Un objet qui se mérite. La platine repensée comme une sculpture — autant à contempler qu'à entendre.",
    en: "An object that earns its place. The turntable rethought as sculpture — as much to contemplate as to hear.",
    tag: "Sur devis",
    images: ["img/meubles/tourne-disques.webp"]
  },

  "vasques-onyx": {
    name: "Vasques en Onyx",
    fr: "La salle de bain devient sanctuaire. L'onyx rose tremble sous la lumière — chaque veinure, une singularité irréductible.",
    en: "The bathroom becomes a sanctuary. Pink onyx trembles in the light — every vein, an irreducible singularity.",
    tag: "Sur devis",
    images: ["img/meubles/vasque.webp", "img/meubles/vasque-2.webp", "img/meubles/vasque-3.webp", "img/meubles/vasque-4.webp"]
  },

  "appliques-onix": {
    name: "Appliques Onix",
    fr: "La pierre qui devient lumière. L'onyx rétroéclairé diffuse une chaleur organique — comme si le mur respirait.",
    en: "Stone that becomes light. Backlit onyx diffuses an organic warmth — as if the wall itself breathes.",
    tag: "Sur devis",
    images: ["img/meubles/appliques-onix.webp"]
  },

  "bougeoires": {
    name: "Bougeoires & Accessoires",
    fr: "Ce sont les petits objets qui font les grandes atmosphères. Chaque pièce de table est une ponctuation dans la grammaire d'un espace.",
    en: "It's the small objects that make great atmospheres. Each table piece is punctuation in the grammar of a space.",
    tag: "Sur devis",
    images: ["img/meubles/bougeoires.webp"]
  },

  "tabourets": {
    name: "Tabourets & Tables d'appoint",
    fr: "Entre le meuble et la sculpture, la ligne est fine. Ces pièces habitent l'espace autant qu'elles le servent.",
    en: "Between furniture and sculpture, the line is thin. These pieces inhabit a space as much as they serve it.",
    tag: "Sur devis",
    images: [
      "img/meubles/tabourets.webp",
      "img/meubles/tabourets-2.webp",
      "img/meubles/tabourets-3.webp",
      "img/meubles/tabourets-4.webp"
    ]
  },

  "lit-signature": {
    name: "Lit Signature",
    fr: "La chambre commence ici. Un lit pensé comme une architecture — la tête de lit comme un horizon, le reste s'ordonne autour.",
    en: "The bedroom begins here. A bed conceived as architecture — the headboard as horizon, everything else falls into order around it.",
    tag: "Sur devis",
    images: ["img/meubles/smart-bed.webp"]
  }

};
