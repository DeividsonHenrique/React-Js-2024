import { useEffect, useState } from "react";
import { Table, Esquerda, Direita, Gols } from "./style";

function GameTable() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/tabela-copa-feminina-2023.json"
      );
      const data = await response.json();
      setJogos(data);
    };
    buscarJogos();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Data</th>
          <th>Hora</th>
          <th>Grupo</th>
          <th colSpan={5}>Jogo</th>
        </tr>
      </thead>

      <tbody>
        {jogos.map((jogo) => (
          <tr key={jogo.jogo}>
            <td>{jogo.dia}</td>
            <td>{jogo.data}</td>
            <td>{jogo.hora}</td>
            <td>{jogo.grupo}</td>
            <td>
              <Direita>
                {jogo.mandante}
                <img
                  src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
                  alt={jogo.mandante}
                />
              </Direita>
            </td>
            <Gols>{jogo.gols_mandante}</Gols>
            <td>X</td>
            <Gols>{jogo.gols_visitante}</Gols>
            <td>
              <Esquerda>
                <img
                  src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
                  alt={jogo.visitante}
                />
                {jogo.visitante}
              </Esquerda>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default GameTable;
