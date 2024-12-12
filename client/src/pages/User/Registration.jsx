import React, {useRef} from 'react'
import axios from '../../axiosConfig'
import  './user.css';
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function Registration() {
  const navigate=useNavigate()
  const usernameDom=useRef()
  const firstnameDom=useRef()
  const lastnameDom=useRef()
  const emailDom=useRef()
  const passwordDom=useRef()
async function hadleform(e){
    e.preventDefault();
   
   try {
      await axios.post('/users/register', {
       username:  usernameDom.current.value,
       firstname: firstnameDom.current.value,
       lastname: lastnameDom.current.value,
       email: emailDom.current.value,
       password: passwordDom.current.value
      });
      alert("successful")
     navigate("/login")
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
      <p>Join the network<br/> </p>
      <span> already have an account? <a href="" className=""> SignIn</a> </span>
       </center>  
      <input type="user_name" id="user_name" name="user_name" placeholder="user_name" ref={emailDom} required />
      

      <div className="form_element">
      
      <input type="first_name"  name="first_name" placeholder="first_name" ref={firstnameDom} required />
      <input type="last_name" id="last_name" name="last_name" placeholder="last_name" ref={lastnameDom} required />
      </div>

      <input type="text" id="username" name="email" placeholder=" email"  ref={usernameDom} required />
      
      
      <input type="password" id="password" name="password" placeholder="your password" ref= {passwordDom} required />
      
      
      
      <center>
          <span> I agree to the <a href="" >privacy policy</a> and <a href="">terms of services </a></span>
      <br/>
      </center>
      
      <button className="form_button" type="submit">Register</button>
      <div className="centering">
       <span >   
       <a href="" >   already have an account  </a> 
        </span>    
      </div>
       </form>
            
        </div>
      </section>
    </div>
  )
}

export default Registration
