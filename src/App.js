import React, { useEffect, useState } from 'react';
import React from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import Illustration from './components/Illustration/Illustration';
import InfoCard from './components/Infocard/Infocard';
import './style.css';

export default function App() {
  const [films, setFilms] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [foundFilm, setFoundFilm] = useState(null);
  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);
  const handleInput = (ev) => {
    setUserInput(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const result = films.find(
      (film) =>
        film.title.toLowerCase().includes(userInput.toLowerCase()) ||
        film.director.toLowerCase().includes(userInput.toLowerCase()) ||
        film.opening_crawl.toLowerCase().includes(userInput.toLowerCase())
    );
    setFoundFilm(result);
  };

  console.log('user is typing:', userInput);
  return (
    <div>
      <h1>SWAPI SEARCH</h1>
      <Searchbar
        handleSearch={handleSubmit}
        searchStr={userInput}
        handleInput={handleInput}
      />
      {foundFilm ? (
        <InfoCard
          title={foundFilm.title}
          detailOne={foundFilm.director}
          detailTwo={foundFilm.producer}
          summary={foundFilm.opening_crawl}
          date={foundFilm.release_date}
        />
      ) : (
        <Illustration src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" />
      )}
    </div>
  );
}
