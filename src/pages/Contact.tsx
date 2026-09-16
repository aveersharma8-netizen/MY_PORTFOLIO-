import React, { useState } from 'react';
import { socialLinks } from '../data/social';
import { SocialLinks } from '../components/SocialLinks';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    if (socialLinks.email) {
      navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-editorial pb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-vermilion font-bold">
          Get in Touch
        </span>
        <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-ink tracking-tight">
          Have something worth building?
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-secondary max-w-2xl leading-relaxed">
          Open for project discussions, AI & software collaborations, hardware ideas, or technical conversations. Reach out through direct email or any social platform below.
        </p>
      </div>

      {/* Main Contact Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Direct Contact Methods (Left Column) */}
        <div className="md:col-span-5 space-y-6">
          {/* Email Direct Box */}
          {socialLinks.email && (
            <div className="p-6 rounded-3xl bg-canvas border-2 border-ink space-y-4 shadow-card">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-vermilion uppercase tracking-wider">
                  Primary Email
                </span>
                <Mail size={18} className="text-ink-muted" />
              </div>

              <div>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-ink hover:text-vermilion transition-colors duration-200 block break-all"
                >
                  {socialLinks.email}
                </a>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 rounded-full bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-colors duration-200"
                >
                  <span>Open Mail App</span>
                  <ArrowUpRight size={14} />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-full bg-surface text-ink hover:bg-surface-hover border border-border-subtle transition-colors duration-200"
                  aria-label="Copy Email Address"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          )}

          {/* Social Media System */}
          <div className="p-6 rounded-3xl bg-surface border border-editorial space-y-4">
            <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider block">
              Direct Social Channels
            </span>
            <p className="font-sans text-xs text-ink-secondary">
              Connect or follow on verified personal developer accounts:
            </p>
            <SocialLinks variant="pills" size="md" />
          </div>
        </div>

        {/* Simple Low-Friction Message Form (Right Column) */}
        <div className="md:col-span-7">
          <div className="p-8 rounded-3xl bg-surface border border-editorial space-y-6">
            <div className="flex items-center space-x-2 text-ink">
              <MessageSquare size={20} className="text-vermilion" />
              <h2 className="font-editorial text-2xl font-bold">
                Send a Direct Message
              </h2>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                <div>
                  <label htmlFor="name" className="font-mono text-xs font-semibold text-ink block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle focus:outline-none focus:border-vermilion transition-colors duration-200 text-ink"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="font-mono text-xs font-semibold text-ink block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. maya@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle focus:outline-none focus:border-vermilion transition-colors duration-200 text-ink"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="font-mono text-xs font-semibold text-ink block mb-1.5">
                    What would you like to build or discuss?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-canvas border border-border-subtle focus:outline-none focus:border-vermilion transition-colors duration-200 text-ink"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-ink text-canvas font-mono text-xs font-bold hover:bg-vermilion transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check size={24} />
                </div>
                <h3 className="font-editorial text-2xl font-bold text-ink">
                  Message Prepared!
                </h3>
                <p className="font-sans text-sm text-ink-secondary max-w-sm mx-auto">
                  Thank you, {formData.name}. You can also email directly at <strong className="text-ink">{socialLinks.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs text-vermilion hover:underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
