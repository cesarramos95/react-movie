import styled from 'styled-components';

import IMAGE from '../../images/Config';

export const Container = styled.div`
  margin: 20px 40px;
`;

export const Content = styled.div`
  display: flex;
  background: url(${IMAGE}) no-repeat;
  background-size: cover;
  background-position: center;
  /* flex: 1; */
`;

export const CoverMovie = styled.div`
  padding: 0 10px 0 0;

  img {
    width: 300px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.98);
    z-index: 1;
  }
`;

export const InfoMovie = styled.div`
  margin-left: 20px;

`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  h1 {
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid #1ec7c7;
  }
`;

export const Overview = styled.div`
  margin: 30px 0;

  p {
    font-size: 15px;
    height: auto;
    overflow: auto;
  }
`;

export const Genre = styled.div`
  margin: 16px 0;
  align-items: center;

  span {
    display: inline-block;
    font-size: 12px;
    margin-right: 14px;
    padding: 8px 20px;
    border-radius: 2px;

    background-color: #1ec7c7;
  }

`;

export const Credit = styled.div`
  margin-top: 16px;

  img {

  }
`;

export const Director = styled.div`
  margin-top: 80px;

  h3 {
    margin-bottom: 8px;
  }

  p {
    font-size: 12px;
  }
`;

export const Other = styled.div`
  background-color: #1ec7c7;
  margin-top: 40px;
`;

export const Actor = styled.div`
  margin-top: 30px;

  h3 {
    margin-bottom: 10px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  img {
    border-radius: 10px;
    width: 200px;
    margin-bottom: 14px;
  }
`;
