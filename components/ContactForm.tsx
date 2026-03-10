"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="rounded-lg bg-green-50 p-6 text-green-800">
        <p className="font-medium">Thank you! We have received your message and will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-ledico-primary focus:ring-1 focus:ring-ledico-primary"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-ledico-primary focus:ring-1 focus:ring-ledico-primary"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
          Email (optional)
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-ledico-primary focus:ring-1 focus:ring-ledico-primary"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-ledico-primary focus:ring-1 focus:ring-ledico-primary"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
