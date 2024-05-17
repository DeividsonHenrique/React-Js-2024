import styles from './Page404.module.css'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function Page404(){
    return(
        <>
            <Header/>
            <Container>
                <h2 className={styles.titulo2}>Algo de errado aconteceu!</h2>
                    <div className={styles.textos}>
                        <span className={styles.texto_grande}>404 </span>
                        <strong className={styles.texto_vermelho}>Página não encontrada!</strong>
                    </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Page404