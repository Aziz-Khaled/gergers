import React from 'react'
import Creator from '../creator.jpg'
import 'animate.css';

function Intro() {
  return (
  <div>
        <div id ="Home" >
            <div className="INTRO">

                <div className="description">
                    <h1>Hi, i'm Mohamed aziz khaled</h1>
                    <p style={{whiteSpace: 'normal' , width: "50%", margin: 'auto'}}>
                    As a junior web developer, I specialize in creating dynamic websites using a combination of technologies including HTML, CSS, JavaScript, and the MERN stack. 
                    </p>
                </div>
                <img className="phInto" alt="intro"  src ={Creator}/>
                
            </div>

        </div> 



    </div>
  )
}

export default Intro