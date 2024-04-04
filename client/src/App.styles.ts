import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height:100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }
`;

export const Wrapper = styled.div`
  div {
    display: flex;
    justify-content: center;
  }
  table {
    margin-top: 60px;
  }
`

export const ButtonWrapper = styled.div`
  .add-btn {
    position: absolute;
    top:20px;
    right:16%;
    margin-bottom:20px;
    border:none;
    outline:none;

  }
`;
