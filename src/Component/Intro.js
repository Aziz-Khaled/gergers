import React from 'react'
import Creator from '../creator.jpg'

function Intro() {
  return (
  <div>
        <div id ="Home" >
            <div className="INTRO">

                <div className="description">
                    <p style={{whiteSpace: 'normal'}}>
                    As a web developer, I specialize in creating dynamic and responsive websites using a combination of technologies, including HTML, CSS, JavaScript, and the MERN stack. My expertise in HTML and CSS allows me to design and layout visually stunning pages, 
                    while JavaScript enables me to create interactive and user-friendly features.
                    </p>
                </div>
                <img className="phInto" alt="intro"  src ={Creator}/>
            </div>

        </div> 



    </div>
  )
}

export default Intro