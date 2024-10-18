import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: "Fira Code", monospace;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --primary: #16213E;
  --secondary: #0f3460;
  --terceary: #533483;
  --red: #e94560;
  --soft-white: #f1f1f1;
  --white: #fefefe;
  --black: #111;
  --gray: #222222;
}
`;