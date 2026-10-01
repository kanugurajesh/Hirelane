import { forwardRef } from 'react';

// One inflated ribbon stroke: shadow side, body, highlight. All three share a
// path and a dash, so setting --draw (0..1) on the group draws the whole tube.
const Tube = forwardRef(function Tube({ d, width }, ref) {
  return (
    <g ref={ref} className="tube" style={{ '--w': width }}>
      <path className="tube__shade" d={d} pathLength="1"
        style={{ transform: `translate(${width * 0.05}px, ${width * 0.13}px)` }} />
      <path className="tube__body" d={d} pathLength="1" />
      <path className="tube__light" d={d} pathLength="1"
        style={{ transform: `translate(${-width * 0.06}px, ${-width * 0.22}px)` }} />
    </g>
  );
});

export default Tube;
