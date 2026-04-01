import { useState, useEffect, useRef } from 'react'
import monopolyGo from './assets/monopoly-go.png'
import tripeaks from './assets/tripeaks.png'
import gsnGrandCasino from './assets/gsn-grand-casino.png'
import splatterhouse from './assets/splatterhouse.png'
import afroSamurai from './assets/afro-samurai.png'
import logoScopely from './assets/companies/logo-scopely.png'
import logoGSN from './assets/companies/logo-gsn-games.png'
import logoNamco from './assets/companies/logo-namco-bandai-games.png'
import grand01 from './assets/grand-casino/grand01.png'
import grand02 from './assets/grand-casino/grand02.png'
import grand03 from './assets/grand-casino/grand03.png'
import grand04 from './assets/grand-casino/grand04.png'
import tripeaks01 from './assets/tripeaks/tripeaks01-login.png'
import tripeaks02 from './assets/tripeaks/tripeaks02-race.png'
import tripeaks03 from './assets/tripeaks/tripeaks03-roko.png'

const ACCENT = '#1d4ed8'

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GAMES = [
  {
    id: 'monopoly-go',
    title: 'MONOPOLY GO!',
    image: monopolyGo,
    tags: ['Mobile', 'Social Features', 'Prototyping'],
    youtubeIds: ['cwfoZy3mNTI'],
    videosBottom: ['KWUeSqGtlBw'],
    details: [
      { label: 'Publisher', value: 'Scopely' },
      { label: 'Skill Focus', value: 'Designing and owning new features to meet stakeholder goals.' },
      { label: 'Tools', value: 'Unity. Google Docs, Figma, Photoshop, and Confluence for documentation' },
      { label: 'Time on Project', value: '~1.5 years' },
    ],
    links: [
      { label: 'MONOPOLY GO! App - App Store', url: 'https://apps.apple.com/us/app/monopoly-go/id1621328561' },
      { label: 'MONOPOLY GO! - Apps on Google Play', url: 'https://play.google.com/store/apps/details?id=com.scopely.monopolygo&hl=en_US' },
    ],
    summary: [
      "MONOPOLY GO! is a live-service mobile board game developed by Scopely. As Principal Game Designer, I joined the title focused on expanding its social experience — designing multiplayer features from concept through release.",
      "My primary project was a Battleship-inspired multiplayer minigame built to deepen social engagement between players. I authored the full feature spec and documentation, and collaborated closely with UX and Art to ensure the feature's aesthetics aligned with the game's visual language.",
    ],
    paragraphs: [],
    bullets: [
      "Designed MONOPOLY GO!'s multiplayer Battleship minigame to expand social engagement; authored full feature spec and documentation",
      "Collaborated with UX and Art to align feature aesthetics with the game's visual language",
      "Prototyped a new social mini-game and drove improvements to an existing one, targeting specific engagement KPIs",
    ],
  },
  {
    id: 'solitaire-tripeaks',
    title: 'Solitaire TriPeaks',
    image: tripeaks,
    tags: ['Mobile', 'Unity', 'Feature Design', 'Systems Design', 'Social Features', 'Level Design', 'Economy Balancing', 'Live Events'],
    youtubeIds: ['8drpdBQeG6U'],
    gallery: [tripeaks01, tripeaks02, tripeaks03],
    details: [
      { label: 'Publisher', value: 'GSN Games -> Scopely' },
      { label: 'Skill Focus', value: 'Feature design, UI & UX, level design' },
      { label: 'Tools', value: 'Unity. Google Docs and Photoshop for documentation.' },
      { label: 'Time on Project', value: '~8 years' },
    ],
    links: [
      { label: 'Tiki Solitaire TriPeaks - App Store', url: 'https://apps.apple.com/us/app/tiki-solitaire-tripeaks/id892521917' },
      { label: 'Tiki Solitaire TriPeaks - Apps on Google Play', url: 'https://play.google.com/store/apps/details?id=com.gsn.android.tripeaks&hl=en_US' },
    ],
    summary: [
      "Solitaire TriPeaks is a live-service mobile card game by GSN Games (later acquired by Scopely). I spent seven years on the title, growing from Game Designer to Lead Game Designer.",
      "As Lead, I designed and managed weekly club events — handling testing and rollout — to sustain player retention, and led the level and world creation pipeline. I built internal systems for level tuning and economy balancing, and owned features end-to-end including Roko's Powerups and Club Race.",
      "Earlier in my tenure, I created level and world content with the art team in Unity and used analytics to drive measurable improvements in login rates, coin sharing, and level progression.",
    ],
    paragraphs: [],
  },
  {
    id: 'gsn-grand-casino',
    title: 'Grand Casino',
    image: gsnGrandCasino,
    tags: ['Mobile', 'Feature Design', 'Systems Design'],
    youtubeIds: ['MzlCv5OCzcs'],
    details: [
      { label: 'Publisher', value: 'GSN Games -> Scopely' },
      { label: 'Skill Focus', value: 'Feature design, UI & UX' },
      { label: 'Tools', value: 'Unity. Google Docs and Photoshop for documentation.' },
      { label: 'Time on Project', value: 'on/off ~1 year' },
    ],
    links: [
      { label: 'Grand Casino: Slots Games - App Store', url: 'https://apps.apple.com/us/app/grand-casino-slots-games/id891904928' },
      { label: 'Grand Casino: Slots & Bingo - Apps on Google Play', url: 'https://play.google.com/store/apps/details?id=com.gsn.grandcasino' },
    ],
    summary: [
      "Grand Casino is a live-service mobile casino game by GSN Games (later acquired by Scopely). I designed a tiered tournament system called Winner's Rush. Player's earnings were used as points to be placed on timed leaderboards. Top ranked players would then advance to play against other top players for larger rewards.",
    ],
    paragraphs: [],
    gallery: [grand01, grand02, grand03, grand04],
  },
  {
    id: 'splatterhouse',
    title: 'Splatterhouse',
    image: splatterhouse,
    tags: ['Xbox 360', 'PS3', 'Combat Design', 'Level Design'],
    youtubeIds: ['Vi7Iai7pYd8'],
    details: [
      { label: 'Publisher', value: 'Namco Bandai Games' },
      { label: 'Platforms', value: 'Xbox 360 and PS3' },
      { label: 'Skill Focus', value: 'Combat/level design and scripting.' },
      { label: 'Tools', value: 'Gamebryo + internal tools for level and combat scripting.' },
      { label: 'Time on Project', value: '~1 year' },
    ],
    summary: [
      "Splatterhouse is a horror-themed beat 'em up hack and slash game developed and published by Namco Bandai Games in 2010 for PS3 and Xbox 360. It is a reboot of the original Splatterhouse which was released in 1988.",
    ],
    paragraphs: [],
  },
  {
    id: 'afro-samurai',
    title: 'Afro Samurai',
    image: afroSamurai,
    tags: ['Xbox 360', 'PS3', 'Level Design'],
    youtubeIds: ['vSow1VnMPko'],
    details: [
      { label: 'Publisher', value: 'Namco Bandai Games' },
      { label: 'Platforms', value: 'Xbox 360 and PS3' },
      { label: 'Skill Focus', value: 'Level design and scripting' },
      { label: 'Tools', value: 'Maya for level blockouts. Maya + internal tools for level scripting.' },
      { label: 'Time on Project', value: '~2 years' },
    ],
    summary: [
      "Afro Samurai is an action game developed and published by Namco Bandai Games in 2009 for PS3 and Xbox 360, based on the manga and anime series of the same name.",
      "In my first design role I initially tested and verified design tools since the internal game engine was being developed as we built the game. This was followed by level blockouts in Maya.",
    ],
    paragraphs: [],
  },
]

