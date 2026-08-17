/* =========================================================================
   ATLA — Points of View
   Character definitions + bending timelines.

   ELEMENT STATES
     'learning'   — has begun, not yet in command of it
     'mastered'   — in full command
     'renounced'  — has touched it and deliberately turned away from it

   `at` is a GLOBAL episode index (Book 1 = 1..20, Book 2 = 21..40,
   Book 3 = 41..61). A character's state for any element at episode i is the
   most recent timeline entry with at <= i.
   ========================================================================= */

window.ATLA = window.ATLA || {};

/* ---- Element palettes -------------------------------------------------- */
window.ATLA.ELEMENTS = {
  air: {
    name: 'Air',
    label: 'Airbending',
    core: '#f2a444',
    glow: '#ffd79a',
    deep: '#3a2408',
    ink: '#fff4e2'
  },
  water: {
    name: 'Water',
    label: 'Waterbending',
    core: '#3d8fc4',
    glow: '#a9e4f2',
    deep: '#07202f',
    ink: '#e6f7ff'
  },
  earth: {
    name: 'Earth',
    label: 'Earthbending',
    core: '#5f9e46',
    glow: '#cfe0a0',
    deep: '#132612',
    ink: '#f0f7e2'
  },
  fire: {
    name: 'Fire',
    label: 'Firebending',
    core: '#d23b2c',
    glow: '#ffb057',
    deep: '#2a0806',
    ink: '#ffeede'
  },
  blood: {
    name: 'Blood',
    label: 'Bloodbending',
    stateLabels: { renounced: 'refused' },
    core: '#8e2b3f',
    glow: '#e2909f',
    deep: '#1c060c',
    ink: '#ffe9ed'
  },
  /* Energybending sits behind everything rather than in a corner —
     it is not a fifth element, it is what the other four were made of. */
  energy: {
    name: 'Energy',
    label: 'Energybending',
    centre: true,
    core: '#cbb2f0',
    glow: '#f4ecff',
    deep: '#160f22',
    ink: '#faf6ff'
  },
  lightning: {
    name: 'Lightning',
    label: 'Lightning',
    stateLabels: { partial: 'redirection only' },
    core: '#7b8ff5',
    glow: '#dfe6ff',
    deep: '#0b0f26',
    ink: '#eef1ff'
  },
  /* Non-bending "elements" — used for characters whose identity isn't a
     bending art, so the page still has something true to theme itself on. */
  warrior: {
    name: 'Warrior',
    label: 'Water Tribe warrior',
    stateLabels: { mastered: 'non-bender' },
    core: '#5b83a8',
    glow: '#cfe3f0',
    deep: '#0b1826',
    ink: '#eaf3fa'
  }
};

/* Per-character colour overrides — Azula's fire is not Zuko's fire. */
window.ATLA.PALETTE_OVERRIDES = {
  azula: {
    fire: { core: '#3f6fe0', glow: '#9fd4ff', deep: '#080e26', ink: '#e7f0ff' }
  },
  iroh: {
    fire: { core: '#c8842c', glow: '#ffd98e', deep: '#2a1806', ink: '#fff3e0' }
  },
  zuko: {
    fire: { core: '#b2231d', glow: '#ff9b4a', deep: '#210604', ink: '#ffeadf' }
  },
  toph: {
    earth: { core: '#7e9c3f', glow: '#dfe3a8', deep: '#1c1c0b', ink: '#f6f7e4' }
  }
};

