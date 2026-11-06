# Argentym — Electronic Press Kit

The official EPK for **Argentym**, a Cleveland four-piece playing dark classic rock with a 90s–2000s punk heart. The site gives promoters, venues, and press everything they need in one place: who the band is, what they sound like, where they're playing, how to book them, and exactly what they need on stage.

## Pages

| Route | What's there |
| --- | --- |
| `/` | Hero with band name, genre, hometown, tagline, and a prominent **Book the Band** button; quick facts, intro, featured video, next shows, and section links |
| `/about` | Short and long bios (with copy buttons), musical style, members, notable performances, press quotes |
| `/media` | Releases with audio sample player, Spotify embed, live footage and video embeds, press photo gallery with lightbox downloads, social links |
| `/shows` | Upcoming dates, venue history, testimonials, booking email, and the booking inquiry form |
| `/production` | Stage plot, channel input list, equipment inventory, power, monitor mixes, hospitality, production contacts |
| `/downloads` | One-Page EPK, complete technical rider, stage plot, bio pack, and high-resolution photos |
| `/press/one-sheet`, `/press/rider`, `/press/stage-plot` | Print-ready documents. "Download PDF" opens the print dialog — choose "Save as PDF" |

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing, SSR) on Netlify
- Tailwind CSS 4 + shadcn/ui components
- **Netlify Forms** for booking inquiries (submissions appear in the Netlify dashboard under Forms → `booking-inquiry`)
- **Netlify Image CDN** for responsive WebP images
- Band imagery generated with Netlify AI Gateway (Gemini image model)

## Editing content

Everything — bios, members, shows, rider specs, socials, contacts — lives in **`src/data/epk.ts`**. Change it there and every page and printable document updates.

Still to swap in with the band's real material:

- Hometown, booking/press emails, and phone numbers (marked `TODO`)
- Audio samples: add MP3s to `public/audio/` and set `sample` on each track
- Video embeds: set `youtubeId` on each video
- Spotify: set `embeds.spotify` to the artist embed URL
- Social profile URLs, real press quotes and testimonials
- Real band photography (replace the files in `public/img/`, keeping or updating file names)

To get email notifications for booking inquiries, add a notification in the Netlify dashboard under Forms → Submission notifications.

## Running locally

```bash
pnpm install
netlify dev        # full Netlify emulation (Forms, Image CDN) — recommended
# or
pnpm dev           # Vite only, on http://localhost:3000
```

Node 22.13+ or 24 is required.
