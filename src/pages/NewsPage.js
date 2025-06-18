import React from 'react';
import { news } from '../data/news';


function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      {news.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default NewsPage;
