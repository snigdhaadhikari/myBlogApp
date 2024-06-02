import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
  return (
    <div style = {{minHeight: '100vh'}} >
            <div className="d-flex">
            <div className="col-md-4" style={{width: "280px"}}>
              <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height: "100vh"}}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg>
                  <span className="fs-4">My Blog</span>
                </Link>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <Link to="/admin" className="nav-link active" aria-current="page">
                      <svg className="bi me-2" width="16" height="16"><use xlink:to="#home"/></svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/users" className="nav-link text-white" >
                      <svg className="bi me-2" width="16" height="16"><use xlink:to="#table"/></svg>
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/blogs" className="nav-link text-white">
                      <svg className="bi me-2" width="16" height="16"><use xlink:to="#grid"/></svg>
                      Blogs
                    </Link>
                  </li>
                </ul>
                <hr/>
                <div className="dropdown">
                  <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><Link className="dropdown-item" to="#">New project...</Link></li>
                    <li><Link className="dropdown-item" to="#">Settings</Link></li>
                    <li><Link className="dropdown-item" to="#">Profile</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8"></div>
    </div>
    </div>
  )
}

export default AdminSideBar