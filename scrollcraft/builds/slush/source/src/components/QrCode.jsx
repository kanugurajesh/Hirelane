import { useEffect, useRef } from 'react';

// Decorative QR: three finder patterns, timing lines, seeded pseudo-random modules.
export default function QrCode({ size = 168, modules = 25 }) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = ref.current.getContext('2d');
    const N = modules;
    const cell = size / N;
    let seed = 1337;
    const rand = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    const inFinder = (x, y) => (x < 8 && y < 8) || (x >= N - 8 && y < 8) || (x < 8 && y >= N - 8);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#000';
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        if (inFinder(x, y)) continue;
        const on = x === 6 || y === 6 ? (x + y) % 2 === 0 : rand() > 0.52;
        if (on) ctx.fillRect(x * cell, y * cell, cell, cell);
      }
    }

    const finder = (fx, fy) => {
      [[0, 7, '#000'], [1, 5, '#fff'], [2, 3, '#000']].forEach(([o, w, c]) => {
        ctx.fillStyle = c;
        ctx.fillRect((fx + o) * cell, (fy + o) * cell, w * cell, w * cell);
      });
    };
    finder(0, 0);
    finder(N - 7, 0);
    finder(0, N - 7);
  }, [size, modules]);

  return <canvas ref={ref} width={size} height={size} role="img" aria-label="QR code to download Slush" />;
}
