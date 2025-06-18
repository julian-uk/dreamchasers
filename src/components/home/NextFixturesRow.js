import React, { useRef, useState, useEffect } from 'react';
import './NextFixturesRow.css';

const fixtures = [
  { team: 'U12 Boys', opponent: 'Mini Hoopers', date: 'June 20', time: '10:00 AM' },
  { team: 'U14 Boys', opponent: 'Rising Stars', date: 'June 21', time: '11:30 AM' },
  { team: 'U16 Boys', opponent: 'City Hoopers', date: 'June 22', time: '1:00 PM' },
  { team: 'U18 Boys', opponent: 'Court Kings', date: 'June 23', time: '2:30 PM' },
  { team: "Men's Team", opponent: 'Pro Ballers', date: 'June 24', time: '4:00 PM' },
];

function NextFixturesRow() {
  const scrollRef = useRef();
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' });
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    el.addEventListener('scroll', updateScrollState);
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <div className="fixtures-container">
      {!atStart && <button className="scroll-button left" onClick={() => scroll('left')}>‹</button>}
      <div className="fixtures-row" ref={scrollRef}>
        {fixtures.map((game, idx) => (
          <div key={idx} className="fixture-card">
            <h3>{game.team}</h3>
            <p>vs {game.opponent}</p>
            <p>{game.date} — {game.time}</p>
          </div>
        ))}
      </div>
      {!atEnd && <button className="scroll-button right" onClick={() => scroll('right')}>›</button>}
    </div>
  );
}

export default NextFixturesRow;
