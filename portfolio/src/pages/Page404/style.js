import styled from "styled-components";

export const Page404Container = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Titulo2 = styled.h2`
  padding-top: 3rem;
`;

export const Textos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextoGrande = styled.span`
  font-size: 5rem;
  font-weight: bold;
  color: var(--red);

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TextoVermelho = styled.strong`
  font-size: 5rem;
  font-weight: bold;
  color: var(--red);
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
