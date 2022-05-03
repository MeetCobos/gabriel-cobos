import { createGlobalStyle } from "styled-components";
import LibreBaskerville from "../assets/fonts/LibreBaskerville-Regular.ttf";
import LibreBaskervilleBold from "../assets/fonts/LibreBaskerville-Bold.ttf";
import LibreBaskervilleItalic from "../assets/fonts/LibreBaskerville-Italic.ttf";
import BebasNeue from "../assets/fonts/BebasNeue-Regular.ttf";
import AbrilFatface from "../assets/fonts/AbrilFatface-Regular.ttf";
import MontserratVar from "../assets/fonts/Montserrat-VariableFont_wght.ttf";
import MontserratItalicVar from "../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  height: 100vh;
  color: white;
}

h1 {
  font-family: "Libre Baskerville Bold", serif;
}

h2 {
  font-family: "Montserrat Italic Var", sans-serif;
  font-weight: lighter;
}

@font-face {
  font-family: "Libre Baskerville";
  src: url(${LibreBaskerville});
}

@font-face {
  font-family: "Libre Baskerville Bold";
  src: url(${LibreBaskervilleBold});
}

@font-face {
  font-family: "Libre Baskerville Italic";
  src: url(${LibreBaskervilleItalic});
}

@font-face {
  font-family: "Bebas Neue";
  src: url(${BebasNeue});
}

@font-face {
  font-family: "Abril Fatface";
  src: url(${AbrilFatface});
}

@font-face {
  font-family: "Montserrat Var";
  src: url(${MontserratVar});
}

@font-face {
  font-family: "Montserrat Italic Var";
  src: url(${MontserratItalicVar});
}
`;

export default GlobalStyles;
