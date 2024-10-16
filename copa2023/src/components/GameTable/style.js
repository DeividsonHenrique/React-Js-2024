import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  max-width: 1000px;
  margin-block: 1rem;
  margin-inline: auto;
  border-collapse: collapse;
  border: 1px solid red;

  tr {
    height: 50px;
    border-bottom: 1px solid #ccc;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  td {
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
    height: 50px;
    border-bottom: 1px solid #ccc;
    position: sticky;
    top: 0;
  }
`;

export const Esquerda = styled.span`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;
export const Direita = styled.span`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5rem;
`;

export const Gols = styled.td`
  font-size: 2rem;
`;
