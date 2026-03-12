import { Metadata } from "next";
import { SITE, SERVICES_LIST } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Appointment",
  description: `Book your beauty and spa appointment at ${SITE.name} in Dehri on Sone. Easy online booking for all beauty treatments, bridal packages, and spa services.`,
  keywords: [
    "book appointment Dehri",
    "beauty parlour booking",
    "spa appointment Bihar",
    "online booking beauty",
    "appointment Ledico",
  ],
};

export default function BookingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">Book Your Appointment</h1>
            <p className="mt-6 text-lg text-gray-600">
              Schedule your beauty and spa treatments with our expert team. We&apos;re here to make you look and feel amazing.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Booking */}
            <div className="card">
              <h2 className="heading-md text-ledico-primary mb-6">Call or WhatsApp to Book</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-ledico-primary/5">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-ledico-primary">Call Us</p>
                    <a href={`tel:+91${SITE.phone}`} className="text-lg font-medium hover:underline">
                      +91 {SITE.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-ledico-primary/5">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold text-ledico-primary">WhatsApp</p>
                    <a href={`https://wa.me/91${SITE.whatsapp}?text=Hi, I would like to book an appointment at Ledico Beauty Parlour & Spa`} 
                       className="text-lg font-medium hover:underline">
                      +91 {SITE.whatsapp}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-ledico-primary/5">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold text-ledico-primary">Visit Us</p>
                    <p className="text-gray-600">{SITE.address.full}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Information */}
            <div className="card">
              <h2 className="heading-md text-ledico-primary mb-6">Booking Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600">{SITE.workingHours}</p>
                  <p className="text-gray-600">{SITE.workingDays}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Appointment Types</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Walk-ins welcome (subject to availability)</li>
                    <li>• Advance booking recommended</li>
                    <li>• Bridal packages require consultation</li>
                    <li>• Group bookings available</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Free consultation for all services</li>
                    <li>• Patch test for sensitive treatments</li>
                    <li>• Personalized treatment recommendations</li>
                    <li>• Aftercare instructions provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Selection */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Popular Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Select a service to get started with your booking
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_LIST.slice(0, 8).map((category, i) => (
              <a
                key={i}
                href={`https://wa.me/91${SITE.whatsapp}?text=Hi, I would like to book an appointment for ${category.category} services at Ledico Beauty Parlour & Spa`}
                className="card hover:shadow-xl transition-all hover:scale-105 text-center"
              >
                <h3 className="font-semibold text-ledico-primary mb-2">{category.category}</h3>
                <p className="text-sm text-gray-600">{category.services.length} services available</p>
                <span className="mt-3 inline-block text-ledico-secondary font-medium">Book Now →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-12">Booking Tips</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Book in Advance</h3>
              <p className="text-gray-600 text-sm">For popular services and weekend slots, book 2-3 days ahead</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Bridal Consultation</h3>
              <p className="text-gray-600 text-sm">Schedule a trial session 1-2 weeks before your event</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Be Specific</h3>
              <p className="text-gray-600 text-sm">Mention the specific services you want when booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-ledico-primary mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            For urgent bookings or last-minute appointments, call us directly
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:+91${SITE.phone}`} className="btn-primary">
              Call Now: {SITE.phone}
            </a>
            <a href={`https://wa.me/91${SITE.whatsapp}`} className="btn-secondary">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}