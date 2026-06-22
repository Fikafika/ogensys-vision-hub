/**
 * Animated constellation network used in the hero.
 * Pure SVG + CSS animation — lightweight, no deps.
 */
export function HeroConstellation() {
  // Node coordinates within a 400x400 viewBox.
  const nodes: { x: number; y: number; r: number; accent?: boolean; delay: number }[] = [
    { x: 80, y: 120, r: 5, delay: 0 },
    { x: 160, y: 70, r: 4, accent: true, delay: 0.4 },
    { x: 250, y: 130, r: 6, delay: 0.8 },
    { x: 330, y: 90, r: 4, delay: 1.2 },
    { x: 200, y: 200, r: 7, accent: true, delay: 1.6 },
    { x: 110, y: 260, r: 4, delay: 2.0 },
    { x: 290, y: 240, r: 5, delay: 2.4 },
    { x: 360, y: 200, r: 4, delay: 2.8 },
    { x: 170, y: 330, r: 5, accent: true, delay: 3.2 },
    { x: 270, y: 320, r: 4, delay: 3.6 },
  ];
  // Edges as pairs of node indexes
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [2, 4], [1, 4],
    [4, 5], [4, 6], [3, 7], [6, 7], [5, 8],
    [4, 8], [8, 9], [6, 9], [0, 5],
  ];

  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto" role="img" aria-label="Network constellation">
      <defs>
        <radialGradient id="hc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="170" fill="url(#hc-glow)" className="hc-pulse-bg" />
      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <line
            key={i}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1}
            className="hc-line"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        );
      })}
      {nodes.map((n, i) => (
        <g key={i} className="hc-node" style={{ animationDelay: `${n.delay}s` }}>
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r + 4}
            fill={n.accent ? "#38bdf8" : "#ffffff"}
            opacity={0.18}
            className="hc-halo"
            style={{ animationDelay: `${n.delay}s` }}
          />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.accent ? "#38bdf8" : "#ffffff"}
          />
        </g>
      ))}
    </svg>
  );
}