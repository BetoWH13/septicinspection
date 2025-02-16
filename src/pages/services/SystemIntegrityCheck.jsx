import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const SystemIntegrityCheck = () => {
  const integrityPoints = [
    {
      title: 'Component Inspection',
      description: 'Thorough examination of all system components for signs of wear or damage.',
      details: [
        'Tank and pipe inspection',
        'Baffle condition check',
        'Seal integrity verification',
        'Structural assessment'
      ]
    },
    {
      title: 'Leak Detection',
      description: 'Identifying and locating any leaks within the septic system.',
      details: [
        'Pressure testing',
        'Visual leak detection',
        'Dye testing',
        'Leak source identification'
      ]
    },
    {
      title: 'Performance Analysis',
      description: 'Evaluating the overall performance and efficiency of the septic system.',
      details: [
        'Flow rate measurement',
        'System efficiency evaluation',
        'Component functionality testing',
        'Performance optimization'
      ]
    },
    {
      title: 'Safety Verification',
      description: 'Ensuring the septic system meets all safety standards and regulations.',
      details: [
        'Compliance check',
        'Safety feature assessment',
        'Regulation adherence verification',
        'Risk assessment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>System Integrity Check Services | Comprehensive Septic System Evaluation</title>
        <meta name="description" content="Professional system integrity check services including component inspection, leak detection, and safety verification." />
        <link rel="canonical" href="https://septicinspection.xyz/services/system-integrity-check" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "System Integrity Check Service",
              "description": "Professional system integrity check including component inspection, leak detection, and safety verification",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Professional Septic Services"
              },
              "serviceType": "System Integrity Check",
              "areaServed": {
                "@type": "State",
                "name": ["Florida", "Georgia", "South Carolina", "Alabama", "Tennessee"]
              }
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive System Integrity Check
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensure the safety and efficiency of your septic system with our detailed integrity check services.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {integrityPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{point.title}</h2>
              <p className="text-gray-600 mb-6">{point.description}</p>
              <ul className="space-y-3">
                {point.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why System Integrity Matters</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thorough Evaluation</h3>
                <p className="text-gray-600">Comprehensive assessment of all system components for optimal performance.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety Assurance</h3>
                <p className="text-gray-600">Ensures your system meets all safety standards and regulations.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
                <p className="text-gray-600">Maximizes system efficiency and longevity.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your System Integrity Check</h2>
          <p className="text-gray-600 mb-6">
            Ensure your septic system is safe and efficient. Schedule your integrity check today.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Back to Home Button */}
        <div className="py-8 text-center">
          <Link to="/" className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SystemIntegrityCheck;