window.ATLA.characters = [
  {
    id: 'aang',
    name: 'Aang',
    epithet: 'The Last Airbender',
    house: 'Air Nomads · Southern Air Temple',
    blurb:
      'Twelve years old, and a hundred and twelve. Every element he learns is ' +
      'another piece of a duty he never asked for — so watch the corners of ' +
      'this page fill in as he stops running from it.',
    timeline: [
      { el: 'air',   at: 1,  state: 'mastered' },
      { el: 'water', at: 9,  state: 'learning' },
      { el: 'water', at: 20, state: 'mastered' },
      { el: 'fire',  at: 16, state: 'renounced' },
      { el: 'earth', at: 26, state: 'learning' },
      { el: 'earth', at: 33, state: 'mastered' },
      { el: 'fire',   at: 52, state: 'learning' },
      { el: 'fire',   at: 53, state: 'mastered' },
      { el: 'energy', at: 61, state: 'mastered' }
    ],
    marks: [
      { at: 1,  text: 'Airbending master — youngest in Air Nomad history' },
      { at: 18, text: 'Trains under Master Pakku' },
      { at: 26, text: 'Toph joins as his earthbending teacher' },
      { at: 29, text: 'Moves the rock — earthbends for the first time' },
      { at: 31, text: 'Loses control of the Avatar State over Appa' },
      { at: 39, text: 'Refuses to let go of Katara, and blocks the last chakra' },
      { at: 40, text: 'Killed by Azula\'s lightning, and brought back' },
      { at: 50, text: 'Reaches an empty throne room' },
      { at: 52, text: 'Takes his hunter as his firebending teacher' },
      { at: 53, text: 'Taught by the last two dragons that fire is life' },
      { at: 59, text: 'The lion turtle gives him a fourth option' },
      { at: 61, text: 'The last chakra unblocked; the Avatar State returns' }
    ]
  },
  {
    id: 'katara',
    name: 'Katara',
    epithet: 'The Last Southern Waterbender',
    house: 'Southern Water Tribe',
    blurb:
      'The only waterbender left in the South, self-taught from nothing. ' +
      'Book One is the story of her refusing to be told what a waterbender ' +
      'from her tribe is allowed to become.',
    timeline: [
      { el: 'water', at: 1,  state: 'learning' },
      { el: 'water', at: 18, state: 'mastered' },
      { el: 'blood', at: 48, state: 'renounced' }
    ],
    marks: [
      { at: 16, text: 'Discovers she can heal' },
      { at: 18, text: 'Fights Pakku to a standstill; named a master' },
      { at: 21, text: 'Given a vial of Spirit Oasis water by Pakku' },
      { at: 40, text: 'Spends the spirit water to bring Aang back' },
      { at: 48, text: 'Learns bloodbending under duress, and refuses to keep it' },
      { at: 56, text: 'Uses it once, on the man who killed her mother, and stops' },
      { at: 61, text: 'Defeats Azula, and heals the brother who took the bolt' }
    ]
  },
  {
    id: 'sokka',
    name: 'Sokka',
    epithet: 'The Boomerang Guy',
    house: 'Southern Water Tribe',
    blurb:
      'No bending. Not one drop. What he has instead is a plan, a boomerang, ' +
      'and a stubborn refusal to be the least useful person in the room — ' +
      'which is its own kind of arc.',
    timeline: [
      { el: 'warrior', at: 1, state: 'mastered' }
    ],
    marks: [
      { at: 4,  text: 'Trains with the Kyoshi Warriors' },
      { at: 15, text: 'Chooses the Avatar over his father\'s war' },
      { at: 30, text: 'Finds the date of the eclipse in Wan Shi Tong\'s library' },
      { at: 33, text: 'Brings down the drill' },
      { at: 39, text: 'Finds his father at Chameleon Bay' },
      { at: 44, text: 'Forges a sword from a meteorite, and is given a white lotus tile' },
      { at: 50, text: 'Runs the invasion he found in a library' },
      { at: 60, text: 'Takes the airship fleet' }
    ]
  },
  {
    id: 'toph',
    name: 'Toph Beifong',
    epithet: 'The Blind Bandit',
    house: 'Gaoling, Earth Kingdom',
    blurb:
      'The greatest earthbender alive, and in Book One nobody outside a ' +
      'wrestling ring knows she exists. Her episodes here are a life running ' +
      'in parallel to the Avatar\'s, waiting to collide with it.',
    timeline: [
      { el: 'earth', at: 1,  state: 'mastered' },
      { el: 'metal', at: 39, state: 'mastered' }
    ],
    marks: [
      { at: 26, text: 'Joins the Avatar as his earthbending teacher' },
      { at: 31, text: 'Blind on sand — the one ground that will not talk to her' },
      { at: 39, text: 'Invents metalbending' },
      { at: 51, text: 'Opens the Fire Lord\'s bunker with her bare hands' },
      { at: 60, text: 'Brings down an airship fleet from the outside' }
    ]
  },
  {
    id: 'zuko',
    name: 'Zuko',
    epithet: 'The Banished Prince',
    house: 'Fire Nation Royal Family',
    blurb:
      'Chasing the Avatar because catching him is the only door back into a ' +
      'home that threw him out. The tragedy of Book One is how close he ' +
      'comes to noticing he doesn\'t want to go through it.',
    timeline: [
      { el: 'fire',      at: 1,  state: 'mastered' },
      { el: 'lightning', at: 29, state: 'partial' }
    ],
    marks: [
      { at: 13, text: 'Fights as the Blue Spirit' },
      { at: 21, text: 'Cuts off his topknot' },
      { at: 27, text: 'Gives up his own name in the Earth Kingdom' },
      { at: 29, text: 'Iroh teaches him the redirection he invented from waterbenders' },
      { at: 37, text: 'Frees Appa, and drops the Blue Spirit into the lake' },
      { at: 40, text: 'Chooses Azula in the crystal catacombs' },
      { at: 51, text: 'Tells his father he is done, and redirects his lightning' },
      { at: 52, text: 'Joins the Avatar as his firebending teacher' },
      { at: 53, text: 'Relearns fire from the dragons, without the anger' },
      { at: 55, text: 'Gets Sokka his father back' },
      { at: 60, text: 'Takes the bolt meant for Katara' },
      { at: 61, text: 'Crowned Fire Lord' }
    ]
  },
  {
    id: 'iroh',
    name: 'Iroh',
    epithet: 'The Dragon of the West',
    house: 'Fire Nation Royal Family',
    blurb:
      'The most dangerous man on any ship he is standing on, doing an ' +
      'extraordinary impression of a retired old man who only wants tea. ' +
      'Every episode, he is teaching Zuko something Zuko is not ready to hear.',
    timeline: [
      { el: 'fire',      at: 1, state: 'mastered' },
      { el: 'lightning', at: 1, state: 'mastered' }
    ],
    marks: [
      { at: 1,  text: 'The only man alive who can both generate and redirect lightning' },
      { at: 12, text: 'Tells Zuko\'s crew about the Agni Kai he could not stop' },
      { at: 27, text: 'The siege of Ba Sing Se, and the son he lost there' },
      { at: 35, text: 'Sings to Lu Ten at a shrine on a hill above the city' },
      { at: 40, text: 'Taken prisoner in the city he once tried to take' },
      { at: 51, text: 'Walks out of his cell through the wall' },
      { at: 59, text: 'Grand Lotus — and refuses to be the one who ends it' },
      { at: 61, text: 'Retakes Ba Sing Se, and goes back to the tea shop' }
    ]
  },
  {
    id: 'azula',
    name: 'Azula',
    epithet: 'The Perfect Daughter',
    house: 'Fire Nation Royal Family',
    blurb:
      'She does not appear in Book One until its final minute — and that is ' +
      'the point. While her brother chases a ghost across the world, she is ' +
      'at home, becoming the reason he can never win.',
    timeline: [
      { el: 'fire',      at: 1,  state: 'mastered' },
      { el: 'lightning', at: 28, state: 'mastered' }
    ],
    marks: [
      { at: 1,  text: 'Blue fire — a prodigy\'s flame, hotter than her brother\'s' },
      { at: 20, text: 'Given her first hunt by Fire Lord Ozai' },
      { at: 23, text: 'Recruits Mai and Ty Lee' },
      { at: 28, text: 'Shoots her own uncle to cover an exit' },
      { at: 38, text: 'Walks into Ba Sing Se wearing a Kyoshi Warrior\'s face' },
      { at: 40, text: 'Takes the city, kills the Avatar, and gets her brother back' },
      { at: 45, text: 'Says out loud that her mother thought she was a monster' },
      { at: 55, text: 'Both of her friends choose someone else' },
      { at: 58, text: 'Crowned Fire Lord, and left behind' },
      { at: 61, text: 'Chained to a grate, screaming' }
    ]
  }
];

/* Extra sigil for Toph's metalbending, treated as an earth variant. */
window.ATLA.ELEMENTS.metal = {
  name: 'Metal',
  label: 'Metalbending',
  core: '#8a8f96',
  glow: '#dfe5ea',
  deep: '#14181c',
  ink: '#f2f5f7'
};
