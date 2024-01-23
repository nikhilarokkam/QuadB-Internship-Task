// ShowList.js

import React from 'react';

const ShowList = ({ shows, onShowClick }) => {
  return (
    <div className="show-list">
      {shows.map(({ score, show }) => (
        <div className="show-card" key={show.id} onClick={() => onShowClick(show.id)}>
          <img className="show-image" src={show.image?.medium} alt={show.name} />
          <h3 className="show-title">{show.name}</h3>
          <p>{stripHtmlTags(show.summary)}</p>
          <button className="show-button">View Summary</button>
        </div>
      ))}
    </div>
  );
};

const stripHtmlTags = (htmlString) => {
  const doc = new DOMParser().parseFromString(htmlString, 'text/html');
  return doc.body.textContent || '';
};

export default ShowList;
