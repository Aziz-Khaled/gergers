import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import {useState } from 'react'
import  {getAuth , createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase'
import {useNavigate} from 'react-router-dom'


function Registerr() {

  const auth = getAuth(app);

  const [email , setEmail] = useState ('') ;
  const [password , setPassword] = useState ('') ;
  
  const navigate = useNavigate()
 

  const SignIn = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    // Signed in 
      const user = userCredential.user ;
      console.log (user) ;
      console.log ("u signed up successfully !!!!")
      navigate('/formulaire')
      })
  .catch((error) => {
    const errorCode = error.code;
  //  const errorMessage = error.message;
    alert(errorCode)
  //  console.log (errorCode)
})}


  return (
    <div>

<div className="get-in-touch">
  <h1 className="title">Get in touch</h1>
  <form className="contact-form row">

    <div className="form-field col-lg-12">
      <input
        id="Email"
        className="input-text js-input"
        type="Email"
        required="required"
        onChange ={(e) => setEmail(e.target.value)}
      />
      <label className="label" htmlFor="message">
        E-mail
      </label>
    </div>

    <div className="form-field col-lg-12">
      <input
        id="password"
        className="input-text js-input"
        type="password"
        required="required"
        onChange ={(e) => setPassword(e.target.value)}
      />
      <label className="label" htmlFor="message">
        password
      </label>
    </div>

    <div className="form-field col-lg-12">
      <button onClick ={SignIn} className ="btn-grad">
      submit
      </button>
       {/* <input className="submit-btn" type="submit" defaultValue="Submit" /> */}
    </div>
    <Link to ='/' style ={{marginLeft:'170px', marginTop: '260px', position: 'absolute', fontSize: '21px'}}>Back</Link> 
  </form>
</div>

    </div>
  )
}

export default Registerr