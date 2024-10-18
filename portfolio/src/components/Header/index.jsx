import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderContainer, MenuButton, Linha, MenuSandwich } from "./style.js";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <HeaderContainer>
      <Link to="/">
        <span>Deividson.Dev</span>
      </Link>
      <MenuSandwich showMenu={showMenu} onClick={toggleMenu}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contatos">Contatos</Link>
      </MenuSandwich>

      <MenuButton onClick={toggleMenu}>
        <Linha></Linha>
        <Linha></Linha>
        <Linha></Linha>
      </MenuButton>
    </HeaderContainer>
  );
}

export default Header;