const EXPERIENCE = [
  {
    company: 'Scopely',
    location: 'Remote',
    period: 'Jan 2022 – Mar 2026',
    roles: [
      {
        title: 'Principal Game Designer — MONOPOLY GO!',
        period: 'Oct 2024 – Mar 2026',
        bullets: [
          "Designed MONOPOLY GO's multiplayer Battleship minigame to expand social engagement; authored full feature spec and documentation",
          "Collaborated with UX and Art to align feature aesthetics with the game's visual language",
          "Prototyped a new social mini-game and drove improvements to an existing one, targeting specific engagement KPIs",
        ],
      },
      {
        title: 'Principal Game Designer — Unannounced Project',
        period: 'Mar 2023 – Oct 2024',
        bullets: [
          "Partnered with engineering to develop and verify design tools; documented and prototyped core gameplay systems in Unity",
        ],
      },
      {
        title: 'Lead Game Designer — Solitaire TriPeaks',
        period: 'Jan 2022 – Mar 2023',
        bullets: [
          "Continued lead design responsibilities following Scopely's acquisition of GSN Games",
        ],
      },
    ],
  },
  {
    company: 'GSN Games',
    location: 'Palo Alto, CA',
    period: 'Jan 2015 – Jan 2022',
    roles: [
      {
        title: 'Lead Game Designer — Solitaire TriPeaks',
        period: 'Mar 2019 – Jan 2022',
        bullets: [
          "Gained LiveOps experience designing and managing weekly club events (testing and rollout) to sustain player retention", 
          "Managed level and world creation pipeline with coordination between the design, art and engineering",
          "Built internal systems for level tuning and economy balancing",
          "Owned single player (Leaderboard Tournament updates, Roko's Powerups) and social features (Club Leagues, Club Boat Race) from end-to-end",
        ],
      },
      {
        title: 'Game Designer — Solitaire TriPeaks',
        period: 'Jan 2015 – Mar 2019',
        bullets: [
          "Created level and world content with the art team in Unity; used analytics to drive improvements in player return rates, social gifting, and level progression",
        ],
      },
    ],
  },
  {
    company: 'Chefs Feed',
    location: 'San Francisco, CA',
    period: 'Jan 2013 – Jul 2014',
    roles: [
      {
        title: 'Software Engineer',
        period: 'Jan 2013 – Jul 2014',
        bullets: [
          "Built internal Ruby on Rails web apps including an email newsletter editor, multi-source metrics dashboard (Google Analytics, Mixpanel, and 8+ others), and an ideas repository with voting and commenting",
        ],
      },
    ],
  },
  {
    company: 'Namco Bandai Games America',
    location: 'Santa Clara, CA',
    period: 'Jul 2004 – Mar 2012',
    roles: [
      {
        title: 'Game Designer',
        period: 'Aug 2007 – Mar 2012',
        bullets: [
          "Tested and verified game editor tools",
          "Blocked out levels in Maya, scripted levels using an internal level editor embedded in Maya for Afro Samurai",
          "Level design and implementation of boss levels that required environmental level scripting for Splatterhouse"
        ],
      },
            {
        title: 'QA Tester / Lead Tester',
        period: 'Jul 2004 – Aug 2007',
        bullets: [
          "Advanced from QA Tester (2004–2005) to Lead Tester (2005–207), created test plans and managed QA teams across Sony, Microsoft, and Nintendo platforms",
        ],
      },
    ],
  },
]

