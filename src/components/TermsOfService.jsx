import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: December 19, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using our website at septicinspection.xyz, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Description</h2>
          <p className="text-gray-600 mb-4">
            We provide septic tank inspection services, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Comprehensive septic system evaluations</li>
            <li>Detailed inspection reports</li>
            <li>Cost estimates and recommendations</li>
            <li>Professional consultation services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Service Scheduling and Cancellation</h2>
          <p className="text-gray-600 mb-4">
            When scheduling our services:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Appointments must be scheduled at least 24 hours in advance</li>
            <li>Cancellations must be made at least 12 hours before the scheduled service</li>
            <li>Late cancellations may incur a fee</li>
            <li>We reserve the right to reschedule due to weather or other unforeseen circumstances</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
          <p className="text-gray-600 mb-4">
            When using our services, you agree to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Provide accurate and complete information</li>
            <li>Ensure safe access to your property and septic system</li>
            <li>Be present or have an authorized representative during the inspection</li>
            <li>Follow our recommendations for system maintenance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, graphics, logos, and images, is our property and is protected by copyright laws. You may not reproduce, distribute, or use our content without explicit permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            We strive to provide accurate and reliable services, but we cannot guarantee that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Our services will be uninterrupted or error-free</li>
            <li>All septic system issues will be identified during inspection</li>
            <li>Recommended repairs will prevent all future problems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Pricing and Payment</h2>
          <p className="text-gray-600 mb-4">
            Our pricing and payment terms:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>All prices are subject to change without notice</li>
            <li>Payment is required at the time of service</li>
            <li>We accept major credit cards and cash</li>
            <li>Additional fees may apply for emergency services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Modifications to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of these changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
