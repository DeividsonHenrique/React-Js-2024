import TournamentBracket from "./components/TournamentBracket";
import { useState } from "react";
import TabButton from "./components/TabButton";
import Card from "./components/Card";
import { GlobalStyle, KnockOutTable, Tabs, Cards } from "./GlobalStyle";

function App() {
  const [activeTab, setActiveTab] = useState("Finais");

  function handleChangetab(tabName) {
    setActiveTab(tabName);
  }

  function renderTabContent() {
    switch (activeTab) {
      case "Finais":
        return <TournamentBracket fase="finais" />;
      case "Semifinais":
        return <TournamentBracket fase="semifinais" />;
      case "Quartas":
        return <TournamentBracket fase="quartas" />;
      case "Oitavas":
        return <TournamentBracket fase="oitavas" />;
      case "Grupos":
        return (
          <Cards>
            <Card />
          </Cards>
        );
    }
  }
  return (
    <>
      <GlobalStyle />
      <h1>Copa do Mundo Femenina 2023</h1>

      <KnockOutTable>
        <Tabs>
          <TabButton
            tabName="Finais"
            activeTab={activeTab}
            handleChangetab={handleChangetab}
          />

          <TabButton
            tabName="Semifinais"
            activeTab={activeTab}
            handleChangetab={handleChangetab}
          />

          <TabButton
            tabName="Quartas"
            activeTab={activeTab}
            handleChangetab={handleChangetab}
          />

          <TabButton
            tabName="Oitavas"
            activeTab={activeTab}
            handleChangetab={handleChangetab}
          />

          <TabButton
            tabName="Grupos"
            activeTab={activeTab}
            handleChangetab={handleChangetab}
          />
        </Tabs>

        <div>{renderTabContent()}</div>
      </KnockOutTable>
    </>
  );
}

export default App;
