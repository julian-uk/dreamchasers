import React from 'react';
import { Link } from 'react-router-dom';

const teams = {
  u12: "U12 Boys",
  u14: "U14 Boys",
  u16: "U16 Boys",
  u18: "U18 Boys",
  men: "Men's Team"
};

function TeamList() {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h1>Our Teams</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.entries(teams).map(([id, name]) => (
          <li key={id} style={{ marginBottom: '1rem' }}>
            <Link to={`/teams/${id}`} style={{ fontSize: '1.2rem' }}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamList;
