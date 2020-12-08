import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  Content,
  CoverMovie,
  InfoMovie,
  Title,
  Overview,
  Genre,
  Other,
  Director,
  Actor,
} from './styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);
  const [directors, setDirectors] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function loadDetails() {
      // Load a specific movie with extras based on routeParams id
      const response = await api.get(`/movie/${params.id}`);

      const movieDetails = response.data;

      setMovie(movieDetails);
    }

    loadDetails();
  }, [params]);

  useEffect(() => {
    async function loadCredits() {
      const response = await api.get(`movie/${params.id}/credits`);

      const creditMovie = response.data;

      setCredits(creditMovie.cast);

      setDirectors(creditMovie.crew);
    }

    loadCredits();
  }, [params]);

  return (
    <Container>
      <Header />
      <Content>
        {movie && (
          <>
            <CoverMovie>
              <img
                src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                alt={`${movie.original_title} Poster`}
              />
            </CoverMovie>

            <InfoMovie>
              <Title>
                <h1>{movie.original_title}</h1>
                <div>{movie.vote_average}</div>
              </Title>
              <Overview>
                <p>{movie.overview}</p>
              </Overview>
              <Genre>
                {movie.genres && (
                  movie.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name}
                    </span>
                  )))}
              </Genre>
              <Director>
                <h3>Direção</h3>
                {directors && (
                  directors
                    .filter((director) => director.job === 'Director')
                    .map((director) => <p key={director.id}>{director.name}</p>))}
              </Director>
              <Other>
                <div>
                  Lançamento
                  <b>{movie.release_date}</b>
                </div>
                <div>
                  Duração
                  <b>
                    {movie.runtime}
                    m
                  </b>
                </div>
                <div>
                  Orçamento
                  <b>{movie.budget}</b>
                </div>
                <div>
                  Faturamento
                  <b>{movie.revenue}</b>
                </div>
              </Other>
            </InfoMovie>
          </>
        )}
      </Content>
      <Actor>
        <h3>Elenco</h3>
        <div>
          {credits && (
            credits.map((c) => (
              <img
                src={`https://image.tmdb.org/t/p/w200${c.profile_path}`}
                alt={`${c.profile_path} Poster`}
              />
            )))}
        </div>
      </Actor>
    </Container>
  );
};

export default MovieDetails;
