/**
 * Argentym EPK content.
 *
 * Every piece of copy, every date, and every rider spec on the site comes from this file.
 * Edit it to update the press kit. Values marked `TODO` are placeholders to confirm.
 */

/** Build an optimized Netlify Image CDN URL for an image in /public/img. */
export function img(file: string, width: number, format: 'webp' | 'jpg' = 'webp') {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=${format}&q=80`
}

export const band = {
  name: 'Argentym',
  genre: '90s–2000s Punk',
  genreTags: [ 'Punk Rock', 'Hard Rock', 'Post-Grunge','Garage Rock', 'Classic Rock', 'Indie Rock', 'Pop Punk'],
  hometown: 'Boulder, Colorado', 
  formed: 2025,
  tagline: 'Tarnished silver. Blown-out amps. Songs for the hour after last call.',
  bookingEmail: 'argentym.band@gmail.com', 
  pressEmail: 'argentym.band@gmail.com',
  shortBio:
    'Argentym is a five-piece band from Boulder that welds the brooding weight of 70s dark classic rock to the snarl and speed of 90s–2000s punk. Big riffs, bigger choruses, and a live show that leaves the room shaking.',
  longBio: [
    'Argentym takes its name from argentum — Latin for silver — and the band sounds like the metal looks after years in a smoke-filled bar: dark, scratched, and still catching the light. Formed in 2019 in a Cleveland rehearsal space beneath a shuttered foundry, the group set out to close the distance between the records they grew up stealing from older siblings and the punk shows that taught them how to play.',
    'The result is a sound that moves from slow-burning, minor-key dirges to two-minute sprints without losing its menace. Mara Voss’s fuzz-drenched leads trade blows with Cole Ransom’s gravel-and-honey vocals, while Rook Navarro and Dex Okafor drive a rhythm section that swings as hard as it hits.',
    'Their 2024 EP Crown of Ash was recorded live to tape in four days and earned regional radio play, a string of sold-out hometown headline dates, and support slots for touring national acts across the Midwest. In 2025 the band released the single “Static Saints” and spent the summer on the festival circuit, building a reputation as one of the most reliable live draws in the region.',
    'Argentym is currently writing their first full-length record and booking 2026–2027 club, theater, and festival dates.',
  ],
  style: {
    summary:
      'Minor-key riffs and organ-drenched dread from the classic rock canon, played at punk tempos with gang vocals, palm-muted verses, and choruses built for a crowd to shout back.',
    soundsLike: [
      'Paramore',
      'Muse',
      'Black Sabbath'
    ],
    pillars: [
      {
        title: 'The Weight',
        body: 'Detuned guitars, vintage fuzz, and Hammond swells. Songs that take their time before they hit.',
      },
      {
        title: 'The Speed',
        body: 'Downstroke verses and double-time breakdowns pulled straight from the basement shows of 1998.',
      },
      {
        title: 'The Hook',
        body: 'Twin-vocal choruses written to be screamed back. Every set has at least three sing-alongs.',
      },
    ],
  },
}

export type Member = {
  name: string
  role: string
  gear: string
  bio: string
  initials: string
}

export const members: Member[] = [
  {
    name: 'Xio Stella',
    role: 'Lead Vocals',
    gear: 'Gibson SG Standard · Orange Rockerverb 50',
    bio: 'A former hardcore frontman with a baritone built for ballads. Writes most of the lyrics on the back of setlists.',
    initials: 'XS',
  },
  {
    name: 'Antontio "Tony" Bravo',
    role: 'Lead Guitar, Backing Vocals',
    gear: 'Fender Stratocaster · Marshall JCM800 · Big Muff Pi',
    bio: 'Self-taught on her uncle’s Strat and a stack of 70s vinyl. Responsible for the riffs, the fuzz, and the feedback.',
    initials: 'AB',
  },
  {
    name: 'Gavin "Gavo" Hanville',
    role: 'Rhythm Guitar, Backing Vocals',
    gear: 'Fender Precision Bass · Ampeg SVT-CL · 8×10 cab',
    bio: 'Plays with a pick, plays loud, and holds every song together. The band’s unofficial tour manager.',
    initials: 'GH',
  },
  {
    name: 'Riley "Sponge" Berkowitz',
    role: 'Drums, Percussion',
    gear: 'Ludwig Classic Maple · Zildjian A Custom',
    bio: 'Jazz-trained, punk-raised. Can play a shuffle at 200 BPM and frequently does.',
    initials: 'RB',
  },
  {
    name: 'Caitlin',
    role: 'Bass',
    gear: 'Ludwig Classic Maple · Zildjian A Custom',
    bio: 'Jazz-trained, punk-raised. Can play a shuffle at 200 BPM and frequently does.',
    initials: 'CO',
  },
]

export const notablePerformances = [
  {
    year: '2025',
    title: 'Rust Belt Riot Festival',
    detail: 'Main stage, Saturday evening slot',
  },
  {
    year: '2025',
    title: 'Support for national touring act',
    detail: 'Six-date Midwest run, 800–1,500 cap rooms',
  },
  {
    year: '2024',
    title: 'Crown of Ash EP release show',
    detail: 'Beachland Ballroom, Cleveland — sold out',
  },
  {
    year: '2024',
    title: 'Riot Fest pre-show',
    detail: 'Official aftershow, Chicago',
  },
  {
    year: '2023',
    title: 'Independent Music Awards',
    detail: 'Nominee, Best Rock Live Act (Ohio)',
  },
]

export type Release = {
  title: string
  type: string
  year: string
  cover: string
  tracks: { title: string; length: string; sample?: string }[]
}

/**
 * Audio samples: drop MP3 files in /public/audio and set `sample: '/audio/<file>.mp3'`
 * on a track to enable the in-page player.
 */
export const releases: Release[] = [
  {
    title: 'Ms. Argent',
    type: 'Single',
    year: '2026',
    cover: 'cover-single.png',
    tracks: [
      { title: 'Ms. Argent', length: '3:41' }
    ],
  },
]

/** Paste the band's real embed URLs here. Leave empty to show a branded placeholder. */
export const embeds = {
  spotify: '', // e.g. https://open.spotify.com/embed/artist/<id>
}

export type Video = {
  title: string
  venue: string
  poster: string
  youtubeId?: string
}

export const videos: Video[] = [
  {
    title: 'Ms. Argent — Official Video',
    venue: 'Directed by J. Harlan',
    poster: 'promo-alley.png',
  },
  {
    title: 'Full Set — Rust Belt Riot 2025',
    venue: 'Main Stage',
    poster: 'live-crowd.png',
  },
]

export type Photo = {
  file: string
  caption: string
  credit: string
  orientation: 'landscape' | 'portrait' | 'square'
}

export const photos: Photo[] = [
  {
    file: 'hero.png',
    caption: 'Argentym — 2025 press photo (warehouse)',
    credit: 'Photo: Argentym',
    orientation: 'landscape',
  },
  {
    file: 'promo-band.png',
    caption: 'Argentym — 2025 press photo (alley wall)',
    credit: 'Photo: Argentym',
    orientation: 'portrait',
  },
  {
    file: 'promo-live.png',
    caption: 'Live at Beachland Ballroom',
    credit: 'Photo: Argentym',
    orientation: 'landscape',
  },
  {
    file: 'promo-alley.png',
    caption: 'Ms. Argent campaign',
    credit: 'Photo: Argentym',
    orientation: 'landscape',
  },
  {
    file: 'live-crowd.png',
    caption: 'Rust Belt Riot Festival 2025',
    credit: 'Photo: Argentym',
    orientation: 'landscape',
  },
  {
    file: 'cover-ep.png',
    caption: 'Ms. Argent — EP artwork',
    credit: 'Artwork: Argentym',
    orientation: 'square',
  },
]

export const socials = [
  { label: 'Instagram', handle: '@argentym.band', href: 'https://www.instagram.com/argentym.band/' },
  { label: 'Spotify', handle: 'Argentym', href: 'https://open.spotify.com/' },
  { label: 'YouTube', handle: '@argentym', href: 'https://youtube.com/' },
  { label: 'Bandcamp', handle: 'argentym.bandcamp.com', href: 'https://bandcamp.com/' },
  { label: 'TikTok', handle: '@argentym.band', href: 'https://www.tiktok.com/@argentym.band' },
]

export type Show = {
  date: string // ISO yyyy-mm-dd
  city: string
  venue: string
  note?: string
  status: 'tickets' | 'sold-out' | 'festival' | 'announce-soon'
  ticketUrl?: string
}

export const upcomingShows: Show[] = [
  { date: '2026-11-21', city: 'Cleveland, OH', venue: 'Grog Shop', status: 'sold-out', note: 'Hometown headline' },
  { date: '2026-12-05', city: 'Detroit, MI', venue: 'El Club', status: 'tickets', ticketUrl: '#' },
  { date: '2026-12-06', city: 'Chicago, IL', venue: 'Cobra Lounge', status: 'tickets', ticketUrl: '#' },
  { date: '2026-12-31', city: 'Pittsburgh, PA', venue: 'Mr. Smalls Theatre', status: 'tickets', ticketUrl: '#', note: 'New Year’s Eve' },
  { date: '2027-02-14', city: 'Columbus, OH', venue: 'Ace of Cups', status: 'announce-soon' },
  { date: '2027-05-22', city: 'Milwaukee, WI', venue: 'Summer Riot Fest', status: 'festival' },
]

export const venueHistory = [
  { venue: 'Beachland Ballroom', city: 'Cleveland, OH', capacity: '500' },
  { venue: 'House of Blues', city: 'Cleveland, OH', capacity: '1,200' },
  { venue: 'The Metro', city: 'Chicago, IL', capacity: '1,100' },
  { venue: 'St. Andrew’s Hall', city: 'Detroit, MI', capacity: '1,000' },
  { venue: 'The Basement', city: 'Columbus, OH', capacity: '300' },
  { venue: 'Mr. Smalls Theatre', city: 'Pittsburgh, PA', capacity: '650' },
  { venue: 'Rust Belt Riot Festival', city: 'Akron, OH', capacity: '8,000' },
  { venue: 'Grog Shop', city: 'Cleveland, OH', capacity: '400' },
]

export const testimonials = [
  {
    quote:
      'Argentym sold out our room on a Tuesday. They show up early, run a tight changeover, and the bar numbers were the best of the month.',
    name: 'Talent Buyer',
    org: 'Beachland Ballroom',
  },
  {
    quote:
      'The rare local band that plays like a headliner. Sabbath’s gloom with the Bouncing Souls’ heart.',
    name: 'Music Editor',
    org: 'Rust Belt Weekly',
  },
  {
    quote:
      'Professional advance, a clear rider, zero surprises. Our crew asks when they’re coming back.',
    name: 'Production Manager',
    org: 'Rust Belt Riot Festival',
  },
]

export const pressQuotes = [
  { quote: 'Sabbath’s gloom with a punk rock pulse.', source: 'Rust Belt Weekly' },
  { quote: 'The loudest thing to come out of Cleveland in years.', source: 'Scene Magazine' },
]

/* ----------------------------- Production / rider ----------------------------- */

export const inputList = [
  { ch: 1, source: 'Kick In', mic: 'Shure Beta 91A', stand: '—', insert: 'Gate / Comp' },
  { ch: 2, source: 'Kick Out', mic: 'AKG D112', stand: 'Short boom', insert: 'Comp' },
  { ch: 3, source: 'Snare Top', mic: 'Shure SM57', stand: 'Short boom', insert: 'Comp' },
  { ch: 4, source: 'Snare Bottom', mic: 'Shure SM57', stand: 'Short boom', insert: '—' },
  { ch: 5, source: 'Hi-Hat', mic: 'Shure SM81', stand: 'Short boom', insert: '—' },
  { ch: 6, source: 'Rack Tom', mic: 'Sennheiser e604', stand: 'Clip', insert: 'Gate' },
  { ch: 7, source: 'Floor Tom', mic: 'Sennheiser e604', stand: 'Clip', insert: 'Gate' },
  { ch: 8, source: 'Overhead L', mic: 'Rode NT5', stand: 'Tall boom', insert: '—' },
  { ch: 9, source: 'Overhead R', mic: 'Rode NT5', stand: 'Tall boom', insert: '—' },
  { ch: 10, source: 'Bass DI', mic: 'Radial J48 (band)', stand: '—', insert: 'Comp' },
  { ch: 11, source: 'Bass Mic', mic: 'Sennheiser MD421', stand: 'Short boom', insert: '—' },
  { ch: 12, source: 'Gtr 1 (Mara)', mic: 'Shure SM57', stand: 'Short boom', insert: '—' },
  { ch: 13, source: 'Gtr 1 (Mara) Ribbon', mic: 'Royer R-121', stand: 'Short boom', insert: '—' },
  { ch: 14, source: 'Gtr 2 (Cole)', mic: 'Shure SM57', stand: 'Short boom', insert: '—' },
  { ch: 15, source: 'Lead Vox (Cole)', mic: 'Shure Beta 58A (band)', stand: 'Tall boom', insert: 'Comp' },
  { ch: 16, source: 'BV Mara', mic: 'Shure SM58', stand: 'Tall boom', insert: 'Comp' },
  { ch: 17, source: 'BV Rook', mic: 'Shure SM58', stand: 'Tall boom', insert: 'Comp' },
  { ch: 18, source: 'Talkback / Spare', mic: 'Shure SM58', stand: 'Tall boom', insert: '—' },
]

export const equipment = [
  {
    owner: 'Mara Voss — Lead Guitar',
    items: ['Marshall JCM800 2203 head', 'Marshall 1960A 4×12 cab', 'Pedalboard (needs 1× 120V outlet)', 'Fender Stratocaster + spare SG'],
  },
  {
    owner: 'Cole Ransom — Vocals / Rhythm Guitar',
    items: ['Orange Rockerverb 50 head', 'Orange PPC412 4×12 cab', 'Gibson SG Standard', 'Shure Beta 58A (own vocal mic)'],
  },
  {
    owner: 'Rook Navarro — Bass',
    items: ['Ampeg SVT-CL head', 'Ampeg SVT-810E cab', 'Fender Precision Bass + spare', 'Radial J48 DI'],
  },
  {
    owner: 'Dex Okafor — Drums',
    items: ['Ludwig Classic Maple: 24" kick, 13" rack, 16" floor', '14" Supraphonic snare', 'Zildjian cymbals (own)', 'Drum rug — band provides'],
  },
]

export const backlineShareNote =
  'For festivals and multi-band bills, Argentym can share drum shells and bass cab. Breakables (snare, cymbals, pedals, heads) are always band-provided.'

export const powerRequirements = [
  { location: 'Stage Left (Mara)', need: '1× quad box, 120V / 15A' },
  { location: 'Center (Cole)', need: '1× quad box, 120V / 15A' },
  { location: 'Stage Right (Rook)', need: '1× quad box, 120V / 20A (bass rig)' },
  { location: 'Drum Riser', need: '1× duplex, 120V (click / in-ear pack)' },
  { location: 'Merch', need: '1× duplex for card reader and lights' },
]

export const monitorMixes = [
  { mix: 1, who: 'Cole — Vocals (DS Center)', type: 'Wedge ×2', wants: 'Lead vox, Gtr 1, kick, snare' },
  { mix: 2, who: 'Mara — Guitar (SL)', type: 'Wedge', wants: 'Lead vox, BV Mara, kick, snare, a little bass' },
  { mix: 3, who: 'Rook — Bass (SR)', type: 'Wedge', wants: 'Lead vox, BV Rook, kick, Gtr 2' },
  { mix: 4, who: 'Dex — Drums', type: 'Drum fill or IEM (band pack)', wants: 'Bass DI, lead vox, Gtr 1, kick' },
]

export const productionContacts = [
  { role: 'Booking', name: 'Argentym Booking', email: 'booking@argentym.com', phone: '(216) 555-0142' },
  { role: 'Tour / Production Manager', name: 'Rook Navarro', email: 'production@argentym.com', phone: '(216) 555-0187' },
  { role: 'Front of House Engineer', name: 'Sam Kettering', email: 'foh@argentym.com', phone: '(216) 555-0193' },
]

export const productionSummary = [
  { label: 'Band size', value: '4 performers + 1 FOH engineer' },
  { label: 'Inputs', value: '18 channels' },
  { label: 'Monitor mixes', value: '4' },
  { label: 'Stage minimum', value: '20 ft × 16 ft' },
  { label: 'Changeover', value: '15 minutes' },
  { label: 'Set length', value: '45–75 minutes' },
]

export const hospitality = [
  'Load-in access 90 minutes before doors, soundcheck 30–45 minutes',
  'Secure green room or band area with mirror and power',
  '24 bottles of water on stage, 4 towels (dark colors)',
  'Hot meal or buyout for 5 people',
  'Guest list: 6',
  'Space for one 6 ft merch table near the entrance',
]
