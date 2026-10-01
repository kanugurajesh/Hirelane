// Geometry for the scroll-drawn ribbon.

// Smooth path through points (uniform Catmull-Rom, converted to cubic Béziers).
export function smoothPath(pts) {
  if (pts.length < 2) return '';
  const f = (n) => n.toFixed(1);
  let d = `M${f(pts[0][0])},${f(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
  }
  return d;
}

// A single curl: the ribbon swings round a circle centred on (cx, cy) while
// still travelling downward, so it crosses itself once like a looped ribbon.
export function loopPoints(cx, cy, r, dir = 1) {
  const out = [];
  for (let k = 0; k <= 8; k++) {
    const t = (k / 8) * Math.PI * 2;
    out.push([cx + dir * r * Math.sin(t), cy - r * Math.cos(t) + (r * 1.4 * k) / 8]);
  }
  return out;
}

// Reads data-ribbon="x:y x:y:L x:y:R" off each section. x is a fraction of the
// page width, y a fraction of the section's height. L / R make a loop there.
// data-ribbon-sm overrides the route on phones, where copy spans the width.
export function collectPoints(main, width, loopR) {
  const pts = [];
  const narrow = width < 700;
  main.querySelectorAll('[data-ribbon]').forEach((sec) => {
    const top = sec.offsetTop;
    const h = sec.offsetHeight;
    const route = (narrow && sec.getAttribute('data-ribbon-sm')) || sec.getAttribute('data-ribbon');
    route
      .trim()
      .split(/\s+/)
      .forEach((tok) => {
        const [xs, ys, loop] = tok.split(':');
        const x = parseFloat(xs) * width;
        const y = top + parseFloat(ys) * h;
        if (loop) pts.push(...loopPoints(x, y - loopR * 0.7, loopR, loop === 'L' ? -1 : 1));
        else pts.push([x, y]);
      });
  });
  return pts;
}

// For each sampled length, the furthest-down point reached so far. The pen
// draws up to the first sample that passes the pen's y, so loops complete
// before the ribbon moves on.
export function buildLookup(path, step = 6) {
  const total = path.getTotalLength();
  const n = Math.max(2, Math.ceil(total / step));
  const maxY = new Float32Array(n + 1);
  let m = -Infinity;
  for (let i = 0; i <= n; i++) {
    const y = path.getPointAtLength((i / n) * total).y;
    if (y > m) m = y;
    maxY[i] = m;
  }
  return { n, maxY };
}

export function drawnFraction(lut, penY) {
  const { n, maxY } = lut;
  let lo = 0;
  let hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (maxY[mid] < penY) lo = mid + 1;
    else hi = mid;
  }
  return lo / n;
}

// Sets how much of a tube is drawn. A zero-length dash still paints its round
// caps as a dot, so an undrawn tube is hidden outright.
export function setDraw(tube, f) {
  tube.style.setProperty('--draw', f.toFixed(4));
  tube.style.visibility = f < 0.002 ? 'hidden' : '';
}
