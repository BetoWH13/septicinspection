import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DrainFieldEvaluation = () => {
  const evaluationPoints = [
    {
      title: 'Soil Absorption Test',
      description: 'Assessing soil absorption capabilities to ensure proper drainage and system efficiency.',
      details: [
        'Percolation test',
        'Soil type analysis',
        'Absorption rate measurement',
        'Drainage efficiency evaluation'
      ]
    },
    {
      title: 'Surface Condition Check',
      description: 'Examining the surface for signs of saturation, pooling, or erosion.',
      details: [
        'Surface saturation assessment',
        'Pooling detection',
        'Erosion inspection',
        'Vegetation impact analysis'
      ]
    },
    {
      title: 'Proper Drainage Verification',
      description: 'Ensuring that the drain field is effectively managing wastewater.',
      details: [
        'Flow path analysis',
        'Blockage detection',
        'Drainage rate verification',
        'System performance optimization'
      ]
    },
    {
      title: 'System Longevity Assessment',
      description: 'Evaluating the long-term viability and health of the drain field.',
      details: [
        'Component lifespan estimation',
        'Maintenance requirement analysis',
        'Potential failure points identification',
        'Future needs assessment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Drain Field Evaluation Services | Expert Septic System Assessment</title>
        <meta name="description" content="Professional drain field evaluation services including soil absorption tests, surface condition checks, and system longevity assessments." />
        <link rel="canonical" href="https://septicinspection.xyz/services/drain-field-evaluation" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Drain Field Evaluation Service",
              "description": "Professional drain field evaluation including soil absorption testing, surface condition checks, and system longevity assessments",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Professional Septic Services"
              },
              "serviceType": "Drain Field Evaluation",
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
            Professional Drain Field Evaluation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive evaluation of your septic system's drain field to ensure optimal performance and longevity.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {evaluationPoints.map((point, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Drain Field Evaluation Matters</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimal Performance</h3>
                <p className="text-gray-600">Ensures your drain field is functioning efficiently and effectively.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Preventative Care</h3>
                <p className="text-gray-600">Identifies potential issues before they become costly problems.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⏳</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Long-Term Health</h3>
                <p className="text-gray-600">Extends the lifespan of your septic system.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Drain Field Evaluation</h2>
          <p className="text-gray-600 mb-6">
            Ensure your septic system is working efficiently. Get your drain field evaluated today.
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

export default DrainFieldEvaluation;
