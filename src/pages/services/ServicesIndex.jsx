import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ServicesIndex = () => {
  const services = [
    {
      id: 'tank-inspection',
      title: 'Septic Tank Inspection',
      description: 'Comprehensive inspection of tank structure, pipes, and caps. Includes detailed assessment of tank condition and recommendations.',
      features: ['Tank structure evaluation', 'Pipe and cap inspection', 'Sludge level measurement', 'Capacity verification'],
      icon: '🔍'
    },
    {
      id: 'distribution-box',
      title: 'Distribution Box Assessment',
      description: 'Thorough evaluation of your distribution box system, ensuring proper flow and distribution of wastewater.',
      features: ['Flow pattern analysis', 'Structural integrity check', 'Equal distribution verification', 'Blockage detection'],
      icon: '📦'
    },
    {
      id: 'drain-field',
      title: 'Drain Field Evaluation',
      description: 'Complete assessment of your drain field performance and soil absorption capabilities.',
      features: ['Soil absorption test', 'Surface condition check', 'Proper drainage verification', 'System longevity assessment'],
      icon: '🌱'
    },
    {
      id: 'system-integrity',
      title: 'System Integrity Check',
      description: 'Comprehensive evaluation of your entire septic system\'s structural integrity and performance.',
      features: ['Component inspection', 'Leak detection', 'Performance analysis', 'Safety verification'],
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Professional Septic System Inspection Services | Comprehensive Evaluations</title>
        <meta name="description" content="Expert septic system inspection services including tank inspection, distribution box assessment, drain field evaluation, and complete system integrity checks." />
        <link rel="canonical" href="https://septicinspection.xyz/services" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Septic System Inspection Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Professional Septic Services"
              },
              "areaServed": {
                "@type": "State",
                "name": ["Florida", "Georgia", "South Carolina", "Alabama", "Tennessee"]
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Septic Inspection Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Septic Tank Inspection"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Distribution Box Assessment"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Drain Field Evaluation"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Septic System Inspection Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive septic system inspections performed by certified professionals. 
            Protect your investment with our detailed evaluations and expert recommendations.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-block w-full text-center bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Schedule Your Inspection?</h2>
          <p className="text-gray-600 mb-6">
            Our expert technicians are ready to help protect your investment with a thorough septic system inspection.
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

export default ServicesIndex;
