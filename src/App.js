import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/login/Login"
import Layout from "./components/layout/Layout"
import Overview from "./pages/overview/Overview"
import Chat from "./pages/chat/Chat"
import Shop from "./pages/shop/Shop"
import Trening from "./pages/trening/Trening"
import Race from "./pages/race/Race"
import Work from "./pages/work/Work"
import Team from "./pages/team/Team"
import Premium from "./pages/premium/Premium"
import Ranking from "./pages/ranking/Ranking"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import getPalette from "./utils/theme"

function App() {
  const theme = createTheme({
    palette: getPalette(),
  });
 return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route element={<Layout />} >
           <Route path="overview" element={<Overview />} />
           <Route path="chat" element={<Chat />} />
           <Route path="shop" element={<Shop />} />
           <Route path="shop/:cat" element={<Shop />} />
           <Route path="trening" element={<Trening />} />
           <Route path="race" element={<Race />} />
           <Route path="work" element={<Work />} />
           <Route path="team" element={<Team />} />
           <Route path="premium" element={<Premium />} />
           <Route path="ranking" element={<Ranking />} />
         </Route>
       </Routes>
     </BrowserRouter>
    </ThemeProvider>
 )
}

export default App