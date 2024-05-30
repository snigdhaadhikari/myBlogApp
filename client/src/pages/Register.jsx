import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="flex align-content-center">
        <div className="card" style={{width: "22rem", borderRadius: "10px", border: "1px solid"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={{color:"blue"}}>CREATE NEW ACCOUNT</h5>
            <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label">First Name</label>
              <input type="text" className="form-control"  placeholder="Enter Your First Name"/>
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">Last Name</label>
              <input type="text" className="form-control"  placeholder="Enter Your Last Name"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control"  placeholder="name@example.com"/>
            </div>
            <label for="inputPassword5" className="form-label">Password</label>
          <input type="password"  className="form-control" aria-describedby="passwordHelpBlock"/>
          <div id="passwordHelpBlock" className="form-text">
          </div>
          <label for="inputPassword5" className="form-label">Confirm Password</label>
          <input type="password"  className="form-control" aria-describedby="passwordHelpBlock"/>
          <div id="passwordHelpBlock" className="form-text">
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-danger">Sign Up</button><hr/>
          </div>
          <div className="icon-link" href="#">
              <svg className="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
              <Link to = "/login" >Back To Login</Link>
          </div>
        </div>
          
      </div>
    </div>
  </div>
  )
}

export default Register