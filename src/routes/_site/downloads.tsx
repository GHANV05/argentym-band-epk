import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Download, FileText, Image as ImageIcon, LayoutGrid, ScrollText } from 'lucide-react'

import { Container, PageHeader, SectionHeading } from '@/components/site/Section'
import { band, img, members, photos } from '@/data/epk'

export const Route = createFileRoute('/_site/downloads')({
  head: () => ({ meta: [{ title: 'Downloads — Argentym EPK' }] }),
  component: DownloadsPage,
})

const documents = [
  {
    to: '/press/one-sheet',
    title: 'One-Page EPK',
    desc: 'Bio, highlights, lineup, releases, press quotes, and booking contacts on a single page.',
    meta: '1 page · Letter',
    icon: FileText,
  },
  {
    to: '/press/rider',
    title: 'Complete Technical Rider',
    desc: 'Stage plot, input list, monitors, power, backline inventory, hospitality, and contacts.',
    meta: '3 pages · Letter',
    icon: ScrollText,
  },
  {
    to: '/press/stage-plot',
    title: 'Stage Plot',
    desc: 'Top-down stage layout with monitor mixes and power drops, ready for your production team.',
    meta: '1 page · Letter',
    icon: LayoutGrid,
  },
] as const

function downloadBios() {
  const text = [
    `${band.name.toUpperCase()} — ${band.genre}`,
    `${band.hometown} · Est. ${band.formed}`,
    '',
    'SHORT BIO',
    band.shortBio,
    '',
    'LONG BIO',
    ...band.longBio.flatMap((p) => [p, '']),
    'LINEUP',
    ...members.map((m) => `${m.name} — ${m.role}`),
    '',
    `Booking: ${band.bookingEmail}`,
    `Press: ${band.pressEmail}`,
  ].join('\n')
  const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }))
  const a = document.createElement('a')
  a.href = url
  a.download = 'argentym-bios.txt'
  a.click()
  URL.revokeObjectURL(url)
}

function DownloadsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Downloadable documents"
        title="Press assets"
        intro="Print-ready documents and full-resolution photography, cleared for promotional use with credit."
        image={img('promo-band.png', 1800)}
      />

      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Documents" title="Press documents">
            Open a document to preview it, then use “Download PDF” to save a copy.
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {documents.map((d) => (
              <Link
                key={d.to}
                to={d.to}
                className="group flex flex-col border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary"
              >
                <d.icon className="size-9 text-primary" />
                <h3 className="mt-6 font-display text-3xl leading-none font-black uppercase">{d.title}</h3>
                <p className="mt-3 flex-1 text-muted-foreground">{d.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-tech text-xs text-muted-foreground">{d.meta}</span>
                  <span className="inline-flex items-center gap-1 font-display text-sm font-bold tracking-[0.1em] uppercase group-hover:text-primary">
                    Open <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={downloadBios}
            className="mt-6 flex w-full items-center justify-between border border-dashed border-border p-5 text-left transition hover:border-primary"
          >
            <span>
              <span className="block font-display text-xl font-extrabold uppercase">Bio pack (.txt)</span>
              <span className="text-sm text-muted-foreground">Short bio, long bio, and lineup as plain text for easy copy-paste.</span>
            </span>
            <Download className="size-5 text-primary" />
          </button>
        </Container>
      </section>

      <section className="border-t border-border bg-card/30 py-24">
        <Container>
          <SectionHeading eyebrow="High-resolution" title="Band photos">
            Full-resolution PNG files. Please credit as listed.
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure key={p.file} className="border border-border bg-background">
                <img
                  src={img(p.file, 700)}
                  alt={p.caption}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="flex items-center justify-between gap-4 p-4">
                  <span>
                    <span className="block text-sm font-medium">{p.caption}</span>
                    <span className="font-tech text-[11px] text-muted-foreground">
                      <ImageIcon className="mr-1 inline size-3" />
                      {p.credit} · PNG
                    </span>
                  </span>
                  <a
                    href={`/img/${p.file}`}
                    download={`argentym-${p.file}`}
                    aria-label={`Download ${p.caption}`}
                    className="grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Download className="size-4" />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
