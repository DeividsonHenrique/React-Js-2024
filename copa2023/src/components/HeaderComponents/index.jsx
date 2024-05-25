/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import styles from "./HeaderComponents.module.css";

function HeaderComponents({ jogo }) {
  return (
    <h2 className={styles.titulo2}>
      {jogo.fase} {jogo.jogo} - chave {jogo.chave}
    </h2>
  );
}

export default HeaderComponents;
