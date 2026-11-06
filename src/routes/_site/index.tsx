import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react'

import { Container, SectionHeading } from '@/components/site/Section'
import { VideoCard } from '@/components/site/Media'
import { ShowRow } from '@/components/site/ShowRow'
import { BookingCta } from '@/components/site/BookingCta'
import { Button } from '@/components/ui/button'
import { band, img, members, pressQuotes, releases, upcomingShows, videos } from '@/data/epk'

export const Route = createFileRoute('/_site/')({
  component: Home,
})

const sections = [
  { to: '/about', label: 'About the Band', blurb: 'Bios, sound, members, and career highlights.' },
  { to: '/media', label: 'Music & Media', blurb: 'Releases, live footage, press photos, socials.' },
  { to: '/shows', label: 'Shows & Booking', blurb: 'Tour dates, venue history, booking inquiries.' },
  { to: '/production', label: 'Technical Rider', blurb: 'Stage plot, input list, backline, power.' },
  { to: '/downloads', label: 'Downloads', blurb: 'One-sheet, full rider, stage plot, hi-res photos.' },
] as const

function Home() {
  const latest = releases[0]

  return (
    <>
      {/* Hero */}
      <section className="grain relative isolate flex min-h-[calc(100svh-4rem)] items-end overflow-hidden">
        <img
          src={img('hero.png', 2000)}
          srcSet={`${img('hero.png', 900)} 900w, ${img('hero.png', 1400)} 1400w, ${img('hero.png', 2000)} 2000w`}
          sizes="100vw"
          alt="Argentym, a four-piece rock band, in a smoke-filled warehouse lit in red"
          className="absolute inset-0 -z-20 size-full object-cover object-[70%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" />

        <Container className="w-full pt-24 pb-16 md:pb-24">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-foreground/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" /> {band.hometown}
              </span>
              <span className="h-px w-6 bg-primary" aria-hidden />
              <span>Est. {band.formed}</span>
            </p>
            <h1 className="wordmark text-[clamp(5rem,16vw,12rem)] drop-shadow-[0_6px_30px_rgba(0,0,0,0.8)]">
              {band.name}
            </h1>
            <p className="mt-4 font-display text-2xl font-extrabold tracking-[0.12em] text-primary uppercase md:text-3xl">
              {band.genre}
            </p>
            <p className="mt-6 max-w-xl text-xl text-foreground/85 md:text-2xl">{band.tagline}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 font-display text-lg font-black tracking-[0.16em] uppercase shadow-[0_0_50px_-10px_var(--primary)]"
              >
                <Link to="/shows" hash="booking">
                  Book the Band <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 border-foreground/30 bg-transparent px-8 font-display text-base font-bold tracking-[0.14em] uppercase"
              >
                <Link to="/media">Hear the music</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick facts */}
      <section className="border-y border-border bg-card/50">
        <Container className="grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            ['Genre', 'Dark Rock / Punk'],
            ['Hometown', band.hometown],
            ['Lineup', `${members.length} piece`],
            ['Latest', `${latest.title} (${latest.year})`],
          ].map(([k, v]) => (
            <div key={k} className="px-2 py-6 md:px-6">
              <p className="eyebrow">{k}</p>
              <p className="mt-1 font-display text-xl font-extrabold uppercase md:text-2xl">{v}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Intro */}
      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="The band" title="Old ghosts. New noise." />
            <p className="text-xl leading-relaxed text-foreground/85">{band.shortBio}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {band.genreTags.map((t) => (
                <span key={t} className="border border-border px-3 py-1 font-tech text-xs tracking-[0.12em] uppercase">
                  {t}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 font-display text-lg font-bold tracking-[0.12em] uppercase hover:text-primary"
            >
              Read the full story <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={img('promo-band.png', 900)}
              alt="Argentym members posed against a graffiti wall at night"
              loading="lazy"
              className="tape w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-xs border border-border bg-background p-5 md:block">
              <p className="font-display text-2xl leading-tight font-extrabold uppercase">“{pressQuotes[0].quote}”</p>
              <p className="mt-2 font-tech text-xs text-muted-foreground">— {pressQuotes[0].source}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured video */}
      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Live" title="See it loud" className="mb-0" />
            <Link to="/media" className="mb-2 inline-flex items-center gap-2 font-tech text-sm hover:text-primary">
              All media <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-10">
            <VideoCard video={videos[0]} large />
          </div>
        </Container>
      </section>

      {/* Next shows */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="On the road" title="Next shows" className="mb-0" />
            <Link to="/shows" className="mb-2 inline-flex items-center gap-2 font-tech text-sm hover:text-primary">
              <CalendarDays className="size-4" /> Full tour calendar
            </Link>
          </div>
          <div className="mt-10 border-t border-border">
            {upcomingShows.slice(0, 3).map((s) => (
              <ShowRow key={s.date + s.venue} show={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Press kit sections */}
      <section className="border-t border-border py-24">
        <Container>
          <SectionHeading eyebrow="Press kit" title="Everything a promoter needs" />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {sections.map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                className="group flex min-h-48 flex-col justify-between bg-background p-6 transition hover:bg-card"
              >
                <span className="font-tech text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-display text-2xl font-black uppercase">{s.label}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">{s.blurb}</span>
                  <ArrowRight className="mt-4 size-5 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <BookingCta />
    </>
  )
}
