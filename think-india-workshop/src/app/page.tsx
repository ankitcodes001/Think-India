import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">अध्य’AI</div>
        <div className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#pillars">Pillars</Link>
          <Link href="#schedule">Schedule</Link>
          <Link href="#speakers">Speakers</Link>
          <Link href="#hackathon">Hackathon</Link>
        </div>
        <Link href="#register" className="btn-primary">Reserve Seat</Link>
      </nav>

      <main>
        {/* Hero Section */}
        <header className="hero">
          <div className="badge">Think India × IIT (BHU)</div>
          <div className="hero-title-row">
            <h1>
              An AI Summit – <span>अध्य’AI</span>
            </h1>
            <div className="hero-logos" aria-label="Collaboration logos">
              <div className="logo-placeholder" title="Place file in public/summit/think-india.png">
                Think India
              </div>
              <div className="logo-placeholder" title="Place file in public/summit/iitbhu.png">
                IIT (BHU)
              </div>
              <div className="hero-logo">
                <Image
                  src="/icons_images/meta.png"
                  alt="Meta"
                  width={44}
                  height={44}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
          <h2 className="hero-tagline">
            A New Chapter of Bharat’s <span>AI</span>
          </h2>
          <p>
            Theme: <strong>Foundations, Frontiers & Frameworks</strong> • Sub-theme: <strong>Architecting responsible AI for Bharat</strong>
          </p>
          <Link href="#register" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Register / RSVP
          </Link>
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
              <span>IIT (BHU), Varanasi</span>
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
                <li><strong>Title:</strong> Think India IIT (BHU) proudly presents an AI Summit – “अध्य’AI”</li>
                <li><strong>Tagline:</strong> A New Chapter of Bharat’s AI</li>
                <li><strong>Collaboration:</strong> Think India × IIT (BHU) (Meta collaboration on cover)</li>
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
              <div className="timeline-time">09:00 – 10:00</div>
              <div className="timeline-body">
                <h3>Inaugural Session</h3>
                <p className="muted">Keynote on national AI strategy</p>
                <p><strong>Speakers:</strong> Shri Sunil Kumar Sharma • Prof. Amit Kumar Patra</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">10:00 – 10:30</div>
              <div className="timeline-body">
                <h3>High Tea</h3>
                <p className="muted">Informal interaction with keynote speakers</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">10:30 – 11:30</div>
              <div className="timeline-body">
                <h3>Keynote Session</h3>
                <p><strong>Speaker:</strong> Prof. Manindra Agrawal (Director, IIT Kanpur)</p>
                <p className="muted">Topic: threat detection & privacy concerns</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">11:30 – 13:30</div>
              <div className="timeline-body">
                <h3>Tech Hackathon & Problem Solving</h3>
                <p className="muted"><strong>Powered by Meta AI</strong> • Hands-on AI solution building for societal challenges</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">13:30 – 14:30</div>
              <div className="timeline-body">
                <h3>Networking Lunch</h3>
                <p className="muted">Informal discussions & ecosystem networking</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">14:30 – 16:00</div>
              <div className="timeline-body">
                <h3>AI in Policy and Ethics</h3>
                <p className="muted">Regulatory frameworks • Algorithmic accountability • Ethical safeguards</p>
                <p><strong>Goal:</strong> Build a “Responsible AI Roadmap” for Bharat</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">16:00 – 17:00</div>
              <div className="timeline-body">
                <h3>AI in Medical, Law & Agriculture — Panel Discussion</h3>
                <p className="muted">Focus: health • agriculture • justice sectors</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-time">17:30+</div>
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
            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">SKS</span></div>
              <h3>Sunil Kumar Sharma</h3>
              <p>Hon. IT Minister, Govt. of Uttar Pradesh (Chief Guest)</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">AKP</span></div>
              <h3>Prof. Amit Kumar Patra</h3>
              <p>Director, IIT (BHU) (Patron)</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">RKS</span></div>
              <h3>Prof. Rajeev Kumar Singh</h3>
              <p>Summit Convenor • Head, Electrical Engineering, IIT (BHU)</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">ORA</span></div>
              <h3>Omkar Rai</h3>
              <p>Former DG, STPI</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">MA</span></div>
              <h3>Prof. Manindra Agrawal</h3>
              <p>Director, IIT Kanpur (Keynote)</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">SS</span></div>
              <h3>Sanjeev Sanyal</h3>
              <p>Member, EAC-PM • Economic Advisor to PM, Govt. of India</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">VKS</span></div>
              <h3>Prof. Vivek Kumar Singh</h3>
              <p>Senior Advisor to Govt. of India — Science & Technology</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">AKC</span></div>
              <h3>Prof. Ajit Kumar Chaturvedi</h3>
              <p>Vice Chancellor, BHU</p>
            </div>

            <div className="speaker-card">
              <div className="speaker-icon"><span className="speaker-initials">APS</span></div>
              <h3>Abhay Pratap Singh</h3>
              <p>National Secretary, ABVP</p>
            </div>

            <div className="speaker-card meta">
              <div className="speaker-icon">
                <Image src="/icons_images/meta.png" alt="Meta" width={40} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <h3>Meta AI</h3>
              <p>Industry Experts (Hackathon)</p>
            </div>

            <div className="speaker-card sarvam">
              <div className="speaker-icon">
                <Image src="/icons_images/sarvam.jpeg" alt="Sarvam AI" width={40} height={40} style={{ objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <h3>Sarvam AI</h3>
              <p>Industry participation</p>
            </div>
          </div>
        </section>

        {/* Hackathon */}
        <section id="hackathon" className="content-section">
          <h2 className="section-title">Tech Hackathon</h2>
          <div className="cards-grid">
            <div className="content-card">
              <h3>Powered by Meta AI</h3>
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

        {/* Register */}
        <section id="register" className="content-section">
          <h2 className="section-title">Register / RSVP</h2>
          <div className="register-card">
            <p className="section-subtitle">
              Share the registration link (Google Form / website) and I’ll wire the button to it.
            </p>
            <div className="register-actions">
              <a className="btn-primary" href="#" aria-disabled="true">
                Registration Link (TBD)
              </a>
              <p className="muted">
                Organizers: Think India • IIT (BHU)
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Think India IIT (BHU) • AI Summit “अध्य’AI”. All rights reserved.</p>
      </footer>
    </>
  );
}
