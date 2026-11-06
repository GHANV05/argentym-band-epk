import { Link, createFileRoute } from '@tanstack/react-router'
import { FileText, Plug, Speaker } from 'lucide-react'

import {
  ContactList,
  EquipmentGrid,
  InputListTable,
  MonitorTable,
  PowerList,
} from '@/components/site/Rider'
import { Container, PageHeader, SectionHeading } from '@/components/site/Section'
import { StagePlot } from '@/components/site/StagePlot'
import { Button } from '@/components/ui/button'
import { backlineShareNote, hospitality, img, productionSummary } from '@/data/epk'

export const Route = createFileRoute('/_site/production')({
  head: () => ({ meta: [{ title: 'Production & Technical Rider — Argentym EPK' }] }),
  component: ProductionPage,
})

const jump = [
  ['stage-plot', 'Stage plot'],
  ['inputs', 'Input list'],
  ['equipment', 'Equipment'],
  ['power', 'Power'],
  ['monitors', 'Monitors'],
  ['contacts', 'Contacts'],
] as const

function ProductionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Production / technical rider"
        title="Advance sheet"
        intro="Everything your production team needs before load-in. Questions go straight to our production manager — contacts at the bottom."
        image={img('promo-live.png', 1800)}
      />

      {/* Summary + jump nav */}
      <section className="border-b border-border">
        <Container className="py-10">
          <dl className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
            {productionSummary.map((s) => (
              <div key={s.label} className="bg-background p-4">
                <dt className="eyebrow">{s.label}</dt>
                <dd className="mt-1 font-display text-xl font-extrabold uppercase">{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-2" aria-label="Rider sections">
              {jump.map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="border border-border px-3 py-1.5 font-tech text-xs tracking-[0.1em] uppercase hover:border-primary hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
            <Button asChild variant="outline" className="font-display font-bold tracking-[0.1em] uppercase">
              <Link to="/press/rider">
                <FileText /> Full rider (PDF)
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <section id="stage-plot" className="scroll-mt-20 py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading eyebrow="01" title="Stage plot">
            Minimum stage 20 ft wide × 16 ft deep. 8×8 drum riser preferred. Drawn from the audience's view.
          </SectionHeading>
          <div className="border border-border bg-card p-4">
            <StagePlot />
          </div>
        </Container>
      </section>

      <section id="inputs" className="scroll-mt-20 border-t border-border py-20">
        <Container>
          <SectionHeading eyebrow="02" title="Channel input list">
            18 inputs. Band carries its own lead vocal mic and bass DI.
          </SectionHeading>
          <InputListTable />
        </Container>
      </section>

      <section id="equipment" className="scroll-mt-20 border-t border-border py-20">
        <Container>
          <SectionHeading eyebrow="03" title="Equipment inventory">
            {backlineShareNote}
          </SectionHeading>
          <EquipmentGrid />
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="grid gap-14 lg:grid-cols-2">
          <div id="power" className="scroll-mt-20">
            <SectionHeading eyebrow="04" title="Power" className="mb-6" />
            <p className="mb-6 flex items-start gap-3 text-muted-foreground">
              <Plug className="mt-1 size-5 shrink-0 text-primary" />
              All drops grounded 120V on the same circuit as FOH audio where possible. No shared lighting circuits.
            </p>
            <PowerList />
          </div>
          <div id="monitors" className="scroll-mt-20">
            <SectionHeading eyebrow="05" title="Monitors" className="mb-6" />
            <p className="mb-6 flex items-start gap-3 text-muted-foreground">
              <Speaker className="mt-1 size-5 shrink-0 text-primary" />
              Four mixes minimum. Monitor engineer preferred for festival stages; FOH can run monitors for clubs.
            </p>
            <MonitorTable />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card/30 py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading eyebrow="06" title="Hospitality" className="mb-6" />
            <ul className="space-y-3">
              {hospitality.map((h) => (
                <li key={h} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">▪</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div id="contacts" className="scroll-mt-20">
            <SectionHeading eyebrow="07" title="Production contacts" className="mb-6" />
            <ContactList />
          </div>
        </Container>
      </section>
    </>
  )
}
