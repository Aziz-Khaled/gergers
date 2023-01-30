import React from 'react'
import './formulaire.css'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import app from '../Firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

function Formulaire() {

  const db = getFirestore(app);
  const navigate = useNavigate()

const [name , setName] = useState ("")
const [email , setEmail] = useState ("")
const [phoneNumber , setPhoneNumber] = useState ("")
const [message , setMessage] = useState ("")
const [workType , setWorkType ] = useState ("")


const postData = async (e) => {
  e.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name ,
      email: email,
      phoneNumber: phoneNumber , 
      message : message ,
      workType : workType , 
      sendAt : new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    alert("thank you for believing in us !! we will contact you as soon as possible ") ;
    navigate ("/")

  } catch (e) {
    console.log("Error adding document: ", e);
    console.log (e.code)
  }
  
}
















  return (
    <div>
<div className="container">
  
  <div className=" text-center mt-5 ">
    <h1>Collab / Personal project Form </h1>
  </div>
  <div className="row ">
    <div className="col-lg-7 mx-auto">
      <div className="card mt-2 mx-auto p-4 bg-light">
        <div className="card-body bg-light">
          <div className="container">
            <form id="contact-form" role="form">
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_name">Name *</label>
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Please enter your name "
                        required="required"
                        data-error="Firstname is required."
                        onChange ={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_lastname">Phone number *</label>
                      <input
                        id="form_lastname"
                        type="text"
                        name="surname"
                        className="form-control"
                        placeholder="Please enter your phone number "
                        required="required"
                        data-error="PhoneNumber is required."
                        onChange ={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="form_email">Email *</label>
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Please enter your email *"
                        required="required"
                        data-error="Valid email is required."
                        onChange ={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">

                      <label htmlFor="form_need">
                        Please specify your need *
                      </label>
                      
                      <input
                        id="form_email"
                        type="text"
                        name="text"
                        className="form-control"
                        placeholder=" Collaboration / Personal project "
                        required="required"
                        onChange ={(e) => setWorkType(e.target.value)}
                      />




                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="form_message">Description *</label>
                      <textarea
                        id="form_message"
                        name="Description"
                        className="form-control"
                        placeholder="Describe here."
                        rows={5}
                        required="required"
                        data-error="Please, leave us a message."
                        defaultValue={""}
                        onChange ={(e) => setMessage(e.target.value)}
                        
                        
                      />
                    </div>
                  </div>
                  <div  className="col-md-12">
                    <input
                      type="submit"
                      className="btn btn-success btn-send  pt-2 btn-block"
                      onClick ={postData}
                    />
<Link to ='/'>
                      <input
                      type=""
                      className="btn btn- btn-send  pt-2 btn-block"
                      style={{color : 'red'}}
                      defaultValue="back"
/></Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /.8 */}
    </div>
    {/* /.row*/}
  </div>
</div>

</div>
  )
}

export default Formulaire