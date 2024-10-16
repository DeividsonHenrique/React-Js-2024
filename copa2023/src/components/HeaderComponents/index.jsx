/* eslint-disable react/prop-types */
import styled from "styled-components";

const Titulo2 = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

function HeaderComponents({ jogo }) {
  return (
    <Titulo2>
      {jogo.fase} {jogo.jogo} - chave {jogo.chave}
    </Titulo2>
  );
}

export default HeaderComponents;
