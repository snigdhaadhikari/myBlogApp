
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'


function App() {
  

  return (
    <>
    <Routes>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Register" element = {<Register/>}/>
      <Route path = "/Notfound" element = {<Notfound/>}/>
      
    </Routes>
    </>
  )
}

export default App