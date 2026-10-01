// Sticker symbol sheet, referenced everywhere via <use href="#st-name">.
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>

        <symbol id="st-rocket" viewBox="0 0 120 120">
          <path d="M60 8c22 14 30 38 26 64H34C30 46 38 22 60 8z" fill="#fb4903" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="60" cy="44" r="11" fill="#fff" stroke="#000" strokeWidth="3" />
          <path d="M34 60L18 82l18 4M86 60l16 22-18 4" fill="#ffd731" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <path d="M46 72h28l-4 14H50z" fill="#e9ccff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <path d="M52 88c0 10 8 20 8 24 0-4 8-14 8-24z" fill="#ffd731" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-coin" viewBox="0 0 120 120">
          <circle cx="62" cy="64" r="48" fill="#000" />
          <circle cx="58" cy="58" r="48" fill="#ffd731" stroke="#000" strokeWidth="3" />
          <circle cx="58" cy="58" r="34" fill="none" stroke="#000" strokeWidth="3" strokeDasharray="2 7" strokeLinecap="round" />
          <path d="M58 34c10 12 15 20 15 28a15 15 0 0 1-30 0c0-8 5-16 15-28z" fill="#4da2ff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-wallet" viewBox="0 0 120 120">
          <rect x="12" y="26" width="92" height="72" rx="16" fill="#5c4ade" stroke="#000" strokeWidth="3" />
          <path d="M22 26l52-14c6-2 10 2 10 8v6" fill="#e9ccff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <rect x="70" y="50" width="40" height="26" rx="13" fill="#fff" stroke="#000" strokeWidth="3" />
          <circle cx="83" cy="63" r="5" fill="#000" />
        </symbol>

        <symbol id="st-check" viewBox="0 0 120 120">
          <rect x="10" y="10" width="100" height="100" rx="32" fill="#55db9c" stroke="#000" strokeWidth="3" />
          <path d="M34 62l16 16 36-38" fill="none" stroke="#000" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-star" viewBox="0 0 120 120">
          <path d="M60 8l13 33 35 3-27 23 9 35-30-19-30 19 9-35-27-23 35-3z" fill="#e9ccff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-heart" viewBox="0 0 120 120">
          <path d="M60 104S12 76 12 42c0-16 12-28 27-28 10 0 17 5 21 12 4-7 11-12 21-12 15 0 27 12 27 28 0 34-48 62-48 62z" fill="#fb4903" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-lock" viewBox="0 0 120 120">
          <path d="M38 52V38a22 22 0 0 1 44 0v14" fill="none" stroke="#000" strokeWidth="10" strokeLinecap="round" />
          <rect x="20" y="50" width="80" height="60" rx="18" fill="#ffd731" stroke="#000" strokeWidth="3" />
          <circle cx="60" cy="76" r="7" fill="#000" />
          <path d="M60 80v14" stroke="#000" strokeWidth="6" strokeLinecap="round" />
        </symbol>
        <symbol id="st-plane" viewBox="0 0 120 120">
          <path d="M10 56L108 14 84 104 58 78z" fill="#fff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <path d="M58 78L108 14 40 66z" fill="#e9ccff" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
          <path d="M40 66l4 34 14-22" fill="#5c4ade" stroke="#000" strokeWidth="3" strokeLinejoin="round" />
        </symbol>

        <symbol id="st-swap" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="#ffd731" stroke="#000" strokeWidth="3" />
          <path d="M34 48h46l-12-12M86 72H40l12 12" fill="none" stroke="#000" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
      </defs>
    </svg>
  );
}
