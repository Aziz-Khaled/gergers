import React from 'react'
import './skills.css'

function Skills() {
  return (
    <div>
<div className="SKILLS" id="Skills">
  <div className="container">
    <h2 className="pb-3 pt-2 border-bottom mb-5">
      Skills
    </h2>
    {/*first section*/}
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center bottom d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">1</div>
      </div>
      <div className="col-6">
        <h5>HTML</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere
          interdum lectus.
        </p>
      </div>
    </div>
    {/*path between 1-2*/}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner left-bottom" />
      </div>
    </div>
    {/*second section*/}
    <div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
        <h5>CSS</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere
          interdum lectus.
        </p>
      </div>
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">2</div>
      </div>
    </div>
    {/*path between 2-3*/}
    <div className="row timeline">
      <div className="col-2">
        <div className="corner right-bottom" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner top-left" />
      </div>
    </div>
    {/*third section*/}
    <div className="row align-items-center how-it-works d-flex">
      <div className="col-2 text-center top d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">3</div>
      </div>
      <div className="col-6">
        <h5>React js</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere
          interdum lectus.
        </p>
      </div>
    </div>

    {/*  */}

    <div className="row timeline">
      <div className="col-2">
        <div className="corner top-right" />
      </div>
      <div className="col-8">
        <hr />
      </div>
      <div className="col-2">
        <div className="corner left-bottom" />
      </div>
    </div>
    {/*second section*/}
    <div className="row align-items-center justify-content-end how-it-works d-flex">
      <div className="col-6 text-right">
        <h5>Express js / Node js</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          gravida aliquam. Morbi orci urna, iaculis in ligula et, posuere
          interdum lectus.
        </p>
      </div>
      <div className="col-2 text-center full d-inline-flex justify-content-center align-items-center">
        <div className="circle font-weight-bold">4</div>
      </div>

    </div>


  </div>

</div>



        {/* <div className ="stat-cont" id="Skills"> 
              <div className="stat">
                  <h3>Skills</h3>
              
              </div>
        </div> */}
    </div>
  )
}

export default Skills