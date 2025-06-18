import React from 'react';
import PlayerCard from './PlayerCard';

function TeamRoster({ players }) {
  if (!players || players.length === 0) return <p>No players listed yet.</p>;

  return (
    <div className="grid">
      {players.map(player => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default TeamRoster;
