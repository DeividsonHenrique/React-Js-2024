import styled from "styled-components";

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
