import styled from "styled-components";

export const Jogo = styled.section`
  border: 1px solid #eee;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 10px #ccc;
  margin-bottom: 1rem;
`;

export const Titulo2 = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;

export const Date = styled.span`
  font-size: 1rem;
  border-radius: 8px;
  padding: 5px 8px;
  background-color: #111;
  color: #fff;
`;
export const Day = styled.span`
  font-size: 1rem;
  border-radius: 8px;
  padding: 5px 8px;
`;
export const Hour = styled.span`
  font-size: 1rem;
  border-radius: 8px;
  padding: 5px 8px;
`;

export const Placar = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const MandanteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-right: 1rem;
  justify-content: flex-end;
`;
export const VisitanteBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-left: 1rem;
  justify-content: flex-start;
`;
export const PlacarBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 55px;
  justify-content: center;
  font-size: 12px;
  color: #555;
  gap: 0.5rem;
`;

export const Gols = styled.span`
  font-size: 1.5rem;
  color: #222;
`;

export const Centralizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
