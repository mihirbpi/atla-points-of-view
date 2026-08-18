/* =========================================================================
   Avatar — Points of View
   ========================================================================= */
(function () {
  'use strict';

  var D = window.ATLA;
  var EL = D.ELEMENTS;
  var CHARS = D.characters;
  var EPS = D.episodes;
  var BOOKS = D.books;

  /* ---- element sigils ------------------------------------------------- */

  var SIGILS = {
    air:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<g fill="currentColor">' +
      '<path d="M50 50 C50 27 63 13 82 17 C64 24 57 34 57 50 Z"/>' +
      '<path d="M50 50 C50 27 63 13 82 17 C64 24 57 34 57 50 Z" transform="rotate(120 50 50)"/>' +
      '<path d="M50 50 C50 27 63 13 82 17 C64 24 57 34 57 50 Z" transform="rotate(240 50 50)"/>' +
      '</g>' +
      '<circle cx="50" cy="50" r="5.5" fill="currentColor"/>',

    water:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M50 12 A38 38 0 0 1 50 88 A19 19 0 0 1 50 50 A19 19 0 0 0 50 12 Z" fill="currentColor"/>' +
      '<g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round">' +
      '<path d="M31 34 A22 22 0 0 0 31 66"/>' +
      '<path d="M22 27 A32 32 0 0 0 22 73"/>' +
      '</g>',

    earth:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M50 16 L84 50 L50 84 L16 50 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="50" r="11" fill="currentColor"/>' +
      '<g fill="currentColor">' +
      '<rect x="46" y="20" width="8" height="8" transform="rotate(45 50 24)"/>' +
      '<rect x="46" y="72" width="8" height="8" transform="rotate(45 50 76)"/>' +
      '<rect x="20" y="46" width="8" height="8" transform="rotate(45 24 50)"/>' +
      '<rect x="72" y="46" width="8" height="8" transform="rotate(45 76 50)"/>' +
      '</g>',

    fire:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M50 13 C61 31 76 39 69 57 C64 70 55 75 50 89 C45 75 36 70 31 57 C24 39 39 31 50 13 Z" fill="currentColor"/>' +
      '<g fill="currentColor" opacity=".75">' +
      '<path d="M26 42 C20 55 23 66 31 74 C24 62 25 52 26 42 Z"/>' +
      '<path d="M74 42 C80 55 77 66 69 74 C76 62 75 52 74 42 Z"/>' +
      '</g>',

    metal:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>' +
      '<path d="M50 33 L67 42.5 L67 57.5 L50 67 L33 57.5 L33 42.5 Z" fill="currentColor"/>',

    blood:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M50 16 C62 34 70 44 70 56 A20 20 0 0 1 30 56 C30 44 38 34 50 16 Z" fill="currentColor"/>' +
      '<g fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">' +
      '<path d="M24 30 A34 34 0 0 0 24 70"/><path d="M76 30 A34 34 0 0 1 76 70"/></g>',

    energy:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<circle cx="50" cy="50" r="31" fill="none" stroke="currentColor" stroke-width="1.4" opacity=".65"/>' +
      '<g stroke="currentColor" stroke-width="2.6" stroke-linecap="round">' + '<line x1="70.0" y1="50.0" x2="86.0" y2="50.0"/><line x1="64.1" y1="64.1" x2="75.5" y2="75.5"/><line x1="50.0" y1="70.0" x2="50.0" y2="86.0"/><line x1="35.9" y1="64.1" x2="24.5" y2="75.5"/><line x1="30.0" y1="50.0" x2="14.0" y2="50.0"/><line x1="35.9" y1="35.9" x2="24.5" y2="24.5"/><line x1="50.0" y1="30.0" x2="50.0" y2="14.0"/><line x1="64.1" y1="35.9" x2="75.5" y2="24.5"/>' + '</g>' +
      '<circle cx="50" cy="50" r="12" fill="currentColor"/>',

    lightning:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M58 10 L28 52 L46 52 L40 90 L72 46 L53 46 Z" fill="currentColor" ' +
      'stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',

    warrior:
      '<circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" stroke-width="2.4"/>' +
      '<path d="M19 80 C17 42 44 13 82 18 C56 29 41 49 40 78 Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="50" cy="50" r="4" fill="none" stroke="currentColor" stroke-width="2"/>'
  };

  function svg(elKey, color) {
    return '<svg viewBox="0 0 100 100" style="color:' + color + '" ' +
           'xmlns="http://www.w3.org/2000/svg">' + (SIGILS[elKey] || '') + '</svg>';
  }

  /* ---- palette -------------------------------------------------------- */

  function paletteFor(charId, elKey) {
    var base = EL[elKey] || EL.water;
    var ov = (D.PALETTE_OVERRIDES[charId] || {})[elKey];
    return ov ? Object.assign({}, base, ov) : base;
  }

  /* ---- bending state at an episode ------------------------------------ */

  /* Ordered list of elements this character has any relationship with at
     episode `idx`, in the order they entered their life. */
  function bendingAt(char, idx) {
    var seen = {};
    var order = [];
    char.timeline.forEach(function (t) {
      if (t.at > idx) return;
      if (!seen[t.el]) { seen[t.el] = { el: t.el, state: t.state, at: t.at }; order.push(t.el); }
      else if (t.at >= seen[t.el].at) { seen[t.el].state = t.state; }
    });
    return order.map(function (k) { return seen[k]; });
  }

  /* Milestones firing on this exact episode. */
  function milestonesAt(char, idx) {
    var out = [];
    char.timeline.forEach(function (t) {
      /* episode 1 is the baseline everyone starts from, not an event */
      if (t.at !== idx || idx === 1) return;
      var label = (EL[t.el] || {}).label || t.el;
      if (t.state === 'learning')  out.push(label + ' — begins');
      if (t.state === 'mastered')  out.push(label + ' — mastered');
      if (t.state === 'renounced') out.push(label + ' — touched, and refused');
      if (t.state === 'partial')   out.push(label + ' — redirection, but never generation');
    });
    (char.marks || []).forEach(function (m) {
      if (m.at === idx) out.push(m.text);
    });
    return out;
  }

  /* ---- state ---------------------------------------------------------- */

  var state = { charId: CHARS[0].id, epIdx: 1 };

  /* the synopsis disclosure stays open across episode changes once opened */
  var synopsisOpen = false;

  function char() {
    return CHARS.filter(function (c) { return c.id === state.charId; })[0] || CHARS[0];
  }
  function ep() {
    return EPS.filter(function (e) { return e.idx === state.epIdx; })[0] || EPS[0];
  }
  function epsForBook(b) {
    return EPS.filter(function (e) { return e.book === b; });
  }

  /* ---- theme ---------------------------------------------------------- */

  function applyTheme() {
    var c = char();
    var bend = bendingAt(c, state.epIdx);
    if (!bend.length) bend = [{ el: c.timeline[0].el, state: 'mastered' }];

    var primary = paletteFor(c.id, bend[0].el);
    var root = document.documentElement.style;
    /* base is the primary element's deep, pulled toward true black so the
       individual corner colours stay legible against it */
    var base = mix(primary.deep, '#05070a', 72);

    root.setProperty('--core', primary.core);
    root.setProperty('--glow', primary.glow);
    root.setProperty('--deep', base);
    root.setProperty('--ink', primary.ink);

    /* elements that live in the four corners, and the one that does not */
    var ring = bend.filter(function (s) { return !(EL[s.el] || {}).centre; });
    var mid  = bend.filter(function (s) { return  (EL[s.el] || {}).centre; })[0];
    if (!ring.length) ring = bend;

    var corners = document.querySelectorAll('.sigil');
    for (var i = 0; i < 4; i++) {
      var slot = ring[i % ring.length];
      var pal = paletteFor(c.id, slot.el);
      root.setProperty('--c' + i, mix(pal.core, base, weightFor(slot.state)));
      root.setProperty('--g' + i, pal.glow);

      var node = corners[i];
      node.innerHTML = svg(slot.el, pal.glow);
      node.className = 'sigil on ' + (slot.state === 'mastered' ? '' : slot.state);
      node.setAttribute('data-el', slot.el);
    }

    var midNode = corners[4];
    if (mid) {
      var midPal = paletteFor(c.id, mid.el);
      midNode.innerHTML = svg(mid.el, midPal.glow);
      midNode.className = 'sigil on';
      root.setProperty('--c4', mix(midPal.core, base, 30));
    } else {
      midNode.innerHTML = '';
      midNode.className = 'sigil';
      root.setProperty('--c4', 'transparent');
    }

    document.getElementById('brandMark').innerHTML = svg(bend[0].el, primary.glow);

    /* background portrait, tinted to whatever this character currently bends */
    var port = document.getElementById('portrait');
    if (c.portraitSrc) {
      port.innerHTML = '<img src="' + c.portraitSrc + '" alt="">';
    } else {
      port.innerHTML = '<svg viewBox="0 0 200 240" style="color:' + primary.glow + '" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        (D.PORTRAITS[c.id] || '') + '</svg>';
    }
    port.classList.remove('swap-in');
    void port.offsetWidth;
    port.classList.add('swap-in');
  }

  function weightFor(state) {
    return state === 'mastered' ? 62
         : state === 'learning' ? 34
         : state === 'partial'  ? 40 : 20;
  }

  /* crude hex mix so the wash sits on the page instead of glaring off it */
  function mix(hexA, hexB, pctA) {
    var a = hex(hexA), b = hex(hexB), p = pctA / 100;
    return 'rgb(' +
      Math.round(a[0] * p + b[0] * (1 - p)) + ',' +
      Math.round(a[1] * p + b[1] * (1 - p)) + ',' +
      Math.round(a[2] * p + b[2] * (1 - p)) + ')';
  }
  function hex(h) {
    if (h.indexOf('rgb') === 0) {
      return h.replace(/[^0-9,]/g, '').split(',').map(Number);
    }
    h = h.replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }

  /* ---- cast rail ------------------------------------------------------ */

  function renderCast() {
    var wrap = document.getElementById('cast');
    wrap.innerHTML = '';
    CHARS.forEach(function (c, i) {
      var first = bendingAt(c, state.epIdx)[0] || { el: c.timeline[0].el };
      var pal = paletteFor(c.id, first.el);
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'cast-btn';
      b.style.setProperty('--dot', pal.core);
      b.setAttribute('aria-pressed', c.id === state.charId ? 'true' : 'false');
      b.innerHTML =
        '<span class="cast-dot">' + svg(first.el, pal.ink) + '</span>' +
        '<span class="cast-text"><span class="cast-name">' + c.name + '</span></span>';
      b.title = c.name + ' — ' + c.epithet + '  (key ' + (i + 1) + ')';
      b.addEventListener('click', function () { go(c.id, state.epIdx); });
      wrap.appendChild(b);
    });
  }

  /* ---- book tabs + episode list --------------------------------------- */

  function renderTabs() {
    var wrap = document.getElementById('bookTabs');
    wrap.innerHTML = '';
    BOOKS.forEach(function (bk) {
      var t = document.createElement('button');
      t.type = 'button';
      t.className = 'book-tab';
      t.setAttribute('role', 'tab');
      t.setAttribute('aria-selected', ep().book === bk.id ? 'true' : 'false');
      t.disabled = !!bk.locked;
      var bpal = EL[bk.element] || EL.water;
      t.style.setProperty('--book', bpal.core);
      t.style.setProperty('--book-glow', bpal.glow);
      t.innerHTML =
        '<span class="book-sigil">' + svg(bk.element, bpal.ink) + '</span>' +
        '<span class="book-text"><b>' + (bk.short || bk.name) + '</b><i>' +
        (bk.locked ? 'soon' : bk.subtitle) + '</i></span>';
      if (!bk.locked) {
        t.addEventListener('click', function () { go(state.charId, epsForBook(bk.id)[0].idx); });
      }
      wrap.appendChild(t);
    });
  }

  function renderEpisodes() {
    var c = char();
    var list = document.getElementById('episodeList');
    var current = ep();
    list.innerHTML = '';
    epsForBook(current.book).forEach(function (e) {
      var entry = (D.pov[c.id] || {})[e.id] || {};
      var li = document.createElement('li');
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'ep-btn' + (entry.away ? ' is-away' : '');
      if (e.idx === state.epIdx) b.setAttribute('aria-current', 'true');
      var flag = milestonesAt(c, e.idx).length ? '<span class="flag"></span>' : '';
      b.innerHTML = '<span class="n">' + pad(e.num) + '</span>' +
                    '<span class="t">' + e.title + flag + '</span>';
      b.addEventListener('click', function () { go(c.id, e.idx); });
      li.appendChild(b);
      list.appendChild(li);
    });
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  /* ---- panel ---------------------------------------------------------- */

  function renderPanel() {
    var c = char(), e = ep();
    var book = BOOKS.filter(function (b) { return b.id === e.book; })[0];
    var entry = (D.pov[c.id] || {})[e.id];

    document.getElementById('epBook').textContent = book.name + ': ' + book.subtitle;
    document.getElementById('epNum').textContent = 'Chapter ' + e.num;
    document.getElementById('epTitle').textContent = e.title;
    document.getElementById('epLogline').textContent = e.logline;

    /* full plot synopsis — collapsed unless the reader has opened it */
    var syn = D.synopsis[e.id];
    var det = document.getElementById('synopsis');
    var body = document.getElementById('synopsisBody');
    if (syn) {
      det.hidden = false;
      det.open = synopsisOpen;
      body.innerHTML = paras(syn);
    } else {
      det.hidden = true;
      det.open = false;
      body.innerHTML = '';
    }

    document.getElementById('whoName').textContent = c.name;
    document.getElementById('whoEpithet').textContent = c.epithet + ' · ' + c.house;

    document.getElementById('whoBlurb').textContent = c.blurb || '';

    /* bending chips */
    var chips = document.getElementById('bending');
    chips.innerHTML = '';
    bendingAt(c, state.epIdx).forEach(function (s) {
      var pal = paletteFor(c.id, s.el);
      var meta = EL[s.el] || {};
      var d = document.createElement('span');
      d.className = 'chip state-' + s.state;
      d.style.setProperty('--chip', pal.core);
      var stateText = (meta.stateLabels || {})[s.state] || s.state;
      d.innerHTML = '<i>' + svg(s.el, pal.ink) + '</i>' +
                    '<b>' + (meta.name || s.el) + '</b><s>' + stateText + '</s>';
      chips.appendChild(d);
    });

    /* prose */
    var pov = document.getElementById('pov');
    if (!entry) {
      pov.className = 'pov is-away';
      pov.innerHTML = '<span class="away-tag">Not yet written</span>' +
        '<p>This chapter has not been written from ' + c.name + '’s side yet.</p>';
    } else if (entry.away) {
      pov.className = 'pov is-away';
      pov.innerHTML = '<span class="away-tag">Elsewhere in the world</span>' +
        paras(entry.text);
    } else {
      pov.className = 'pov';
      pov.innerHTML = paras(entry.text) +
        (entry.beat ? '<p class="beat"><span>What changes</span>' + entry.beat + '</p>' : '');
    }

    /* milestones */
    var ms = document.getElementById('milestones');
    ms.innerHTML = '';
    milestonesAt(c, state.epIdx).forEach(function (m) {
      var d = document.createElement('div');
      d.className = 'milestone';
      d.textContent = m;
      ms.appendChild(d);
    });

    /* stepper */
    var all = epsForBook(e.book);
    var pos = all.indexOf(e);
    var prev = all[pos - 1], next = all[pos + 1];
    setStep('prevBtn', 'prevTitle', prev);
    setStep('nextBtn', 'nextTitle', next);

    var panel = document.getElementById('panel');
    panel.classList.remove('swap');
    void panel.offsetWidth;
    panel.classList.add('swap');
  }

  /* entry text may be a single string or an array of paragraphs */
  function paras(text) {
    var list = Object.prototype.toString.call(text) === '[object Array]' ? text : [text];
    return list.map(function (t) { return '<p>' + t + '</p>'; }).join('');
  }

  function setStep(btnId, labelId, target) {
    var btn = document.getElementById(btnId);
    btn.disabled = !target;
    document.getElementById(labelId).textContent = target ? target.title : '—';
    btn.onclick = target ? function () { go(state.charId, target.idx); } : null;
  }

  /* ---- routing -------------------------------------------------------- */

  function go(charId, epIdx) {
    state.charId = charId;
    state.epIdx = epIdx;
    render();
    try { history.replaceState(null, '', '#' + charId + '/' + ep().id); } catch (err) {}
  }

  function readHash() {
    var h = (location.hash || '').replace('#', '');
    if (!h) return;
    var parts = h.split('/');
    var c = CHARS.filter(function (x) { return x.id === parts[0]; })[0];
    var e = EPS.filter(function (x) { return x.id === parts[1]; })[0];
    if (c) state.charId = c.id;
    if (e) state.epIdx = e.idx;
  }

  function render() {
    applyTheme();
    renderCast();
    renderTabs();
    renderEpisodes();
    renderPanel();
    /* keep the current episode visible in the rail without scrolling the page */
    var active = document.querySelector('.ep-btn[aria-current="true"]');
    var list = document.getElementById('episodeList');
    if (active) {
      /* .episodes is position:relative, so offsetTop is already list-relative */
      var top = active.offsetTop;
      var bottom = top + active.offsetHeight;
      if (top < list.scrollTop) list.scrollTop = top - 8;
      else if (bottom > list.scrollTop + list.clientHeight) {
        list.scrollTop = bottom - list.clientHeight + 8;
      }
    }
  }

  /* ---- keyboard ------------------------------------------------------- */

  document.addEventListener('keydown', function (evt) {
    if (evt.metaKey || evt.ctrlKey || evt.altKey) return;
    var tag = (evt.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    var all = epsForBook(ep().book);
    var pos = all.indexOf(ep());

    if (evt.key === 'ArrowRight' && all[pos + 1]) {
      evt.preventDefault(); go(state.charId, all[pos + 1].idx);
    } else if (evt.key === 'ArrowLeft' && all[pos - 1]) {
      evt.preventDefault(); go(state.charId, all[pos - 1].idx);
    } else if (/^[1-9]$/.test(evt.key) && CHARS[+evt.key - 1]) {
      evt.preventDefault(); go(CHARS[+evt.key - 1].id, state.epIdx);
    }
  });

  document.getElementById('synopsis').addEventListener('toggle', function () {
    synopsisOpen = this.open;
  });

  window.addEventListener('hashchange', function () { readHash(); render(); });

  readHash();
  render();
})();
