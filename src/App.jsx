import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
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
          </section>

          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Septic Tank Inspection Services Near You
          </h2>
          <p className="text-gray-600 mb-6">
            Get professional septic tank inspection cost estimates and schedule your inspection today
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Contact Us for Inspection Costs
          </button>
        </section>
      </main>
    </div>
  )
}

export default App
