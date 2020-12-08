import React from 'react';
import { FiFilm } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => (
  <Container>
    <Link to="/">
      <FiFilm size={40} color="#FFF" />
      <strong>React Movies</strong>
    </Link>
  </Container>
);

export default Header;
