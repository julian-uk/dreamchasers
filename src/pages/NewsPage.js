import React from 'react';
import { useParams } from 'react-router-dom';
import { newsItems } from '../data/news';
import './NewsPage.css';

function NewsPage() {
  const { newsId } = useParams();
  const news = newsItems.find(n => n.id === newsId);

  if (!news) return <div className="container">News item not found.</div>;

  return (
    <div className="container news-detail">
      {/* Banner Style Layout */}
      {news.layout === 'banner' && (
        <>
          <div
            className="news-banner"
            style={{ backgroundImage: `url(${news.images[0]})` }}
          >
            <h2>{news.title}</h2>
          </div>
          <p className="news-date">{news.date}</p>
          <p className="news-description">{news.description}</p>
          <div className="news-images">
            {news.images.slice(1).map((src, i) => (
              <img key={i} src={src} alt={`news ${i}`} />
            ))}
          </div>
        </>
      )}

      {/* Side-by-Side Layout */}
      {news.layout === 'side-by-side' && (
        <>
          <div className="news-intro">
            <img src={news.images[0]} alt="main" className="news-feature-img" />
            <div>
              <h2>{news.title}</h2>
              <p className="news-date">{news.date}</p>
              <p>{news.description}</p>
            </div>
          </div>
          <div className="news-images">
            {news.images.slice(1).map((src, i) => (
              <img key={i} src={src} alt={`news ${i + 2}`} />
            ))}
          </div>
        </>
      )}

      {/* Default Layout */}
      {(!news.layout || news.layout === 'default') && (
        <>
          <h2>{news.title}</h2>
          <p className="news-date">{news.date}</p>
          <p className="news-description">{news.description}</p>
          <div className="news-images">
            {news.images.map((src, i) => (
              <img key={i} src={src} alt={`news ${i}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NewsPage;
