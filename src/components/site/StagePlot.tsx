/**
 * Top-down stage plot, drawn from the audience's point of view (downstage at the bottom).
 * Stage Right (SR) is on the left of the drawing, Stage Left (SL) on the right.
 */
export function StagePlot({ tone = 'screen' }: { tone?: 'screen' | 'print' }) {
  const c =
    tone === 'print'
      ? { ink: '#111', soft: '#555', fill: '#f3f3f3', accent: '#6d28d9', stage: '#fff' }
      : {
          ink: 'var(--foreground)',
          soft: 'var(--muted-foreground)',
          fill: 'var(--secondary)',
          accent: 'var(--primary)',
          stage: 'var(--card)',
        }

  const label = {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11,
    fill: c.soft,
    letterSpacing: '0.08em',
  } as const
  const name = {
    fontFamily: 'Big Shoulders Display, sans-serif',
    fontSize: 18,
    fontWeight: 800,
    fill: c.ink,
    letterSpacing: '0.06em',
  } as const

  const amp = (x: number, y: number, w: number, title: string, sub: string) => (
    <g>
      <rect x={x} y={y} width={w} height={52} fill={c.fill} stroke={c.ink} strokeWidth={1.5} />
      <line x1={x} y1={y + 14} x2={x + w} y2={y + 14} stroke={c.ink} strokeWidth={1} />
      <text x={x + w / 2} y={y + 33} textAnchor="middle" style={{ ...label, fill: c.ink, fontWeight: 700 }}>
        {title}
      </text>
      <text x={x + w / 2} y={y + 46} textAnchor="middle" style={{ ...label, fontSize: 9 }}>
        {sub}
      </text>
    </g>
  )

  const wedge = (x: number, y: number, mix: number) => (
    <g>
      <path
        d={`M ${x - 28} ${y} L ${x + 28} ${y} L ${x + 20} ${y + 22} L ${x - 20} ${y + 22} Z`}
        fill={c.fill}
        stroke={c.ink}
        strokeWidth={1.5}
      />
      <text x={x} y={y + 15} textAnchor="middle" style={{ ...label, fill: c.ink, fontWeight: 700 }}>
        M{mix}
      </text>
    </g>
  )

  const performer = (x: number, y: number, who: string, role: string, mic = true) => (
    <g>
      {mic && (
        <g>
          <line x1={x} y1={y + 22} x2={x} y2={y + 52} stroke={c.ink} strokeWidth={1.5} />
          <circle cx={x} cy={y + 56} r={5} fill={c.accent} />
        </g>
      )}
      <circle cx={x} cy={y} r={22} fill="none" stroke={c.accent} strokeWidth={2.5} />
      <text x={x} y={y + 5} textAnchor="middle" style={{ ...name, fontSize: 14, fill: c.accent }}>
        {who.slice(0, 1)}
      </text>
      <text x={x} y={y - 32} textAnchor="middle" style={name}>
        {who.toUpperCase()}
      </text>
      <text x={x} y={y - 48} textAnchor="middle" style={label}>
        {role}
      </text>
    </g>
  )

  const power = (x: number, y: number) => (
    <g>
      <rect x={x - 9} y={y - 9} width={18} height={18} fill={c.stage} stroke={c.accent} strokeWidth={1.5} />
      <path d={`M ${x + 1} ${y - 6} L ${x - 4} ${y + 1} L ${x} ${y + 1} L ${x - 1} ${y + 6} L ${x + 4} ${y - 1} L ${x} ${y - 1} Z`} fill={c.accent} />
    </g>
  )

  return (
    <svg
      viewBox="0 0 800 540"
      role="img"
      aria-label="Argentym stage plot: drum riser upstage center, bass stage right, lead vocals center, lead guitar stage left, four monitor mixes."
      className="h-auto w-full"
    >
      <rect x={10} y={10} width={780} height={470} fill={c.stage} stroke={c.ink} strokeWidth={2} />
      <text x={400} y={30} textAnchor="middle" style={label}>
        UPSTAGE
      </text>
      <text x={24} y={250} style={label} transform="rotate(-90 24 250)" textAnchor="middle">
        STAGE RIGHT
      </text>
      <text x={776} y={250} style={label} transform="rotate(90 776 250)" textAnchor="middle">
        STAGE LEFT
      </text>

      {/* Backline */}
      {amp(50, 48, 110, 'AMPEG 8×10', 'SVT-CL · BASS')}
      {amp(190, 48, 110, 'ORANGE 4×12', 'ROCKERVERB · GTR 2')}
      {amp(630, 48, 110, 'MARSHALL 4×12', 'JCM800 · GTR 1')}

      {/* Drum riser */}
      <rect x={330} y={42} width={140} height={128} fill={c.fill} stroke={c.ink} strokeWidth={1.5} strokeDasharray="6 4" />
      <text x={400} y={58} textAnchor="middle" style={label}>
        RISER 8′×8′
      </text>
      <circle cx={400} cy={118} r={22} fill="none" stroke={c.ink} strokeWidth={1.5} />
      <circle cx={372} cy={96} r={11} fill="none" stroke={c.ink} strokeWidth={1.2} />
      <circle cx={432} cy={136} r={14} fill="none" stroke={c.ink} strokeWidth={1.2} />
      <circle cx={364} cy={130} r={10} fill="none" stroke={c.ink} strokeWidth={1.2} />
      <text x={400} y={123} textAnchor="middle" style={{ ...name, fontSize: 13 }}>
        KIT
      </text>
      <text x={400} y={190} textAnchor="middle" style={name}>
        DEX
      </text>
      <text x={400} y={205} textAnchor="middle" style={label}>
        DRUMS
      </text>
      {wedge(510, 120, 4)}
      <text x={510} y={158} textAnchor="middle" style={{ ...label, fontSize: 9 }}>
        DRUM FILL
      </text>
      {power(485, 60)}

      {/* Front line */}
      {performer(130, 300, 'Rook', 'BASS · BV')}
      {performer(400, 320, 'Cole', 'LEAD VOX · GTR 2')}
      {performer(670, 300, 'Mara', 'GTR 1 · BV')}

      <g>
        <rect x={170} y={330} width={44} height={22} fill={c.fill} stroke={c.ink} strokeWidth={1.2} />
        <text x={192} y={345} textAnchor="middle" style={{ ...label, fill: c.ink, fontSize: 9 }}>
          DI
        </text>
      </g>
      <g>
        <rect x={600} y={340} width={60} height={18} fill={c.fill} stroke={c.ink} strokeWidth={1.2} />
        <text x={630} y={353} textAnchor="middle" style={{ ...label, fill: c.ink, fontSize: 9 }}>
          PEDALS
        </text>
      </g>

      {power(90, 350)}
      {power(450, 350)}
      {power(710, 350)}

      {wedge(130, 420, 3)}
      {wedge(360, 430, 1)}
      {wedge(440, 430, 1)}
      {wedge(670, 420, 2)}

      <text x={400} y={472} textAnchor="middle" style={label}>
        DOWNSTAGE
      </text>

      {/* Audience + legend */}
      <text x={400} y={505} textAnchor="middle" style={{ ...name, fontSize: 14, fill: c.soft }}>
        ▼ AUDIENCE ▼
      </text>
      <g transform="translate(20 515)">
        <circle cx={6} cy={8} r={5} fill={c.accent} />
        <text x={16} y={12} style={{ ...label, fontSize: 10 }}>
          VOCAL MIC
        </text>
        <g transform="translate(110 0)">
          <rect x={0} y={1} width={14} height={14} fill={c.stage} stroke={c.accent} strokeWidth={1.5} />
          <text x={20} y={12} style={{ ...label, fontSize: 10 }}>
            POWER DROP
          </text>
        </g>
        <g transform="translate(230 0)">
          <path d="M 0 2 L 22 2 L 18 14 L 4 14 Z" fill={c.fill} stroke={c.ink} />
          <text x={28} y={12} style={{ ...label, fontSize: 10 }}>
            WEDGE / MIX #
          </text>
        </g>
      </g>
    </svg>
  )
}
