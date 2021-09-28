
import { createGlobalStyle } from "styled-components";



export default createGlobalStyle`

:root {
  --bg: #0A1744;
  --white: #ffffff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg);
  color: var(--white);
  font-family: 'Poppins', sans-serif;
}

html {
  @media(max-width: 1080px) {
      font-size: 93,75%;
  }
  @media(max-width: 720px) {
      font-size: 87,5%;
  }
}

a {
  color: inherit;
  text-decoration: none;
}
`