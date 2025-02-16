import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TankInspection = () => {
  const inspectionPoints = [
    {
      title: 'Pipe and Cap Inspection',
      description: 'Thorough examination of all pipes and access caps for signs of damage, wear, or potential issues.',
      details: [
        'Access cap integrity check',
        'Pipe connection assessment',
        'Sealing verification',
        'Structural damage inspection'
      ]
    },
    {
      title: 'Tank Inspection Ports',
      description: 'Detailed inspection of all access ports to ensure proper functionality and accessibility.',
      details: [
        'Port seal verification',
        'Access point assessment',
        'Riser condition check',
        'Safety feature verification'
      ]
    },
    {
      title: 'Sludge Level Measurement',
      description: 'Precise measurement of sludge and scum layers to determine tank maintenance needs.',
      details: [
        'Layer thickness measurement',
        'Capacity analysis',
        'Pumping requirement assessment',
        'Historical data comparison'
      ]
    },
    {
      title: 'System Capacity Verification',
      description: 'Comprehensive analysis of your tank\'s capacity and current usage patterns.',
      details: [
        'Volume calculation',
        'Usage pattern analysis',
        'Capacity adequacy check',
        'Future needs assessment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Professional Septic Tank Inspection Services | Expert Evaluation</title>
        <meta name="description" content="Comprehensive septic tank inspection services including pipe and cap inspection, port evaluation, sludge measurement, and system capacity verification." />
        <link rel="canonical" href="https://septicinspection.xyz/services/tank-inspection" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Septic Tank Inspection Service",
              "description": "Professional septic tank inspection including structural assessment, capacity verification, and component evaluation",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Professional Septic Services"
              },
              "serviceType": "Septic Tank Inspection",
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
            Professional Septic Tank Inspection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tank inspection services performed by certified professionals. 
            Protect your investment with our detailed evaluations and expert recommendations.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {inspectionPoints.map((point, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Inspection Process</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ol className="space-y-6">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">1</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                  <p className="text-gray-600">We begin with a thorough review of your system's history and current concerns.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">2</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Inspection</h3>
                  <p className="text-gray-600">Our experts conduct a comprehensive visual inspection of all accessible components.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">3</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Evaluation</h3>
                  <p className="text-gray-600">We perform detailed measurements and tests to assess system condition and performance.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mr-4">4</span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation & Reporting</h3>
                  <p className="text-gray-600">You receive a detailed report with findings, recommendations, and maintenance guidelines.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Tank Inspection?</h2>
          <p className="text-gray-600 mb-6">
            Protect your investment with our thorough inspection service. Schedule your appointment today.
          </p>
          <Link
            to="/quote"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="py-8 text-center">
          <Link to="/" className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TankInspection;
