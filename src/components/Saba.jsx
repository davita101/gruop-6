import React from 'react';
// contacts
export default function Saba() {
  // 
  return (
    <div className='container'>
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2 >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="your name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="your message" />
      </div>
      <button type="submit">Submit</button>
    </div >
  )
};