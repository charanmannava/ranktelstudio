import { Link } from "react-router-dom";
import { vampFeatures } from "../content";

const principles = [
  { index: "01", name: "Understand", copy: "Natural-language processing helps make complex questions easier to ask and follow." },
  { index: "02", name: "Reason", copy: "Large language models and graph-based workflows are being explored for structured, multi-step assistance." },
  { index: "03", name: "Create", copy: "From programming help to vibe coding, vampAI aims to turn a rough idea into a useful next step." },
];

export function VampAIPage() {
  return (
    <div className="vamp-page">
      <section className="vamp-hero vamp-reference-hero" id="about">
        <div className="section-wrap vamp-hero-content">
          <div className="vamp-hero-copy">
            <div className="eyebrow"><span className="status-pill"><span /> IN DEVELOPMENT</span> YOUR IDEAS, IN MOTION</div>
            <h1>Think it.<br /><span className="vamp-headline-ask">Ask it.</span><br /><span className="vamp-headline-vamp">Vamp it.</span></h1>
            <p>Your intelligent ally for ideas, execution, and more.<br />An AI that thinks, creates, and acts with you.</p>
            <div className="vamp-hero-actions">
              <a className="button button-lime" href="mailto:harsha@ranktelstudio.com?subject=vampAI%20early%20access">Try vampAI <span aria-hidden="true">→</span></a>
              <a className="vamp-demo-link" href="#playground"><span aria-hidden="true">▷</span> Watch concept</a>
            </div>
            <span className="vamp-powered-by">A RANKTEL STUDIO PROJECT</span>
          </div>
          <div className="vamp-hero-card" aria-label="vampAI animated intelligence emblem">
            <div className="vamp-card-top"><span>VAMP AI / 001</span><span>INTELLIGENCE / ACTION</span></div>
            <div className="vamp-card-grid" />
            <span className="vamp-orbit vamp-orbit-one" />
            <span className="vamp-orbit vamp-orbit-two" />
            <img src="/images/vampai-sigil.svg" alt="" />
            <div className="vamp-card-bottom"><span>THINK</span><i>›</i><span>CREATE</span><i>›</i><span>BUILD</span></div>
          </div>
        </div>
      </section>

      <section className="vamp-mission section-wrap" id="features">
        <div className="vamp-section-heading">
          <div className="eyebrow">A WORKSPACE FOR THE WAY YOU THINK</div>
          <h2>Bring the question.<br /><span>Find a way forward.</span></h2>
        </div>
        <div className="vamp-mission-copy">
          <p>vampAI is being developed as an AI assistant for research, writing, learning, and programming. Ask a question, explore a document, organize a project, or start building from a first idea.</p>
          <p>We’re exploring natural-language processing, machine learning, large language models, and LangGraph workflows. These are development goals—not claims that every integration is already available.</p>
        </div>
      </section>

      <section className="vamp-reasoning" id="models">
        <div className="section-wrap">
          <div className="eyebrow">THE APPROACH / ASK → INVESTIGATE → BUILD</div>
          <div className="principle-grid">
            {principles.map((item) => (
              <article key={item.index}><span>{item.index} / 03</span><h3>{item.name}</h3><p>{item.copy}</p></article>
            ))}
          </div>
          <p className="vamp-model-note"><span>MODEL-AGNOSTIC BY DESIGN</span> A shared provider architecture is intended to support different AI services as the product evolves.</p>
        </div>
      </section>

      <section className="vamp-playground section-wrap" id="playground">
        <div className="vamp-playground-copy">
          <div className="eyebrow"><span className="live-dot" /> PLAYGROUND / CONCEPT PREVIEW</div>
          <h2>From “what if?”<br /><span>to “it works.”</span></h2>
          <p>Imagine describing what you want to make, then working through the details with an assistant that helps you reason, explore options, and shape the next step.</p>
          <p className="vamp-preview-note">This is a product direction, not a live demo. vampAI is still in development.</p>
        </div>
        <div className="vamp-chat-preview">
          <div className="vamp-chat-title"><span><i /> VAMP AI</span><span>CONCEPT / 01</span></div>
          <div className="vamp-prompt-label">YOUR PROMPT</div>
          <div className="vamp-prompt">I have an idea. Help me think it through and build a first version.</div>
          <div className="vamp-response-label"><span>V</span> THINKING PARTNER</div>
          <div className="vamp-response-lines"><i /><i /><i /><i /></div>
          <div className="vamp-suggestion"><span>01</span> Understand the goal <b>↗</b></div>
          <div className="vamp-suggestion"><span>02</span> Map a thoughtful plan <b>↗</b></div>
          <div className="vamp-input"><span>Keep exploring your idea...</span><b>↑</b></div>
          <div className="vamp-chat-disclaimer">ILLUSTRATIVE PREVIEW / NOT A LIVE ASSISTANT</div>
        </div>
      </section>

      <section className="vamp-tools section-wrap" id="docs">
        <div className="eyebrow">THE TOOLKIT / BUILT AROUND YOUR WORK</div>
        <h2>One thought at a time.<br /><span>Many ways to move it forward.</span></h2>
        <div className="vamp-tool-grid">
          {vampFeatures.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <div className="feature-top"><span>{feature.number} / 04</span><span>{feature.icon}</span></div>
              <h3>{feature.title}</h3><p>{feature.description}</p>
            </article>
          ))}
          <article className="feature-card roadmap-card"><div className="feature-top"><span>ROADMAP</span><span>⌕</span></div><h3>Fresh information</h3><p>Web search is planned to help bring current information into future conversations.</p></article>
          <article className="feature-card roadmap-card"><div className="feature-top"><span>EXPLORING</span><span>⌘</span></div><h3>Vibe coding</h3><p>Move from a natural-language idea toward code you can understand, shape, and make your own.</p></article>
        </div>
      </section>

      <aside className="vamp-trust section-wrap">
        <span className="trust-mark">i</span><div><h2>Useful, not infallible.</h2><p>AI can make mistakes. vampAI is being designed to support thoughtful work—not replace your judgment. Always verify important answers, especially for high-stakes decisions.</p></div>
      </aside>

      <section className="vamp-end section-wrap">
        <div className="eyebrow">IN DEVELOPMENT / BY RANKTEL STUDIO</div>
        <h2>Think it.<br /><span>Then make it real.</span></h2>
        <p>Want to follow vampAI or explore a collaboration? Get in touch with the studio.</p>
        <div className="hero-actions">
          <a className="button button-lime" href="mailto:harsha@ranktelstudio.com?subject=vampAI%20early%20access">Get early access updates <span aria-hidden="true">↗</span></a>
          <Link className="text-link" to="/opportunities">Business enquiries <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </div>
  );
}
