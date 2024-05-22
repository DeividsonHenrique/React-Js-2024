import styles from './Page404.module.css'

function Page404(){
    return(
        <section className={styles.page404}>
                <h2 className={styles.titulo2}>Algo de errado aconteceu!</h2>
                    <div className={styles.textos}>
                        <span className={styles.texto_grande}>404 </span>
                        <strong className={styles.texto_vermelho}>Página não encontrada!</strong>
                    </div>
        </section>
    )
}

export default Page404