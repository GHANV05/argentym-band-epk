import { Ticket } from 'lucide-react'

import type { Show } from '@/data/epk'
import { cn } from '@/lib/utils'

const statusLabel: Record<Show['status'], string> = {
  tickets: 'Tickets',
  'sold-out': 'Sold out',
  festival: 'Festival',
  'announce-soon': 'Details soon',
}

export function formatShowDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`)
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
    year: d.getFullYear(),
  }
}

export function ShowRow({ show }: { show: Show }) {
  const d = formatShowDate(show.date)

  return (
    <div className="grid grid-cols-[4.5rem_1fr] items-center gap-4 border-b border-border py-5 transition hover:bg-card/50 sm:grid-cols-[6rem_1fr_auto] sm:gap-6 sm:px-3">
      <div className="text-center leading-none">
        <p className="font-tech text-xs text-primary">{d.month}</p>
        <p className="font-display text-4xl font-black">{d.day}</p>
        <p className="font-tech text-[10px] text-muted-foreground">
          {d.weekday} {d.year}
        </p>
      </div>
      <div>
        <p className="font-display text-2xl font-extrabold uppercase">{show.venue}</p>
        <p className="text-muted-foreground">
          {show.city}
          {show.note && <span className="text-foreground/70"> · {show.note}</span>}
        </p>
      </div>
      <div className="col-span-2 sm:col-span-1">
        {show.status === 'tickets' && show.ticketUrl ? (
          <a
            href={show.ticketUrl}
            className="inline-flex h-10 items-center gap-2 border border-foreground/40 px-5 font-display text-sm font-bold tracking-[0.12em] uppercase transition hover:border-primary hover:bg-primary"
          >
            <Ticket className="size-4" /> Tickets
          </a>
        ) : (
          <span
            className={cn(
              'inline-flex h-10 items-center px-5 font-tech text-xs tracking-[0.15em] uppercase',
              show.status === 'sold-out' ? 'bg-primary/15 text-primary' : 'text-muted-foreground',
            )}
          >
            {statusLabel[show.status]}
          </span>
        )}
      </div>
    </div>
  )
}
