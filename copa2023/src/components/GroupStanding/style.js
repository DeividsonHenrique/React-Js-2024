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

export const Esquerda = styled.td`
  text-align: left;
  padding-left: 1rem;
`;

export const DivSelect = styled.div`
  text-align: center;
`;

export const Select = styled.select`
  font-size: 1.25rem;
  padding: 10px;
  border-radius: 8px;
`;
