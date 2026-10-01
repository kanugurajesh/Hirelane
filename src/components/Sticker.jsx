// A cut-out sticker from the shared symbol sheet. Position and motion come
// from the parent's CSS; this only sets size, rotation and an optional class.
export default function Sticker({ name, size, r = 0, className = '', style }) {
  return (
    <svg
      className={`sticker ${className}`.trim()}
      style={{ '--s': size, '--r': `${r}deg`, ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#st-${name}`} />
    </svg>
  );
}
