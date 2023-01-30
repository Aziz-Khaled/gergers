import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
       <div className="footer-basic">
  <footer>
    <div className="social">
      <a href ="https://www.linkedin.com/in/mohamed-aziz-khaled-09b79b224/" >
      <i className="fa-brands fa-linkedin fa-l"></i>
      </a>
      <a href ="https://www.instagram.com/mouhamedazizkhaled" >
      <i className="fa-brands fa-instagram fa-l"></i>
      </a>
      <a href="https://github.com/Aziz-Khaled">
      <i className="fa-brands fa-github fa-l"></i>
      </a>

    </div>
    <ul className="list-inline">
      <li className="list-inline-item">
        <a href="#Home">Home</a>
      </li>
      <li className="list-inline-item">
        <a href="#Skills">Skills</a>
      </li>
      <li className="list-inline-item">
        <a href="#Projects">Projects</a>
      </li>
      <li className="list-inline-item">
        <a href="#Contact">Contact</a>
      </li>

    </ul>
    <p className="copyright">Company Name © 2023</p>
  </footer>
</div>

    </div>
  )
}

export default Footer