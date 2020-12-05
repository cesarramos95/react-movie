import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const CoverMovie = styled.div`
  img {
     border-radius: 10px;
  }
`;

export const InfoMovie = styled.div`
  margin-left: 20px;

`;

export const Details = styled.div`
  p {
    font-size: 10px;
  }

`;

export const Rating = styled.div`
  margin-top: 16px;
  `;

export const Genre = styled.div`
  margin-top: 16px;
  align-items: center;

  h3 {
    padding: 10px;

  }

  div {
    font-size: 14px;
    display: flex;
    flex: 1;
  }
`;

export const Credit = styled.div`
  margin-top: 16px;

  p {
    font-size: 10px;
  }
`;
