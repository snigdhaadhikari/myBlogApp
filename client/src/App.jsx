
import { Route, Routes } from 'react-router-dom'

import UserLayout from './layout/UserLayout'
import AdminLayout from "./layout/AdminLayout"
import Login from './pages/Login'
import Register from './pages/Register'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import BlogDetail from './pages/BlogDetail'
import Blogs from './Blogs'


const App = () => {
  

  return (
    <>
    <Routes>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Register" element = {<Register/>}/>
      
      <Route path = "/" element = {<UserLayout/>}>
        <Route index element = {<Home/>}/>
        <Route path = "contact" element = {<Contact/>}/>
        <Route path = "about" element = {<About/>}/>
        <Route path = "blogs" element = {<Blogs/>}/>
        <Route path = "blogs/:id" element = {<BlogDetail/>}/>

      </Route>
      <Route path = "/admin" element = {<AdminLayout/>}>
        <Route path = "blogs" element = {<Home/>}/>
      </Route>
      <Route path = "*" element = {<Notfound/>}/>

      
    </Routes>
    </>
  )
}

export default App
