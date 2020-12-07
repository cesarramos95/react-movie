import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

import { key } from '../../config/auth.json';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  Container,
  Movie,
  Form,
  Error,
} from './styles';

const Dashboard = () => {
  const [newMovie, setNewMovie] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState([], () => {
    const storagedMovies = localStorage.getItem(
      '@ReactMovies:movie',
    );

    if (storagedMovies) {
      return JSON.parse(storagedMovies);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@ReactMovie:movies',
      JSON.stringify(movies),
    );
  });

  async function handleSearchMovie(e) {
    e.preventDefault();

    if (!newMovie) {
      setInputError('Digite o nome do filme ou série');
      return;
    }

    try {
      const response = await api
        .get(
          `/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false&query=${newMovie}`,
        );

      const movie = response.data;

      setMovies(movie.results);
      setNewMovie(newMovie);
      setInputError('');
    } catch (err) {
      setInputError('Erro ao buscar filme/série');
    }
  }

  return (
    <Container>
      <Header />
      <Form hasError={!!inputError} onSubmit={handleSearchMovie}>
        <input
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          placeholder="Pesquisar filme ou série"
        />
        <button type="submit">Buscar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      {movies.length === 0 && (
        <Movie>
          <img src="./image" alt="teste" />
        </Movie>
      )}

      <Movie>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/details/movie/${movie.id}`}
          >
            <Card movie={movie} />
          </Link>
        ))}
      </Movie>
    </Container>
  );
};

export default Dashboard;
