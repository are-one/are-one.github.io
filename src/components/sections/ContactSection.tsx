'use client';

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import RevealOnScroll from '@/animations/RevealOnScroll';
import { profile } from '@/data/profile';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: 'Email',
    info: 'your.email@example.com',
  },
  {
    icon: <FaPhone />,
    title: 'Phone',
    info: '+62 123 4567 890',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    info: 'Jakarta, Indonesia',
  },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <RevealOnScroll direction="up">
          <h2 className="section-title gradient-text">Get In Touch</h2>
        </RevealOnScroll>

        <div className="contact-content">
          <div className="contact-info">
            <RevealOnScroll direction="right">
              <h3>Let's talk about everything!</h3>
              <p>Don't like forms? Send me an email. 👋</p>

              <div className="info-cards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll direction="left">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
