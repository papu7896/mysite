import React from 'react';

const Contact = () => {
  return (
    <div style={{fontFamily:'sans-serif'}}>
      <div className='contact' style={{textAlign:'center'}}>
        <h1 style={{color:'white'}}>Contact details  </h1>
      </div>
      <div className='two' >
        <div className='details' style={{color:'white',textAlign:'center',paddingTop:'1cm'}}>
           <h4>Adress:-</h4>
           <p>IIT Madras ,chennai ,Tamilnadu</p>
           <p>PiN-600036</p>
           <h4>Phone Number:-</h4>
           <p>6003021950</p>
           <h4>Email:-</h4>
           <p>papupayeng123@gmail.com</p>
        </div>
        <div className="details" style={{backgroundColor:'white'}}>
          <div style={{paddingLeft:'2cm'}}>
            <h3 style={{paddingLeft:'2cm'}}>SEND MESSAGE </h3>
            <form>
              <label htmlFor="name">Type your name:</label><br/>
              <input type="text" id="name" name="name"/><br/>

              <label htmlFor="email">Enter your email:</label><br/>
              <input type="email" id="email" name="email"/><br/>

              <label htmlFor="message">Write your message:</label><br/>
              <textarea id="message" name="message" style={{width:'7.8cm',height:'4cm'}}></textarea><br/>

              <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


