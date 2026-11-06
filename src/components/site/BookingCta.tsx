import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { Container } from '@/components/site/Section'
import { Button } from '@/components/ui/button'
import { img } from '@/data/epk'

export function BookingCta() {
  return (
    <section className="grain relative isolate overflow-hidden border-t border-border">
      <img
        src={img('live-crowd.png', 1800)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/60 to-background/80" />
      <Container className="py-28 text-center">
        <p className="eyebrow">Now booking 2026–2027</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-[0.95] font-black uppercase md:text-7xl">
          Put Argentym on your bill
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Clubs, theaters, festivals, and support slots. Fast advance, clear rider, full rooms.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 h-14 px-10 font-display text-lg font-black tracking-[0.16em] uppercase shadow-[0_0_50px_-10px_var(--primary)]"
        >
          <Link to="/shows" hash="booking">
            Book the Band <ArrowRight className="size-5" />
          </Link>
        </Button>
      </Container>
    </section>
  )
}
