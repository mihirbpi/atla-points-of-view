/* =========================================================================
   Character portraits.

   These are ORIGINAL stylised drawings, not the show's artwork — head-and-
   shoulders silhouettes built from each character's distinguishing features
   (Aang's arrow, Katara's loopies, Sokka's wolf tail, Toph's bun, Zuko's
   scar, Iroh's beard, Azula's crown), drawn in the same line-art register as
   the element sigils so the page reads as one system.

   Everything is drawn in `currentColor`; app.js tints it with the character's
   glow colour. Shared geometry lives in the P object below.

   TO USE YOUR OWN IMAGES INSTEAD: add `portraitSrc: 'img/aang.png'` to that
   character in characters.js and it will be used instead of the drawing. A
   transparent PNG or SVG, roughly 5:6 portrait, works best. Note that the
   single-file build inlines everything, so an external image would need to be
   a data: URL to survive the build.
   ========================================================================= */

window.ATLA = window.ATLA || {};

(function () {
  /* shared pieces — viewBox is 0 0 200 240 */
  var P = {
    head: '<path d="M100 44 C132 44 150 68 150 100 C150 134 128 158 100 158 ' +
          'C72 158 50 134 50 100 C50 68 68 44 100 44 Z" ' +
          'fill="currentColor" opacity=".34" stroke="currentColor" stroke-width="3"/>',
    neck: '<path d="M86 146 h28 v22 h-28 Z" fill="currentColor" opacity=".3"/>',
    bust: '<path d="M100 160 C60 160 34 196 30 240 L170 240 C166 196 140 160 100 160 Z" ' +
          'fill="currentColor" opacity=".52"/>',
    ears: '<ellipse cx="48" cy="104" rx="7" ry="12" fill="currentColor" opacity=".3"/>' +
          '<ellipse cx="152" cy="104" rx="7" ry="12" fill="currentColor" opacity=".3"/>',
    eyes: '<ellipse cx="80" cy="104" rx="9" ry="5" fill="currentColor" opacity=".8"/>' +
          '<ellipse cx="120" cy="104" rx="9" ry="5" fill="currentColor" opacity=".8"/>',
    /* blank, pupil-less — Toph */
    eyesBlind: '<ellipse cx="80" cy="104" rx="9" ry="5" fill="none" stroke="currentColor" ' +
               'stroke-width="2" opacity=".7"/>' +
               '<ellipse cx="120" cy="104" rx="9" ry="5" fill="none" stroke="currentColor" ' +
               'stroke-width="2" opacity=".7"/>',
    /* sharp, angled down toward the nose — Azula, Zuko */
    browsSharp: '<path d="M68 92 L92 97 L92 92 L68 87 Z" fill="currentColor" opacity=".75"/>' +
                '<path d="M132 92 L108 97 L108 92 L132 87 Z" fill="currentColor" opacity=".75"/>',
    browsSoft: '<path d="M70 90 q10 -5 20 -1 v4 q-10 -4 -20 1 Z" fill="currentColor" opacity=".6"/>' +
               '<path d="M130 90 q-10 -5 -20 -1 v4 q10 -4 20 1 Z" fill="currentColor" opacity=".6"/>',
    mouth: '<path d="M90 128 q10 5 20 0" fill="none" stroke="currentColor" ' +
           'stroke-width="2.5" stroke-linecap="round" opacity=".55"/>'
  };

  window.ATLA.PORTRAITS = {

    /* bald, arrow down the forehead, oversized ears, monk collar */
    aang:
      P.bust + P.neck + P.ears + P.head +
      '<path d="M100 108 L84 74 L94 74 L94 44 L106 44 L106 74 L116 74 Z" ' +
      'fill="currentColor" opacity=".85"/>' +
      P.eyes + P.mouth +
      '<path d="M74 168 L100 196 L126 168 L118 164 L100 182 L82 164 Z" ' +
      'fill="currentColor" opacity=".5"/>',

    /* hair down past the shoulders, two loopies framing the face, choker */
    katara:
      '<path d="M100 26 C146 26 166 60 162 106 C160 134 154 160 150 186 ' +
      'C144 152 152 116 142 88 C128 100 72 100 58 88 C48 116 56 152 50 186 ' +
      'C46 160 40 134 38 106 C34 60 54 26 100 26 Z" fill="currentColor" opacity=".5"/>' +
      P.bust + P.neck + P.head + P.browsSoft + P.eyes + P.mouth +
      '<path d="M62 84 C50 106 52 134 64 150 C58 128 60 104 70 90 Z" ' +
      'fill="currentColor" opacity=".62"/>' +
      '<path d="M138 84 C150 106 148 134 136 150 C142 128 140 104 130 90 Z" ' +
      'fill="currentColor" opacity=".62"/>' +
      '<path d="M64 62 C76 50 124 50 136 62 C122 74 78 74 64 62 Z" ' +
      'fill="currentColor" opacity=".55"/>' +
      '<rect x="82" y="170" width="36" height="8" rx="4" fill="currentColor" opacity=".7"/>',

    /* shaved sides, hair gathered into a wolf tail on top */
    sokka:
      P.bust + P.neck + P.head +
      '<path d="M94 42 C90 26 96 12 108 4 C102 18 102 30 108 42 Z" ' +
      'fill="currentColor" opacity=".7"/>' +
      '<path d="M58 74 C62 50 78 38 100 38 C122 38 138 50 142 74 ' +
      'C128 62 72 62 58 74 Z" fill="currentColor" opacity=".62"/>' +
      P.browsSoft + P.eyes + P.mouth +
      '<path d="M70 172 L100 186 L130 172" fill="none" stroke="currentColor" ' +
      'stroke-width="6" stroke-linecap="round" opacity=".5"/>',

    /* fringe, big bun with a headband, unfocused eyes */
    toph:
      '<path d="M100 22 C112 22 122 30 122 40 C122 50 112 58 100 58 ' +
      'C88 58 78 50 78 40 C78 30 88 22 100 22 Z" fill="currentColor" opacity=".55"/>' +
      '<path d="M96 20 C88 8 106 4 110 14 C104 12 98 14 96 20 Z" ' +
      'fill="currentColor" opacity=".5"/>' +
      P.bust + P.neck + P.head +
      '<path d="M54 82 C60 56 78 44 100 44 C122 44 140 56 146 82 ' +
      'C136 70 118 84 100 84 C82 84 64 70 54 82 Z" fill="currentColor" opacity=".6"/>' +
      '<rect x="52" y="70" width="96" height="9" rx="4.5" fill="currentColor" opacity=".72"/>' +
      P.eyesBlind + P.mouth,

    /* topknot, sharp brows, burn scar over the left eye */
    zuko:
      P.bust + P.neck + P.head +
      '<path d="M92 40 C90 22 100 12 110 8 C104 20 104 30 108 40 Z" ' +
      'fill="currentColor" opacity=".6"/>' +
      '<path d="M60 72 C66 50 80 40 100 40 C120 40 134 50 140 72 ' +
      'C126 62 74 62 60 72 Z" fill="currentColor" opacity=".55"/>' +
      P.browsSharp + P.eyes + P.mouth +
      '<path d="M60 88 C50 100 52 118 62 126 C74 124 82 112 80 98 ' +
      'C76 88 68 84 60 88 Z" fill="currentColor" opacity=".3" ' +
      'stroke="currentColor" stroke-width="2.5"/>',

    /* topknot bun, full beard and moustache, kind eyes */
    iroh:
      P.bust + P.neck +
      '<path d="M100 20 C112 20 120 27 120 36 C120 45 112 52 100 52 ' +
      'C88 52 80 45 80 36 C80 27 88 20 100 20 Z" fill="currentColor" opacity=".5"/>' +
      P.head +
      '<path d="M56 96 C56 74 74 48 100 48 C126 48 144 74 144 96 ' +
      'C134 78 116 68 100 68 C84 68 66 78 56 96 Z" fill="currentColor" opacity=".45"/>' +
      P.browsSoft + P.eyes +
      '<path d="M58 108 C58 148 76 174 100 174 C124 174 142 148 142 108 ' +
      'C136 132 122 140 100 140 C78 140 64 132 58 108 Z" ' +
      'fill="currentColor" opacity=".55"/>' +
      '<path d="M78 122 q22 -10 44 0 q-22 8 -44 0 Z" fill="currentColor" opacity=".7"/>',

    /* long hair, blunt bangs, crown topknot */
    azula:
      '<path d="M100 28 C144 28 164 62 160 106 C158 136 152 168 148 200 ' +
      'C142 162 150 118 140 90 C126 102 74 102 60 90 C50 118 58 162 52 200 ' +
      'C48 168 42 136 40 106 C36 62 56 28 100 28 Z" fill="currentColor" opacity=".55"/>' +
      '<path d="M88 30 C86 14 96 6 106 2 C100 12 98 22 102 30 Z" ' +
      'fill="currentColor" opacity=".6"/>' +
      '<path d="M84 16 L100 4 L116 16 L108 18 L100 12 L92 18 Z" ' +
      'fill="currentColor" opacity=".75"/>' +
      P.bust + P.neck + P.head +
      '<path d="M56 74 L144 74 L140 62 L60 62 Z" fill="currentColor" opacity=".62"/>' +
      P.browsSharp + P.eyes +
      '<path d="M90 130 q10 -4 20 0" fill="none" stroke="currentColor" ' +
      'stroke-width="2.5" stroke-linecap="round" opacity=".6"/>'
  };
})();
