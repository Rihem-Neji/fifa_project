import NavigationBar from "./components/Navbarr";
import Hero from "./components/Hero";
import PlayersList from "./components/PlayersList";
import MatchesList from "./components/MatchesList";
import Footer from "./components/Footer";

import { players, matches } from "./data/data";

function App() {
  return (
    <div className="app">

      <NavigationBar />

      <Hero />

      <main>

        <section id="players" className="section">
          <div className="section-heading">
            <span>OUR STARS</span>
            <h2>⭐ Featured Players</h2>
            <p>
              Discover some of the biggest football stars.
            </p>
          </div>

          <PlayersList players={players} />
        </section>


        <section id="matches" className="section matches-section">

          <div className="section-heading">
            <span>FOOTBALL ACTION</span>
            <h2>🏆 Latest Matches</h2>
            <p>
              Check the latest results and upcoming matches.
            </p>
          </div>

          <MatchesList matches={matches} />

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;