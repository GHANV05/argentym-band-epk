import { Link } from '@tanstack/react-router'
import { ArrowLeft, Printer } from 'lucide-react'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { band } from '@/data/epk'

/**
 * Wraps a printable press document. On screen it shows a toolbar and a paper sheet;
 * "Download PDF" opens the browser print dialog, where "Save as PDF" produces the file.
 */
export function DocShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-svh bg-secondary print:bg-white">
      <div className="sticky top-0 z-10 border-b-4 border-primary bg-background/90 backdrop-blur print:hidden">
        <div className="mx-auto flex h-14 max-w-[8.5in] items-center justify-between gap-4 px-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/downloads">
              <ArrowLeft /> Downloads
            </Link>
          </Button>
          <p className="hidden font-tech text-xs tracking-[0.12em] text-muted-foreground uppercase sm:block">{title}</p>
          <Button size="sm" onClick={() => window.print()} className="font-display font-bold tracking-[0.1em] uppercase">
            <Printer /> Download PDF
          </Button>
        </div>
      </div>
      <p className="mx-auto max-w-[8.5in] px-4 pt-4 text-center font-tech text-[11px] text-muted-foreground print:hidden">
        Tip: choose “Save as PDF” as the destination in the print dialog.
      </p>
      <article className="paper mx-auto my-6 max-w-[8.5in] p-[0.6in] shadow-2xl print:m-0 print:max-w-none print:p-0 print:shadow-none">
        {children}
        <footer className="mt-10 flex justify-between border-t border-border pt-3 font-tech text-[10px] text-muted-foreground">
          <span>
            {band.name} · {title}
          </span>
          <span>
            {band.bookingEmail} · argentym-epk.netlify.app
          </span>
        </footer>
      </article>
    </div>
  )
}

export function DocTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-8 flex items-end justify-between gap-6 border-b-4 border-foreground pb-4">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h1 className="font-display text-5xl leading-none font-black uppercase">{title}</h1>
      </div>
      <p className="font-wordmark text-5xl leading-none text-primary">{band.name}</p>
    </header>
  )
}

export function DocSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-8 break-inside-avoid">
      <h2 className="mb-3 font-display text-xl font-black tracking-[0.08em] uppercase">
        <span className="text-primary">/</span> {title}
      </h2>
      {children}
    </section>
  )
}
