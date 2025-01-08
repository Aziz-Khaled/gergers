import React from 'react'
import { Card } from 'react-bootstrap'

function Project() {
  return (
    <div>
        <div className="Project-container" id="Projects">
            <h2 style={{marginBottom: '40px', textDecoration : 'underline' , fontStyle :'italic' , marginTop : '20px'}}>Projects</h2>

            <div className= "project-disp">
            <Card style={{ width: '18rem' , marginBottom :"12px"}}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/tinker.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>



    <Card style={{  width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/epok.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>




    <Card style={{  width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/victoria-spicer.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>




    <Card style={{  width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/unonim.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/new-school.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/a-collective.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/spec.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' , marginBottom :"12px" }}>
      <Card.Img src = "https://assets.hongkiat.com/uploads/clean-simple-minimalist-website-design/zero-site.jpg" />
      <Card.Body>
      </Card.Body>
    </Card>



            </div>
        </div>
    </div>
  )
}

export default Project