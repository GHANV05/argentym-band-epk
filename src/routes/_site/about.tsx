import { createFileRoute } from '@tanstack/react-router'
import { Award } from 'lucide-react'

import { BookingCta } from '@/components/site/BookingCta'
import { Container, PageHeader, SectionHeading } from '@/components/site/Section'
import { band, img, members, notablePerformances, pressQuotes } from '@/data/epk'

export const Route = createFileRoute('/_site/about')({
  head: () => ({ meta: [{ title: 'About — Argentym EPK' }] }),
  component: About,
})

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the band"
        title="Forged in a foundry town"
        intro={band.shortBio}
        image={img('promo-alley.png', 1800)}
      />

      {/* Bios */}
      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr]">
          <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="border border-border bg-card p-6">
              <p className="eyebrow mb-3">Short bio · 50 words</p>
              <p className="text-lg leading-relaxed">{band.shortBio}</p>
              <CopyButton text={band.shortBio} />
            </div>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border">
              {[
                ['Formed', String(band.formed)],
                ['Based in', band.hometown],
                ['Members', String(members.length)],
                ['For fans of', band.style.soundsLike.slice(0, 2).join(', ')],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <dt className="eyebrow">{k}</dt>
                  <dd className="mt-1 font-display text-lg font-extrabold uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <article>
            <SectionHeading eyebrow="Long bio" title="The story" />
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85 first-letter:float-left first-letter:mr-3 first-letter:font-wordmark first-letter:text-7xl first-letter:leading-none first-letter:text-hot">
              {band.longBio.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <CopyButton text={band.longBio.join('\n\n')} label="Copy long bio" />
          </article>
        </Container>
      </section>

      {/* Musical style */}
      <section className="border-y border-border bg-card/40 py-24">
        <Container>
          <SectionHeading eyebrow="Musical style" title="How it sounds">
            {band.style.summary}
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {band.style.pillars.map((p, i) => (
              <div key={p.title} className="border-t-2 border-primary bg-background p-6">
                <p className="font-tech text-xs text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-2 font-display text-3xl font-black uppercase">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p className="eyebrow mb-4">For fans of</p>
            <div className="flex flex-wrap gap-2">
              {band.style.soundsLike.map((a) => (
                <span key={a} className="border border-border bg-background px-4 py-2 font-display text-lg font-bold uppercase">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Members */}
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Lineup" title="The band" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((m) => (
              <article key={m.name} className="group flex flex-col border border-border bg-card">
                <div className="violet grain relative grid aspect-[4/3] place-items-center overflow-hidden bg-secondary">
                  <span className="wordmark text-8xl opacity-80 transition group-hover:scale-110">{m.initials}</span>
                  <span className="chrome absolute inset-x-0 bottom-0 h-1.5" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-2xl font-black uppercase">{m.name}</h3>
                  <p className="font-tech text-xs tracking-[0.12em] text-hot uppercase">{m.role}</p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{m.bio}</p>
                  <p className="mt-4 border-t border-border pt-3 font-tech text-[11px] text-muted-foreground">{m.gear}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Notable performances */}
      <section className="border-t border-border py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Career highlights" title="Notable performances" />
            <ol className="relative border-l border-border">
              {notablePerformances.map((p) => (
                <li key={p.title} className="relative pb-8 pl-8 last:pb-0">
                  <span className="absolute top-1.5 -left-[5px] size-[9px] bg-primary" />
                  <p className="font-tech text-xs text-hot">{p.year}</p>
                  <p className="font-display text-2xl font-extrabold uppercase">{p.title}</p>
                  <p className="text-muted-foreground">{p.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6 lg:pt-28">
            {pressQuotes.map((q) => (
              <blockquote key={q.source} className="border border-border bg-card p-6">
                <Award className="mb-4 size-6 text-primary" />
                <p className="font-display text-3xl leading-tight font-extrabold uppercase">“{q.quote}”</p>
                <footer className="mt-3 font-tech text-xs text-muted-foreground">— {q.source}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <BookingCta />
    </>
  )
}

function CopyButton({ text, label = 'Copy short bio' }: { text: string; label?: string }) {
  return (
    <button
      type="button"
      onClick={async () => {
        const { toast } = await import('sonner')
        try {
          await navigator.clipboard.writeText(text)
          toast.success('Bio copied to clipboard')
        } catch {
          toast.error('Couldn’t copy. Select the text and copy it manually.')
        }
      }}
      className="mt-5 font-tech text-xs tracking-[0.12em] text-muted-foreground uppercase underline decoration-primary underline-offset-4 hover:text-foreground"
    >
      {label}
    </button>
  )
}
