import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { CardsContainer, CardFooter, CardsIcons, Botao } from "./style.js";

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
  return (
    <CardsContainer>
      <h3>{name}</h3>
      <p>{description}</p>

      <CardFooter>
        <CardsIcons>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </CardsIcons>
        <Botao href={html_url} target="_blank" rel="noopener noreferrer">
          <BsArrowRight />
        </Botao>
      </CardFooter>
    </CardsContainer>
  );
}

export default Card;
