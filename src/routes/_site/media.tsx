import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Download, Music2 } from 'lucide-react'

import { PhotoGallery, ReleaseCard, VideoCard } from '@/components/site/Media'
import { Container, PageHeader, SectionHeading } from '@/components/site/Section'
import { embeds, img, photos, releases, socials, videos } from '@/data/epk'

export const Route = createFileRoute('/_site/media')({
  head: () => ({ meta: [{ title: 'Music & Media — Argentym EPK' }] }),
  component: MediaPage,
})

function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Music, videos & media"
        title="Turn it up"
        intro="Releases, audio samples, live footage, and press-approved photography. Everything here is cleared for promotional use."
        image={img('promo-live.png', 1800)}
      />

      {/* Music */}
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="Discography" title="Music" />
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-6">
              {releases.map((r) => (
                <ReleaseCard key={r.title} release={r} />
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {embeds.spotify ? (
                <iframe
                  title="Argentym on Spotify"
                  src={embeds.spotify}
                  className="h-[452px] w-full border-0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div className="grain relative flex min-h-[452px] flex-col justify-between overflow-hidden border border-border bg-gradient-to-br from-[#1db954]/20 via-card to-card p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-[#1db954] text-black">
                      <Music2 className="size-5" />
                    </span>
                    <div>
                      <p className="font-display text-xl font-extrabold uppercase">Argentym on Spotify</p>
                      <p className="font-tech text-xs text-muted-foreground">Artist profile</p>
                    </div>
                  </div>
                  <ul className="my-6 space-y-3">
                    {releases.flatMap((r) => r.tracks.slice(0, 3).map((t) => ({ ...t, cover: r.cover }))).slice(0, 5).map((t, i) => (
                      <li key={t.title} className="flex items-center gap-3">
                        <span className="w-4 font-tech text-xs text-muted-foreground">{i + 1}</span>
                        <img src={img(t.cover, 80)} alt="" className="size-10 object-cover" />
                        <span className="flex-1 truncate">{t.title}</span>
                        <span className="font-tech text-xs text-muted-foreground">{t.length}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={socials.find((s) => s.label === 'Spotify')?.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1db954] font-bold text-black hover:brightness-110"
                  >
                    Listen on Spotify <ArrowUpRight className="size-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Videos */}
      <section className="border-y border-border bg-card/30 py-24">
        <Container>
          <SectionHeading eyebrow="Live performance footage" title="Videos" />
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <VideoCard video={videos[0]} large />
            </div>
            {videos.slice(1).map((v) => (
              <VideoCard key={v.title} video={v} />
            ))}
          </div>
        </Container>
      </section>

      {/* Photos */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Promotional photos" title="Press photos" className="mb-0">
              Click any photo to view it large and download the full-resolution file.
            </SectionHeading>
            <Link
              to="/downloads"
              className="mb-2 inline-flex items-center gap-2 font-tech text-sm hover:text-primary"
            >
              <Download className="size-4" /> All downloads
            </Link>
          </div>
          <div className="mt-10">
            <PhotoGallery photos={photos} />
          </div>
        </Container>
      </section>

      {/* Socials */}
      <section className="border-t border-border py-24">
        <Container>
          <SectionHeading eyebrow="Follow" title="Social links" />
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between bg-background p-6 transition hover:bg-card"
              >
                <span>
                  <span className="block font-display text-3xl font-black uppercase group-hover:text-primary">
                    {s.label}
                  </span>
                  <span className="font-tech text-xs text-muted-foreground">{s.handle}</span>
                </span>
                <ArrowUpRight className="size-6 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
