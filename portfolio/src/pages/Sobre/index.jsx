import styles from './Sobre.module.css'
import avatar from './images/deividson.jpg'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

function Sobre(){
    return(  
        <section className={styles.sobre}>

                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" />
                    <div className={styles.textos}>
                        <h2>Sobre</h2>

                        <p>Sou <span>Deividson</span> <br/>
                        <strong>Dev Front End</strong></p>

                        <p>Estudo desenvolvimento web desde 2022</p>

                        <p>Sou apaixonado por tecnologia e transformar ideias em realidade</p>

                        <p>especializando em criação de aplicações dinamicas e intuitivas com foco na experiência do usuario</p>
                    </div>
                </div>


            <div className={styles.tech}>
                <h3>Conhecimentos</h3>
                <div className={styles.icones}>
                    <FaHtml5 className={styles.icone} />
                    <FaCss3 className={styles.icone} />
                    <FaJs className={styles.icone} />
                    <FaReact className={styles.icone} />
                    <FaNodeJs className={styles.icone} />
                </div>
            </div>
        </section>
    )
}

export default Sobre