import { useEffect, useState } from "react";
import {
  Jogo,
  Titulo2,
  Date,
  Day,
  Hour,
  Placar,
  MandanteBox,
  VisitanteBox,
  PlacarBox,
  Gols,
  Centralizar,
} from "./style";

// eslint-disable-next-line react/prop-types
function KnockoutStage({ fase }) {
  const [jogos, setJogos] = useState([]);
  const url = `https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/${fase}-copa-2023.json`;

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJogos(data);
    };

    buscarJogos();
  }, [url]);

  return (
    <section>
      {jogos.map((jogo) => (
        <Jogo key={jogo.jogo}>
          <Titulo2>
            {jogo.tipo == "decisão" ? jogo.fase : fase} {jogo.jogo} - chave{" "}
            {jogo.chave}
          </Titulo2>
          <h3>
            <Day>{jogo.dia}</Day>
            <Date>{jogo.data}</Date>
            <Hour>{jogo.hora}</Hour>
          </h3>

          <Placar>
            <MandanteBox>
              {jogo.mandante}
              <img
                src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
                alt={jogo.mandante}
              />
            </MandanteBox>

            <PlacarBox>
              <Gols>{jogo.gols_mandante}</Gols>X
              <Gols>{jogo.gols_visitante}</Gols>
            </PlacarBox>

            <VisitanteBox>
              <img
                src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
                alt={jogo.visitante}
              />
              {jogo.visitante}
            </VisitanteBox>
          </Placar>
          <div>
            {jogo.prorrogacao == "Sim" && (
              <Centralizar>
                <span>
                  Prorrogação? {jogo.prorrogacao} | Placar Prorrogação:{" "}
                  {jogo.placar_prorrogacao}
                </span>
                <span>
                  Pênaltis? {jogo.penaltis} | Placar Pênaltis:{" "}
                  {jogo.placar_penaltis}
                </span>
              </Centralizar>
            )}
          </div>
          <h4>Vencedor: {jogo.vencedor}</h4>
        </Jogo>
      ))}
    </section>
  );
}

export default KnockoutStage;
