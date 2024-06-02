import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Notify from '../components/Alert'

import { login } from "../services/users"
import {setToken} from "../utils/token"

const Login = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: ""
  })
  const[error, setError] = useState("")

  const handleLogin = async (e) => {
    try{
      e.preventDefault();
      const {data} = await login(payload)
      if(data?.data){
        setToken(data.data)
        navigate("/");
      }
    }
  catch (e) {
    setError(e.message); // Set the error message
  } finally {
    setTimeout(() => {
      setError('');
    }, 3000); // Corrected setTimeout syntax
  }
};

  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="flex align-content-center">
        <div className="card" style={{ width: "22rem", borderRadius: "10px", border: "1px solid" }}>
          <img src=""  
            className="card-img-top" 
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title" style={{ color: "blue" }}>Login</h5>
            <form onSubmit={handleLogin}
            >
              { error && <Notify msg = {error}/>}
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email"
                  className="form-control"
                  required
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setPayload((prev) => ({
                      ...prev, email: e.target.value
                    }))
                  }} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setPayload((prev) => ({
                      ...prev, password: e.target.value
                    }))
                  }} />
              </div>
              <div className="icon-link d-flex flex-row-reverse">
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </div>
              <div>
              <button 
              type="submit"
               className="btn btn-danger"
               >
                Login
              </button>
              </div>

            </form>
            <hr />
            <div className="icon-link">
              <svg className="bi" aria-hidden="true"></svg>
              <Link to="/Register">Create new account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
