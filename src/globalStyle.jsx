import { createGlobalStyle, styled } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  *, *::before, *::after {
  box-sizing: border-box;
  }
  html {
    color-scheme: dark light;
  }
  html, body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    min-height: 100vh;
    overflow-x: hidden;
    background-color: #0A0C1C;
  }
  img, picture, svg, video {
    display: block;
    max-width: 100%;
  }
  input, textarea, button, select {
    font: inherit;
  }
`;
export default GlobalStyle;
