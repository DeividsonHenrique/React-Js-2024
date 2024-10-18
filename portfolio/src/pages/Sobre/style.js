import styled from "styled-components";

export const SobreContainer = styled.section`
  width: 100%;
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 40px;
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
  margin-bottom: 1.5rem;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-inline: 1.25rem;
    gap: 1.5rem;
  }
`;

export const Textos = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-weight: 500;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    margin-bottom: 1rem;
    font-weight: 500;
  }

  span {
    color: var(--red);
    font-weight: 900;
  }
`;

export const Tech = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Icones = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    gap: 0.5rem;
    @media (max-width: 480px);
  }
`;

export const Icone = styled.div`
  font-size: 4rem;
  color: var(--red);
  @media (max-width: 480px) {
    height: 40px;
  }
`;
