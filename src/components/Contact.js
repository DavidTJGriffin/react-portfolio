import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
   
    const { name, email, message } = formState;

  return (
    <section>
    

    <form id="contact">
        <div></div>
        <h1 className="title-name">CONTACT</h1>
        
        <div className='name-box'>
            <label htmlFor="name">Name:</label>
            
            <input type="text" defaultValue={name}  name="name" />
        </div>
        
        
        <div className='email-box'>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input type="email" defaultValue={email} name="email" />
        </div>
        
        <div className='message-box'>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea name="message" defaultValue={message}  rows="5" />
        </div>

       

        <button id='submit' type="submit">Submit</button>
    </form>
</section>
  )
}

export default Contact