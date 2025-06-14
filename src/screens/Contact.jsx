import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import BannerImage from '../components/BannerImage';
import FullTwo from '../assets/FullTwo.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatus({ type: 'error', message: 'Failed to send your message. Please try again later.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="pt-10 min-h-screen bg-gray-50">
      <BannerImage
        src={FullTwo}
        alt="Our Work Banner"
      />
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">
              We'd love to hear from you. Reach out with any questions or inquiries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 text-gray-900 placeholder-gray-400"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors duration-200 ${
                    isSubmitting
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {status.message && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Mail className="text-indigo-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="mailto:sudheer@sgtensiles.com"
                        className="hover:text-indigo-600 transition-colors"
                      >
                        sudheer@sgtensiles.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-indigo-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="tel:+919000 88 0037"
                        className="hover:text-indigo-600 transition-colors"
                      >
                        (+91) 9000 88 0037
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-indigo-600 mr-4 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 mt-1">
                      55-35-8/3, Sri Sai Nelayam, <br />
                      HB Colony, Visakhapatnam, 530022,<br /> Andhra Pradesh, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;