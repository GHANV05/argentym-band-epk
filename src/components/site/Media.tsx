import { useRef, useState } from 'react'
import { Download, Pause, Play, X } from 'lucide-react'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { img, type Photo, type Release, type Video } from '@/data/epk'
import { cn } from '@/lib/utils'

/* --------------------------------- Releases -------------------------------- */

export function ReleaseCard({ release }: { release: Release }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState<string | null>(null)

  function toggle(title: string, src?: string) {
    const audio = audioRef.current
    if (!audio || !src) return
    if (playing === title) {
      audio.pause()
      setPlaying(null)
      return
    }
    audio.src = src
    void audio.play()
    setPlaying(title)
  }

  return (
    <article className="grid gap-6 border border-border bg-card p-5 sm:grid-cols-[180px_1fr]">
      <img
        src={img(release.cover, 400)}
        alt={`${release.title} cover art`}
        className="aspect-square w-full object-cover"
        loading="lazy"
      />
      <div>
        <p className="eyebrow">
          {release.type} · {release.year}
        </p>
        <h3 className="mt-1 font-display text-3xl font-black uppercase">{release.title}</h3>
        <ol className="mt-4 divide-y divide-border border-y border-border">
          {release.tracks.map((t, i) => {
            const isPlaying = playing === t.title
            return (
              <li key={t.title} className="flex items-center gap-3 py-2">
                <button
                  type="button"
                  onClick={() => toggle(t.title, t.sample)}
                  disabled={!t.sample}
                  title={t.sample ? undefined : 'Audio sample coming soon'}
                  aria-label={t.sample ? `${isPlaying ? 'Pause' : 'Play'} ${t.title}` : `${t.title} sample coming soon`}
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-foreground transition enabled:hover:border-primary enabled:hover:bg-primary disabled:opacity-40"
                >
                  {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5 translate-x-px" />}
                </button>
                <span className="w-5 font-tech text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <span className={cn('flex-1 truncate', isPlaying && 'text-hot')}>{t.title}</span>
                <Waveform active={isPlaying} seed={t.title.length} />
                <span className="font-tech text-xs text-muted-foreground">{t.length}</span>
              </li>
            )
          })}
        </ol>
        <audio ref={audioRef} onEnded={() => setPlaying(null)} className="hidden" />
      </div>
    </article>
  )
}

function Waveform({ active, seed }: { active: boolean; seed: number }) {
  const bars = Array.from({ length: 22 }, (_, i) => 25 + ((Math.sin(i * 1.7 + seed) + 1) / 2) * 75)
  return (
    <span className="hidden h-5 items-end gap-[2px] md:flex" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          className={cn('w-[2px] bg-muted-foreground/40', active && 'animate-pulse bg-primary')}
          style={{ height: `${h}%`, animationDelay: `${i * 40}ms` }}
        />
      ))}
    </span>
  )
}

/* ---------------------------------- Video ---------------------------------- */

export function VideoCard({ video, large }: { video: Video; large?: boolean }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <figure className="group">
      <div className="relative aspect-video overflow-hidden border border-border bg-black">
        {loaded && video.youtubeId ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            disabled={!video.youtubeId}
            className="absolute inset-0 size-full text-left"
            aria-label={video.youtubeId ? `Play ${video.title}` : `${video.title} (video coming soon)`}
          >
            <img
              src={img(video.poster, large ? 1400 : 800)}
              alt=""
              loading="lazy"
              className="size-full object-cover opacity-70 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <span className="absolute top-1/2 left-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_var(--primary)] transition group-hover:scale-110 md:size-20">
              <Play className="size-7 translate-x-0.5 fill-current" />
            </span>
            {!video.youtubeId && (
              <span className="absolute top-3 right-3 bg-black/70 px-2 py-1 font-tech text-white text-[10px] tracking-[0.15em] uppercase">
                Premiering soon
              </span>
            )}
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <p className={cn('font-display font-extrabold uppercase', large ? 'text-2xl' : 'text-lg')}>{video.title}</p>
        <p className="font-tech text-xs text-muted-foreground">{video.venue}</p>
      </figcaption>
    </figure>
  )
}

/* --------------------------------- Photos ---------------------------------- */

export function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<Photo | null>(null)

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((p) => (
          <button
            key={p.file}
            type="button"
            onClick={() => setActive(p)}
            className="group relative mb-4 block w-full overflow-hidden border border-border break-inside-avoid"
          >
            <img
              src={img(p.file, 800)}
              alt={p.caption}
              loading="lazy"
              className="w-full transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 text-left text-sm text-white opacity-0 transition group-hover:opacity-100">
              {p.caption}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          showCloseButton={false}
          aria-describedby={undefined}
          className="max-w-[min(92vw,1200px)] gap-0 border-border bg-background p-0 sm:max-w-[min(92vw,1200px)]"
        >
          {active && (
            <>
              <img src={img(active.file, 1800)} alt={active.caption} className="max-h-[78vh] w-full object-contain" />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border p-4">
                <div>
                  <DialogTitle className="font-display text-xl font-extrabold uppercase">{active.caption}</DialogTitle>
                  <p className="font-tech text-xs text-muted-foreground">{active.credit}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`/img/${active.file}`}
                    download
                    className="inline-flex h-9 items-center gap-2 bg-primary px-4 font-display text-sm font-bold tracking-[0.1em] text-primary-foreground uppercase hover:bg-primary/90"
                  >
                    <Download className="size-4" /> Hi-res
                  </a>
                  <button
                    type="button"
                    onClick={() => setActive(null)}
                    className="grid size-9 place-items-center border border-border hover:bg-secondary"
                    aria-label="Close"
                  >
                    <X className="size-4" />
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
