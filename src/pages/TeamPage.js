import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { teams } from '../data/teams';
import TeamTabs from '../components/teams/TeamTabs';
import PlayerCard from '../components/teams/PlayerCard';
import './TeamPage.css';

function TeamPage() {
  const { teamId } = useParams();
  const teamData = teams[teamId];
  const [tab, setTab] = useState('roster');

  if (!teamData) return <p className="container">Team not found.</p>;

  return (
    <div className="container team-page">
      <img src={teamData.photo} alt={`${teamData.name} Team`} className="team-photo" />
      <h2>{teamData.name}</h2>

      <TeamTabs current={tab} onChange={setTab} />

      {tab === 'roster' && (
        <div className="roster-grid">
          {teamData.players.map((p, i) => (
            <PlayerCard key={i} player={p} />
          ))}
        </div>
      )}

      {tab === 'fixtures' && (
        <ul className="fixture-list">
          {teamData.fixtures.map((f, i) => (
            <li key={i} className="fixture-item">
              <img src={f.logo} alt={f.opponent} />
              <div>
                <strong>{f.date} – {f.opponent}</strong><br />
                {f.time} @ {f.location}
              </div>
            </li>
          ))}
        </ul>
      )}

      {tab === 'coaches' && (
        <div className="coach-grid">
          {teamData.coaches.map((c, i) => (
            <div key={i} className="coach-card">
              <img src={c.photo} alt={c.name} />
              <p><strong>{c.name}</strong></p>
              <p>{c.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamPage;
