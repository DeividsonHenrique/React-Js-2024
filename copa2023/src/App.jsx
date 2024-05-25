import './App.css'
import TournamentBracket from './components/TournamentBracket'
import { useState } from 'react'
import TabButton from './components/TabButton'
import Card from './components/Card'

function App() {

  const [ activeTab, setActiveTab ] = useState('Finais')

  function handleChangetab(tabName){
    setActiveTab(tabName)
  }

  function renderTabContent(){
    switch(activeTab){
      case 'Finais':
        return <TournamentBracket fase="finais" />
      case 'Semifinais':
        return <TournamentBracket fase="semifinais" />
      case 'Quartas':
        return <TournamentBracket fase="quartas" />
      case 'Oitavas':
        return <TournamentBracket fase="oitavas" />
      case 'Grupos':
        return <section className='cards'><Card /></section>
    }
  }
  return (
    <>
      <h1>Copa do Mundo Femenina 2023</h1>

      <section className="knockout_table">
        
    <div className='tabs'>
      <TabButton tabName="Finais" activeTab={activeTab} handleChangetab={handleChangetab} />

      <TabButton tabName="Semifinais" activeTab={activeTab} handleChangetab={handleChangetab} />

      <TabButton tabName="Quartas" activeTab={activeTab} handleChangetab={handleChangetab} />

      <TabButton tabName="Oitavas" activeTab={activeTab} handleChangetab={handleChangetab} />

      <TabButton tabName="Grupos" activeTab={activeTab} handleChangetab={handleChangetab} />
    </div>

      <div className='tab_content'>
        {renderTabContent()}
      </div>
      </section>
    </>
  )
}

export default App
