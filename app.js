(function () {
  var M = window.MORPH;
  var $ = function (s) { return document.querySelector(s); };
  var esc = function (t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var isFile = function (u) { return /\.(mp4|webm|mov)(\?|$)/i.test(u); };
  var embed = function (u) {
    var m = u.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    return m ? "https://www.youtube-nocookie.com/embed/" + m[1] : u;
  };
  function player(url, poster, empty) {
    if (!url) return '<div class="slot player-slot">' + esc(empty) + "</div>";
    if (isFile(url)) {
      return '<video class="player" controls playsinline preload="metadata"' + (poster ? ' poster="' + esc(poster) + '"' : "") + ' src="' + esc(url) + '"></video>';
    }
    return '<iframe class="player" src="' + esc(embed(url)) + '" title="Video" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
  }

  /* ---------- modal ---------- */
  var modal = $("#modal");
  function openModal(html, wide) {
    $("#modal-body").innerHTML = html;
    $("#modal-card").className = wide ? "modal-card wide" : "modal-card";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.hidden = true;
    $("#modal-body").innerHTML = "";
    document.body.style.overflow = "";
  }
  modal.addEventListener("click", function (e) { if (e.target === modal) closeModal(); });
  $("#modal-x").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  /* ---------- inicio y serie ---------- */
  var S = M.SITE;
  $("#hero-title").textContent = S.name;
  $("#hero-sub").textContent = S.subtitle.toUpperCase();
  $("#hero-tag").textContent = S.tagline;
  
  if (S.heroImage) {
    $("#hero-hall").innerHTML = '<img src="' + esc(S.heroImage) + '" alt="" />';
    $("#inicio").classList.add("has-art");
  }

  $("#bands").innerHTML = M.BRACELETS.map(function (b) {
    return '<span class="band"><i style="background:' + b.hex + '"></i>' + esc(b.name.toUpperCase()) + "</span>";
  }).join("");
  $("#premise").innerHTML = S.premise.map(function (p) { return '<p class="lead">' + esc(p) + "</p>"; }).join("");
  $("#facts").innerHTML = S.facts.map(function (f) { return "<div><dt>" + esc(f.k) + "</dt><dd>" + esc(f.v) + "</dd></div>"; }).join("");
  $("#legend").innerHTML = M.BRACELETS.map(function (b) {
    return '<li><i style="background:' + b.hex + '"></i><strong>' + esc(b.name) + "</strong><span>" + esc(b.meaning || "Significado por completar") + "</span></li>";
  }).join("");
  $("#trailer-stage").innerHTML = player(M.TRAILER.url, M.TRAILER.poster, "Acá va el tráiler. Agrega el link en content.js");
  $("#foot-text").textContent = S.name + ": " + S.subtitle + ". Una serie de " + S.author + ".";
  $("#soc").innerHTML = S.social.map(function (s) {
    return '<a href="' + esc(s.href) + '" target="_blank" rel="noreferrer">' + esc(s.label) + "</a>";
  }).join("");

  /* ---------- personajes ---------- */
  $("#chars").innerHTML = M.GROUPS.map(function (g) {
    var cards = M.CHARACTERS.filter(function (c) { return c.group === g.id; }).map(function (c) {
      return '<button type="button" class="char" data-char="' + esc(c.id) + '">' +
        '<span class="char-img">' + (c.image ? '<img src="' + esc(c.image) + '" alt="' + esc(c.name) + '" loading="lazy" />' : '<span class="slot mono">' + esc(c.name.charAt(0)) + "</span>") + "</span>" +
        '<span class="char-name">' + esc(c.name) + "</span>" +
        (c.role ? '<span class="char-role">' + esc(c.role) + "</span>" : "") +
        (c.form ? '<span class="chip">' + esc(c.form) + "</span>" : "") +
        "</button>";
    }).join("");
    return '<div class="group"><h3 class="group-title">' + esc(g.title) + "</h3>" +
      (g.note ? '<p class="muted group-note">' + esc(g.note) + "</p>" : "") +
      '<div class="chars' + (g.compact ? " compact" : "") + '">' + cards + "</div></div>";
  }).join("");
  $("#chars").addEventListener("click", function (e) {
    var b = e.target.closest("[data-char]");
    if (!b) return;
    var c = M.CHARACTERS.filter(function (x) { return x.id === b.getAttribute("data-char"); })[0];
    if (!c) return;
    var chips = (c.role ? '<span class="chip">' + esc(c.role) + "</span>" : "") +
      (c.form ? '<span class="chip">' + esc(c.form) + "</span>" : "") +
      (c.age ? '<span class="chip">' + esc(c.age) + " años</span>" : "");
    openModal(
      '<div class="dossier"><div class="dossier-img">' + (c.image ? '<img src="' + esc(c.image) + '" alt="' + esc(c.name) + '" />' : '<div class="slot mono">' + esc(c.name.charAt(0)) + "</div>") + "</div>" +
      '<div class="dossier-txt"><h3>' + esc(c.name) + '</h3><p class="chips">' + chips + "</p>" +
      (c.teaser ? '<p class="lead">' + esc(c.teaser) + "</p>" : "") +
      (c.personality ? "<h4>Personalidad</h4><p>" + esc(c.personality) + "</p>" : "") +
      (c.story ? "<h4>Historia</h4><p>" + esc(c.story) + "</p>" : "") +
      (!c.teaser && !c.personality && !c.story ? '<p class="muted">Este expediente todavía está en revisión.</p>' : "") +
      "</div></div>", true);
  });

  /* ---------- el mundo ---------- */
  $("#world").innerHTML = M.WORLD.map(function (w) {
    return '<button type="button" class="world-card" data-world="' + esc(w.id) + '">' +
      '<span class="world-img">' + (w.image ? '<img src="' + esc(w.image) + '" alt="' + esc(w.title) + '" loading="lazy" />' : '<span class="slot">' + esc(w.title) + "</span>") + "</span>" +
      '<span class="world-title">' + esc(w.title) + "</span>" +
      (w.teaser ? '<span class="world-teaser">' + esc(w.teaser) + "</span>" : "") + "</button>";
  }).join("");
  $("#world").addEventListener("click", function (e) {
    var b = e.target.closest("[data-world]");
    if (!b) return;

  
    var w = M.WORLD.filter(function (x) { return x.id === b.getAttribute("data-world"); })[0];
    if (!w) return;
    openModal('<div class="vid"><h3>' + esc(w.title) + "</h3>" +
      (w.image ? '<img class="lightbox" src="' + esc(w.image) + '" alt="' + esc(w.title) + '" />' : "") +
      (w.teaser ? '<p class="lead">' + esc(w.teaser) + "</p>" : "") +
      (w.text ? "<p>" + esc(w.text) + "</p>" : '<p class="muted">Esta sección se está completando.</p>') + "</div>", true);
  });

  /* ---------- capitulos ---------- */
  var season = "t1";
  var SEASONS = [["t1", "Temporada 1"], ["extra", "Capítulo extra"], ["t2", "Temporada 2"]];
  function renderEps() {
    $("#tabs").innerHTML = SEASONS.map(function (s) {
      return '<button type="button" role="tab" aria-selected="' + (season === s[0]) + '" class="tab' + (season === s[0] ? " on" : "") + '" data-season="' + s[0] + '">' + s[1] + "</button>";
    }).join("");
    if (season === "t2") {
      $("#eps").innerHTML = '<div class="teaser"><h3>Corporación Morph: Apagón</h3><p>La Temporada 2 está en camino. Acá vas a encontrar cada capítulo apenas salga.</p></div>';
      return;
    }
    var list = season === "t1" ? M.EPISODES : [M.EXTRA];
    $("#eps").innerHTML = '<div class="eps">' + list.map(function (e) {
      var label = e.label || (e.n ? String(e.n).padStart(2, "0") : "EX");
      return '<button type="button" class="ep" data-ep="' + esc(e.id) + '">' +
        '<span class="ep-thumb">' + (e.poster ? '<img src="' + esc(e.poster) + '" alt="" loading="lazy" />' : '<span class="slot">' + esc(label) + "</span>") + "</span>" +
        '<span class="ep-title">' + esc(e.title) + "</span>" +
        (e.tag ? '<span class="chip">' + esc(e.tag) + "</span>" : "") +
        (!e.url ? '<span class="soon">Próximamente</span>' : "") + "</button>";
    }).join("") + "</div>";
  }
  renderEps();
  $("#tabs").addEventListener("click", function (e) {
    var b = e.target.closest("[data-season]");
    if (!b) return;
    season = b.getAttribute("data-season");
    renderEps();
  });
  $("#eps").addEventListener("click", function (e) {
    var b = e.target.closest("[data-ep]");
    if (!b) return;
    var all = M.EPISODES.concat([M.EXTRA]);
    var ep = all.filter(function (x) { return x.id === b.getAttribute("data-ep"); })[0];
    if (!ep) return;
    openModal('<div class="vid"><h3>' + esc(ep.title) + "</h3>" + player(ep.url, ep.poster, "Este capítulo estará disponible pronto.") +
      (ep.desc ? '<p class="muted">' + esc(ep.desc) + "</p>" : "") + "</div>", true);
  });

  /* ---------- galeria ---------- */
  if (M.GALLERY.length) {
    $("#gal").innerHTML = M.GALLERY.map(function (g, i) {
      return '<button type="button" class="gal-item" data-shot="' + i + '"><img src="' + esc(g.src) + '" alt="' + esc(g.caption) + '" loading="lazy" /></button>';
    }).join("");
    $("#gal").addEventListener("click", function (e) {
      var b = e.target.closest("[data-shot]");
      if (!b) return;
      var g = M.GALLERY[Number(b.getAttribute("data-shot"))];
      openModal('<img class="lightbox" src="' + esc(g.src) + '" alt="' + esc(g.caption) + '" />', true);
    });
  } else {
    var ph = "";
    for (var i = 0; i < 6; i++) ph += '<div class="slot gal-item">Espacio para tu imagen</div>';
    $("#gal").innerHTML = ph;
  }


  /* ---------- contenido extra ---------- */
  var extraFilter = "Todo";
  function renderExtras() {
    var items = M.EXTRAS || [];
    var cats = ["Todo"];
    items.forEach(function (x) { if (x.category && cats.indexOf(x.category) < 0) cats.push(x.category); });
    $("#extras-tabs").innerHTML = items.length ? cats.map(function (c) {
      return '<button type="button" role="tab" aria-selected="' + (extraFilter === c) + '" class="tab' + (extraFilter === c ? " on" : "") + '" data-cat="' + esc(c) + '">' + esc(c) + "</button>";
    }).join("") : "";
    if (!items.length) {
      var ph = "";
      for (var i = 0; i < 6; i++) ph += '<div class="ep"><span class="ep-thumb"><span class="slot">Contenido extra</span></span><span class="soon">Próximamente</span></div>';
      $("#extras-grid").innerHTML = ph;
      return;
    }
    $("#extras-grid").innerHTML = items.map(function (x, i) { return { x: x, i: i }; })
      .filter(function (o) { return extraFilter === "Todo" || o.x.category === extraFilter; })
      .map(function (o) {
        var x = o.x;
        var thumb = x.type === "image" ? x.src : x.poster;
        return '<button type="button" class="ep" data-extra="' + o.i + '">' +
          '<span class="ep-thumb">' + (thumb ? '<img src="' + esc(thumb) + '" alt="' + esc(x.title) + '" loading="lazy" />' : '<span class="slot">' + (x.type === "image" ? "FOTO" : "VIDEO") + "</span>") + "</span>" +
          '<span class="ep-title">' + esc(x.title) + "</span>" +
          (x.category ? '<span class="chip">' + esc(x.category) + "</span>" : "") + "</button>";
      }).join("");
  }
  renderExtras();
  $("#extras-tabs").addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat]");
    if (!b) return;
    extraFilter = b.getAttribute("data-cat");
    renderExtras();
  });
  $("#extras-grid").addEventListener("click", function (e) {
    var b = e.target.closest("[data-extra]");
    if (!b) return;
    var x = (M.EXTRAS || [])[Number(b.getAttribute("data-extra"))];
    if (!x) return;
    if (x.type === "image") {
      openModal('<img class="lightbox" src="' + esc(x.src) + '" alt="' + esc(x.title) + '" />' + (x.desc ? '<p class="muted">' + esc(x.desc) + "</p>" : ""), true);
    } else {
      openModal('<div class="vid"><h3>' + esc(x.title) + "</h3>" + player(x.url, x.poster, "Este video estará disponible pronto.") + (x.desc ? '<p class="muted">' + esc(x.desc) + "</p>" : "") + "</div>", true);
    }
  });




  /* ---------- música ---------- */
  var AUDIO = /\.(mp3|wav|ogg|m4a)(\?|$)/i;
  function musicPlayer(m) {
    if (!m.url) return '<div class="slot player-slot">Disponible pronto.</div>';
    var track = m.subs ? '<track kind="subtitles" src="' + esc(m.subs) + '" srclang="es" label="Español" default>' : "";
    if (AUDIO.test(m.url)) {
      return (m.poster ? '<img class="music-cover" src="' + esc(m.poster) + '" alt="' + esc(m.title) + '" />' : "") +
        '<audio class="music-audio" controls preload="metadata" src="' + esc(m.url) + '"></audio>';
    }
    if (isFile(m.url)) {
      return '<video class="player" controls playsinline preload="metadata"' + (m.poster ? ' poster="' + esc(m.poster) + '"' : "") + ' src="' + esc(m.url) + '">' + track + "</video>";
    }
    return player(m.url, m.poster, "");
  }
  var music = M.MUSIC || [];
  $("#music-grid").innerHTML = music.length ? music.map(function (m, i) {
    return '<button type="button" class="ep" data-music="' + i + '">' +
      '<span class="ep-thumb">' + (m.poster ? '<img src="' + esc(m.poster) + '" alt="" loading="lazy" />' : '<span class="slot">♪</span>') + "</span>" +
      '<span class="ep-title">' + esc(m.title) + "</span>" +
      (m.chapter ? '<span class="chip">' + esc(m.chapter) + "</span>" : "") + "</button>";
  }).join("") : '<div class="ep"><span class="ep-thumb"><span class="slot">Próximamente</span></span></div>';
  $("#music-grid").addEventListener("click", function (e) {
    var b = e.target.closest("[data-music]");
    if (!b) return;
    var m = music[Number(b.getAttribute("data-music"))];
    if (!m) return;
    openModal('<div class="vid"><h3>' + esc(m.title) + "</h3>" +
      (m.artist ? '<p class="muted music-by">' + esc(m.artist) + "</p>" : "") +
      musicPlayer(m) +
      (m.meaning ? '<h4 class="music-h">Significado</h4><p>' + esc(m.meaning) + "</p>" : "") +
      (m.lyrics ? '<h4 class="music-h">Letra</h4><p class="lyrics">' + esc(m.lyrics) + "</p>" : "") + "</div>", true);
  });





  /* ---------- zona +18 (solo aviso y enlace) ---------- */
  var A = M.ADULT || {};
  if (A.enabled) {
    $("#zona18").hidden = false;
    $("#nav-18").hidden = false;
    $("#adult-title").textContent = A.title || "Zona +18";
    $("#adult-text").textContent = A.text || "";
    $("#adult-open").addEventListener("click", function () {
      openModal('<div class="gate"><h3>Contenido para mayores de 18</h3><p>' + esc(A.warning) + '</p><div class="gate-btns"><button type="button" class="gate-yes" data-gate="yes">Tengo 18 años o más</button><button type="button" class="gate-no" data-gate="no">Salir</button></div></div>', false);
    });
    $("#modal-body").addEventListener("click", function (e) {
      var b = e.target.closest("[data-gate]");
      if (!b) return;
      if (b.getAttribute("data-gate") === "no") { closeModal(); return; }
      if (A.url) { window.open(A.url, "_blank", "noopener"); closeModal(); }
      else { $("#modal-body").innerHTML = '<div class="gate"><h3>Próximamente</h3><p>' + esc(A.missing) + "</p></div>"; }
    });
  }

  /* ---------- Aurora ---------- */
  var face = $("#aurora-face");
  var bubble = $("#aurora-bubble");
    if (S.auroraVideo) {
    face.classList.add("has-photo");
    face.innerHTML = '<video class="aurora-photo" src="' + esc(S.auroraVideo) + '" poster="' + esc(S.auroraFace || "") + '" autoplay loop muted playsinline></video>';
  } else if (S.auroraFace) {
    face.classList.add("has-photo");
    face.innerHTML = '<img class="aurora-photo" src="' + esc(S.auroraFace) + '" alt="Aurora" />';
  } else {
    face.innerHTML = '<span class="eye"></span><span class="eye"></span><span class="mouth"></span>';
  }
  bubble.textContent = M.AURORA_LINES.inicio;
  face.addEventListener("click", function () { bubble.hidden = !bubble.hidden; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && M.AURORA_LINES[en.target.id]) bubble.textContent = M.AURORA_LINES[en.target.id];
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    Object.keys(M.AURORA_LINES).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) io.observe(el);
    });
  }



})();
