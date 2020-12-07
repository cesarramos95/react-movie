import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 40px;
`;

export const Content = styled.div`
  display: flex;
  /* flex: 1; */
`;

export const CoverMovie = styled.div`
  padding: 0 10px 0 0;

  img {
    width: 500px;
    height: 650px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.98);
    z-index: 1;
  }
`;

export const InfoMovie = styled.div`
  margin-left: 20px;

`;

export const Description = styled.div`

  h1 {
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    flex: 1;
    width: 35px;
    height: 35px;
    margin-top: 6px;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid #1ec7c7;
  }

  p {
    /* font-weight: normal; */
    font-size: 12px;
    height: auto;
    overflow: auto;
    /* width: calc(100% - 20px); */
  }


`;

export const Genre = styled.div`
  margin-top: 16px;
  align-items: center;

  span {
    display: inline-block;
    font-size: 12px;
    margin-right: 14px;
    padding: 5px 10px;
    border-radius: 2px;

    background-color: #1ec7c7;
  }

`;

export const Credit = styled.div`
  margin-top: 16px;

  img {

  }
`;

export const Other = styled.div`
  margin-top: 40px;
  font-size: 14px;

  p {

  }
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
    /* height: 200px; */
    margin-bottom: 14px;
  }
`;
