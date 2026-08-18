# Avatar — Points of View

An episode-by-episode retelling of *Avatar: The Last Airbender*, switchable by
character. Pick who you're following, walk the episode list, and the page
re-themes itself around whatever that person can bend at that point in the story.

**The whole series is written** — all 61 episodes × 7 characters, 427 point-of-view
entries plus a full plot synopsis for every episode. About 70,000 words.

---

## Running it

Open `dist/avatar-points-of-view.html` — it's a single self-contained file, no
server needed.

To work on the source, open `src/index.html` directly in a browser (all data is
loaded via `<script src>`, so `file://` works fine), then run:

```
python3 build.py
```

…to re-inline everything back into `dist/avatar-points-of-view.html`.

---

## Layout

```
src/
  index.html                 page shell
  styles.css                 all styling; theme comes from CSS custom properties
  app.js                     rendering, routing, theming, element sigils (inline SVG)
  data/
    characters.js            the 7 characters + their bending timelines + palettes
    episodes.js              episode index (global numbering across all 3 books)
    synopses-book1.js        full plot summary per episode, character-neutral
    synopses-book2.js
    synopses-book3.js
    portraits.js             original stylised character portraits (inline SVG)
    pov-book1-aang.js        one file per character, so entries stay easy to find
    pov-book1-katara.js
    pov-book1-sokka.js
    pov-book1-zuko.js
    pov-book1-iroh.js
    pov-book1-toph-azula.js  (neither appears in Book One; all "meanwhile" notes)
    pov-book2-aang.js        Book Two, one file per character
    pov-book2-katara.js
    pov-book2-sokka.js
    pov-book2-toph.js
    pov-book2-zuko.js
    pov-book2-iroh.js
    pov-book2-azula.js
    pov-book3-aang.js        Book Three, one file per character
    pov-book3-katara.js
    pov-book3-sokka.js
    pov-book3-toph.js
    pov-book3-zuko.js
    pov-book3-iroh.js
    pov-book3-azula.js
build.py                     inlines src/ into one HTML file
dist/                        the built single-file page
```

---

## The two layers

Each episode page has two kinds of writing, and they do different jobs.

The **synopsis** is what happened — character-neutral, chronological, complete
including the B-plots. It lives in `window.ATLA.synopsis` keyed by episode id,
and renders in a collapsed `<details>` under the logline so it never gets in the
way. Once opened it stays open as you move between episodes and characters, so
you can read the series straight through as a story if you want to. Roughly
160–310 words each.

The **point-of-view entry** is what it meant to one person, and assumes you
already know the plot. That is the layer everything else on the page is built
around.

---

## How the theming works

Every character has a `timeline` of element states keyed to a **global episode
index** (Book 1 = 1–20, Book 2 = 21–40, Book 3 = 41–61):

```js
timeline: [
  { el: 'air',   at: 1,  state: 'mastered' },
  { el: 'water', at: 9,  state: 'learning' },
  { el: 'water', at: 20, state: 'mastered' },
  { el: 'fire',  at: 16, state: 'renounced' }
]
```

States are `learning` (dashed chip, faint sigil), `mastered` (full), `partial`
(dotted — used for Zuko's lightning, which he can redirect but never generate),
and `renounced` (greyed, struck through — Aang's fire after *The Deserter*).

Three things are modelled as elements even though they are not one of the four:

- **Lightning** — Iroh and Azula carry it as a full second corner; Zuko picks up
  a dim third one in *Bitter Work* in the `partial` state, because he can
  redirect it and will never be able to generate it.
- **Blood** — Katara acquires it in *The Puppetmaster* permanently in the
  `renounced` state, so her page carries a greyed, struck-through corner for the
  rest of the series. It is the only thing that changes about her theme after
  Book One.
- **Energy** — flagged `centre: true` in the element table, which takes it out
  of the corner rotation entirely and renders it as a single large sigil behind
  the whole page plus a centre glow. Aang gets it in the last episode. This is
  why the four corners still read air / water / fire / earth in the finale
  rather than one of them being pushed out.

At any episode the app works out which elements are live, assigns them to the
four page corners in the order they entered that character's life, and sets
`--c0`…`--c3` plus `--core / --glow / --deep / --ink` on `:root`. Everything
else — background wash, panel glow, chips, buttons — reads from those variables,
so one assignment re-colours the whole page with a transition.

Single-element characters get their sigil in all four corners. Aang starts with
air in all four, picks up water at chapter 9, adds a greyed-out fire at 16, and
by chapter 20 has three distinct corners. Book Two adds earth; Book Three brings
fire back properly.

The book tabs are the one thing that ignores the character theme: each is
coloured by its own book's element (water blue, earth green, fire red) with a
matching sigil, so they stay a fixed landmark while everything around them
re-colours.

The background portrait is drawn from `portraits.js` and tinted with the
character's glow colour. These are **original drawings, not the show's art** —
head-and-shoulders silhouettes built from each character's identifying features.
They sit behind the content at low opacity with a stacked drop-shadow halo, so
they read against the bright warm themes (Aang, Iroh) as well as the dark ones.
To use your own images instead, add `portraitSrc: '...'` to a character in
`characters.js`; because the build inlines everything into one file, an external
image needs to be a `data:` URL to survive it.

Per-character colour overrides live in `PALETTE_OVERRIDES` — that's why Azula's
fire is blue, Iroh's is gold and Zuko's is crimson.

Sokka has no bending, so he's themed on a `warrior` pseudo-element (Water Tribe
steel-blue, boomerang sigil, chip reads "non-bender").

---

## Adding more

Nothing is missing, but the structure is open. To add a character, put an entry
in `characters.js` with a `timeline` and drop `pov-book<n>-<id>.js` files
alongside the others. To add episodes (the comics, *Korra*, whatever), append to
`episodes.js` with a new `book` id and keep the global `idx` running.

Book Two and Three POV files use `Object.assign(window.ATLA.pov.<id>, { … })`
rather than assigning the object outright, so each book adds to the same
character without clobbering the previous one. Follow that pattern.

Entry shape:

```js
'2x06': {
  text: [
    'First paragraph.',
    'Second paragraph.',
    'Third paragraph — 2 to 4 is the usual shape.'
  ],
  beat: 'One line on what changed for them.'
}
// or, when they're not in the episode:
'2x06': { away: true, text: ['Paragraph.', 'Paragraph.'] }
```

`text` accepts a plain string or an array of paragraphs; the array form is what
Book One uses. Entries run roughly 150–260 words for a character who is in the
episode, and 60–90 for a "meanwhile" note.

Milestones (`marks` in `characters.js`) fire on an exact episode index and show
as pills under the prose, plus a dot in the episode rail. Element state changes
generate their own milestone text automatically, so a `mark` should only say
something the state change does not.

---

## Where the writing came from

Every episode was checked against its recap before being written rather than
written from memory, which caught a handful of things that "everyone knows" and
are wrong — Katara discovers healing in *The Deserter*, not *The Waterbending
Scroll*; Pakku drops Aang as a student for teaching Katara in secret rather than
Aang nobly quitting; Iroh's Ba Sing Se backstory lands in *Zuko Alone*, not
*The Storm*.

Entries run 150–260 words for a character who is in the episode and 60–90 for a
"meanwhile" note. Characters who are absent are never hidden — the timeline
stays continuous, which is what makes Toph's twenty Book One notes and Azula's
Book Three isolation work.

## Keyboard

- `←` / `→` — previous / next episode
- `1`–`7` — switch character (order matches the rail)

The URL hash tracks state (`#zuko/1x13`), so any view is linkable.
