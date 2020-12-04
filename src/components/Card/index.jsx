import React from 'react';
import propTypes from 'prop-types';

import { Image } from './styles';

const Card = ({ movie }) => (
  // div className="result-card"
  <Image>
    <div className="poster_wrapper">
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      ) : (
        <div className="filler-poster" />
      )}
    </div>
  </Image>
);

Card.propTypes = {
  movie: propTypes.shape({
    poster_path: propTypes.string,
    title: propTypes.string.isRequired,
  }).isRequired,
};

export default Card;
