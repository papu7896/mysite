import React from 'react'

const skills = () => {
  return (
    <div style={{color:'white' }}>
      <div>
        <h2 style={{  paddingBottom: '1cm', paddingLeft: '14cm',height:'14px' }}>COURSES AND  SKILLS</h2>
      </div>
      <div className="container">
        <div className="box1" style={{display: 'block',paddingLeft:'3cm',fontFamily:'sans-serif'}}>
            <h1 style={{paddingLeft:'2cm',color:'brown'}}>COURSES</h1>
          <p >• Probability, Statistics and Stochastic Process</p>
          <p >•Computational Techniques</p>
          <p >•Introduction to Programming</p>
          <p >•Computational Programming and Process Simulation Lab</p>
          <p >•Mathematical foundations of data science</p>
        </div>
        <div className="box2" style={{display: 'block',paddingLeft:'3cm',fontFamily:'sans-serif'}} >
            <h1 style={{paddingLeft:'3cm',color:'brown'}}>SKILLS</h1>
          <p >•Programming Language-C, C++, Python,Javascript</p>
          <p>•Full Stack Developer -CSS,HTML,JS,NodeJs,ReactJs,Express,Mongodb</p>
          <p >• Machine Learning,Deep learning</p>
          <p >•Practices: Object-Oriented Programming, Data structure and algorithms</p>
          <p >•Software’s: MATLAB, MS-Excel, MS-word</p>
        </div>
      </div>
      <div>
        <div>
        <div>
        <h2 style={{   paddingLeft: '14cm',fontFamily:'monospace',paddingTop:'20px' }}>PROJECT AND EXPERIENCE</h2>
      </div>
        </div>
      </div>
      <div className="box">
  <h2>Academic Project(CMTP) (Nov,21 –Dec, 21)
</h2>
<p >•Create a CFD model to increase the amount of energy.
</p>
<p>•being able to understand and appreciate the potential applications of the material we learned
in the CMTP course</p>
<p>• Even though we weren't able to do anything on our own, the modelling and simulation
portion was fascinating. It motivated us to investigate.
</p>
  
</div>

    </div>
  )
}

export default skills