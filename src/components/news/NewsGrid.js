import React from 'react';
import { news } from '../../data/news';
import './NewsGrid.css';

function NewsGrid() {
  return (
    <div className="grid news-grid">
      {news.map(item => (
        <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <p>{item.title}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default NewsGrid;
