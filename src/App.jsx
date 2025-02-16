import React from 'react'
import Questionnaire from './components/Questionnaire'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import AffiliateDisclosure from './components/AffiliateDisclosure'
import BlogIndex from './pages/blog/BlogIndex'
import SepticInspectionGuide from './pages/blog/SepticInspectionGuide'
import SignsOfSepticFailure from './pages/blog/SignsOfSepticFailure'
import SepticMaintenanceTips from './pages/blog/SepticMaintenanceTips'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/septic-inspection-guide" element={<SepticInspectionGuide />} />
        <Route path="/blog/signs-of-septic-failure" element={<SignsOfSepticFailure />} />
        <Route path="/blog/septic-maintenance-tips" element={<SepticMaintenanceTips />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
            {/* Top Banner */}
            <div className="bg-blue-600 text-white py-2">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <span className="inline-flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now: <span className="font-semibold">877-796-6641</span>
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                  <div className="flex space-x-8">
                    <Link to="/" className="text-gray-900 hover:text-blue-600">Home</Link>
                    <Link to="/blog" className="text-gray-900 hover:text-blue-600">Blog</Link>
                  </div>
                </div>
              </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 py-8 flex-grow" itemScope itemType="https://schema.org/LocalBusiness">
              <div className="flex justify-center mb-8">
                <img src="/logo.svg" alt="Septic Tank Inspection Services" className="h-24" itemProp="image" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center" itemProp="name">
                Professional Septic Tank Inspection Services Near Me
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-center" itemProp="description">
                Expert septic system evaluations, cost estimates, and detailed inspection checklists
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <section id="services" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100" itemScope itemType="https://schema.org/Service">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">
                    Comprehensive Septic Tank Inspection Services
                  </h2>
                  <ul className="space-y-3 text-gray-600" itemProp="hasOfferCatalog">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      Complete septic tank inspection checklist
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      Detailed pipe and port inspection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      Septic tank inspection for home purchases
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">✓</span>
                      Professional inspection reports
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-blue-50 rounded-md">
                    <p className="text-center text-gray-700">Need immediate assistance?</p>
                    <div 
                      className="mt-2 w-full text-center bg-blue-600 text-white py-3 rounded-md font-semibold"
                      itemProp="telephone"
                    >
                      877-796-6641
                    </div>
                  </div>
                </section>

                <div id="quote">
                  <Questionnaire />
                </div>
              </div>

              <section className="bg-blue-50 p-6 rounded-lg mb-12" itemScope itemType="https://schema.org/Service">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">
                  What We Inspect
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" itemProp="serviceType">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Septic tank inspection pipe and cap</li>
                    <li>• Tank inspection ports</li>
                    <li>• Distribution box assessment</li>
                    <li>• Drain field evaluation</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• System capacity verification</li>
                    <li>• Structural integrity check</li>
                    <li>• Sludge level measurement</li>
                    <li>• Pipe condition assessment</li>
                  </ul>
                </div>
              </section>

              <section id="cost-guide" className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12" itemScope itemType="https://schema.org/PriceSpecification">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4" itemProp="name">
                  Septic Tank Inspection Cost Guide
                </h2>
                <ul className="space-y-3 text-gray-600" itemProp="description">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    Transparent pricing information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    Cost estimates for your area
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    Detailed service breakdowns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    Competitive local rates
                  </li>
                </ul>
              </section>

              <section className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Find Septic Tank Inspection Services Near You
                </h2>
                <p className="text-gray-600 mb-6">
                  Get professional septic tank inspection cost estimates and schedule your inspection today
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <div
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    877-796-6641
                  </div>
                  <a
                    href="https://leads.leadsmartinc.com/?api_key=eccf565586cda416df8b89f66df641fee9a1bcb8&affiliate_source=albertowaizel1&category=&funnel=3&buttons=btn-success&step=1"
                    className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586L7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                    </svg>
                    Get Online Quote
                  </a>
                </div>
              </section>

              {/* Sticky Call Button for Mobile */}
              <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 p-4">
                <div 
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2"
                  itemProp="telephone"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  877-796-6641
                </div>
              </div>

              {/* Schema.org Organization Data */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "Septic Tank Inspection Services",
                  "image": "https://septicinspection.xyz/logo.svg",
                  "telephone": "877-796-6641",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US"
                  },
                  "description": "Expert septic system evaluations, cost estimates, and detailed inspection checklists",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Septic Tank Inspection Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Complete Septic Tank Inspection"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Pipe and Port Inspection"
                        }
                      }
                    ]
                  }
                })
              }} />

              {/* Breadcrumb Schema */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://septicinspection.xyz/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Services",
                      "item": "https://septicinspection.xyz/#services"
                    },
                    {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Cost Guide",
                      "item": "https://septicinspection.xyz/#cost-guide"
                    },
                    {
                      "@type": "ListItem",
                      "position": 4,
                      "name": "Get Quote",
                      "item": "https://septicinspection.xyz/#quote"
                    }
                  ]
                })
              }} />
            </main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="mb-4 md:mb-0">
                    <p className="text-gray-600"> 2024 Septic Tank Inspection Services. All rights reserved.</p>
                  </div>
                  <nav className="flex flex-wrap gap-6">
                    <Link to="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </Link>
                    <Link to="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Terms of Service
                    </Link>
                    <Link to="/affiliate-disclosure" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Affiliate Disclosure
                    </Link>
                    <span className="text-gray-600">Contact Us: 877-796-6641</span>
                  </nav>
                </div>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
