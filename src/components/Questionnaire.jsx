import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: '',
    lastInspection: '',
    issues: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const requiredFields = {
      1: ['propertyType'],
      2: ['lastInspection'],
      3: ['issues'],
      4: ['name', 'email', 'phone']
    };

    const currentFields = requiredFields[step] || [];
    const missingFields = currentFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setErrorMessage(`Please fill in all required fields`);
      return false;
    }

    if (step === 4 && !isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }

    if (step === 4 && !isValidPhone(formData.phone)) {
      setErrorMessage('Please enter a valid phone number');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\+?[\d\s-()]{10,}$/.test(phone);
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to LeadSmart
      window.location.href = "https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=albertowaizel1&category=&funnel=3&buttons=btn-success&step=1";
      
      setStatus('success');
      // Reset form after successful submission
      setFormData({
        propertyType: '',
        lastInspection: '',
        issues: '',
        name: '',
        email: '',
        phone: '',
        address: ''
      });
      setStep(1);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="mt-2 text-xl font-semibold text-gray-900">Thank you!</h3>
          <p className="mt-1 text-gray-600">We've received your information and will contact you shortly.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </Link>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get Your Free Septic Inspection Quote
        </h2>
        
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Property Type</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Last Inspection</label>
                <select
                  name="lastInspection"
                  value={formData.lastInspection}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                >
                  <option value="">When was the last inspection?</option>
                  <option value="never">Never</option>
                  <option value="1-3">1-3 years ago</option>
                  <option value="3-5">3-5 years ago</option>
                  <option value="5+">5+ years ago</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Current Issues</label>
                <textarea
                  name="issues"
                  value={formData.issues}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Any current issues or concerns?"
                  rows="3"
                />
              </div>
              
              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Property Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  rows="2"
                  required
                />
              </div>
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`ml-auto px-4 py-2 rounded text-white transition-colors ${
                  status === 'submitting'
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Questionnaire;
