import React from 'react';

const Card = ({ title, link, image }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <h3 className="card-title">{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        Lihat Playlist
      </a>
    </div>
  );
};

export default Card;
