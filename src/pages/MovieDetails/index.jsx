import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { key } from '../../config/auth.json';
import api from '../../services/api';

import {
  Container,
  Content,
  CoverMovie,
  InfoMovie,
  Description,
  Genre,
  Credit,
  Other,
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
      const response = await api.get(
        `/movie/${params.id}?api_key=${key}&language=pt-BR`,
      );

      const movieDetails = response.data;

      console.log(movieDetails);

      setMovie(movieDetails);
    }

    loadDetails();
  }, [params, key]);

  useEffect(() => {
    async function loadCredits() {
      const response = await api.get(
        `movie/${params.id}/credits?api_key=${key}&language=pt-BR`,
      );

      const creditMovie = response.data;

      console.log(creditMovie);

      setCredits(creditMovie.cast);

      setDirectors(creditMovie.crew);
    }

    loadCredits();
  }, [params, key]);

  return (
    <Container>
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
              <Description>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
                <div>{movie.vote_average}</div>
              </Description>
              <Genre>
                {movie.genres && (
                  movie.genres.map((genre) => (
                    <span key={genre.id}>
                      {genre.name}
                    </span>
                  )))}
              </Genre>
              <Other>
                {directors && (
                  directors
                    .filter((director) => director.job === 'Director')
                    .map((director) => <p key={director.id}>{director.name}</p>))}
              </Other>
              <Credit />
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
