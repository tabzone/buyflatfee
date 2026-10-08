'use client';

import { useState } from 'react';

const phoneNumber = '+14154886657';

export default function FloatingContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'chat' }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'We could not send your message. Please try again.');
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message || 'We could not send your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
    setSubmitted(false);
    setError('');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      {isOpen && (
        <section
          role="dialog"
          aria-modal="false"
          aria-labelledby="floating-chat-title"
          className="fixed bottom-36 right-4 z-50 flex max-h-[min(34rem,calc(100dvh-11rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl sm:right-6"
        >
          <header className="flex items-center justify-between bg-[#0a1628] px-5 py-4 text-white">
            <div>
              <h2 id="floating-chat-title" className="font-semibold">Chat with BuyFlatFee</h2>
              <p className="mt-0.5 text-xs text-white/70">We usually reply within 2 business hours</p>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-white/80 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              <span aria-hidden="true">×</span>
            </button>
          </header>

          {submitted ? (
            <div className="p-6 text-center" role="status" aria-live="polite">
              <div className="mb-3 text-4xl" aria-hidden="true">✓</div>
              <h3 className="font-display text-xl font-bold text-[#0a1628]">Message received!</h3>
              <p className="mt-2 text-sm text-[#4a4a68]">
                Thanks, {form.name.split(' ')[0]}! We&apos;ll be in touch within 2 business hours.
              </p>
              <button
                type="button"
                onClick={closeChat}
                className="mt-5 rounded-lg bg-[#0a1628] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#132040] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto p-5">
              <p className="text-sm text-[#4a4a68]">Send us a message and we&apos;ll get back to you.</p>
              <div>
                <label htmlFor="chat-name" className="mb-1 block text-sm font-medium text-[#0a1628]">Name *</label>
                <input
                  id="chat-name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField('name')}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20"
                />
              </div>
              <div>
                <label htmlFor="chat-email" className="mb-1 block text-sm font-medium text-[#0a1628]">Email *</label>
                <input
                  id="chat-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField('email')}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20"
                />
              </div>
              <div>
                <label htmlFor="chat-message" className="mb-1 block text-sm font-medium text-[#0a1628]">Message *</label>
                <textarea
                  id="chat-message"
                  required
                  rows={3}
                  value={form.message}
                  onChange={updateField('message')}
                  className="w-full resize-y rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:border-[#c9a84c] focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/20"
                />
              </div>
              {error && (
                <p role="alert" className="text-sm text-red-700">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="btn-gold w-full rounded-lg py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </section>
      )}

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col gap-3 sm:right-6">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close chat' : 'Open chat with BuyFlatFee'}
          aria-expanded={isOpen}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a84c] text-[#0a1628] shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
        >
          {isOpen ? (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          )}
        </button>
        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call BuyFlatFee at (415) 488-6657"
          title="Call (415) 488-6657"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0a1628] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.56 3.57.56.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.56 3.57.11.36.03.76-.24 1.03l-2.2 2.19Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
