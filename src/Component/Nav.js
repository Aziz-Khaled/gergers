import React from 'react'
import {Navbar ,Container , Nav} from 'react-bootstrap'
import './Comp.css'
import LogoPersonel from '../logoPersonel.png'

function NavBarr() {
  return (
  <div>

    <Navbar   className="NavBaa">
      <Container>
        <Navbar.Brand  id="navsec" href="#home"><img src={LogoPersonel}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="NavC">
            <Nav.Link id="navsec" href="#Home" >Home</Nav.Link>
            <Nav.Link id="navsec" href="#Skills">Skills</Nav.Link>
            <Nav.Link id="navsec" href="#Projects">Projects</Nav.Link>
            <Nav.Link id="navsec" href="#Contact">Contact</Nav.Link>
            <Nav.Link id="navsec" href="https://www.linkedin.com/in/mohamed-aziz-khaled-09b79b224/"><i className="fa-brands fa-linkedin fa-xl"></i></Nav.Link>
            <Nav.Link id="navsec" href="https://www.instagram.com/mouhamedazizkhaled"><i className="fa-brands fa-instagram fa-xl"></i></Nav.Link>
            <Nav.Link id="navsec" href="https://github.com/Aziz-Khaled"><i className="fa-brands fa-github fa-xl"></i></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}
export default NavBarr