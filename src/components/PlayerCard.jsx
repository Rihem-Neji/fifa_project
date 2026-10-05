import Card from "react-bootstrap/Card";

function PlayerCard({ player }) {
  return (
    <Card className="player-card h-100">
      <Card.Img
        variant="top"
        src={player.image}
        alt={player.name}
        className="player-image"
      />

      <Card.Body>
        <div className="player-number">
          #{player.jerseyNumber}
        </div>

        <Card.Title className="player-name">
          {player.name}
        </Card.Title>

        <p className="player-team">
          {player.team}
        </p>

        <div className="player-info">
          <span>🌍 {player.nationality}</span>
          <span>🎂 {player.age} years</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;