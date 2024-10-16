import { useEffect, useState } from "react";
import HeaderComponents from "../HeaderComponents";
import DateTimeComponents from "../DateTimeComponents";
import ScoreComponent from "../ScoreComponent";
import ExtraInfoComponent from "../ExtraInfoComponent";
import WinnerComponent from "../WinnerComponent";
import styled from "styled-components";

const Jogo = styled.div`
  border: 1px solid #eee;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 10px #ccc;
  margin-bottom: 1rem;
`;
//jogos

// eslint-disable-next-line react/prop-types
function TournamentBracket({ fase }) {
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
        <Jogo key={jogo.jogo} Jogo>
          <HeaderComponents jogo={jogo} />
          <DateTimeComponents jogo={jogo} />
          <ScoreComponent jogo={jogo} />
          <ExtraInfoComponent jogo={jogo} />
          <WinnerComponent jogo={jogo} />
        </Jogo>
      ))}
    </section>
  );
}

export default TournamentBracket;
