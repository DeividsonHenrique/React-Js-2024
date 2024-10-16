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
function Fixture({ fase, data }) {
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

  let jogosFiltrados = jogos.filter((jogo) => jogo.data == data);

  return (
    <section>
      {jogosFiltrados.length > 0 ? (
        jogosFiltrados.map((jogo) => (
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
            <Centralizar>
              {jogo.prorrogacao === "Sim" && (
                <div>
                  Prorrogação? {jogo.prorrogacao} | Placar{" "}
                  {jogo.placar_prorrogacao}
                </div>
              )}
              {jogo.penaltis === "Sim" && (
                <div>
                  Pênaltis? {jogo.penaltis} | Placar {jogo.placar_penaltis}
                </div>
              )}
            </Centralizar>
            <h4>Vencedor: {jogo.vencedor}</h4>
          </Jogo>
        ))
      ) : (
        <h4>Sem jogos no dia {data}</h4>
      )}
    </section>
  );
}

export default Fixture;
