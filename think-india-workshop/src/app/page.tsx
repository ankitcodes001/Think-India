import Link from 'next/link';

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Think India</div>
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#speakers">Speakers</Link>
          <Link href="#schedule">Schedule</Link>
        </div>
        <Link href="#register" className="btn-primary">Reserve Seat</Link>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="hero">
          <div className="badge">Limited Seats Available</div>
          <h1>
            The Future of AI is <span>Here</span>
          </h1>
          <p>
            Join the most exclusive AI Innovation Workshop in India. Learn from the visionaries shaping the future of artificial intelligence across the globe.
          </p>
          <Link href="#register" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Register Now
          </Link>
        </header>

        {/* Event Details */}
        <div className="info-section">
          <div className="info-box">
            <i>📅</i>
            <div>
              <strong>Date & Time</strong>
              <span>October 15, 2026 • 9:00 AM IST</span>
            </div>
          </div>
          <div className="info-box">
            <i>📍</i>
            <div>
              <strong>Location</strong>
              <span>Taj Palace, New Delhi</span>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <section id="speakers" className="speakers-section">
          <h2 className="section-title">Visionary Speakers</h2>
          
          <div className="speakers-grid">
            {/* Meta */}
            <div className="speaker-card meta">
              <div className="speaker-icon">
                {/* Meta simple SVG icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0668E1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 4 12 4z"/>
                  <path d="M8 14h8V10H8v4z"/>
                </svg>
              </div>
              <h3>Meta</h3>
              <p>AI Research Architect</p>
            </div>

            {/* Google */}
            <div className="speaker-card google">
              <div className="speaker-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <h3>Google</h3>
              <p>DeepMind Leadership</p>
            </div>

            {/* OpenAI */}
            <div className="speaker-card openai">
              <div className="speaker-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10A37F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5l-10 14M7 5l10 14" />
                </svg>
              </div>
              <h3>OpenAI</h3>
              <p>Founding Member</p>
            </div>

            {/* Sarvam */}
            <div className="speaker-card sarvam">
              <div className="speaker-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Sarvam AI</h3>
              <p>Co-Founder</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Think India Workshop. All rights reserved.</p>
      </footer>
    </>
  );
}
