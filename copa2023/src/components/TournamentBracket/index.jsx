import styles from "./TournamentBracket.module.css";
import { useEffect, useState } from "react";
import HeaderComponents from "../HeaderComponents";
import DateTimeComponents from "../DateTimeComponents";
import ScoreComponent from "../ScoreComponent";
import ExtraInfoComponent from "../ExtraInfoComponent";
import WinnerComponent from "../WinnerComponent";

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
    <section className={styles.jogos}>
      {jogos.map((jogo) => (
        <div key={jogo.jogo} className={styles.jogo}>
          <HeaderComponents jogo={jogo} />
          <DateTimeComponents jogo={jogo} />
          <ScoreComponent jogo={jogo} />
          <ExtraInfoComponent jogo={jogo} />
          <WinnerComponent jogo={jogo} />
        </div>
      ))}
    </section>
  );
}

export default TournamentBracket;
