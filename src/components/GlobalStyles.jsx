import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
      height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }

    &::-webkit-scrollbar-track {
    background-color: #fff;
    }
  }

  body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    font-family: "Montserrat", sans-serif;
    color: #333;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    outline: none;
    border: none;
  }

  button {
    outline: none;
    cursor: pointer;
    border: 1px solid #ff7676;
    background: #ff7676;
    color: white;
  }

  @media (max-width: 1280px) {
    h2 {
      font-size: 2rem;
    }
  
    h3 {
      font-size: 1.1rem;
    }
  
    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyles;
