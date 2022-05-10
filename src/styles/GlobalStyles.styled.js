import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

html:lang(en) {
}

body {
  width: 100%;
  height: 100vh;
  color: white;
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
`;

export default GlobalStyles;