function Carousel({ images }) {
  const [index, setIndex] = useState(0)
  const touchStartX = useRef(null)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    touchStartX.current = null
  }

  return (
    <div>
      <div
        className="relative w-full overflow-hidden rounded-xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full bg-black rounded-xl" style={{ paddingBottom: '56.25%', position: 'relative' }}>
          <img
            src={images[index]}
            alt={`Screenshot ${index + 1}`}
            className="absolute inset-0 w-full h-full object-contain rounded-xl"
          />
        </div>
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === index ? 'bg-gray-700' : 'bg-gray-300'}`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (selectedGame) {
    return (
      <div className="min-h-screen bg-white text-gray-900">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => { setSelectedGame(null); setTimeout(() => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }, 50) }}
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back
            </button>
            <ul className="hidden md:flex items-center gap-8 justify-center">
              {['About', 'Projects', 'Experience', 'Education'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { setSelectedGame(null); setTimeout(() => { document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }) }, 50) }}
                    className="text-gray-700 hover:text-black transition-colors font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
            <div className="w-16" />
          </nav>
        </header>
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 py-32">

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10">{selectedGame.title}</h1>

          {/* Two-column: video left, text right */}
          {(selectedGame.youtubeIds?.length > 0 || selectedGame.paragraphs?.length > 0) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
              {/* Left: videos */}
              {selectedGame.youtubeIds?.length > 0 && (
                <div className="space-y-6">
                  {selectedGame.youtubeIds.map((id) => (
                    <div key={id} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 w-full h-full rounded-xl"
                        src={`https://www.youtube.com/embed/${id}`}
                        title={`${selectedGame.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              )}
              {/* Right: details or overview text */}
              {selectedGame.details ? (
                <div className="space-y-4">
                  {selectedGame.details.map(({ label, value }) => (
                    <p key={label} className="text-gray-600 leading-relaxed">
                      <span className="italic">{label}:</span> {value}
                    </p>
                  ))}
                  {selectedGame.links?.map(({ label, url }) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="block text-blue-700 hover:underline leading-relaxed">
                      {label}
                    </a>
                  ))}
                </div>
              ) : selectedGame.paragraphs?.length > 0 ? (
                <div>
                  {selectedGame.paragraphs.map((para, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
                  ))}
                </div>
              ) : null}
            </div>
          )}

          {/* Summary of Responsibilities */}
          {(selectedGame.summary?.length > 0 || selectedGame.bullets?.length > 0) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary of Responsibilities</h2>
              {selectedGame.summary?.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
              ))}
              {selectedGame.bullets?.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {selectedGame.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-1.5 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Bottom videos */}
          {selectedGame.videosBottom?.length > 0 && (
            <div className="space-y-6 mb-16">
              {selectedGame.videosBottom.map((id) => (
                <div key={id} className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`${selectedGame.title} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          )}

          {/* Gallery */}
          {selectedGame.gallery?.length > 0 && (
            <Carousel images={selectedGame.gallery} />
          )}

        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <header
        id="header"
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-sm' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-8 py-4">
          <ul className="flex items-center gap-8 justify-center">
            {['About', 'Projects', 'Experience', 'Education'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-black transition-colors font-medium"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section>
        <div className="relative isolate overflow-hidden bg-white py-24 md:h-screen">
          {/* Radial gradient */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(ellipse 800px 1200px at 0% 0%, #1d4ed840 0%, #1d4ed825 20%, #1d4ed810 40%, rgba(255,255,255,0.3) 70%, rgba(255,255,255,0.8) 90%, white 100%)`,
            }}
          />
          {/* Grid pattern */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200"
            style={{ maskImage: 'radial-gradient(100% 100% at top right, white, transparent)' }}
          >
            <defs>
              <pattern id="grid" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid)" />
          </svg>

          {/* Main content */}
          <div className="h-full mx-auto p-8 sm:p-12 md:p-24 flex items-center">
            <div>
              <h2
                className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight text-gray-700 animate-fade-in"
              >
                Hello! 👋
              </h2>
              <h1
                className="mt-6 sm:mt-8 md:mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight text-gray-800 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                I'm <span style={{ color: ACCENT }}>Gene Bang</span>
              </h1>
              <p
                className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-medium text-gray-600 animate-fade-in"
                style={{ animationDelay: '0.4s' }}
              >
                Game Designer
              </p>
            </div>
          </div>

          {/* Social links pinned to bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 md:p-24 flex gap-x-4 sm:gap-x-6 md:gap-x-8 text-gray-700 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            <a href="mailto:genebang@gmail.com" className="hover:text-blue-700 transition-colors" aria-label="Email">
              <EmailIcon />
            </a>
            <a href="https://linkedin.com/in/genebang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">About</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I'm an experienced game designer with 20+ years in the industry with the last 10+ years in live-service mobile games, with experience in social features, engagement systems, and economy design. Over the past decade at GSN Games/Scopely, I've grown from designing levels and content to owning full features end-to-end on titles like MONOPOLY GO! and Solitaire TriPeaks — working closely with product, UX, and engineering to take ideas from concept to release.
              </p>
              <div className="flex flex-wrap items-center justify-center mt-8" style={{ gap: '40px' }}>
                {[logoScopely, logoGSN, logoNamco].map((logo, i) => (
                  <img key={i} src={logo} alt="" className="object-contain" style={{ height: '80px' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Projects</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {GAMES.map((game) => (
                <button
                  key={game.id}
                  onClick={() => { setSelectedGame(game); window.scrollTo(0, 0) }}
                  className="group w-full text-left p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer relative"
                >
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                  <div className="flex gap-6 items-center">
                    <img src={game.image} alt={game.title} className={`w-40 h-40 rounded-2xl flex-shrink-0 ${game.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{game.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {game.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-gray-300 text-gray-700 text-xs font-semibold rounded-md">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Experience</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {EXPERIENCE.map((job) => (
                <div
                  key={job.company}
                  className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">{job.company}</h3>
                    <span className="text-gray-400 text-sm whitespace-nowrap ml-4">{job.period}</span>
                  </div>
                  <div className="space-y-5">
                    {job.roles.map((role) => (
                      <div key={role.title} className="pl-4">
                        <div className="flex items-baseline justify-between mb-1.5">
                          <h4 className="font-semibold text-gray-700 text-sm">{role.title}</h4>
                          <span className="text-gray-400 text-xs ml-4 whitespace-nowrap">{role.period}</span>
                        </div>
                        <ul className="space-y-1">
                          {role.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                              <span className="mt-1.5 flex-shrink-0" style={{ color: ACCENT }}>•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Education</h2>
            </div>
            <div className="lg:col-span-8">
              <div className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-200">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">University of California, Los Angeles</h3>
                    <p className="text-gray-500 text-sm mt-1">B.S., Computer Science</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap ml-4">1996 – 2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24 py-16">
          <div className="flex flex-col md:flex-row md:justify-between gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-800">Gene Bang</h3>
                <p className="text-gray-500 text-sm mt-1">Game Designer</p>
              </div>
              <div className="flex gap-4 text-gray-600">
                <a href="mailto:genebang@gmail.com" className="hover:text-blue-700 transition-colors" aria-label="Email">
                  <EmailIcon />
                </a>
                <a href="https://linkedin.com/in/genebang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              {['About', 'Projects', 'Experience', 'Education'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

    </div>
  )
}
