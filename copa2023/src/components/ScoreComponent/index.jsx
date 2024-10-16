/* eslint-disable react/prop-types */
import { Placar, MandanteBox, VisitanteBox, PlacarBox, Gols } from "./style";

function ScoreComponent({ jogo }) {
  return (
    <Placar>
      <MandanteBox>
        {jogo.mandante}
        <img
          src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
          alt={jogo.mandante}
        />
      </MandanteBox>

      <PlacarBox>
        <Gols>{jogo.gols_mandante}</Gols>X<Gols>{jogo.gols_visitante}</Gols>
      </PlacarBox>

      <VisitanteBox>
        <img
          src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
          alt={jogo.visitante}
        />
        {jogo.visitante}
      </VisitanteBox>
    </Placar>
  );
}

export default ScoreComponent;
