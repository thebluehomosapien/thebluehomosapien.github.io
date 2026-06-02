import Beams from './Beams'

export default function App() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#0d1f33", fontSize: 16, lineHeight: 1.6, WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@300;400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        a { text-decoration: none; }

        nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(12px);
          border-bottom: 1px solid #eaf3fc;
          padding: 0 2rem; display: flex; align-items: center;
          justify-content: space-between; height: 56px;
        }
        .nav-logo { font-family: 'DM Mono', monospace; font-size: 14px; color: #0d1f33; letter-spacing: -0.01em; }
        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 14px; color: #4a7090; transition: color 0.15s; }
        .nav-links a:hover { color: #0d1f33; }

        .hero-wrap { position: relative; overflow: hidden; border-bottom: 1px solid #d6e6f7; }
        .beams-bg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .hero-inner {
          position: relative; z-index: 2;
          max-width: 720px; margin: 0 auto;
          padding: 140px 2rem 100px;
        }
        .hero-label { font-family: 'DM Mono', monospace; font-size: 12px; color: rgba(255,255,255,0.5); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .hero-h1 { font-size: clamp(2.4rem, 6vw, 3.5rem); font-weight: 300; line-height: 1.15; letter-spacing: -0.03em; color: #ffffff; margin-bottom: 1.5rem; }
        .hero-h1 em { font-style: italic; font-weight: 300; color: #0dbdef; }
        .hero-sub { font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 520px; margin-bottom: 2.5rem; }
        .hero-links { display: flex; gap: 1rem; flex-wrap: wrap; }

        .btn { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 400; text-decoration: none; transition: all 0.15s; cursor: pointer; border: 1px solid transparent; font-family: inherit; }
        .btn-primary { background: #0dbdef; color: #000; }
        .btn-primary:hover { opacity: 0.85; }
        .btn-outline { background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.85); border-color: rgba(255,255,255,0.25); }
        .btn-outline:hover { background: rgba(255,255,255,0.2); color: #fff; }

        main { max-width: 720px; margin: 0 auto; padding: 0 2rem; }
        .divider { width: 100%; height: 1px; background: #d6e6f7; }
        section { padding: 80px 0; }
        .section-label { font-family: 'DM Mono', monospace; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #9bbad4; margin-bottom: 2.5rem; }

        .about-text { font-size: 17px; color: #4a7090; line-height: 1.8; margin-bottom: 1.2rem; }

        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1px; background: #d6e6f7; border: 1px solid #d6e6f7; border-radius: 10px; overflow: hidden; margin-top: 2.5rem; }
        .skill-cell { background: #f5f9fe; padding: 1.25rem 1.5rem; }
        .skill-cell h3 { font-size: 13px; font-weight: 500; color: #0d1f33; margin-bottom: 0.6rem; }
        .skill-cell p { font-size: 13px; color: #4a7090; line-height: 1.6; }

        .project-list { display: flex; flex-direction: column; border: 1px solid #d6e6f7; border-radius: 10px; overflow: hidden; }
        .project-item { background: #f5f9fe; padding: 1.5rem 1.75rem; display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; border-bottom: 1px solid #d6e6f7; transition: background 0.15s; cursor: pointer; }
        .project-item:last-child { border-bottom: none; }
        .project-item:hover { background: #eaf3fc; }
        .project-info { flex: 1; }
        .project-title { font-size: 15px; font-weight: 500; color: #0d1f33; margin-bottom: 4px; }
        .project-desc { font-size: 13px; color: #4a7090; line-height: 1.5; margin-bottom: 12px; }
        .tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .tag { font-family: 'DM Mono', monospace; font-size: 11px; padding: 3px 8px; background: #deeefb; color: #1a6ab8; border-radius: 4px; }
        .project-arrow { font-size: 18px; color: #9bbad4; flex-shrink: 0; margin-top: 2px; transition: transform 0.15s, color 0.15s; }
        .project-item:hover .project-arrow { transform: translate(3px, -3px); color: #1a7fd4; }

        .exp-list { display: flex; flex-direction: column; gap: 2rem; }
        .exp-item { display: grid; grid-template-columns: 130px 1fr; gap: 1.5rem; }
        .exp-date { font-family: 'DM Mono', monospace; font-size: 12px; color: #9bbad4; padding-top: 2px; line-height: 1.4; }
        .exp-role { font-size: 15px; font-weight: 500; color: #0d1f33; margin-bottom: 2px; }
        .exp-company { font-size: 14px; color: #4a7090; margin-bottom: 8px; }
        .exp-desc { font-size: 14px; color: #4a7090; line-height: 1.65; }

        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 2rem; }
        .contact-card { background: #f5f9fe; border: 1px solid #d6e6f7; border-radius: 10px; padding: 1.25rem; display: flex; flex-direction: column; gap: 4px; transition: all 0.15s; }
        .contact-card:hover { border-color: #1a7fd4; background: #eaf3fc; }
        .contact-label { font-family: 'DM Mono', monospace; font-size: 11px; color: #9bbad4; text-transform: uppercase; letter-spacing: 0.06em; }
        .contact-value { font-size: 14px; color: #0d1f33; }

        footer { border-top: 1px solid #d6e6f7; padding: 2rem 0 3rem; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-family: 'DM Mono', monospace; font-size: 12px; color: #9bbad4; }

        @media (max-width: 600px) {
          nav { padding: 0 1.25rem; }
          main { padding: 0 1.25rem; }
          .hero-inner { padding: 110px 1.25rem 70px; }
          .exp-item { grid-template-columns: 1fr; gap: 0.25rem; }
          section { padding: 60px 0; }
          footer { flex-direction: column; gap: 1rem; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#home">garret_feng /</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO with Beams */}
      <div className="hero-wrap">
        <div className="beams-bg">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#0dbdef"
            speed={2}
            noiseIntensity={1.2}
            scale={0.2}
            rotation={113}
          />
        </div>
        <div className="hero-inner">
          <p className="hero-label">IT Professional · Based in Los Angeles</p>
          <h1 className="hero-h1">Hi, I'm Garret —<br /><em>IT support specialist</em><br />& software builder.</h1>
          <p className="hero-sub">
            I keep systems running, solve technical problems, and build software tools on the side.
            Currently open to new opportunities.
          </p>
          <div className="hero-links">
            <a className="btn btn-primary" href="#contact">Get in touch</a>
            <a className="btn btn-outline" href="#projects">View projects</a>
            <a className="btn btn-outline" href="#">Resume ↗</a>
          </div>
        </div>
      </div>

      <main>
        {/* ABOUT */}
        <section id="about">
          <p className="section-label">About</p>
          <p className="about-text">
            I'm an IT support specialist with a passion for keeping things running smoothly —
            from helpdesk troubleshooting to network infrastructure. I'm also a tinkerer who builds
            software tools in my spare time.
          </p>
          <p className="about-text">
            Outside of work you'll find me exploring home lab setups, automating mundane tasks,
            or trying to figure out why something stopped working at 2 AM.
          </p>
          <div className="skills-grid">
            <div className="skill-cell"><h3>IT Support</h3><p>Helpdesk, ticketing, hardware, remote support, Windows & macOS</p></div>
            <div className="skill-cell"><h3>Networking</h3><p>TCP/IP, DNS, DHCP, VLANs, VPN setup and troubleshooting</p></div>
            <div className="skill-cell"><h3>Systems</h3><p>Active Directory, Azure AD, Microsoft 365, endpoint management</p></div>
            <div className="skill-cell"><h3>Development</h3><p>Python, scripting, automation, web projects, home lab setups</p></div>
          </div>
        </section>

        <div className="divider" />

        {/* PROJECTS */}
        <section id="projects">
          <p className="section-label">Projects</p>
          <div className="project-list">
            {[
              { title: "Project One", desc: "A short description of what this project does and the problem it solves. Replace with your actual project.", tags: ["python", "automation"] },
              { title: "Project Two", desc: "Another project description here. What did you build, and what does it do?", tags: ["javascript", "web"] },
              { title: "Home Lab Setup", desc: "A self-hosted network lab for testing configurations, monitoring tools, and learning infrastructure concepts.", tags: ["networking", "linux", "proxmox"] },
            ].map((p) => (
              <div className="project-item" key={p.title}>
                <div className="project-info">
                  <p className="project-title">{p.title}</p>
                  <p className="project-desc">{p.desc}</p>
                  <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* EXPERIENCE */}
        <section id="experience">
          <p className="section-label">Experience</p>
          <div className="exp-list">
            {[
              { date: "2023 —\nPresent", role: "IT Support Specialist", company: "Company Name", desc: "Brief description of your responsibilities — what you supported, what you improved, and any notable achievements." },
              { date: "2021 — 2023", role: "Help Desk Technician", company: "Previous Company", desc: "Handled tier 1 & 2 support tickets, managed hardware inventory, onboarded new employees, and administered M365 accounts." },
              { date: "2020 — 2021", role: "Earlier Role", company: "Company or School", desc: "A short line about what you did here. Replace with your actual history." },
            ].map((e) => (
              <div className="exp-item" key={e.role}>
                <p className="exp-date" style={{ whiteSpace: "pre-line" }}>{e.date}</p>
                <div>
                  <p className="exp-role">{e.role}</p>
                  <p className="exp-company">{e.company}</p>
                  <p className="exp-desc">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* CONTACT */}
        <section id="contact">
          <p className="section-label">Contact</p>
          <div className="contact-grid">
            <a className="contact-card" href="mailto:garret@email.com">
              <span className="contact-label">Email</span>
              <span className="contact-value">garret@email.com</span>
            </a>
            <a className="contact-card" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/you</span>
            </a>
            <a className="contact-card" href="https://github.com/yourhandle" target="_blank" rel="noreferrer">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/you</span>
            </a>
          </div>
        </section>

        <footer>
          <p className="footer-copy">© 2026 Garret Feng</p>
          <p className="footer-copy">Built with care</p>
        </footer>
      </main>
    </div>
  )
}
