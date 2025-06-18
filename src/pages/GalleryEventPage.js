import React from 'react';
import { useParams } from 'react-router-dom';
import { galleryEvents } from '../data/galleryEvents';
import './GalleryEventPage.css';

function GalleryEventPage() {
  const { eventId } = useParams();
  const event = galleryEvents.find(e => e.id === eventId);
  if (!event) return <p>Event not found.</p>;

  return (
    <div className="gallery-event container">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <div className="event-grid">
        {event.images.map((src, i) => (
          <img key={i} src={src} alt={`${event.title} ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default GalleryEventPage;
