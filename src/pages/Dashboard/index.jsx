import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

import api from '../../services/api';

import Header from '../../components/Header';

import { Movie, Form, Error } from './styles';

const Dashboard = () => {
  const [newMovie, setNewMovie] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState([], () => {
    const storagedMovies = localStorage.getItem('@ReactMovies:movie');

    if (storagedMovies) {
      return JSON.parse(storagedMovies);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@ReactMovie:movies', JSON.stringify(movies));
  });

  async function handleSearchMovie(e) {
    e.preventDefault();

    if (!newMovie) {
      setInputError('Digite o nome do filme ou série');
      return;
    }

    try {
      const response = await api.get(
        `/search/movie?page=1&include_adult=true&query=${newMovie}`,
      );

      const movie = response.data;

      setMovies(movie.results);
      setNewMovie('');
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar filme/série');
    }
  }

  return (
    <>
      <Header />

      <Form hasError={!!inputError} onSubmit={handleSearchMovie}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Pesquisar filme/série"
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Movie>
        {movies.map((movie) => (
          <Link key={movie.id} to={`/details/movie/${movie.id}`}>
            <div>
              <Card movie={movie} />
            </div>
          </Link>
        ))}
      </Movie>
    </>
  );
};

export default Dashboard;
