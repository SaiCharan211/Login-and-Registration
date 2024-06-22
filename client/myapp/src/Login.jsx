import{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Login() {
  const [email,setEmail]=useState() 
  const [password,setPassword]=useState()   
  const [error,setError]=useState()

  const navigate=useNavigate()

  const handleSubmit=(e)=>{
     e.preventDefault()
     axios.post('https://new-login-and-signup-2.onrender.com/login',{email,password})
     .then(result=>{
          if(email.value !=="" && password.value!==""){
            
            if(result.data==="Success"){
             
              navigate('/Home', { replace: true });
              
            }else{
              setError("Password Incorrect")
              console.log("wrong details")
              
            }
          }else if(email.value==="" || password.value===""){
            console.log("Input details")
          }
     })
     .catch(err=>{console.log(err)
      setError("Details are wrong")
    })
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
       <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
        

            <div className="m-3">
                <label htmlFor="email"> <strong>E-mail</strong></label>
                <input type="email"  className="form-control  "
                name="email" placeholder="Enter Email"
                onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className="m-3 ">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password"  className="form-control " 
                name="password" placeholder="Enter Password" 
                onChange={(e)=>setPassword(e.target.value)}/>
                
            </div>
            <p style={{color:"Red"}}>{error}</p>
            <button type="submit" className="btn btn-success w-100 ">Login</button>
        </form>
        
        <p> New User</p>
        
            <Link to='/' className="btn btn-default border w-100 ">Register</Link>
            
       </div>
    </div>
    </div>
  )
}

export default Login
