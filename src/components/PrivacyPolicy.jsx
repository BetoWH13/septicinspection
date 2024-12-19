import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: December 19, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-600">
            At Septic Tank Inspection Services, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
          <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Fill out our contact form</li>
            <li>Request a quote</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us via phone or email</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Types of Information</h3>
          <p className="text-gray-600 mb-4">The personal information we collect may include:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Property address</li>
            <li>Information about your septic system</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Provide and maintain our services</li>
            <li>Process your service requests</li>
            <li>Send you quotes and estimates</li>
            <li>Contact you regarding your inquiries</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to maintain the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to our use of your information</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
