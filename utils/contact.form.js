import React, { useRef } from 'react';

function ContactForm() {
  const formRef = useRef(null);
  const formMessagesRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        formMessagesRef.current.classList.remove('error');
        formMessagesRef.current.classList.add('success');
        formMessagesRef.current.innerText = await response.text();
        formRef.current.reset();
      } else {
        formMessagesRef.current.classList.remove('success');
        formMessagesRef.current.classList.add('error');
        const errorMessage = await response.text() || 'Oops! An error occurred and your message could not be sent.';
        formMessagesRef.current.innerText = errorMessage;
      }
    } catch (error) {
      formMessagesRef.current.classList.remove('success');
      formMessagesRef.current.classList.add('error');
      formMessagesRef.current.innerText = 'Oops! An error occurred and your message could not be sent.';
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder="Name" required />
        <input type="email" name="email" id="email" placeholder="Email" required />
        <textarea name="message" id="message" placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div id="form-messages" ref={formMessagesRef}></div>
    </div>
  );
}

export default ContactForm;
