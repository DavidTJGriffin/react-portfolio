import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

  return (
    <section>
    

    {/* <form id="contact"> */}
    <form id="contact-form" action="https://formspree.io/f/xnnvpner" method="POST">
        <div></div>
        <h1 className="title-name">CONTACT</h1>
        <input type="hidden" name="_subject" value="New Contact Form Submission" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        
        <div className='name-box'>
            <label htmlFor="name">Name:</label>
            
            <input type="text" defaultValue={name}  name="name" />
        </div>
        
        
        <div className='email-box'>
            <label htmlFor="email">Email:</label>
            <br></br>
            <input
                type="email"
                defaultValue={email}
                name="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
        </div>
        
        <div className='message-box'>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea name="message" defaultValue={message} rows="5" required />
        </div>

       

        <button id='submit' type="submit">Submit</button>
    </form>


</section>
  )
}

export default Contact