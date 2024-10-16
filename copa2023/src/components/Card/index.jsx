import { useEffect, useState } from "react";
import { Cards, Row } from "./style";

function Card() {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const buscarGrupos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/selecoes.json"
      );

      const data = await response.json();
      setGrupos(data);
    };
    buscarGrupos();
  }, []);

  return grupos.map((grupo) => (
    <Cards key={grupo.grupo}>
      <Row style={{ backgroundColor: grupo.cor }}></Row>
      <h2>Grupo {grupo.grupo}</h2>
      <ul>
        {grupo.selecoes.map((pais) => {
          return (
            <li key={pais.sigla}>
              <img src={`/bandeiras/${pais.imagem}.png`} alt={pais.selecao} />
              {pais.selecao}
            </li>
          );
        })}
      </ul>
    </Cards>
  ));
}

export default Card;
