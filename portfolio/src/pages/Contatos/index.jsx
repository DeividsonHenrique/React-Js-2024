import { CiMail } from "react-icons/ci";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";
import { ContatosContainer, Icones, Icone } from "./style.js";

function Contatos() {
  return (
    <>
      <ContatosContainer>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre!</p>
        <Icones>
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <Icone>
              {" "}
              <CiMail />
            </Icone>
          </a>

          <a
            href="https://www.instagram.com/deividsonhenry_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone>
              {" "}
              <BsInstagram />{" "}
            </Icone>
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone>
              {" "}
              <BsYoutube />{" "}
            </Icone>
          </a>

          <a
            href="https://github.com/DeividsonHenrique"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone>
              {" "}
              <BsGithub />{" "}
            </Icone>
          </a>

          <a
            href="https://www.linkedin.com/in/deividsonhenrique/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icone>
              {" "}
              <BsLinkedin />{" "}
            </Icone>
          </a>
        </Icones>
      </ContatosContainer>
    </>
  );
}

export default Contatos;
