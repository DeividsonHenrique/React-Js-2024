import styled from "styled-components";

export const ContatosContainer = styled.section`
  width: 100%;
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding-inline: 20px;
    text-align: center;
  }
`;

export const Icones = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-block: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const Icone = styled.div`
  font-size: 3rem;
  color: var(--red);
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
