'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Implement newsletter signup functionality
    // This is where you would integrate with your email service provider
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Subscribe to Dr. Klein's Weekly Newsletter</h2>
          <p className="text-gray-600 mb-6">Latest Advances in Health and Longevity Research</p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-accent hover:bg-green-600 text-white px-6 py-2 rounded-md transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {status === 'success' && (
              <p className="mt-4 text-green-300">Thank you for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-300">An error occurred. Please try again.</p>
            )}
          </form>
          
          <p className="mt-6 text-sm text-blue-200">
            By subscribing, you agree to receive Dr. Klein's newsletter and accept our privacy policy.
          </p>
        </div>
      </div>
    </section>
  );
} 