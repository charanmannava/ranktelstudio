import { Link } from "react-router-dom";

function PageIntro({ label, title, highlight, description }: { label: string; title: string; highlight: string; description: string }) {
  return (
    <section className="page-intro section-wrap">
      <div className="eyebrow"><span className="live-dot" /> {label}</div>
      <h1>{title}<br /><span>{highlight}</span></h1>
      <p>{description}</p>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageIntro
        label="A SMALL STUDIO WITH BIG CURIOSITY"
        title="We make room"
        highlight="for what’s next."
        description="Ranktel Studio is an independent game and technology studio. We make playful experiences, explore ambitious stories, and build tools that help people think and create."
      />
      <section className="about-values section-wrap">
        <div className="eyebrow">OUR POINT OF VIEW / 01</div>
        <div className="values-grid">
          <article><span>01</span><h2>Play is a serious idea.</h2><p>Games can surprise, connect, challenge, and stay with you long after you put the phone down.</p></article>
          <article><span>02</span><h2>Big ideas start small.</h2><p>We prototype, learn, and keep moving—making each experience with intention and room to grow.</p></article>
          <article><span>03</span><h2>Technology should help.</h2><p>We explore new tools in service of real creative work, not just for the sake of the latest trend.</p></article>
        </div>
      </section>
      <section className="cricket-story-section" id="cricket-story">
        <div className="section-wrap cricket-story-grid">
          <div className="cricket-story-art">
            <img src="/images/cricket-story.svg" alt="Original illustration of two cricket players facing a glowing horizon" loading="lazy" />
            <div className="classified-overlay" aria-label="Top secret project in development">
              <span className="classified-stamp">TOP<br />SECRET</span>
              <span className="classified-caption">RANKTEL ARCHIVES / CASE 001</span>
              <span className="classified-status">UNTITLED PROJECT · IN DEVELOPMENT</span>
            </div>
          </div>
          <div className="cricket-story-copy">
            <div className="eyebrow"><span className="classified-redact" /> CLASSIFIED PROJECT / ACCESS GRANTED: YOU</div>
            <h2>Two beginnings.<br /><span>One shared dream.</span></h2>
            <p className="story-lead">We’re imagining a realistic cricket game with an anime-inspired heart and a story built around two players.</p>
            <p>They come from difficult childhoods, discover a shared passion for cricket, and find their way forward through practice, setbacks, rivalry, and friendship. Their journeys meet on the pitch—where every delivery matters, and every decision moves the story.</p>
            <p>This untitled project is in development. Its characters, world, and gameplay will take shape as we build.</p>
            <Link className="text-link" to="/opportunities">Help bring bold ideas to life <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
      <section className="about-cta section-wrap">
        <div><div className="eyebrow">THE PEOPLE BEHIND THE PIXELS</div><h2>Small team.<br /><span>Long game.</span></h2></div>
        <Link className="button button-lime" to="/team">Meet our founder <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}

export function TeamPage() {
  return (
    <>
      <PageIntro
        label="THE PEOPLE BEHIND RANKTEL"
        title="Built by a"
        highlight="player at heart."
        description="A small, founder-led studio driven by curiosity, craft, and a lifelong love of games."
      />
      <section className="team-section section-wrap">
        <article className="founder-card">
          <div className="founder-art">
            <img src="/images/founder-harsha.png" alt="Ranktel Studio founder Harsha Vardhan Gingupalli" />
            <span>FOUNDER / PLAYER 01</span>
          </div>
          <div className="founder-bio">
            <div className="eyebrow">FOUNDER / RANKTEL STUDIO</div>
            <h2>Harsha Vardhan<br /><span>Gingupalli</span></h2>
            <p className="founder-role">B.Tech graduate · Gamer · Builder</p>
            <p>Harsha founded Ranktel Studio with a passion for gaming and a belief that memorable experiences can come from a small team with a big imagination. He is building the studio one idea at a time—from games made to bring people together to ambitious new projects and AI-powered tools.</p>
            <a className="text-link" href="mailto:harsha@ranktelstudio.com">Say hello <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </section>
      <section className="team-note section-wrap"><span className="eyebrow">GROWING ONE GOOD IDEA AT A TIME</span><p>Ranktel is currently founder-led. As the studio grows, this is where new teammates and collaborators will be introduced.</p><Link to="/careers">See careers <span aria-hidden="true">↗</span></Link></section>
    </>
  );
}

export function CareersPage() {
  return (
    <>
      <PageIntro label="CAREERS AT RANKTEL" title="No open roles." highlight="Not forever." description="We’re a small studio focused on building thoughtfully. There are no open positions right now, but we’re always glad to hear from people who care about games and creative technology." />
      <section className="careers-panel section-wrap">
        <div className="careers-orbit" aria-hidden="true">R</div>
        <div className="eyebrow">OPEN POSITIONS / 00</div>
        <h2>We’re not hiring<br />just <span>yet.</span></h2>
        <p>When the right role opens, we’ll share it here. Until then, tell us what you make and what you’d love to build with us.</p>
        <a className="button button-lime" href="mailto:harsha@ranktelstudio.com?subject=Future%20opportunities%20at%20Ranktel%20Studio">Introduce yourself <span aria-hidden="true">↗</span></a>
      </section>
      <div className="section-wrap careers-footnote">Please note: an introduction is not an application to an open role.</div>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageIntro label="SAY HELLO" title="Every good thing" highlight="starts somewhere." description="Have a question about our games, vampAI, or the studio? We’re a small team, so your message goes straight to our founder." />
      <section className="contact-grid section-wrap">
        <a className="contact-card contact-primary" href="mailto:harsha@ranktelstudio.com">
          <span className="eyebrow">GENERAL ENQUIRIES / EMAIL</span><span className="contact-icon">↗</span>
          <h2>harsha@ranktelstudio.com</h2><p>We’d love to hear what’s on your mind.</p>
        </a>
        <a className="contact-card" href="mailto:harsha@ranktelstudio.com?subject=Ranktel%20Studio%20careers">
          <span className="eyebrow">CAREERS</span><h2>Future roles</h2><p>No open positions right now. Share a little about yourself for future opportunities.</p><span className="contact-arrow">Write to us ↗</span>
        </a>
        <a className="contact-card" href="mailto:harsha@ranktelstudio.com?subject=Business%20collaboration">
          <span className="eyebrow">BUSINESS / PARTNERSHIPS</span><h2>Let’s build together.</h2><p>Open to thoughtful collaborations around games, technology, and creative ideas.</p><span className="contact-arrow">Start a conversation ↗</span>
        </a>
      </section>
    </>
  );
}

export function OpportunitiesPage() {
  return (
    <>
      <PageIntro label="BUSINESS OPPORTUNITIES" title="Good ideas get" highlight="better together." description="We’re open to meeting people and teams who want to collaborate on meaningful games and useful technology." />
      <section className="opportunity-section section-wrap">
        <div className="opportunity-copy">
          <div className="eyebrow">LET’S FIND THE RIGHT FIT</div>
          <h2>Bring your idea.<br /><span>We’ll bring ours.</span></h2>
          <p>We’re interested in conversations about publishing and distribution, game development partnerships, creative collaborations, and technology that helps people make or play better.</p>
          <p>Have a specific opportunity in mind? Tell us what you’re working on, what you hope to build together, and how to reach you.</p>
          <a className="button button-lime" href="mailto:harsha@ranktelstudio.com?subject=Business%20collaboration%20with%20Ranktel%20Studio">Propose a collaboration <span aria-hidden="true">↗</span></a>
        </div>
        <div className="opportunity-list">
          <div><span>01</span><h3>Games & publishing</h3><p>Distribution, publishing, and bringing distinctive game ideas to more players.</p></div>
          <div><span>02</span><h3>Creative partnerships</h3><p>Co-creating stories, experiences, and worlds with people who share our curiosity.</p></div>
          <div><span>03</span><h3>Technology & AI</h3><p>Exploring practical tools and responsible AI experiences with aligned partners.</p></div>
        </div>
      </section>
    </>
  );
}
