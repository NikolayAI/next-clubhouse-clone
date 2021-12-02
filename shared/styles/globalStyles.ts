import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    box-sizing: border-box;
    background-color: #F3EFE4;
  }

  body {
    font-family: 'Nunito', sans-serif;
  }
`;
