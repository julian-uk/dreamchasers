import React from 'react';
import './PlayerCard.css';

function PlayerCard({ player }) {
  return (
    <div className="player-card horizontal">
      <img src={player.photo} alt={player.name} className="player-photo" />
      <div className="player-info">
        <h4>#{player.number} {player.name}</h4>
        <p>{player.position}</p>
      </div>
    </div>
  );
}

export default PlayerCard;
