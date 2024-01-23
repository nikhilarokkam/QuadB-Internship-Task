import React from 'react';

const ShowSummary = ({ show, onBookTicket }) => {
    return (
      <div>
        <h1>Show Summary</h1>
        <h3>{show.name}</h3>
        <p>Language: {show.language}</p>
        <button onClick={() => onBookTicket(show.name, show.details)}>Book Ticket</button>
      </div>
    );
  };
  
  export default ShowSummary;
