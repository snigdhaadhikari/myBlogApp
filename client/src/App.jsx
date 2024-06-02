
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


// Admin Page
// import BlogList from "./pages/admin/blogs/List"
// import UserList from './pages/admin/users/List'


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
        <Route path = "blogs/:id" element = {<BlogDetail/>}/>

      </Route>
      {/* <Route path = "/admin" element = {<AdminLayout/>}>
        <Route index element = {<BlogList/>}/>
        <Route path = "blogs" element = {<BlogList/>}/>
        <Route path = "users" element = {<UserList/>}/>
      </Route>
      <Route path = "*" element = {<Notfound/>}/> */}

      
    </Routes>
    </>
  )
}

export default App
