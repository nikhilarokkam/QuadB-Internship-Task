import React, { useState } from 'react';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import './App.css';

const App = () => {
  const [shows] = useState([
    {
      score: 0.70579827,
      show: {
        id: 42181,
        url: 'https://www.tvmaze.com/shows/42181/all-rise',
        name: 'All Rise',
        type: 'Scripted',
        language: 'English',
        genres: ['Drama', 'Legal'],
        status: 'Ended',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2019-09-23',
        ended: '2023-11-18',
        officialSite: 'https://www.oprah.com/sp/all-rise.html',
        schedule: { time: '21:00', days: ['Saturday'] },
        rating: { average: 6.7 },
        weight: 97,
        network: {
          id: 236,
          name: 'Oprah Winfrey Network',
          country: { name: 'United States', code: 'US', timezone: 'America/New_York' },
          officialSite: null,
        },
        webChannel: null,
        dvdCountry: null,
        externals: { tvrage: null, thetvdb: 363841, imdb: 'tt10329042' },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/413/1034988.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg',
        },
        summary:
          '<p><b>All Rise</b> is a courthouse drama that follows the chaotic, hopeful and sometimes absurd lives of its judges, prosecutors and public defenders, as they work with bailiffs, clerks and cops to get justice for the people of Los Angeles amidst a flawed legal process. Among them is newly appointed Judge Lola Carmichael, a highly regarded and impressive deputy district attorney who does not intend to sit back on the bench in her new role, but instead leans in, immediately pushing the boundaries and challenging the expectations of what a judge can be.</p>',
        updated: 1700686554,
        _links: {
          self: { href: 'https://api.tvmaze.com/shows/42181' },
          previousepisode: { href: 'https://api.tvmaze.com/episodes/2320801' },
        },
      },
    },
    {
      score: 0.7052871,
      show: {
        id: 34653,
        url: 'https://www.tvmaze.com/shows/34653/all-american',
        name: 'All American',
        type: 'Scripted',
        language: 'English',
        genres: ['Drama', 'Sports'],
        status: 'Running',
        runtime: 60,
        averageRuntime: 60,
        premiered: '2018-10-10',
        officialSite: 'http://www.cwtv.com/shows/all-american/',
        schedule: { time: '20:00', days: ['Monday'] },
        rating: { average: 6.1 },
        weight: 97,
        network: {
          id: 5,
          name: 'The CW',
          country: { name: 'United States', code: 'US', timezone: 'America/New_York' },
          officialSite: 'https://www.cwtv.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: { tvrage: null, thetvdb: 348200, imdb: 'tt7414406' },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/425/1064746.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg',
        },
        summary:
          '<p>When a rising high school football player from South Central L.A. is recruited to play for Beverly Hills High, the wins, losses and struggles of two families from vastly different worlds — Compton and Beverly Hills — begin to collide. Inspired by the life of pro football player Spencer Paysinger.</p>',
        updated: 1689588083,
        _links: {
          self: { href: 'https://api.tvmaze.com/shows/34653' },
          previousepisode: { href: 'https://api.tvmaze.com/episodes/2530954' },
        },
      },
    },
    {
      score: 0.70117277,
      show: {
        id: 6305,
        url: 'https://www.tvmaze.com/shows/6305/all-that',
        name: 'All That',
        type: 'Variety',
        language: 'English',
        genres: ['Comedy'],
        status: 'Ended',
        runtime: 25,
        averageRuntime: 25,
        premiered: '1994-12-24',
        ended: '2005-10-22',
        officialSite: null,
        schedule: { time: '21:00', days: ['Saturday'] },
        rating: { average: null },
        weight: 82,
        network: {
          id: 27,
          name: 'Nickelodeon',
          country: { name: 'United States', code: 'US', timezone: 'America/New_York' },
          officialSite: 'https://www.nick.com/',
        },
        webChannel: null,
        dvdCountry: null,
        externals: { tvrage: null, thetvdb: 75208, imdb: 'tt0111875' },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/494/1235113.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/494/1235113.jpg',
        },
        summary:
          '<p><b>All That</b> is an American live-action, sketch comedy-variety show that aired on the Nickelodeon cable television network featuring short comedic sketches and weekly musical guests.</p>',
        updated: 1704793728,
        _links: {
          self: { href: 'https://api.tvmaze.com/shows/6305' },
          previousepisode: { href: 'https://api.tvmaze.com/episodes/1268569' },
        },
      },
    },
    {
      score: 0.7010845,
      show: {
        id: 31428,
        url: 'https://www.tvmaze.com/shows/31428/all-night',
        name: 'All Night',
        type: 'Scripted',
        language: 'English',
        genres: ['Comedy'],
        status: 'Ended',
        runtime: null,
        averageRuntime: 23,
        premiered: '2018-05-11',
        ended: '2018-05-11',
        officialSite: 'https://www.hulu.com/all-night',
        schedule: { time: '', days: [] },
        rating: { average: 7.4 },
        weight: 86,
        network: null,
        webChannel: {
          id: 2,
          name: 'Hulu',
          country: { name: 'United States', code: 'US', timezone: 'America/New_York' },
          officialSite: 'https://www.hulu.com/',
        },
        dvdCountry: null,
        externals: { tvrage: null, thetvdb: 346001, imdb: 'tt7292950' },
        image: {
          medium: 'https://static.tvmaze.com/uploads/images/medium_portrait/155/388118.jpg',
          original: 'https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg',
        },
        summary:
          '<p>After their graduation, the class of 2018 gathers to celebrate their last night together at their local rec center for "Grad Night," an all-night party with dancing, karaoke, games—and a rule that no one can come in or out for twelve full hours.</p>',
        updated: 1651425957,
        _links: {
          self: { href: 'https://api.tvmaze.com/shows/31428' },
          previousepisode: { href: 'https://api.tvmaze.com/episodes/1461722' },
        },
      },
    },
  ]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [bookingConfirmation, setBookingConfirmation] = useState('');

  const handleShowClick = (showId) => {
    const selected = shows.find((show) => show.show.id === showId);
    setSelectedShow(selected.show);
  };

  const handleBookTicket = (movieName, type) => {
    // Implement logic to open a form with pre-filled details
    // Use local/session storage to store user details
    const confirmationMessage = `Ticket booked for ${movieName}`;
    setBookingConfirmation(confirmationMessage);
  };

  return (
    <div>
      {bookingConfirmation ? (
        <div>
          <p>{bookingConfirmation}</p>
          <button onClick={() => setBookingConfirmation('')}>Close</button>
        </div>
      ) : (
        <>
          {selectedShow ? (
            <ShowSummary show={selectedShow} onBookTicket={handleBookTicket} />
          ) : (
            <ShowList shows={shows} onShowClick={handleShowClick} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
