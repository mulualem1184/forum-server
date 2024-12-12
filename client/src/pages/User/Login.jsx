import React, {useRef} from 'react'
import axios from '../../axiosConfig'
import  './user.css';
import {useNavigate} from 'react-router-dom'

function login() {
  const navigate=useNavigate()
 
  const emailDom=useRef()
  const passwordDom=useRef()
  async function hadleform(e){
    e.preventDefault();
   
   try {
      await axios.post('/users/login', {
      
       email: emailDom.current.value,
       password: passwordDom.current.value
      });
      alert("successful")
     navigate("/")
   } catch (error) {
    console.log(error.response)
    
   }
  }
  return (
    <div>
      <section>
        <div>
        
      <form className="form" onSubmit={hadleform} action="/submit" method="POST">
      <center>
      <p>LogIn into your account <br/> </p>
      <span> Don't have an account? <a href="" className=""> Create account </a> </span>
       </center>  
      
      

      
      <input type="text" id="username" name="email" placeholder=" email"  ref={emailDom} required />
      
      
      <input type="password" id="password" name="password" placeholder="your password" ref= {passwordDom} required />
      
      
      <button className="form_button" type="submit">Login</button>
      <center>
      <span> I agree to the <a href="" >privacy policy</a> and <a href="">terms of services </a><br /> <a href=""> already have an account </a> </span>
      </center>
       </form>
            
        </div>
      </section>
    </div>
  )
}

export default login
