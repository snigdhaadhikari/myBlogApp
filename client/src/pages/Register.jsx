import {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../services/users'
import Notify from '../components/Alert'

const Register = () => {
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const registerForm = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();
    const form = registerForm.current;
    const formData = new FormData(form);
    const {data} = await register(formData)
    if(data){
      setMessage(data?.data?.message)
      setTimeout(()=>{
        navigate("/login")
      }, 3000);
     
    }
  } 
  catch(e){
    const error = e?.response?.data?.msg.includes("E11000") ? "Email already in use" : e?.response?.data?.msg;
    setError(error)
  } 
  finally{
    setTimeout(()=>{
      setError("")
      setMessage("")
    }, 3000)
  }
  };

  return (
    <div className="d-flex justify-content-center vh-100">
      <div className="flex align-content-center">
        <div className="card" style={{width: "22rem", borderRadius: "10px", border: "1px solid"}}>
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title" style={{color:"blue"}}>CREATE NEW ACCOUNT</h5>
            { error && <Notify msg = {error}/>}
            { message && <Notify variant ={ "success" } msg = {message}/>}
            <form ref = {registerForm} onSubmit = {handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text"
               className="form-control" 
                placeholder="Enter Your Name"
                name = "name"
                required
                />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email"
               className="form-control"  
               placeholder="name@example.com"
               name = "email"
               required
               />
            </div>
            <label className="form-label">Password</label>
          <input type="text" 
           className="form-control"
           name = "password"
           required 
           />
          <label className="form-label">Picture</label>
          <input type="file"  className="form-control"/>
          <div className="text-center m-3">
            <button type="submit" className="btn btn-danger" >Sign Up</button><hr/>
          </div>
          </form>
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