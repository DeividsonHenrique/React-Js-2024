import styled from "styled-components";

export const CardsContainer = styled.section`
  width: 300px;
  height: 300px;
  background-color: var(--soft-white);
  color: var(--gray);
  border-radius: 10px;
  box-shadow: 5px 5px 10px #22222270;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h3 {
    color: var(--primary);
  }
  p {
    color: #555;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardsIcons = styled.div`
  display: flex;
  gap: 10px;
  color: var(--red);
  font-size: 1.5rem;
`;

export const Botao = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 5px;
  background-color: var(--primary);
  color: var(--white);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--red);
  }
`;
