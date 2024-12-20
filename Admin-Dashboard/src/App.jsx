import { ColorModeContext, UseMode } from "./Theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import TopBar from "./scenes/Global/TopBar"
// import SideBar from "./scenes/Global/SideBar"
import Dashboard from "./scenes/Dashboard"
// import Team from "./scenes/Team"
// import Invoices from "./scenes/Invoices"
// import Contacts from "./scenes/Contacts"
// import Bar from "./scenes/Bar"
// import Form from "./scenes/Form"
// import Line from "./scenes/Line"
// import Pie from "./scenes/Pie"
// import FAQ from "./scenes/Faq"
// import Geography from "./scenes/Geography"
// import Calendar from "./scenes/Calendar"



function App() {
  const [theme, colorMode] = UseMode()


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div>
            {/* <SideBar /> */}
            <main>
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/team" element={<Team />} /> */}
                {/* <Route path="/contacts" element={<Contacts />} /> */}
                {/* <Route path="/invoices" element={<Invoices />} /> */}
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                {/* <Route path="/geography" element={<Geography />} /> */}
                {/* <Route path="/calendar" element={<Calendar />} /> */}
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
