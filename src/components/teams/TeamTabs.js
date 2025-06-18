import React from 'react';
import './TeamTabs.css';

function TeamTabs({ current, onChange }) {
  const tabs = [
    { key: 'roster', label: 'Roster' },
    { key: 'fixtures', label: 'Fixtures' },
    { key: 'coaches', label: 'Coaches' }
  ];

  return (
    <div className="team-tabs">
      {tabs.map(tab => (
        <button
          key={tab.key}
          className={current === tab.key ? 'active' : ''}
          onClick={() => onChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default TeamTabs;
