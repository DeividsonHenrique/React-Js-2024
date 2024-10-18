import {
  Page404Container,
  Titulo2,
  Textos,
  TextoGrande,
  TextoVermelho,
} from "./style";

function Page404() {
  return (
    <Page404Container>
      <Titulo2>Algo de errado aconteceu!</Titulo2>
      <Textos>
        <TextoGrande>404 </TextoGrande>
        <TextoVermelho>Página não encontrada!</TextoVermelho>
      </Textos>
    </Page404Container>
  );
}

export default Page404;
