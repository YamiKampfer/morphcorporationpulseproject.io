// Portada animada: ADN que gira muy despacio, particulas y brillo. Sin imagenes.
(function () {
  var hero = document.getElementById("inicio");
  var canvas = document.getElementById("hero-canvas");
  if (!hero || !canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, t = 1.2, motes = [], running = false, visible = true, raf = 0;

  function size() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    motes = [];
    var n = Math.max(12, Math.round((W * H) / 24000));
    for (var i = 0; i < n; i++) {
      motes.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.3 + 0.3, v: Math.random() * 0.18 + 0.05, a: Math.random() * 0.45 + 0.15 });
    }
  }

  function helix(cx, top, bottom, amp, time, mult) {
    var steps = 80, turns = 2.3, a = [], b = [], i, p, ph, y, taper;
    for (i = 0; i <= steps; i++) {
      p = i / steps; y = top + p * (bottom - top);
      ph = p * turns * Math.PI * 2 + time;
      taper = Math.pow(Math.sin(p * Math.PI), 0.7);
      a.push({ x: cx + Math.sin(ph) * amp * taper, y: y, z: Math.cos(ph) });
      b.push({ x: cx - Math.sin(ph) * amp * taper, y: y, z: -Math.cos(ph) });
    }
    // peldaños
    for (i = 2; i < steps; i += 3) {
      var depth = (Math.abs(a[i].z) + 1) / 2;
      ctx.strokeStyle = "rgba(140,200,235," + (0.08 + 0.2 * depth) * mult + ")";
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.moveTo(a[i].x, a[i].y); ctx.lineTo(b[i].x, b[i].y); ctx.stroke();
    }
    // tramos de las dos hebras, ordenados por profundidad
    var segs = [];
    for (i = 0; i < steps; i++) {
      segs.push({ p: a[i], q: a[i + 1], z: (a[i].z + a[i + 1].z) / 2 });
      segs.push({ p: b[i], q: b[i + 1], z: (b[i].z + b[i + 1].z) / 2 });
    }
    segs.sort(function (m, n) { return m.z - n.z; });
    for (i = 0; i < segs.length; i++) {
      var s = segs[i], front = (s.z + 1) / 2;
      ctx.strokeStyle = "rgba(" + Math.round(120 + 100 * front) + "," + Math.round(170 + 70 * front) + ",235," + (0.25 + 0.65 * front) * mult + ")";
      ctx.lineWidth = 1.4 + front * 2.6;
      ctx.shadowColor = "rgba(110,185,255," + 0.55 * front * mult + ")";
      ctx.shadowBlur = front > 0.55 ? 14 : 0;
      ctx.beginPath(); ctx.moveTo(s.p.x, s.p.y); ctx.lineTo(s.q.x, s.q.y); ctx.stroke();
    }
    ctx.shadowBlur = 0;
    // destello en la base, como una chispa
    var g = ctx.createRadialGradient(cx, bottom, 0, cx, bottom, amp * 1.6);
    g.addColorStop(0, "rgba(160,215,255," + 0.45 * mult + ")");
    g.addColorStop(1, "rgba(160,215,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(cx - amp * 2, bottom - amp * 2, amp * 4, amp * 4);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var wide = W > 820;
    var cx = wide ? W * 0.76 : W * 0.5;
    var amp = Math.min(W, H) * (wide ? 0.16 : 0.2);
    var mult = wide ? 1 : 0.5;
    helix(cx, H * 0.07, H * 0.93, amp, t, mult);
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      ctx.fillStyle = "rgba(170,210,240," + m.a + ")";
      ctx.beginPath(); ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2); ctx.fill();
      if (!reduce) { m.y -= m.v; if (m.y < -4) { m.y = H + 4; m.x = Math.random() * W; } }
    }
  }

  function loop() {
    if (!running) return;
    t += 0.0045;           // velocidad del giro: bajala para que sea aun mas lento
    draw();
    raf = requestAnimationFrame(loop);
  }
  function start() { if (!running && !reduce && visible && !document.hidden) { running = true; raf = requestAnimationFrame(loop); } }
  function stop() { running = false; cancelAnimationFrame(raf); }

  size(); draw();
  window.addEventListener("resize", function () { size(); draw(); });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) start(); else stop(); }).observe(hero);
  }
  start();


  
})();











