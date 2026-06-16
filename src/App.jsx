import React from 'react';
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Github,
  Handshake,
  KeyRound,
  Mail,
  Network,
  Server,
  ShieldCheck,
  Users,
} from 'lucide-react';
import './App.css';

const navItems = [
  { href: '#problem', label: 'The problem' },
  { href: '#response', label: 'Our response' },
  { href: '#open-source', label: 'Open source' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const problemSignals = [
  {
    title: 'Exposure grows quietly',
    copy: 'Shared inboxes, donation platforms, volunteer spreadsheets, and field messaging become critical infrastructure long before anyone names them that way.',
  },
  {
    title: 'Attackers exploit urgency',
    copy: 'Humanitarian work moves fast. Phishing, impersonation, and account takeovers are designed to land exactly when teams are stretched thin.',
  },
  {
    title: 'Recovery steals mission time',
    copy: 'A compromised account can freeze grants, silence helplines, expose vulnerable people, and pull staff away from the work only they can do.',
  },
];

const responsePillars = [
  {
    icon: ShieldCheck,
    title: 'Rapid stabilization',
    copy: 'We help NGOs lock down identities, recover access, preserve evidence, and make the next decision with a calm incident rhythm.',
  },
  {
    icon: KeyRound,
    title: 'Practical hardening',
    copy: 'We turn security basics into repeatable habits: passkeys, admin boundaries, device hygiene, backups, and supplier checks.',
  },
  {
    icon: Handshake,
    title: 'Trusted accompaniment',
    copy: 'We pair technical response with plain-language guidance for boards, program leads, finance teams, and field coordinators.',
  },
];

const infrastructure = [
  'Threat-informed baselines for small NGO stacks',
  'Incident forms that protect sensitive context',
  'Deployment recipes for secure intake and reporting',
  'Reusable policy templates written for non-specialists',
];

const maintainers = [
  {
    role: 'Field security lead',
    focus: 'Incident triage, responder coordination, and protection planning for teams working under pressure.',
  },
  {
    role: 'Infrastructure maintainer',
    focus: 'Open-source deployment patterns, secure defaults, uptime, backups, and documentation that survives turnover.',
  },
  {
    role: 'Digital care strategist',
    focus: 'Training, governance, and board-level decisions that translate technical risk into operational action.',
  },
  {
    role: 'Community analyst',
    focus: 'Abuse pattern tracking, platform escalation, and early warnings for campaigns targeting civil society.',
  },
];

function handleContactSubmit(event) {
  event.preventDefault();

  const form = new FormData(event.currentTarget);
  const organization = form.get('organization') || 'New NGO request';
  const need = form.get('need') || 'We need support from ONGarde.';
  const contact = form.get('contact') || 'No return contact provided.';

  const subject = encodeURIComponent(`ONGarde intake: ${organization}`);
  const body = encodeURIComponent(
    `Organization: ${organization}\nContact: ${contact}\n\nWhat is happening:\n${need}`
  );

  window.location.href = `mailto:intake@ongarde.org?subject=${subject}&body=${body}`;
}

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header" aria-label="ONGarde navigation">
        <a className="brand" href="#top" aria-label="ONGarde home">
          <span className="brand-mark" aria-hidden="true">O</span>
          <span>ONGarde</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-action" href="#contact" aria-label="Open contact intake section">
          <Mail size={16} aria-hidden="true" />
          Intake
        </a>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/ongarde/ngo-cyber-response.png"
            alt="Black-and-white editorial scene of nonprofit responders coordinating a cybersecurity incident"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Cyber resilience for civil society</p>
            <h1 id="hero-title">ONGarde</h1>
            <p className="hero-copy">
              Independent digital protection for NGOs, mutual aid groups, and
              community defenders who need secure operations without enterprise
              complexity.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#contact">
                <Mail size={18} aria-hidden="true" />
                Request support
              </a>
              <a className="button button-secondary" href="#open-source">
                <Github size={18} aria-hidden="true" />
                Explore the stack
              </a>
            </div>
          </div>

          <div className="hero-meta" aria-label="ONGarde support areas">
            <span>Incident support</span>
            <span>Secure operations</span>
            <span>Open-source tooling</span>
          </div>
        </section>

        <section className="section" id="problem" aria-labelledby="problem-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>01</span>
                <p>The problem</p>
              </div>
              <div>
                <h2 id="problem-title">
                  Small teams carry enterprise risk with community-sized budgets.
                </h2>
                <p className="lead">
                  NGOs often become targets because they hold trusted access,
                  sensitive stories, financial records, and networks of people
                  at risk. The danger is real, but the available security advice
                  is too often expensive, abstract, or written for companies with
                  full-time security teams.
                </p>
              </div>
            </div>

            <div className="insight-grid">
              {problemSignals.map((signal) => (
                <article className="insight-card" key={signal.title}>
                  <Network size={24} aria-hidden="true" />
                  <h3>{signal.title}</h3>
                  <p>{signal.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark-band" id="response" aria-labelledby="response-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>02</span>
                <p>Our response</p>
              </div>
              <div>
                <h2 id="response-title">
                  We make protection usable at the exact moment it is needed.
                </h2>
                <p className="lead">
                  ONGarde combines incident response, security coaching, and
                  implementation support. We work beside staff and volunteers,
                  then leave behind the checklists, configurations, and
                  confidence to keep going.
                </p>
              </div>
            </div>

            <div className="response-grid">
              {responsePillars.map(({ icon: Icon, title, copy }) => (
                <article className="response-card" key={title}>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="open-source" aria-labelledby="open-source-title">
          <div className="section-shell infra-layout">
            <div>
              <div className="section-marker">
                <span>03</span>
                <p>Open-source infrastructure</p>
              </div>
              <h2 id="open-source-title">
                A shared security commons for organizations that cannot wait.
              </h2>
              <p className="lead">
                We publish the repeatable pieces: hardening guides, response
                workflows, secure intake patterns, and lightweight monitoring
                recipes. Every component is designed to be inspected, forked, and
                run by resource-constrained teams.
              </p>

              <ul className="check-list">
                {infrastructure.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={19} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="code-panel" aria-label="Open-source stack example">
              <div className="code-panel-bar">
                <span />
                <span />
                <span />
              </div>
              <pre>
{`ongarde-kit/
  identity/
    passkey-rollout.md
    admin-review.yml
  incident/
    first-hour.md
    evidence-log.csv
  infrastructure/
    backup-checks.ts
    intake-worker.ts
  governance/
    board-brief.md`}
              </pre>
            </div>
          </div>
        </section>

        <section className="section team-band" id="team" aria-labelledby="team-title">
          <div className="section-shell">
            <div className="section-intro">
              <div className="section-marker">
                <span>04</span>
                <p>Team</p>
              </div>
              <div>
                <h2 id="team-title">
                  A compact response team built around trust and continuity.
                </h2>
                <p className="lead">
                  ONGarde brings together security engineers, civil society
                  operators, trainers, and maintainers. We are intentionally
                  small, so every engagement has context, accountability, and a
                  named path from first call to follow-up.
                </p>
              </div>
            </div>

            <div className="team-grid">
              {maintainers.map((member) => (
                <article className="team-card" key={member.role}>
                  <Users size={24} aria-hidden="true" />
                  <h3>{member.role}</h3>
                  <p>{member.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-layout">
            <div>
              <div className="section-marker">
                <span>05</span>
                <p>Contact</p>
              </div>
              <h2 id="contact-title">Start with the situation. We will help sort the next step.</h2>
              <p className="lead">
                For urgent incidents, include only what is safe to share by
                email. We can move to a safer channel after the first exchange.
              </p>

              <div className="contact-methods" aria-label="Contact methods">
                <a href="mailto:intake@ongarde.org">
                  <Mail size={20} aria-hidden="true" />
                  intake@ongarde.org
                </a>
                <a href="#open-source">
                  <Braces size={20} aria-hidden="true" />
                  Open-source kit
                </a>
                <a href="#response">
                  <Server size={20} aria-hidden="true" />
                  Incident readiness
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Organization
                <input name="organization" type="text" placeholder="Community Aid Network" />
              </label>
              <label>
                Return contact
                <input name="contact" type="text" placeholder="Name, email, or secure channel" />
              </label>
              <label>
                What is happening?
                <textarea
                  name="need"
                  rows="5"
                  placeholder="A short, non-sensitive summary is enough."
                />
              </label>
              <button className="button button-primary" type="submit">
                <ArrowRight size={18} aria-hidden="true" />
                Open email draft
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>ONGarde</p>
        <p>Original black-and-white cybersecurity support for NGOs.</p>
      </footer>
    </div>
  );
}

export default App;
