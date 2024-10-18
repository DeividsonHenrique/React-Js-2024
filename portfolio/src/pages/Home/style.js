import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 500px;

    @media (max-width: 480px) {
      max-width: 100%;
      height: auto;
      padding-inline: 1em;
    }
  }

  p {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  span {
    color: var(--red);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Btn = styled(Link)`
  width: 250px;
  height: 50px;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  background-color: var(--red);
  color: var(--white);
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary);
  }
`;
