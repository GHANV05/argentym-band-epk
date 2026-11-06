import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { img } from "@/data/epk";

export function BookingCta() {
  return (
    <section className="violet grain duotone relative isolate overflow-hidden border-t-4 border-primary">
      <img
        src={img("live-crowd.png", 1800)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/60 to-background/80" />
      <Container className="py-28 text-center">
        <p className="inline-block rotate-[-3deg] bg-foreground px-4 py-1.5 font-tech text-xs font-bold tracking-[0.22em] text-brand uppercase shadow-[4px_4px_0_0_oklch(0.13_0.01_300)]">
          Now booking 2026–2027
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[0.95] font-black uppercase md:text-7xl">
          Put <span className="slab">Argentym</span> on your bill
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Clubs, theaters, festivals, and support slots. Fast advance, clear
          rider, full rooms.
        </p>
        <Button
          asChild
          size="lg"
          className="punk-shadow mt-10 h-14 rounded-none border-2 border-foreground px-10 font-display text-lg font-black tracking-[0.16em] uppercase"
        >
          <Link to="/shows" hash="booking">
            Book the Band <ArrowRight className="size-5" />
          </Link>
        </Button>
      </Container>
    </section>
  );
}
