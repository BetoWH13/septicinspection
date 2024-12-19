import React from 'react';

const AffiliateDisclosure = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
      <div className="prose prose-blue max-w-none">
        <p className="text-gray-600 mb-4">Last updated: December 19, 2024</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclosure Statement</h2>
          <p className="text-gray-600 mb-4">
            This website, septicinspection.xyz, may contain affiliate links and we may receive compensation for purchases made through these links. This disclosure is provided in accordance with the Federal Trade Commission's 16 CFR § 255: "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Are Affiliate Links?</h2>
          <p className="text-gray-600 mb-4">
            Affiliate links are special URLs that contain tracking codes. When you click on these links and make a purchase, we may earn a commission from your purchase. These commissions help support our website and allow us to continue providing valuable septic inspection information and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment to You</h2>
          <p className="text-gray-600 mb-4">
            We want to assure you that:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>We only recommend products and services we believe will be valuable to our visitors</li>
            <li>Our reviews and recommendations are based on honest evaluations</li>
            <li>Affiliate relationships do not influence our content or recommendations</li>
            <li>We clearly identify sponsored content and affiliate partnerships</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Affiliate Partners</h2>
          <p className="text-gray-600 mb-4">
            We currently partner with LeadSmart Inc. for processing service requests and referrals. When you submit a service request through our website, you will be redirected to LeadSmart's platform where:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>Your request will be processed securely through LeadSmart's system</li>
            <li>We may receive compensation for qualified service requests</li>
            <li>Your information will be handled according to LeadSmart's privacy policies</li>
            <li>The service quality and customer experience remain our top priority</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How Affiliate Links Work</h2>
          <p className="text-gray-600 mb-4">
            When you click on an affiliate link on our website:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-600">
            <li>A cookie is placed on your browser to track any purchases</li>
            <li>The cookie typically lasts 24-48 hours</li>
            <li>If you make a purchase during this time, we may receive a commission</li>
            <li>Your purchase price remains the same whether you use our affiliate link or not</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Privacy</h2>
          <p className="text-gray-600 mb-4">
            We respect your privacy and are committed to transparency. For more information about how we handle your data, please review our Privacy Policy. The affiliate tracking process does not collect any personal information beyond what is necessary for processing commissions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Questions About This Disclosure</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about our affiliate relationships or this disclosure, please contact us at:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">Phone: 877-796-6641</p>
            <p className="text-gray-600">Email: affiliates@septicinspection.xyz</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AffiliateDisclosure;
