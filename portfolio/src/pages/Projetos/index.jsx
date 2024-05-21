import { useEffect, useState } from "react"
import Card from "../../components/Card"
import styles from "./Projetos.module.css"

function Projetos(){

    const [ repositiries, setRepositiries ] = useState([])

    useEffect(()=>{
        const buscarRepositorios = async ()=>{
            const response = await fetch("https://api.github.com/users/DeividsonHenrique/repos?page=1&per_page=20")

            const data = await response.json()
            setRepositiries(data)
        }
        buscarRepositorios()

    }, [])

    return(
        <section className={styles.projetos}>
                <h2>Projetos</h2>
                {
                    repositiries.length > 0 ? (
                        <section className={styles.listas}>
                            {
                                repositiries.map((repo)=>(
                                    <Card
                                    key={repo.id} 
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                    />
                                ))
                            }
                            
                </section>
                    ) : (
                        <p>Carregando...</p>
                    )
                }
        </section>
    )
}

export default Projetos