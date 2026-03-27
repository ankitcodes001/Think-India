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
          <Link href="#problems">Problems</Link>
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

        {/* PROBLEMS_PLACEHOLDER MOVED UP */}
        <section id="problems" className="content-section">
          <h2 className="section-title">Hackathon Problem Statements</h2>
          <p className="section-subtitle">
            5 problem statements across healthcare, agriculture, security, and cultural heritage. Click any card to expand details.
          </p>

          <div className="problems-pdf-bar">
            <span className="problems-pdf-label">Full problem statements document</span>
            <a
              className="btn-primary problems-pdf-btn"
              href="/Problem Statements AI Summit Hackathon.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF ↓
            </a>
          </div>

          <div className="problems-list">

            {/* PS1 */}
            <details className="problem-item">
              <summary className="problem-summary">
                <div className="problem-meta">
                  <span className="problem-number">01</span>
                  <div className="problem-header-text">
                    <span className="problem-domain problem-domain--health">Healthcare</span>
                    <h3>Unified Lifetime Medical History via Telemedicine (AI-Enabled)</h3>
                  </div>
                </div>
                <span className="problem-chevron" aria-hidden="true">›</span>
              </summary>
              <div className="problem-body">
                <p>Design and build an <strong>AI-powered system</strong> that creates, maintains, and enhances a unified lifetime medical history for patients through telemedicine interactions — structuring unstructured consultations into persistent longitudinal records.</p>
                <div className="problem-cols">
                  <div>
                    <h4>Key Requirements</h4>
                    <ul className="bullets">
                      <li>Patient profile creation & management</li>
                      <li>Teleconsultation simulation (multiple visits)</li>
                      <li>Persistent longitudinal medical history</li>
                      <li>Integrated AI pipeline (mandatory)</li>
                      <li>3–4 consultations per patient demonstrated</li>
                    </ul>
                  </div>
                  <div>
                    <h4>AI Features Required</h4>
                    <ul className="bullets">
                      <li>Automated summarization (text or voice)</li>
                      <li>Extraction of symptoms, medications, diagnosis</li>
                      <li>Cumulative patient history summary</li>
                      <li>Pattern detection across visits</li>
                      <li>Use free LLM API (e.g. Google Gemini)</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Evaluation (S = f(F, A, L, U, P, I, D))</h4>
                    <ul className="bullets">
                      <li><strong>F</strong> — Functionality & Completeness</li>
                      <li><strong>A</strong> — AI Depth & Effectiveness</li>
                      <li><strong>L</strong> — Longitudinal Intelligence</li>
                      <li><strong>U</strong> — Usability & Experience</li>
                      <li><strong>P</strong> — Practicality & Real-World Fit</li>
                      <li><strong>I</strong> — Innovation & Design Thinking</li>
                      <li><strong>D</strong> — Demo & Communication</li>
                    </ul>
                  </div>
                </div>
                <p className="problem-success"><strong>Success:</strong> A patient undergoes multiple teleconsultations, AI processes each to extract and summarize key medical information, building a continuously evolving intelligent medical history.</p>
              </div>
            </details>

            {/* PS2 */}
            <details className="problem-item">
              <summary className="problem-summary">
                <div className="problem-meta">
                  <span className="problem-number">02</span>
                  <div className="problem-header-text">
                    <span className="problem-domain problem-domain--agri">Agriculture</span>
                    <h3>Innovating App-Based Solutions for Sustainable Agriculture</h3>
                  </div>
                </div>
                <span className="problem-chevron" aria-hidden="true">›</span>
              </summary>
              <div className="problem-body">
                <p>Design and develop an innovative mobile or web-based <strong>AgriTech prototype</strong> that connects farmers, buyers, vendors, and government agencies while enabling data-driven agricultural decision-making — integrating smart farming, predictive analytics, and digital marketplaces.</p>
                <div className="problem-cols">
                  <div>
                    <h4>Expected Features</h4>
                    <ul className="bullets">
                      <li>Smart Farm Advisory System (weather, soil, pest alerts)</li>
                      <li>Digital Farm-to-Market Platform with price discovery</li>
                      <li>AI/ML predictive insights (crop prices, yields)</li>
                      <li>IoT & sensor integration (optional)</li>
                      <li>Regional language support (Hindi / Bhojpuri)</li>
                      <li>Government scheme awareness integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Evaluation Criteria</h4>
                    <ul className="bullets">
                      <li>Innovation and originality of solution</li>
                      <li>Practical applicability in rural environments</li>
                      <li>Integration of AI, IoT, or data analytics</li>
                      <li>User experience & accessibility for farmers</li>
                      <li>Potential scalability and real-world impact</li>
                    </ul>
                  </div>
                </div>
                <p className="problem-success"><strong>Goal:</strong> Build scalable, farmer-centric digital solutions that leverage AI, IoT, and mobile technologies to strengthen the agricultural value chain across India.</p>
              </div>
            </details>

            {/* PS3 */}
            <details className="problem-item">
              <summary className="problem-summary">
                <div className="problem-meta">
                  <span className="problem-number">03</span>
                  <div className="problem-header-text">
                    <span className="problem-domain problem-domain--security">Security</span>
                    <h3>AI for Missing Persons Identification & Human Trafficking Prevention</h3>
                  </div>
                </div>
                <span className="problem-chevron" aria-hidden="true">›</span>
              </summary>
              <div className="problem-body">
                <p>Build an <strong>AI-powered platform</strong> that helps identify, track, and assist in the recovery of missing persons by aggregating and analyzing multimodal data sources — providing actionable insights such as possible sightings, match probabilities, alerts, and location patterns.</p>
                <div className="problem-cols">
                  <div>
                    <h4>Mandatory AI Features</h4>
                    <ul className="bullets">
                      <li>Face matching (missing person vs CCTV/public images)</li>
                      <li>Person detection in images/videos</li>
                      <li>NLP-based extraction from text reports</li>
                      <li>Ranking/scoring of possible matches</li>
                      <li>Linking multiple sightings across time/locations</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Ethics & Constraints</h4>
                    <ul className="bullets">
                      <li>Use only synthetic/proxy datasets</li>
                      <li>Avoid misuse of facial recognition</li>
                      <li>Include access control & anonymization safeguards</li>
                      <li>Systems assist authorities — not enable surveillance misuse</li>
                      <li>No real identifiable personal data permitted</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Evaluation (S = f(F, A, M, P, E, I, D))</h4>
                    <ul className="bullets">
                      <li><strong>F</strong> — Functionality & System Completeness</li>
                      <li><strong>A</strong> — AI Effectiveness & Accuracy</li>
                      <li><strong>M</strong> — Multimodal Intelligence</li>
                      <li><strong>P</strong> — Practicality & Real-World Fit</li>
                      <li><strong>E</strong> — Ethical AI & Responsibility</li>
                      <li><strong>I</strong> — Innovation & Design Thinking</li>
                      <li><strong>D</strong> — Demo & Communication</li>
                    </ul>
                  </div>
                </div>
                <p className="problem-success"><strong>Success:</strong> A missing person's profile is created, the system analyzes incoming data, identifies potential matches using AI, and presents actionable insights to assist authorities.</p>
              </div>
            </details>

            {/* PS4 */}
            <details className="problem-item">
              <summary className="problem-summary">
                <div className="problem-meta">
                  <span className="problem-number">04</span>
                  <div className="problem-header-text">
                    <span className="problem-domain problem-domain--agri">Agriculture</span>
                    <h3>Plant Disease Detection Using Leaf Images</h3>
                  </div>
                </div>
                <span className="problem-chevron" aria-hidden="true">›</span>
              </summary>
              <div className="problem-body">
                <p>Develop an <strong>AI-based system</strong> that detects plant diseases from leaf images while addressing real-world challenges. Classify plant leaf images into healthy and diseased classes, and implement at least one innovation track.</p>
                <div className="problem-cols">
                  <div>
                    <h4>Innovation Tracks</h4>
                    <ul className="bullets">
                      <li><strong>Track A – Robustness:</strong> Handle noisy, blurred, varied images</li>
                      <li><strong>Track B – Explainability:</strong> Make predictions interpretable</li>
                      <li><strong>Track C – Lightweight AI:</strong> Deploy on smartphones/edge devices</li>
                      <li><strong>Track D – Synthetic Data:</strong> Address data scarcity via generative models</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Deliverables</h4>
                    <ul className="bullets">
                      <li>Code Repository</li>
                      <li>Report and Presentation Slides</li>
                      <li>Demo (Android app recommended)</li>
                      <li>Dataset: PlantVillage, PlantSeg, or open datasets</li>
                    </ul>
                  </div>
                </div>
                <p className="problem-success"><strong>Evaluation:</strong> Innovation (50%) • Demo (30%) • Code Quality (20%)</p>
              </div>
            </details>

            {/* PS5 */}
            <details className="problem-item">
              <summary className="problem-summary">
                <div className="problem-meta">
                  <span className="problem-number">05</span>
                  <div className="problem-header-text">
                    <span className="problem-domain problem-domain--heritage">Cultural Heritage</span>
                    <h3>Automated Annotation for Indic Manuscripts and Ram Charit Manas</h3>
                  </div>
                </div>
                <span className="problem-chevron" aria-hidden="true">›</span>
              </summary>
              <div className="problem-body">
                <p>Develop methods that produce usable <strong>pre-annotations directly from raw manuscript page images</strong> with minimal supervision — covering layout parsing and text-line/baseline extraction for diverse Indic manuscripts including Ramcharit Manas pages.</p>
                <div className="problem-cols">
                  <div>
                    <h4>Output Tasks</h4>
                    <ul className="bullets">
                      <li>Layout regions: text, marginalia, illustrations, page frames, damage/holes</li>
                      <li>Text-line and baseline extraction</li>
                      <li>Submission format: PAGE-XML or COCO-style JSON</li>
                      <li>Weak supervision & semi-supervised learning encouraged</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Key Rules</h4>
                    <ul className="bullets">
                      <li>Train only on officially released Auto-Annotation dataset</li>
                      <li>No additional manual labeling beyond seed set</li>
                      <li>External pretrained models allowed with full disclosure</li>
                      <li>1–3 submissions per team</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Evaluation</h4>
                    <ul className="bullets">
                      <li><strong>Q</strong> — Annotation Quality (mIoU, PQ, Line F1)</li>
                      <li><strong>E</strong> — Human Effort Score (seconds/page)</li>
                      <li><strong>S</strong> = Q × exp(−λE)</li>
                      <li>Tie-breaker: Hard subset performance, lower effort, faster inference</li>
                    </ul>
                  </div>
                </div>
                <p className="problem-success"><strong>Datasets:</strong> RamCharit-Manas (Archive.org) • Indic Manuscript Dataset (OPenn, UPenn Library)</p>
              </div>
            </details>

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
