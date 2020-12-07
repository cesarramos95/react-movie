import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
`;

export const Form = styled.form`
  margin-top: 40px;
  margin-left: 300px;
  max-width: 700px;

  display: flex;
  justify-content: center;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    justify-content: center;

    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 100px;
    height: 50px;
    background: #1ec7c7;
    border-radius: 8px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#1ec7c7')};
    }
  }
`;

export const Error = styled.span`
  display: flex;
  margin-left: 300px;
  color: #c53030;
  margin-top: 8px;
`;

export const Movie = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;


  & + a {
    margin-top: 30px;
  }

  a {
    background: #3e3b47;
    border-radius: 10px;
    margin: 0 0 14px 14px;
  }
`;
