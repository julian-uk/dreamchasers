import React from 'react';
import { Link } from 'react-router-dom';
import { galleryEvents } from '../../data/galleryEvents';
import './GalleryGrid.css';

function GalleryGrid() {
  return (
    <div className="gallery-grid grid">
      {galleryEvents.map(event => (
        <Link
          key={event.id}
          to={`/gallery/${event.id}`}
          className="gallery-thumb"
        >
          <div className="image-wrapper">
            <img className="main" src={event.thumbnail} alt={event.title} />
            <img className="hover" src={event.hover} alt={`${event.title} alt`} />
          </div>
          <div className="caption">{event.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default GalleryGrid;
