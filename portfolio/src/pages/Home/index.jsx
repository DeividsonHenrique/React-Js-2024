import { HomeContainer, Btn } from "./style";

function Home() {
  return (
    <>
      <HomeContainer>
        <div>
          <p>
            Olá, sou <br /> <span>Deividson</span> <br /> Dev Front End
          </p>
          <Btn to="/sobre">Saiba mais sobre mim</Btn>
        </div>
        <figure>
          <img src="/developer-red.svg" alt="Imagem de Home" />
        </figure>
      </HomeContainer>
    </>
  );
}

export default Home;
