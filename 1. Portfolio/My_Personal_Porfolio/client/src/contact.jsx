import React from 'react';
import './contact.css';
export default function Contact() {
    
return (
<>

<p>Contact</p>
{
  
    <form className="contact-form">
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Send</button>
  <br></br>
  <button type="reset">Reset</button>

</form>
}

</>
);
}