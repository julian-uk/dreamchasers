import React from 'react';
import { Link } from 'react-router-dom';
import { newsItems } from '../../data/news';
import './NewsGrid.css';

function NewsGrid() {
  return (
    <div className="news-grid grid">
      {newsItems.map(news => (
        <Link
          to={`/news/${news.id}`}
          key={news.id}
          className="news-card"
        >
          <img src={news.thumbnail} alt={news.title} />
          <div className="overlay">{news.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default NewsGrid;
