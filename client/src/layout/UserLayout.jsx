import { Outlet } from 'react-router-dom'
import UserNavbar from "./UserNavbar"
import UserFooter from "./UserFooter"


const UserLayout = () => {
  return (
    <div>
      <UserNavbar/>
      <main className='container' style={{height:'570px'}}>
      <Outlet/>
      </main>         
      <UserFooter/> 
  
    </div>
  )
}

export default UserLayout