import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: gray black;
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: grey;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

html:lang(en) {
}

h1 {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
}

h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-style: italic;
}

h3 {
  font-family: "Libre Baskerville", serif;
  font-weight: 700;
  font-size: 1.5rem;
}

p {
  font-family: "Montserrat", sans-serif;
  font-size: 1.125rem;
}

img {
  max-width: 100%;
}
`;

export default GlobalStyles;
