import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { key } from '../../config/auth.json';
import api from '../../services/api';

import {
  Container,
  Content,
  CoverMovie,
  InfoMovie,
  Details,
  Rating,
  Genre,
  Credit,
} from './styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

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
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={`${movie.original_title} Poster`}
              />
            </CoverMovie>

            <InfoMovie>
              <Details>
                <h1>{movie.original_title}</h1>
                <p>{movie.overview}</p>
              </Details>
              <Rating>
                <h3>Rating</h3>
                <div>{movie.vote_average}</div>
              </Rating>
              <Genre>
                <h3>Gêneros</h3>
                {movie.genres && (
                  movie.genres.map((genre) => (
                    <div key={genre.id}>
                      {genre.name}
                    </div>
                  )))}
              </Genre>
              <Credit>
                {credits && (
                  credits.map((c) => (
                    <p key={c.id}>
                      {c.name}
                    </p>
                  )))}
              </Credit>
            </InfoMovie>
          </>
        )}
      </Content>
    </Container>
  );
};

export default MovieDetails;
