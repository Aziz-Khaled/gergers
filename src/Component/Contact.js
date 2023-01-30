import React, { useState } from 'react'
import contact from '../contact.png'
import './Comp.css'
import {Link} from'react-router-dom'
import  {getAuth , signInWithEmailAndPassword} from 'firebase/auth'
import app from '../Firebase'
import {useNavigate} from 'react-router-dom'

function Contact() {

  const [email , setEmail] = useState ('') ;
  const [password , setPassword] = useState ('') ;

  const auth = getAuth(app);

  const navigate = useNavigate()



  const LogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
      console.log (user) // ...
      console.log ("keep surfing !!") ; 
      navigate("/formulaire")
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
   //  console.log (errorMessage)// ..
     alert ("bad credentials")
  });
  }

  return (
    <div>

      <div className="Contact-container" id ="Contact">
      <h2 style ={{textAlign: "center" , paddingTop: "29px"}}>Contact</h2>

        <div className="Contact-content">

        <div>
          <img alt ="contact"   src ={contact} style={{width: "77%"}}/>
        </div>

        <div className="newsletter-subscribe">
  <div className="container">
    <div className="intro">
      <h2 className="text-center">don't hesitate !!</h2>
      <p className="text-center">
        Contact me for projects or a collab. !!{" "}
      </p>
    </div>
    <form  className="form-inline" method="post">
      <div className="form-group">
        <input
        style ={{marginBottom: '12px'}}
          className="form-control"
          type="email"
          name="email"
          placeholder="Your Email"
          value ={email}
          onChange ={(e) => setEmail(e.target.value)}
        />


        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Your password"
          value ={password}
          onChange ={(e) => setPassword(e.target.value)}
        />


      </div>
      <div className="form-group">
        <button onClick ={LogIn} style ={{marginTop : '20px'}} className="btn btn-primary" type="submit">
          sign in 
        </button>
      <Link to ='/Register' style ={{position: 'absolute', marginLeft: '15px', marginTop: '27px'}}> create an account ?</Link>       
      </div>
    </form>
  </div>
</div>




        



        </div>
      </div>
    </div>
  )
}

export default Contact