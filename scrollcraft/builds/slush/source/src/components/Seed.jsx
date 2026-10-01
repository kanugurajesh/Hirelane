// Act 6. The old way is on screen when the act arrives: twelve numbered words
// you were told never to lose. Holding still, they fall away one at a time and
// NO SEED PHRASE lands in the space they leave. All of it is CSS driven from
// the act's --sc-p, so there is nothing to keep in sync.
const WORDS = [
  'orbit', 'velvet', 'maple', 'harbor', 'cobalt', 'pickle',
  'lantern', 'frost', 'ember', 'canyon', 'tulip', 'quartz',
];

// Scatter the fall order so it reads as things dropping, not a wipe.
const ORDER = [3, 9, 0, 6, 11, 2, 7, 4, 10, 1, 8, 5];
const ROT = [-24, 18, -9, 30, -16, 12, 26, -30, 8, -20, 22, -6];

export default function Seed() {
  return (
    <section
      className="act seed"
      data-sc-act="pin"
      data-sc-span="2.4"
      data-ribbon="0.12:0.1 0.06:0.45 0.16:0.92"
    >
      <div data-sc-stage className="seed__stage">
        <div className="seed__old">
          <p className="seed__lead">
            Most wallets start with twelve words. Write them down, never lose them, never show anyone.
          </p>
          <ol className="seed__words" aria-label="An example seed phrase">
            {WORDS.map((w, i) => (
              <li
                key={w}
                className="seed__word"
                style={{ '--at': (0.1 + ORDER.indexOf(i) * 0.03).toFixed(2), '--rot': `${ROT[i]}deg` }}
              >
                <span className="seed__n">{i + 1}</span>
                {w}
              </li>
            ))}
          </ol>
        </div>

        <div className="seed__new">
          <h2 className="seed__title">No seed phrase.</h2>
          <p className="seed__sub">Sign in with your Google account and your wallet is ready.</p>
        </div>
      </div>
    </section>
  );
}
