import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/login/Login"
import Main from "./pages/main/Main"
import Layout from "./components/layout/Layout"
import Shop from "./pages/shop/Shop"
import Garage from "./pages/garage/Garage"

function App() {
 return (
   <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
         <Route element={<Layout />} >
           <Route path="main" element={<Main />} />
           <Route path="shop" element={<Shop />} />
           <Route path="garage" element={<Garage />} />
         </Route>
       </Routes>
     </BrowserRouter>
   </div>
 )
}

export default App