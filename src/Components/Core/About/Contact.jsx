import React, { useState } from 'react';
import { sendSupportEmail } from './EmailService';

const ContactSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false); 

    const emailData = {
      to_name: formData.name,                    
      from_name: 'NeuraHealth Support Team',      
      user_email: formData.email,                  
      message: formData.message,                    
      support_team_email: 'support@neurahealth.com',
      support_team_phone: '+1-800-123-4567',        
    };

    try {
      await sendSupportEmail(emailData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 border border-gray-700 rounded-lg shadow-md bg-black animate-fade-in">
      <h2 className="text-2xl font-semibold text-center text-violet-400 mb-6 transition-all duration-500 ease-in-out hover:scale-110">
        Contact NeuraHealth Support
      </h2>
      {success ? (
        <p className="text-center text-violet-400 text-lg animate-bounce">
          Your message has been sent! We'll get back to you soon.
        </p>
      ) : submitted ? (
        <p className="text-center text-violet-400 text-lg animate-bounce">
          Thank you for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="transition-transform duration-500 hover:scale-105">
            <label htmlFor="name" className="block text-violet-400 font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div className="transition-transform duration-500 hover:scale-105">
            <label htmlFor="email" className="block text-violet-400 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            />
          </div>

          <div className="transition-transform duration-500 hover:scale-105">
            <label htmlFor="message" className="block text-violet-400 font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded-md bg-black text-white h-32 resize-y focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            ></textarea>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button 
            type="submit" 
            className="w-full py-2 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactSupport;
