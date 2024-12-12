import React, { useState } from 'react';

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
  const [status, setStatus] = useState('');
  const [inspectionStatus, setInspectionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateInspectionStatus = () => {
    const { propertyType, lastInspection } = formData;
    
    // If last inspection is unknown, return urgent status immediately
    if (lastInspection === 'unknown') {
      return {
        level: 'urgent',
        message: 'Urgent: Schedule an inspection immediately. Unknown inspection history indicates potential risks to your septic system.',
        color: 'bg-red-50 text-red-700'
      };
    }
    
    // Convert last inspection to a numerical score
    let score = 0;
    
    // Property type scoring
    if (propertyType === 'commercial' || propertyType === 'industrial') {
      score += 2; // Commercial/Industrial properties have higher risk
    } else {
      score += 1;
    }
    
    // Last inspection scoring
    switch (lastInspection) {
      case 'never':
        score += 3;
        break;
      case '5+':
        score += 2;
        break;
      case '3-5':
        score += 1;
        break;
      case '1-3':
        score += 0;
        break;
      default:
        score += 1;
    }
    
    // Determine status based on total score
    if (score >= 4) {
      return {
        level: 'urgent',
        message: 'Urgent: Immediate inspection recommended. Your septic system shows high-risk factors.',
        color: 'bg-red-50 text-red-700'
      };
    } else if (score >= 3) {
      return {
        level: 'medium',
        message: 'Medium Priority: Inspection recommended soon. Some risk factors identified.',
        color: 'bg-yellow-50 text-yellow-700'
      };
    } else {
      return {
        level: 'ok',
        message: 'Low Priority: Regular inspection advised. Your system appears to be well-maintained.',
        color: 'bg-green-50 text-green-700'
      };
    }
  };

  const handleNext = () => {
    const status = calculateInspectionStatus();
    setInspectionStatus(status);
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Processing your request...');
    
    // Log form data
    console.log('Form submitted:', formData);
    
    // Show success message
    setStatus('Thank you! Redirecting you to our partner site...');
    
    // Redirect after a short delay to show the message
    setTimeout(() => {
      window.location.href = 'https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=albertowaizel1&category=&funnel=3&buttons=btn-success&step=1';
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Get Your Free Septic Inspection Quote
      </h2>
      
      {status && (
        <div className="mb-4 p-4 bg-blue-50 text-blue-700 rounded-md">
          {status}
        </div>
      )}

      {inspectionStatus && (
        <div className={`mb-4 p-4 rounded-md ${inspectionStatus.color}`}>
          {inspectionStatus.message}
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
                className="w-full p-2 border rounded-md"
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
                className="w-full p-2 border rounded-md"
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
                className="w-full p-2 border rounded-md"
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
                className="w-full p-2 border rounded-md"
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
                className="w-full p-2 border rounded-md"
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
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Property Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
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
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Questionnaire;
