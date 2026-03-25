import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  type Speaker = {
    id: string;
    name: string;
    role: string;
    initials: string;
    imageSrc?: string;
    linkedinUrl?: string;
  };

  const speakers: Speaker[] = [
    {
      id: 'sks',
      name: 'Sunil Kumar Sharma',
      role: 'Hon. IT Minister, Govt. of Uttar Pradesh (Chief Guest)',
      initials: 'SKS',
      imageSrc: '/icons_images/sunil_sharma.jpeg',
      linkedinUrl: undefined,
    },
    {
      id: 'akc',
      name: 'Prof. Ajit Kumar Chaturvedi',
      role: 'Vice Chancellor, BHU',
      initials: 'AKC',
      imageSrc: '/icons_images/ajeet.jpeg',
      linkedinUrl: undefined,
    },
    {
      id: 'akp',
      name: 'Prof. Amit Kumar Patra',
      role: 'Director, IIT (BHU) (Patron)',
      initials: 'AKP',
      imageSrc: '/icons_images/amit_patra.jpeg',
      linkedinUrl: undefined,
    },
    {
      id: 'ma',
      name: 'Prof. Manindra Agrawal',
      role: 'Director, IIT Kanpur (Keynote)',
      initials: 'MA',
      imageSrc: '/icons_images/manidra_agrwal.jpeg',
      linkedinUrl: undefined,
    },
    {
      id: 'ora',
      name: 'Omkar Rai',
      role: 'Former DG, STPI',
      initials: 'ORA',
      imageSrc: '/icons_images/omkar_rai.jpeg',
      linkedinUrl: undefined,
    },
    {
      id: 'rks',
      name: 'Prof. Rajeev Kumar Singh',
      role: 'Summit Convenor • Head, Electrical Engineering, IIT (BHU)',
      initials: 'RKS',
      imageSrc: '/icons_images/rk_singh.jpeg',
      linkedinUrl: undefined,
    },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <Image
            src="/icons_images/think_india_logo.png"
            alt="Think India"
            width={40}
            height={40}
            priority
            style={{ objectFit: 'contain' }}
          />
          <div className="logo">अध्यAI</div>
        </div>
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#pillars">Pillars</Link>
          <Link href="#schedule">Schedule</Link>
          <Link href="#speakers">Speakers</Link>
          <Link href="#hackathon">Hackathon</Link>
        </div>
        <a
          className="btn-primary"
          href="https://forms.gle/j25pheKrjFPvZ73t5"
          target="_blank"
          rel="noreferrer"
        >
          Register Now
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="hero">
          <div className="badge">Think India × IIT (BHU)</div>
          <div className="hero-title-row">
            <h1>
              An AI Summit – <span className="hero-accent">अध्यAI</span>
            </h1>
            <div className="hero-logos" aria-label="Collaboration logos">
              <div className="logo-placeholder" title="Place file in public/summit/think-india.png">
                Think India
              </div>
              <div className="logo-placeholder" title="Place file in public/summit/iitbhu.png">
                IIT (BHU)
              </div>
            </div>
          </div>
          <h2 className="hero-tagline">
            A New Chapter of Bharat’s <span>AI</span>
          </h2>
          <div className="hero-meta" aria-label="Theme and sub-theme">
            <div><strong>Foundations, Frontiers & Frameworks</strong></div>
            <div><strong>Architecting responsible AI for Bharat</strong></div>
          </div>
          <a
            className="btn-primary"
            href="https://forms.gle/j25pheKrjFPvZ73t5"
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
          >
            Register Now
          </a>
        </header>

        {/* Event Details */}
        <div className="info-section">
          <div className="info-box">
            <i>📅</i>
            <div>
              <strong>Date & Time</strong>
              <span>April 8, 2026 • 9:00 AM IST</span>
            </div>
          </div>
          <div className="info-box">
            <i>📍</i>
            <div>
              <strong>Location</strong>
              <span>Dev & Vardhana Goswami Lecture Hall Complex, IIT (BHU), Varanasi</span>
            </div>
          </div>
        </div>

        {/* About */}
        <section id="about" className="content-section">
          <h2 className="section-title">About the Summit</h2>
          <p className="section-subtitle">
            Integrating technological advancement with democratic values and national priorities.
          </p>

          <div className="cards-grid">
            <div className="content-card">
              <h3>Event Overview</h3>
              <ul className="bullets">
                <li><strong>Title:</strong> Think India IIT (BHU) proudly presents an AI Summit – “अध्यAI”</li>
                <li><strong>Tagline:</strong> A New Chapter of Bharat’s AI</li>
                <li><strong>Collaboration:</strong> Think India × IIT (BHU)</li>
              </ul>
            </div>
            <div className="content-card">
              <h3>Mission</h3>
              <p>
                AI is evolving into a transformative infrastructure for governance, health, and economic power.
                The summit fosters dialogue on ethical innovation, societal impact, and national priorities.
              </p>
              <p className="muted">
                Goal: develop <strong>responsible AI solutions for Bharat</strong> — including a collaborative hackathon for young innovators.
              </p>
            </div>
            <div className="content-card">
              <h3>Focus Areas</h3>
              <ul className="bullets">
                <li>Agriculture</li>
                <li>Medicine</li>
                <li>Law</li>
                <li>Security</li>
                <li>Surveillance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section id="pillars" className="content-section">
          <h2 className="section-title">The Three Pillars</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-kicker">1</div>
              <h3>Foundations</h3>
              <p>Fundamental principles, knowledge, and systems on which AI is built.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-kicker">2</div>
              <h3>Frontiers</h3>
              <p>Latest innovations and emerging possibilities pushing the boundaries of AI.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-kicker">3</div>
              <h3>Frameworks</h3>
              <p>Policies, ethics, and structures guiding responsible AI development and use.</p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section id="schedule" className="content-section">
          <h2 className="section-title">Full Schedule</h2>
          <p className="section-subtitle">April 8, 2026 • IIT (BHU), Varanasi</p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 1</span>
                <span className="timeline-range">09:00 AM – 10:00 AM</span>
              </div>
              <div className="timeline-body">
                <h3>Inaugural Session</h3>
                <p className="muted">Keynote on national AI strategy</p>
                <p><strong>Speakers:</strong> Shri Sunil Kumar Sharma • Prof. Amit Kumar Patra</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 2</span>
                <span className="timeline-range">10:00 AM – 10:30 AM</span>
              </div>
              <div className="timeline-body">
                <h3>High Tea</h3>
                <p className="muted">Informal interaction with keynote speakers</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 3</span>
                <span className="timeline-range">10:30 AM – 11:30 AM</span>
              </div>
              <div className="timeline-body">
                <h3>Keynote Session</h3>
                <p><strong>Speaker:</strong> Prof. Manindra Agrawal (Director, IIT Kanpur)</p>
                <p className="muted">Topic: threat detection & privacy concerns</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 4</span>
                <span className="timeline-range">11:30 AM – 01:30 PM</span>
              </div>
              <div className="timeline-body">
                <h3>Tech Hackathon & Problem Solving</h3>
                <p className="muted">Hands-on AI solution building for societal challenges</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 5</span>
                <span className="timeline-range">01:30 PM – 02:30 PM</span>
              </div>
              <div className="timeline-body">
                <h3>Networking Lunch</h3>
                <p className="muted">Informal discussions & ecosystem networking</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 6</span>
                <span className="timeline-range">04:00 PM – 05:00 PM</span>
              </div>
              <div className="timeline-body">
                <h3>AI in Medical, Law & Agriculture — Panel Discussion</h3>
                <p className="muted">Focus: health • agriculture • justice sectors</p>
                <p className="muted">Regulatory frameworks • Algorithmic accountability • Ethical safeguards</p>
                <p><strong>Goal:</strong> Build a “Responsible AI Roadmap” for Bharat</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">
                <span className="timeline-event">Event 7</span>
                <span className="timeline-range">05:30 PM - 7:00 PM</span>
              </div>
              <div className="timeline-body">
                <h3>Thanksgiving & Closing</h3>
                <p className="muted">Formal acknowledgments • Closing remarks on the Responsible AI Roadmap</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="speakers-section">
          <h2 className="section-title">Speakers & Participants</h2>
          
          <div className="speakers-grid">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="speaker-card speaker-card--profile">
                <div
                  className="speaker-cover"
                  style={speaker.imageSrc ? { backgroundImage: `url('${speaker.imageSrc}')` } : undefined}
                  aria-label={`${speaker.name} photo`}
                >
                  {!speaker.imageSrc ? (
                    <div className="speaker-cover-fallback" aria-hidden="true">
                      <div className="speaker-cover-initials">{speaker.initials}</div>
                    </div>
                  ) : null}
                </div>

                <div className="speaker-content">
                  <h3>{speaker.name}</h3>
                  <p>{speaker.role}</p>
                </div>
              </div>
            ))}

            <div className="speaker-card speaker-card--coming">
              <div className="speaker-icon speaker-icon--coming" aria-hidden="true">+</div>
              <h3>More Guests Coming</h3>
              <p>Distinguished guests and domain experts will be announced soon.</p>
            </div>
          

          </div>
        </section>

        {/* Hackathon */}
        <section id="hackathon" className="content-section">
          <h2 className="section-title">Tech Hackathon</h2>
          <div className="cards-grid">
            <div className="content-card">
              <h3>Collaborative Build Session</h3>
              <p>
                Hands-on AI solution building for societal challenges — aimed at young innovators to develop responsible AI solutions for Bharat.
              </p>
              <p className="muted">Time: 11:30 AM – 01:30 PM</p>
            </div>
            <div className="content-card">
              <h3>Outcome</h3>
              <p>
                A practical showcase of applied AI across priority sectors, aligned to the summit’s pillars and the “Responsible AI Roadmap” goal.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Think India IIT (BHU) • AI Summit “अध्यAI”. All rights reserved.</p>
      </footer>
    </>
  );
}
