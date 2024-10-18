import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: var(--primary);
  color: var(--white);
  font-weight: bold;
  font-size: 1.125rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

function Footer() {
  return <FooterContainer>Feito por Deividson &copy; 2024</FooterContainer>;
}

export default Footer;
