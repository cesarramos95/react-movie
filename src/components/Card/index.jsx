import React from 'react';

import { Image } from './styles';

const Card = ({ movie }) => (
  // div className="result-card"
  <Image>
    {movie.poster_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
    ) : (
      <div className="filler-poster" />
    )}
  </Image>
);

export default Card;
