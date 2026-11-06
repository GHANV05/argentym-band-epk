import { createFileRoute } from '@tanstack/react-router'
import { Mail, Quote } from 'lucide-react'

import { BookingForm } from '@/components/site/BookingForm'
import { Container, PageHeader, SectionHeading } from '@/components/site/Section'
import { ShowRow } from '@/components/site/ShowRow'
import { band, img, testimonials, upcomingShows, venueHistory } from '@/data/epk'

export const Route = createFileRoute('/_site/shows')({
  head: () => ({ meta: [{ title: 'Shows & Booking — Argentym EPK' }] }),
  component: ShowsPage,
})

function ShowsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Shows & bookings"
        title="Live dates"
        intro="Upcoming shows, the rooms Argentym has played, and a direct line to book the band."
        image={img('live-crowd.png', 1800)}
      />

      {/* Upcoming */}
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Upcoming" title="Tour dates" />
          <div className="border-t border-border">
            {upcomingShows.map((s) => (
              <ShowRow key={s.date + s.venue} show={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* Venue history */}
      <section className="border-y border-border bg-card/30 py-24">
        <Container>
          <SectionHeading eyebrow="Venue history" title="Rooms we've filled" />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {venueHistory.map((v) => (
              <div key={v.venue} className="bg-background p-5">
                <p className="font-display text-xl font-extrabold uppercase">{v.venue}</p>
                <p className="text-sm text-muted-foreground">{v.city}</p>
                <p className="mt-3 font-tech text-xs text-primary">CAP {v.capacity}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="From the industry" title="What promoters say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.org} className="flex flex-col border border-border bg-card p-6">
                <Quote className="size-7 text-primary" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-lg font-extrabold uppercase">{t.org}</p>
                  <p className="font-tech text-xs text-muted-foreground">{t.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Booking */}
      <section id="booking" className="scroll-mt-16 border-t border-border bg-card/40 py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading eyebrow="Booking inquiry" title="Book the band">
              Tell us about your room, your bill, and your date. We reply to every inquiry within two business days.
            </SectionHeading>
            <div className="space-y-4">
              <a
                href={`mailto:${band.bookingEmail}`}
                className="flex items-center gap-4 border border-border bg-background p-5 transition hover:border-primary"
              >
                <Mail className="size-6 text-primary" />
                <span>
                  <span className="eyebrow block">Booking email</span>
                  <span className="font-display text-xl font-extrabold">{band.bookingEmail}</span>
                </span>
              </a>
              <a
                href={`mailto:${band.pressEmail}`}
                className="flex items-center gap-4 border border-border bg-background p-5 transition hover:border-primary"
              >
                <Mail className="size-6 text-muted-foreground" />
                <span>
                  <span className="eyebrow block">Press & interviews</span>
                  <span className="font-display text-xl font-extrabold">{band.pressEmail}</span>
                </span>
              </a>
            </div>
          </div>
          <div className="border border-border bg-background p-6 md:p-10">
            <BookingForm />
          </div>
        </Container>
      </section>
    </>
  )
}
