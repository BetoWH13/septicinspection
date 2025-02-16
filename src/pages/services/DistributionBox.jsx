import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DistributionBox = () => {
  const assessmentPoints = [
    {
      title: 'Structural Integrity Check',
      description: 'Comprehensive evaluation of your distribution box\'s structural condition.',
      details: [
        'Crack and damage inspection',
        'Water-tightness verification',
        'Settlement assessment',
        'Material degradation check'
      ]
    },
    {
      title: 'Flow Pattern Analysis',
      description: 'Detailed assessment of wastewater distribution patterns and efficiency.',
      details: [
        'Equal distribution verification',
        'Flow rate measurement',
        'Blockage detection',
        'Performance optimization'
      ]
    },
    {
      title: 'Component Inspection',
      description: 'Thorough examination of all distribution box components and connections.',
      details: [
        'Inlet/outlet pipe condition',
        'Baffle inspection',
        'Seal integrity check',
        'Connection assessment'
      ]
    },
    {
      title: 'System Integration',
      description: 'Evaluation of how the distribution box integrates with the entire septic system.',
      details: [
        'Connection to tank verification',
        'Drain field line assessment',
        'System compatibility check',
        'Performance optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Distribution Box Assessment Services | Expert Septic System Evaluation</title>
        <meta name="description" content="Professional distribution box assessment services including structural integrity checks, flow pattern analysis, and complete system integration evaluation." />
        <link rel="canonical" href="https://septicinspection.xyz/services/distribution-box" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Distribution Box Assessment Service",
              "description": "Professional distribution box assessment including structural integrity, flow patterns, and system integration evaluation",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Professional Septic Services"
              },
              "serviceType": "Distribution Box Assessment",
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
            Professional Distribution Box Assessment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert evaluation of your septic system's distribution box, ensuring proper flow and distribution of wastewater.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {assessmentPoints.map((point, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Distribution Box Assessment Matters</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-4xl mb-4">💧</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Equal Distribution</h3>
                <p className="text-gray-600">Ensures wastewater is evenly distributed to all drain field lines</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Longevity</h3>
                <p className="text-gray-600">Proper distribution extends the life of your drain field</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance</h3>
                <p className="text-gray-600">Optimizes overall septic system performance</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Distribution Box Assessment</h2>
          <p className="text-gray-600 mb-6">
            Ensure your septic system is working efficiently. Get your distribution box assessed today.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DistributionBox;
