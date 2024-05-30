import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="flex align-content-center">
        <div className="card" style={{width: "22rem", borderRadius: "10px", border: "1px solid"}}>
          <img src={{}}  
          className="card-img-top" 
          alt="..."
           />
          <div className="card-body">
            <h5 className="card-title" style={{ color:"blue" }}>Login</h5>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <label for="inputPassword5" className="form-label">Password</label>
          <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
          <div id="passwordHelpBlock" className="form-text">
          </div>
          <div className="icon-link d-flex flex-row-reverse" href="#">
              <svg className="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
              <Link to = "/ForgotPassword" >Forgot Password?</Link>
          </div>
            
            <button type="button" className="btn btn-danger">Login</button><hr/>
            <div className="icon-link" href="#">
              <svg className="bi" aria-hidden="true"><use xlink:href="#box-seam"></use></svg>
              <Link to = "/Register" >Create new account</Link>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login