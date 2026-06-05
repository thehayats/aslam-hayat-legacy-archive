'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    // Simulate a brief delay (static site — no real backend)
    await new Promise((resolve) => setTimeout(resolve, 800));
    setFormState('success');
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-green flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-playfair text-xl text-green font-bold mb-2">
          Thank You
        </h3>
        <p className="font-lora text-sm text-gray-600 leading-relaxed">
          Your memory has been received. The family will review it and be in touch soon.
          جزاك الله خيراً
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-lora text-sm font-medium text-green mb-1">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 font-lora text-sm border border-cream-dark bg-cream rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-lora text-sm font-medium text-green mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 font-lora text-sm border border-cream-dark bg-cream rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          placeholder="your@email.com"
        />
      </div>

      {/* Relationship */}
      <div>
        <label htmlFor="relationship" className="block font-lora text-sm font-medium text-green mb-1">
          Your Relationship to Aslam Hayat <span className="text-red-500">*</span>
        </label>
        <select
          id="relationship"
          name="relationship"
          required
          className="w-full px-4 py-2.5 font-lora text-sm border border-cream-dark bg-cream rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
        >
          <option value="">Select your relationship</option>
          <option value="family">Family Member</option>
          <option value="friend">Friend</option>
          <option value="colleague">Colleague / Professional Associate</option>
          <option value="student">Student / Mentee</option>
          <option value="reader">Reader / Follower</option>
          <option value="community">Community Member</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Memory / Message */}
      <div>
        <label htmlFor="memory" className="block font-lora text-sm font-medium text-green mb-1">
          Your Memory or Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="memory"
          name="memory"
          required
          rows={6}
          className="w-full px-4 py-2.5 font-lora text-sm border border-cream-dark bg-cream rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
          placeholder="Please share your memory, story, or message. You may write in English or Urdu."
        />
      </div>

      {/* Photo Upload (UI only) */}
      <div>
        <label htmlFor="photo" className="block font-lora text-sm font-medium text-green mb-1">
          Photo (optional)
        </label>
        <div className="w-full border-2 border-dashed border-cream-dark rounded p-4 text-center">
          <svg
            className="w-8 h-8 text-gray-400 mx-auto mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="font-lora text-xs text-gray-500">
            For photo submissions, please email directly to{' '}
            <a href="mailto:archive@aslamhayat.com" className="text-gold-dark hover:underline">
              archive@aslamhayat.com
            </a>
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full py-3 px-6 bg-green text-cream-light font-lora font-medium rounded transition-all duration-200 hover:bg-green-light hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? 'Sending…' : 'Submit Memory'}
      </button>
    </form>
  );
}
