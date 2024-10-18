import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styled from "styled-components";

const ProjetosContainer = styled.section`
  width: 95%;
  padding-block: 2rem;
  text-align: center;
  box-shadow: 0px 0px 10px #5555554f;
  border-radius: 20px;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const Listas = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-block: 1rem;
`;

function Projetos() {
  const [repositiries, setRepositiries] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/DeividsonHenrique/repos?page=1&per_page=20"
      );

      const data = await response.json();
      setRepositiries(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <ProjetosContainer>
      <h2>Projetos</h2>
      {repositiries.length > 0 ? (
        <Listas>
          {repositiries.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </Listas>
      ) : (
        <p>Carregando...</p>
      )}
    </ProjetosContainer>
  );
}

export default Projetos;
