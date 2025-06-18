import React from 'react';
import { useParams } from 'react-router-dom';
import { teams } from '../data/teams';
import TeamRoster from '../components/teams/TeamRoster';

function TeamPage() {
  const { teamId } = useParams();
  const team = teams[teamId];

  if (!team) return <p>Team not found.</p>;

  return (
    <div>
      <h1>{team.name}</h1>
      {<TeamRoster players={team.players} />
      /* Add TeamRoster, TeamStatistics, FixturesList, ResultsList */}
    </div>
  );
}

export default TeamPage;
