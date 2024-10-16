import styled from "styled-components";

export const Cards = styled.section`
  width: 200px;
  height: 265px;
  background-color: #f1f1f1;
  box-shadow: 5px 5px 10px #ccc;

  h2 {
    text-align: center;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
  }

  ul {
    margin-left: 1rem;
  }

  ul li {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    line-height: 50px;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 10px;
`;
