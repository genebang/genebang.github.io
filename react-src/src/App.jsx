import { useState, useEffect } from 'react'
import monopolyGo from './assets/monopoly-go.png'
import tripeaks from './assets/tripeaks.png'
import gsnGrandCasino from './assets/gsn-grand-casino.png'
import splatterhouse from './assets/splatterhouse.png'
import afroSamurai from './assets/afro-samurai.png'

const ACCENT = '#1d4ed8'

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const GAMES = [
  {
    id: 'monopoly-go',
    title: 'MONOPOLY GO!',
    image: monopolyGo,
    tags: ['Mobile', 'Social Features', 'Prototyping'],
    description: `Live-service mobile board game by Scopely. As Principal Game Designer, I owned the design of multiplayer social features from concept through release — including a Battleship-inspired minigame built to expand social engagement between players.

I authored the full feature spec and documentation, collaborated with UX and Art to align aesthetics with the game's visual language, and prototyped a new social mini-game while driving targeted improvements to an existing one. All work was grounded in specific engagement KPIs and close collaboration with product and engineering.`,
  },
  {
    id: 'solitaire-tripeaks',
    title: 'Solitaire TriPeaks',
    image: tripeaks,
    tags: ['Mobile', 'Unity', 'Feature Design', 'Systems Design', 'Social Features', 'Level Design', 'Economy Balancing', 'Live Events'],
    description: `Solitaire TriPeaks is a live-service mobile card game by GSN Games (later acquired by Scopely). I spent seven years on the title, growing from Game Designer to Lead Game Designer.

As Lead, I designed and managed weekly club events — handling testing and rollout — to sustain player retention, and led the level and world creation pipeline. I built internal systems for level tuning and economy balancing, and owned features end-to-end including Roko's Powerups and Club Race.

Earlier in my tenure, I created level and world content with the art team in Unity and used analytics to drive measurable improvements in login rates, coin sharing, and level progression.`,
  },
  {
    id: 'gsn-grand-casino',
    title: 'GSN Grand Casino',
    image: gsnGrandCasino,
    tags: ['Mobile', 'Feature Design', 'Systems Design'],
    description: `Details coming soon.`,
  },
  {
    id: 'splatterhouse',
    title: 'Splatterhouse',
    image: splatterhouse,
    tags: ['Xbox 360', 'PS3', 'Combat Design', 'Level Design'],
    description: `Details coming soon.`,
  },
  {
    id: 'afro-samurai',
    title: 'Afro Samurai',
    image: afroSamurai,
    tags: ['Xbox 360', 'PS3', 'Level Design'],
    description: `Details coming soon.`,
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
          "Designed and managed weekly club events (testing and rollout) to sustain player retention; led level/world creation pipeline",
          "Built internal systems for level tuning and economy balancing; owned Roko's Powerups and Club Race end-to-end",
        ],
      },
      {
        title: 'Game Designer — Solitaire TriPeaks',
        period: 'Jan 2015 – Mar 2019',
        bullets: [
          "Created level and world content with the art team in Unity; used analytics to drive improvements in login, coin sharing, and level progression",
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
        title: 'Game Designer / QA Lead Tester',
        period: 'Jul 2004 – Mar 2012',
        bullets: [
          "Advanced from QA Lead (2004–2007) to Game Designer (2007–2012); shipped Afro Samurai and Splatterhouse on Xbox 360 and PS3",
          "Designed and implemented gameplay systems; created test plans and managed QA teams across Sony, Microsoft, and Nintendo platforms",
        ],
      },
    ],
  },
]

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
              onClick={() => { setSelectedGame(null); setTimeout(() => { document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' }) }, 50) }}
              className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Back
            </button>
            <ul className="hidden md:flex items-center gap-8 justify-center">
              {['About', 'Games', 'Experience', 'Education'].map((item) => (
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
        <div className="max-w-3xl mx-auto px-8 sm:px-12 py-32">
          <div className="flex gap-6 items-center mb-10">
            <img src={selectedGame.image} alt={selectedGame.title} className={`w-24 h-24 rounded-2xl flex-shrink-0 ${selectedGame.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{selectedGame.title}</h1>
              <div className="flex gap-2 mt-3 flex-wrap">
                {selectedGame.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none">
            {selectedGame.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4">{para}</p>
            ))}
          </div>
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
            {['About', 'Games', 'Experience', 'Education'].map((item) => (
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
            <a href="https://github.com/genebang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="GitHub">
              <GitHubIcon />
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
                Game designer specializing in live-service mobile games, with deep experience in social features, engagement systems, and economy design. Over the past decade at GSN Games/Scopely, I've grown from designing levels and content to owning full features end-to-end on titles like MONOPOLY GO! and Solitaire TriPeaks — working closely with product, UX, and engineering to take ideas from concept to release.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games */}
      <section id="games" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-800">Games</h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {GAMES.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  className="w-full text-left p-6 md:p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="flex gap-6 items-center">
                    <img src={game.image} alt={game.title} className={`w-40 h-40 rounded-2xl flex-shrink-0 ${game.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`} />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">{game.title}</h3>
                      <div className="flex gap-2 flex-wrap">
                        {game.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">{tag}</span>
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
                  className="p-6 md:p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                <a href="https://github.com/genebang" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" aria-label="GitHub">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <nav className="flex flex-col gap-2 text-sm text-gray-600">
              {['About', 'Games', 'Experience', 'Education'].map((item) => (
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
