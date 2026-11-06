import { createFileRoute } from '@tanstack/react-router'

import { DocSection, DocShell, DocTitle } from '@/components/site/DocShell'
import { MonitorTable, PowerList } from '@/components/site/Rider'
import { StagePlot } from '@/components/site/StagePlot'

export const Route = createFileRoute('/press/stage-plot')({
  head: () => ({ meta: [{ title: 'Stage Plot — Argentym' }] }),
  component: StagePlotDoc,
})

function StagePlotDoc() {
  return (
    <DocShell title="Stage Plot">
      <DocTitle kicker="Minimum stage 20′ × 16′ · 18 inputs · 4 mixes" title="Stage Plot" />
      <div className="mb-8 border border-border p-2">
        <StagePlot tone="print" />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <DocSection title="Monitors">
          <MonitorTable compact />
        </DocSection>
        <DocSection title="Power drops">
          <PowerList />
        </DocSection>
      </div>
    </DocShell>
  )
}
