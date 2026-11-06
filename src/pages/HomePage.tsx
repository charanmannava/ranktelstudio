import { useState } from "react";
import { Link } from "react-router-dom";
import { games } from "../content";

function GameIcon({ game }: { game: (typeof games)[number] }) {
  const [iconUnavailable, setIconUnavailable] = useState(false);

  return (
    <img
      className="game-icon"
      src={iconUnavailable ? game.artwork : game.icon}
      alt={`${game.name} app icon`}
      onError={() => setIconUnavailable(true)}
    />
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="live-dot" /> INDEPENDENT BY NATURE</div>
          <h1 className="hero-manifesto">
            <span className="manifesto-line manifesto-dream">Dream it.</span>
            <span className="manifesto-line manifesto-build">Build it.</span>
            <span className="manifesto-line manifesto-rank">Rank it.</span>
          </h1>
          <p className="hero-description">
            Ideas should not sit still. We turn them into games you can share,
            stories you can feel, and tools that help you make more.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="#games">Explore our games <span aria-hidden="true">↓</span></a>
            <span className="hero-note">GOOD IDEAS. BETTER PLAY.</span>
          </div>
        </div>
        <div className="hero-art">
          <img className="hero-art-image" src="/images/studio-orbit.svg" alt="Neon orbit surrounding the Ranktel Studio mark" />
          <div className="hero-art-top"><span>RT—001</span><span>STUDIO / PLAY</span></div>
          <div className="hero-art-bottom"><span>IMAGINE</span><span>·</span><span>BUILD</span><span>·</span><span>PLAY</span></div>
        </div>
        <a className="scroll-cue" href="#games" aria-label="Scroll to our games"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="games-section section-wrap" id="games">
        <div className="section-heading">
          <div><div className="eyebrow">01 / CURRENTLY IN YOUR HANDS</div><h2>Small screens.<br /><span>Big energy.</span></h2></div>
          <p>Made for a quick break, a long session, and all the moments in between.</p>
        </div>
        <div className="game-grid">
          {games.map((game) => (
            <article className={`game-card ${game.art}`} key={game.name}>
              <div className={`game-art ${game.art}`}>
                <img
                  src={game.artwork}
                  alt={game.art === "level-born" ? "Level Born AI fitness app logo" : "Retro Cricket pixel-art bowler artwork"}
                  loading="lazy"
                />
              </div>
              <div className="game-info">
                <div className="game-meta"><span>{game.category}</span><span>/{game.number}</span></div>
                <div className="game-title-row"><GameIcon game={game} /><h3>{game.name}</h3></div>
                <p>{game.description}</p>
                <a href={game.url} target="_blank" rel="noreferrer">{game.label}<span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="upcoming-teaser">
          <div><span className="eyebrow">IN DEVELOPMENT / STORY-LED CRICKET</span><h3>Two journeys.<br /><span>One love of the game.</span></h3></div>
          <Link className="text-link" to="/about#cricket-story">Discover what we’re building <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="home-vamp vamp-section">
        <div className="section-wrap vamp-inner">
          <div className="vamp-intro">
            <div className="eyebrow"><span className="status-pill"><span /> IN DEVELOPMENT</span> 02 / NEXT UP</div>
            <div className="vamp-wordmark"><span className="vamp-mark">v</span>vamp<span>AI</span></div>
            <h2>A sharper sidekick<br />for your <span>big ideas.</span></h2>
            <p>Research, reason, and build with an AI workspace in a world of its own.</p>
            <Link className="button button-pink" to="/vampai">Enter the vampAI file <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-vamp-art">
            <img src="/images/vampai-noir.svg" alt="Original neon-noir illustration of a research and AI workspace" loading="lazy" />
            <span>CASE FILE / V—001</span>
          </div>
        </div>
      </section>

      <section className="home-about section-wrap">
        <div className="eyebrow">03 / RANKTEL STUDIO</div>
        <div className="home-about-row">
          <h2>Built with curiosity.<br /><span>Made to move you.</span></h2>
          <div><p>We are an independent studio building games and thoughtful technology—always looking for the next idea worth bringing to life.</p><Link className="text-link" to="/about">More about us <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
