import Link from 'next/link';
import Image from 'next/image';

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
              <span>March 27, 2026 • 9:00 AM IST</span>
            </div>
          </div>
          <div className="info-box">
            <i>📍</i>
            <div>
              <strong>Location</strong>
              <span>IIT BHU, Varanasi</span>
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
                <Image src="/icons_images/meta.png" alt="Meta Icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <h3>Meta</h3>
              <p>AI Research Architect</p>
            </div>

            {/* Google */}
            <div className="speaker-card google">
              <div className="speaker-icon">
                <Image src="/icons_images/google.png" alt="Google Icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <h3>Google</h3>
              <p>DeepMind Leadership</p>
            </div>

            {/* OpenAI */}
            <div className="speaker-card openai">
              <div className="speaker-icon">
                <Image src="/icons_images/gpt.png" alt="OpenAI Icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <h3>OpenAI</h3>
              <p>Founding Member</p>
            </div>

            {/* Sarvam */}
            <div className="speaker-card sarvam">
              <div className="speaker-icon">
                <Image src="/icons_images/sarvam.jpeg" alt="Sarvam AI Icon" width={40} height={40} style={{ objectFit: 'cover', borderRadius: '50%' }} />
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
