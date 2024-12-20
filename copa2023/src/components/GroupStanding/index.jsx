import { useEffect, useState } from "react";
import { Table, Esquerda, DivSelect, Select } from "./style";

function GroupStanding() {
  const [grupos, setGrupos] = useState([]);
  const [letraSelecionada, setletraSelecionada] = useState("A");

  useEffect(() => {
    const buscarGrupos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/classificacao-por-grupos-2023.json"
      );
      const data = await response.json();
      setGrupos(data);
    };
    buscarGrupos();
  }, []);

  return (
    <>
      <DivSelect>
        <Select
          value={letraSelecionada}
          onChange={(e) => setletraSelecionada(e.target.value)}
        >
          <option value="A">Grupo A</option>
          <option value="B">Grupo B</option>
          <option value="C">Grupo C</option>
          <option value="D">Grupo D</option>
          <option value="E">Grupo E</option>
          <option value="F">Grupo F</option>
          <option value="G">Grupo G</option>
          <option value="H">Grupo H</option>
        </Select>
      </DivSelect>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Seleção</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols Pró</th>
            <th>Gols Contra</th>
            <th>Saldo de Gols</th>
          </tr>
        </thead>

        <tbody>
          {grupos
            .filter((grupo) => grupo.grupo === letraSelecionada)
            .map((grupo) => (
              <tr key={grupo.selecao}>
                <td>{grupo.posicao}</td>
                <Esquerda>{grupo.selecao}</Esquerda>
                <td>{grupo.pontos}</td>
                <td>{grupo.vitorias}</td>
                <td>{grupo.empates}</td>
                <td>{grupo.derrotas}</td>
                <td>{grupo.gols_pro}</td>
                <td>{grupo.gols_contra}</td>
                <td>{grupo.saldo_gols}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default GroupStanding;
