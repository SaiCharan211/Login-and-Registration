import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [name,setName]=useState() 
  const [email,setEmail]=useState() 
  const [password,setPassword]=useState()   
 const [error,setError]=useState()
  
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
     e.preventDefault()
  }
  const RegisterButton=()=>{
    axios.post('https://new-login-and-signup-2.onrender.com/',{name,email,password})
     .then(result=>{
      console.log(result)
      if(email.value !=="" && password.value!==""){       
        navigate('/login')
      }else {
        console.log("Input details")
        setError("Enter Details")
      }
      
    })
     .catch(err=>{console.log(err)
      setError("Enter Details")
    })
  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
       <div className="bg-white p-3 rounded w-25">
        <h1>Signup</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className="m-3">
                <label htmlFor="name"> <strong>Name</strong></label>
                <input type="text"  className="form-control " 
                name="name" placeholder="Enter Your Name"
                onChange={(e)=>setName(e.target.value)} />
            </div>

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
            <p style={{color:"red"}}>{error}</p>
            <button type="submit" onClick={RegisterButton} className="btn btn-success w-100 ">Register</button>
        </form>
        
        <p> Already Have an Account</p>
            <Link to='/login' className="btn btn-default border w-100 ">Login</Link>
            
            
        
       </div>
    </div>
    </div>
  )
}

export default Signup