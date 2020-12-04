/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';

import key from '../../config/auth';
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

const MovieDetails = ({ movie }) => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function loadDetails() {
      // Load a specific food with extras based on routeParams id
      const response = await api.get(`/${movie.id}?api_key=${key}&language=pt-BR`);

      const movieDetails = response.data.results;

      console.log(movieDetails);

      setInfo(movieDetails);
    }

    loadDetails();
  }, []);

  return (
    <Container>
      <Content movie={movie}>
        <CoverMovie>
          <h1>Imagem do filme</h1>
        </CoverMovie>
        <InfoMovie>
          <Details>
            <h1>{info.title}</h1>
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
      </Content>
    </Container>
  );
};

export default MovieDetails;
