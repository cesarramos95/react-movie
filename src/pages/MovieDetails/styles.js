import styled from 'styled-components';

import IMAGE from '../../images/Config';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  background: url(${IMAGE}) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 20px;
`;

export const CoverMovie = styled.div`

  img {
    width: 375px;
    height: 525px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.98);
  }
`;

export const InfoMovie = styled.div`
  height: 525px;

  padding: 10px 10px 10px 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  background-color: rgba(2, 2, 2, 0.25);

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
  margin: 60px 0;
  align-items: center;

  span {
    display: inline-block;
    font-size: 14px;
    margin-right: 14px;
    padding: 8px 20px;
    border-radius: 4px;

    /* border: 1px solid #1ec7c7; */

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
  display: flex;

  align-items: center;


  h3 {
    font-size: 17px;
    padding: 0 16px 0 0;
  }

  p {
    margin-right: 16px;
    font-size: 15px;
  }
`;

export const Other = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;

  padding: 20px;

  background-color: #222222;
  margin-top: 40px;

  b {
    margin-left: 8px;
  }

`;

export const Actor = styled.div`
  margin: 30px 20px 0;

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
