import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--primary);
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: fixed;
  top: 0;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: var(--white);
    padding-right: 1.5rem;
    font-size: 1.125rem;
    transition: 0.3s ease-in-out;

    &:hover {
      color: var(--red);
    }
  }
`;

export const MenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Linha = styled.span`
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--white);
    transition: 0.3s ease-in-out;
  }
`;

export const MenuSandwich = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    display: ${(props) => (props.showMenu ? "flex" : "none")};
    width: 50%;
    height: auto;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: var(--primary);
    flex-direction: column;
    padding: 20px;
    gap: 1rem;
    align-items: center;

    @media (max-width: 480px) {
      width: 100%;
    }
  }
`;
