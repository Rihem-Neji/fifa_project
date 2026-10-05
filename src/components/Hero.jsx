import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <div className="hero-content">
          <span className="hero-badge">⚽ FOOTBALL • PASSION • ACTION</span>

          <h1>
            Welcome to
            <span> FIFA Match Center</span>
          </h1>

          <p>
            Discover football stars, follow exciting matches,
            and explore the world of football.
          </p>

          <a href="#players" className="hero-button">
            Explore Players
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Hero;