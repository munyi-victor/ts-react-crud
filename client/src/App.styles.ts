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
`;

export const ButtonWrapper = styled.div`
  .add-btn {
    position: absolute;
    top: 20px;
    right: 16%;
    margin-bottom: 20px;
    border: none;
    outline: none;
  }
`;

export const ModalWrapper = styled.div`
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
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
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
