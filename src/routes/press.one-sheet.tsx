import { createFileRoute } from '@tanstack/react-router'

import { DocSection, DocShell } from '@/components/site/DocShell'
import {
  band,
  img,
  members,
  notablePerformances,
  pressQuotes,
  productionSummary,
  releases,
  socials,
} from '@/data/epk'

export const Route = createFileRoute('/press/one-sheet')({
  head: () => ({ meta: [{ title: 'One-Page EPK — Argentym' }] }),
  component: OneSheet,
})

function OneSheet() {
  return (
    <DocShell title="One-Page EPK">
      <header className="relative -mx-[0.6in] -mt-[0.6in] mb-8 overflow-hidden bg-black text-white print:mx-0 print:mt-0">
        <img src={img('hero.png', 1400, 'jpg')} alt="Argentym press photo" className="h-64 w-full object-cover object-[70%_center] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-y-0 left-0 flex flex-col justify-end p-[0.6in] print:p-6">
          <p className="wordmark text-7xl">{band.name}</p>
          <p className="mt-2 font-display text-lg font-extrabold tracking-[0.12em] text-[#e0473b] uppercase">{band.genre}</p>
          <p className="font-tech text-xs text-white/70">
            {band.hometown} · Est. {band.formed}
          </p>
        </div>
      </header>

      <p className="mb-8 font-display text-2xl leading-tight font-extrabold uppercase">{band.tagline}</p>

      <div className="grid grid-cols-[1.6fr_1fr] gap-8">
        <div>
          <DocSection title="Bio">
            <div className="space-y-3 text-[13px] leading-relaxed">
              {band.longBio.slice(0, 3).map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </DocSection>
          <DocSection title="Highlights">
            <ul className="space-y-1 text-[13px]">
              {notablePerformances.map((p) => (
                <li key={p.title}>
                  <span className="font-tech text-xs text-primary">{p.year}</span> — <strong>{p.title}</strong>,{' '}
                  {p.detail}
                </li>
              ))}
            </ul>
          </DocSection>
        </div>
        <div>
          <DocSection title="Lineup">
            <ul className="space-y-2 text-[13px]">
              {members.map((m) => (
                <li key={m.name}>
                  <strong className="font-display text-base uppercase">{m.name}</strong>
                  <br />
                  <span className="text-muted-foreground">{m.role}</span>
                </li>
              ))}
            </ul>
          </DocSection>
          <DocSection title="Releases">
            <ul className="space-y-1 text-[13px]">
              {releases.map((r) => (
                <li key={r.title}>
                  <strong>{r.title}</strong> — {r.type}, {r.year}
                </li>
              ))}
            </ul>
          </DocSection>
          <DocSection title="For fans of">
            <p className="text-[13px]">{band.style.soundsLike.join(' · ')}</p>
          </DocSection>
          <DocSection title="Press">
            {pressQuotes.map((q) => (
              <p key={q.source} className="mb-2 text-[13px] italic">
                “{q.quote}” <span className="not-italic text-muted-foreground">— {q.source}</span>
              </p>
            ))}
          </DocSection>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 border-t border-border pt-6">
        <DocSection title="Production">
          <ul className="space-y-0.5 text-[12px]">
            {productionSummary.slice(0, 4).map((s) => (
              <li key={s.label}>
                <span className="text-muted-foreground">{s.label}:</span> {s.value}
              </li>
            ))}
          </ul>
        </DocSection>
        <DocSection title="Booking">
          <p className="text-[12px]">
            {band.bookingEmail}
            <br />
            Press: {band.pressEmail}
          </p>
        </DocSection>
        <DocSection title="Online">
          <ul className="text-[12px]">
            {socials.slice(0, 4).map((s) => (
              <li key={s.label}>
                {s.label}: {s.handle}
              </li>
            ))}
          </ul>
        </DocSection>
      </div>
    </DocShell>
  )
}
