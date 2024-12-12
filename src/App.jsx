import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Professional Septic Tank Inspection Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Expert Septic System Evaluations
            </h2>
            <p className="text-gray-600">
              Get comprehensive inspections and detailed reports from certified professionals.
            </p>
          </section>
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Professional Maintenance
            </h2>
            <p className="text-gray-600">
              Ensure your septic system's longevity with our expert maintenance services.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
