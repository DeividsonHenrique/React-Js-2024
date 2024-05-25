import './App.css'
import Card from './components/Card'
import GameTable from './components/GameTable'
import GroupStanding from './components/GroupStanding'
import KnockoutStage from './components/KnockoutStage'

function App() {

  return (
    <>
      <h1>Copa do Mundo Femenina 2023</h1>
      <section className='cards'>
        <Card />
      </section>

      <h2>Tabela de Jogos</h2>

      <section className='game_table'>
        <GameTable />
      </section>

      <h2>Classificação por Grupo</h2>

      <section className='group_table'>
        <GroupStanding />
      </section>

      <h2>Oitvas de Final</h2>

      <section className='knockout_table'>
        <KnockoutStage fase="oitavas" />
      </section>

    </>
  )
}

export default App
