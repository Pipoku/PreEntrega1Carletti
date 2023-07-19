import { useState } from "react";
import './ContactUsPage.css'

const ContactUsPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to track form submission


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here, such as sending data to a server

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
    
    // Set submitted state to true
    setSubmitted(true);
  };
  return (
    <div style={{width:300,margin:"0 auto"}}>
      <h4>Welcome to Portrait world! Here you will find all kind of portrait, if you have a request for one, do not wait and contact us!</h4><br/>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  {submitted && (
        <div className="alert">
          Thank you for your message! We will be in touch soon.
        </div>
      )}
  </div>
  );
};

export default ContactUsPage;
