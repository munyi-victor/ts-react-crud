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
  .listCon {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 30px;
  }
`;

export const ButtonWrapper = styled.div`
  .add-btn {
    float: right;
    margin-bottom: 10px;
    border: none;
    outline: none;
  }
`;

export const ModalWrapper = styled.div`
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
  }

  .close {
    position: absolute;
    right:20px;
    top:0px;
    color: #aaaaaa;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
