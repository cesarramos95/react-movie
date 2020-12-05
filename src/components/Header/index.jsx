import React from 'react';
import { FiFilm } from 'react-icons/fi';

import { Container } from './styles';

const Header = () => (
  <Container>
    <FiFilm
      size={40}
      color="#FFF"
    />
    <strong>React Movies</strong>
  </Container>
);

export default Header;
