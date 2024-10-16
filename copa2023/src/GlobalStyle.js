import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-family: Inter, sans-serif;
 
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

h1, h2, h3, h4, h5, h6{
  text-align: center;
  margin-block: 1rem;
}

    body{
        background-color: #ececec;
    }
`;

export const KnockOutTable = styled.section`
  max-width: 1000px;
  margin: auto;
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;

  button {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  button.active {
    background-color: #111;
    color: #fff;
  }
`;

export const Cards = styled.section`
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  margin: auto;
`;
