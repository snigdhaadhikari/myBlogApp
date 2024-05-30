import React from 'react'

const AdminSideBar = () => {
  return (
    <div style = {{minHeight: '100vh'}} >
            <div className="d-flex">
            <div className="col-md-4" style={{width: "280px"}}>
              <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px", height: "100vh"}}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                  <span className="fs-4">Sidebar</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                      <svg className="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link text-white">
                      <svg className="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
                      Customers
                    </a>
                  </li>
                </ul>
                <hr/>
                <div className="dropdown">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                    <strong>mdo</strong>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
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