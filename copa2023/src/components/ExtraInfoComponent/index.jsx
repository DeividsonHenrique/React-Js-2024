/* eslint-disable react/prop-types */
import styled from "styled-components";

const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ExtraInfoComponent({ jogo }) {
  return (
    <Centralizar>
      {jogo.prorrogacao === "Sim" && (
        <div>
          Prorrogação? {jogo.prorrogacao} | Placar {jogo.placar_prorrogacao}
        </div>
      )}
      {jogo.penaltis === "Sim" && (
        <div>
          Pênaltis? {jogo.penaltis} | Placar {jogo.placar_penaltis}
        </div>
      )}
    </Centralizar>
  );
}

export default ExtraInfoComponent;
