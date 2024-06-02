import React from 'react'
import AdminSideBar from './AdminSideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <main className='d-flex vh-100'>
      <AdminSideBar/>
      </main>
      <div className='col-md-9 mt-5'>
      <Outlet/>
      </div>
     
    </div>
  )
}

export default AdminLayout