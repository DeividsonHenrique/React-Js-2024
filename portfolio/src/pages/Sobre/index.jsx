import avatar from "./images/deividson.jpg";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SobreContainer, Bio, Textos, Tech, Icones, Icone } from "./style.js";

function Sobre() {
  return (
    <SobreContainer>
      <Bio>
        <img src={avatar} alt="Avatar" />
        <Textos>
          <h2>Sobre</h2>

          <p>
            Sou <span>Deividson</span> <br />
            <strong>Dev Front End</strong>
          </p>

          <p>Estudo desenvolvimento web desde 2022</p>

          <p>Sou apaixonado por tecnologia e transformar ideias em realidade</p>

          <p>
            especializando em criação de aplicações dinamicas e intuitivas com
            foco na experiência do usuario
          </p>
        </Textos>
      </Bio>

      <Tech>
        <h3>Conhecimentos</h3>
        <Icones>
          <Icone>
            <FaHtml5 />
          </Icone>
          <Icone>
            <FaCss3 />
          </Icone>
          <Icone>
            <FaJs />
          </Icone>
          <Icone>
            <FaReact />
          </Icone>
          <Icone>
            <FaNodeJs />
          </Icone>
        </Icones>
      </Tech>
    </SobreContainer>
  );
}

export default Sobre;
