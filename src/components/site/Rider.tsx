import { equipment, inputList, monitorMixes, powerRequirements, productionContacts } from '@/data/epk'
import { cn } from '@/lib/utils'

const th = 'px-3 py-2 text-left font-tech text-[11px] font-bold tracking-[0.12em] text-muted-foreground uppercase'
const td = 'px-3 py-2 align-top'

export function InputListTable({ compact }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto border border-border">
      <table className={cn('w-full border-collapse', compact ? 'text-xs' : 'text-sm')}>
        <thead className="bg-secondary">
          <tr>
            <th className={th}>Ch</th>
            <th className={th}>Source</th>
            <th className={th}>Mic / DI</th>
            <th className={th}>Stand</th>
            <th className={th}>Insert</th>
          </tr>
        </thead>
        <tbody>
          {inputList.map((row) => (
            <tr key={row.ch} className="border-t border-border break-inside-avoid">
              <td className={cn(td, 'font-tech font-bold text-primary')}>{String(row.ch).padStart(2, '0')}</td>
              <td className={cn(td, 'font-medium')}>{row.source}</td>
              <td className={td}>{row.mic}</td>
              <td className={cn(td, 'text-muted-foreground')}>{row.stand}</td>
              <td className={cn(td, 'text-muted-foreground')}>{row.insert}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function MonitorTable({ compact }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto border border-border">
      <table className={cn('w-full border-collapse', compact ? 'text-xs' : 'text-sm')}>
        <thead className="bg-secondary">
          <tr>
            <th className={th}>Mix</th>
            <th className={th}>Performer</th>
            <th className={th}>Type</th>
            <th className={th}>In the mix</th>
          </tr>
        </thead>
        <tbody>
          {monitorMixes.map((m) => (
            <tr key={m.mix} className="border-t border-border">
              <td className={cn(td, 'font-tech font-bold text-primary')}>M{m.mix}</td>
              <td className={cn(td, 'font-medium')}>{m.who}</td>
              <td className={td}>{m.type}</td>
              <td className={cn(td, 'text-muted-foreground')}>{m.wants}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PowerList() {
  return (
    <ul className="divide-y divide-border border border-border">
      {powerRequirements.map((p) => (
        <li key={p.location} className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm">
          <span className="font-medium">{p.location}</span>
          <span className="font-tech text-xs text-muted-foreground">{p.need}</span>
        </li>
      ))}
    </ul>
  )
}

export function EquipmentGrid({ compact }: { compact?: boolean }) {
  return (
    <div className={cn('grid gap-4', compact ? 'grid-cols-2' : 'sm:grid-cols-2')}>
      {equipment.map((e) => (
        <div key={e.owner} className="border border-border p-4 break-inside-avoid">
          <p className="font-display text-lg font-extrabold uppercase">{e.owner}</p>
          <ul className={cn('mt-2 space-y-1 text-muted-foreground', compact ? 'text-xs' : 'text-sm')}>
            {e.items.map((i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">▪</span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function ContactList({ compact }: { compact?: boolean }) {
  return (
    <div className={cn('grid gap-4', compact ? 'grid-cols-3' : 'md:grid-cols-3')}>
      {productionContacts.map((c) => (
        <div key={c.role} className="border border-border p-4">
          <p className="eyebrow">{c.role}</p>
          <p className="mt-1 font-display text-xl font-extrabold uppercase">{c.name}</p>
          <a href={`mailto:${c.email}`} className="block font-tech text-xs hover:text-primary">
            {c.email}
          </a>
          <p className="font-tech text-xs text-muted-foreground">{c.phone}</p>
        </div>
      ))}
    </div>
  )
}
