import React from 'react'
import Questionnaire from './components/Questionnaire'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Top Banner */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a href="tel:877-796-6641" className="inline-flex items-center gap-2 hover:text-blue-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: <span className="font-semibold">877-796-6641</span>
          </a>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Professional Septic Tank Inspection Services Near Me
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Expert septic system evaluations, cost estimates, and detailed inspection checklists
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Comprehensive Septic Tank Inspection Services
            </h2>
            <ul className="space-y-3 text-gray-600">
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
              <a 
                href="tel:877-796-6641" 
                className="mt-2 w-full inline-block text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Call 877-796-6641
              </a>
            </div>
          </section>

          <Questionnaire />
        </div>

        <section className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What We Inspect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Septic Tank Inspection Cost Guide
          </h2>
          <ul className="space-y-3 text-gray-600">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:877-796-6641"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 877-796-6641
            </a>
            <button 
              onClick={() => document.querySelector('form').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              Get Online Quote
            </button>
          </div>
        </section>

        {/* Sticky Call Button for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-gray-200 p-4">
          <a 
            href="tel:877-796-6641"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: 877-796-6641
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
