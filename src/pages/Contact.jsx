import React, { useState, useEffect } from 'react';
import { useContact } from '../ContactContext/ContactContext';
import '../styles/Contact.css'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const [error, setError] = useState('');

  const { list, setList } = useContact();

  useEffect(() => {
    if (submittedMessage) {
      setList(prevList => [...prevList, submittedMessage]);
      // Reset the submitted message
      setSubmittedMessage(null);
    }
  }, [submittedMessage, setList]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault(); // Prevent default form submission behavior
    // Check for null inputs
    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    const newMessage = { name, email, message };
    // Instead of updating the list directly, we update the submittedMessage state
    setSubmittedMessage(newMessage);
    setName(''); // Clear the input field after handling the entry
    setEmail(''); // Clear the email field
    setMessage(''); // Clear the message field
    setError(''); // Clear the error message
  }
  
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <h1>CONTACT US</h1>
        <br />
        <br />
        <div className="container">
          {error && <p className="error">{error}</p>}
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={handleNameChange} 
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={handleEmailChange} 
          />
          <textarea 
            placeholder="Message" 
            value={message} 
            onChange={handleMessageChange} 
          />
          <input 
            type="button" 
            value="Ajouter" 
            onClick={handleClick} 
          />
          {list.map((item, index) => (
            <div className="list-item" key={index}>
              <p>Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Message: {item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
