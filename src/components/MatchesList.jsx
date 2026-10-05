import Container from "react-bootstrap/Container";

import MatchCard from "./MatchCard";

function MatchesList({ matches }) {
  return (
    <Container>
      <div className="matches-container">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            match={match}
          />
        ))}
      </div>
    </Container>
  );
}

export default MatchesList;