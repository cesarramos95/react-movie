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
  Director,
} from './styles';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);

  const { params } = useRouteMatch();

  useEffect(() => {
    async function loadDetails() {
      // Load a specific food with extras based on routeParams id
      const response = await api.get(`/movie/${params.id}?api_key=${key}&language=pt-BR`);

      const movieDetails = response.data;

      console.log(movieDetails);

      setMovie(movieDetails.results);
    }

    loadDetails();
  }, []);

  return (
    <Container>
      <Content>
        <CoverMovie>
          <h1>Imagem do filme</h1>
        </CoverMovie>

        {movie && (
          <InfoMovie>
            <Details>
              <h1>{movie.title}</h1>
              <h3>Plot</h3>
              <p>Overview</p>
            </Details>
            <Rating>
              <h3>Rating</h3>
              <div>5</div>
            </Rating>
            <Director>
              <h3>Diretor</h3>
              <p>Nome</p>
            </Director>
          </InfoMovie>
        )}

      </Content>
    </Container>
  );
};

export default MovieDetails;
