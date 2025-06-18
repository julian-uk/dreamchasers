import React from 'react';

function PlayerCard({ player }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: 200 }}>
      <h3>{player.name}</h3>
      <p>Position: {player.position}</p>
      <p>Number: {player.number}</p>
    </div>
  );
}

export default PlayerCard;
