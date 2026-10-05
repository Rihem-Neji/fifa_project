import Card from "react-bootstrap/Card";

function MatchCard({ match }) {
  const isFinished = match.status === "FINISHED";

  return (
    <Card className="match-card">
      <Card.Body>

        <div className="match-status">
          <span className={isFinished ? "finished" : "upcoming"}>
            {match.status}
          </span>
        </div>

        <div className="match-teams">

          <div className="team">
            <img
              src={match.logo1}
              alt={match.team1}
              className="team-logo"
            />

            <h4>{match.team1}</h4>
          </div>

          <div className="score">

            {isFinished ? (
              <>
                <span>{match.score1}</span>
                <small> - </small>
                <span>{match.score2}</span>
              </>
            ) : (
              <span className="vs">VS</span>
            )}

          </div>

          <div className="team">
            <img
              src={match.logo2}
              alt={match.team2}
              className="team-logo"
            />

            <h4>{match.team2}</h4>
          </div>

        </div>

        <div className="match-details">
          <span>📅 {match.date}</span>
          <span>🕐 {match.time}</span>
        </div>

      </Card.Body>
    </Card>
  );
}

export default MatchCard;
