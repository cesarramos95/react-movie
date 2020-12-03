import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  margin-top: 40px;
  margin-left: 300px;
  max-width: 500px;

  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;

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
    background: #04d361;
    border-radius: 8px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Movie = styled.li`
  display: flex;
  align-items: center;

  & + ul {
    margin-top: 16px;
  }

  ul {
    flex: 1;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    li {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }
  }
`;
