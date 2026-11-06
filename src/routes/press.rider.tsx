import { createFileRoute } from '@tanstack/react-router'

import { DocSection, DocShell, DocTitle } from '@/components/site/DocShell'
import {
  ContactList,
  EquipmentGrid,
  InputListTable,
  MonitorTable,
  PowerList,
} from '@/components/site/Rider'
import { StagePlot } from '@/components/site/StagePlot'
import { backlineShareNote, hospitality, productionSummary } from '@/data/epk'

export const Route = createFileRoute('/press/rider')({
  head: () => ({ meta: [{ title: 'Technical Rider — Argentym' }] }),
  component: Rider,
})

function Rider() {
  return (
    <DocShell title="Technical Rider">
      <DocTitle kicker="Production / technical rider" title="Technical Rider" />

      <DocSection title="Overview">
        <dl className="grid grid-cols-3 gap-px border border-border bg-border text-sm">
          {productionSummary.map((s) => (
            <div key={s.label} className="bg-background p-3">
              <dt className="eyebrow">{s.label}</dt>
              <dd className="font-medium">{s.value}</dd>
            </div>
          ))}
        </dl>
      </DocSection>

      <DocSection title="Stage plot">
        <div className="border border-border p-2">
          <StagePlot tone="print" />
        </div>
      </DocSection>

      <div className="break-before-page" />
      <DocSection title="Channel input list">
        <InputListTable compact />
      </DocSection>

      <DocSection title="Monitor mixes">
        <MonitorTable compact />
      </DocSection>

      <DocSection title="Power requirements">
        <PowerList />
      </DocSection>

      <div className="break-before-page" />
      <DocSection title="Equipment inventory">
        <p className="mb-3 text-sm text-muted-foreground">{backlineShareNote}</p>
        <EquipmentGrid compact />
      </DocSection>

      <DocSection title="Hospitality">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {hospitality.map((h) => (
            <li key={h}>▪ {h}</li>
          ))}
        </ul>
      </DocSection>

      <DocSection title="Production contacts">
        <ContactList compact />
      </DocSection>
    </DocShell>
  )
}
