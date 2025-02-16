import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BlogIndex = () => {
  const blogPosts = [
    {
      slug: 'septic-inspection-guide',
      title: 'Complete Septic Inspection Guide: What Homeowners Need to Know',
      description: 'Learn everything about septic inspections, from costs to maintenance tips. Essential reading for homeowners.',
      date: 'February 16, 2025',
      readTime: '12 min read',
      category: 'Guides'
    },
    {
      slug: 'signs-of-septic-failure',
      title: '7 Warning Signs Your Septic System is Failing',
      description: 'Recognize early warning signs of septic system failure and learn what steps to take to prevent costly repairs.',
      date: 'February 16, 2025',
      readTime: '8 min read',
      category: 'Maintenance'
    },
    {
      slug: 'septic-maintenance-tips',
      title: 'Essential Septic System Maintenance Tips',
      description: 'Protect your investment with these proven septic system maintenance strategies and expert recommendations.',
      date: 'February 16, 2025',
      readTime: '10 min read',
      category: 'Maintenance'
    }
  ];

  return (
    <div className="blog-index">
      <Helmet>
        <title>Septic System Blog: Expert Tips & Guides | Professional Insights</title>
        <meta name="description" content="Expert articles about septic system maintenance, inspection tips, and troubleshooting guides. Stay informed about your septic system's health." />
        <link rel="canonical" href="https://septicinspection.xyz/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <header className="blog-header">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Septic System Insights</h1>
          <p className="text-xl text-gray-600">Expert guides and tips for maintaining your septic system</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{post.category}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>Published: {post.date}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </main>

      <div className="bg-gray-50 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Professional Help?</h2>
          <p className="text-xl text-gray-600 mb-8">Our experts are ready to assist with your septic system needs</p>
          <Link to="/quote" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Back to Home Button */}
      <div className="py-8 text-center">
        <Link to="/" className="inline-block bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BlogIndex;
