import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us - Location, Phone & Directions",
  description: `Contact ${SITE.name} in Dehri on Sone, Bihar. Call ${SITE.phone} for appointments. Located at ${SITE.address.landmark}. Open ${SITE.workingHours}, ${SITE.workingDays}.`,
  keywords: [
    "contact Ledico Beauty",
    "beauty parlour Dehri phone number",
    "spa Dehri location",
    "beauty salon near me Bihar",
    "Dehri beauty parlour address",
    "Rohtas beauty services contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">Contact Ledico Beauty Parlour & Spa</h1>
            <p className="mt-6 text-lg text-gray-600">
              Get in touch with us for appointments, inquiries, or to learn more about our beauty and spa services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="heading-lg text-ledico-primary mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-ledico-primary/5">
                  <div className="h-12 w-12 rounded-full bg-ledico-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ledico-primary mb-1">Phone</h3>
                    <a href={`tel:+91${SITE.phone}`} className="text-lg font-medium hover:underline">
                      +91 {SITE.phone}
                    </a>
                    <p className="text-gray-600 text-sm">Call for appointments & inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-ledico-primary/5">
                  <div className="h-12 w-12 rounded-full bg-ledico-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ledico-primary mb-1">WhatsApp</h3>
                    <a href={`https://wa.me/91${SITE.whatsapp}?text=Hi, I would like to know more about your beauty services`} 
                       className="text-lg font-medium hover:underline">
                      +91 {SITE.whatsapp}
                    </a>
                    <p className="text-gray-600 text-sm">Quick booking & instant responses</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-ledico-primary/5">
                  <div className="h-12 w-12 rounded-full bg-ledico-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ledico-primary mb-1">Email</h3>
                    <a href={`mailto:${SITE.email}`} className="text-lg font-medium hover:underline">
                      {SITE.email}
                    </a>
                    <p className="text-gray-600 text-sm">For detailed inquiries & feedback</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-ledico-primary/5">
                  <div className="h-12 w-12 rounded-full bg-ledico-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-ledico-primary mb-1">Address</h3>
                    <p className="text-gray-900 font-medium">{SITE.address.full}</p>
                    <p className="text-gray-600">{SITE.address.landmark}</p>
                    <p className="text-gray-600">{SITE.address.city}, {SITE.address.district}, {SITE.address.state} {SITE.address.pin}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours & Quick Actions */}
            <div>
              <div className="card mb-8">
                <h3 className="font-semibold text-ledico-primary text-lg mb-4">Working Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-ledico-primary/5">
                    <span className="font-medium text-gray-900">Monday - Sunday</span>
                    <span className="text-ledico-primary font-medium">{SITE.workingHours}</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We&apos;re open all week to serve your beauty needs. Walk-ins welcome, but appointments are recommended for guaranteed service.
                  </p>
                </div>
              </div>

              <div className="card">
                <h3 className="font-semibold text-ledico-primary text-lg mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/booking" className="btn-primary w-full text-center">
                    Book Appointment Online
                  </Link>
                  <a href={`tel:+91${SITE.phone}`} className="btn-secondary w-full text-center">
                    Call Now: {SITE.phone}
                  </a>
                  <a href={`https://wa.me/91${SITE.whatsapp}`} className="btn-outline w-full text-center">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-8">Find Us in Dehri on Sone</h2>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Easy to Locate</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Ledico Beauty Parlour & Spa</strong> is conveniently located in the heart of Dehri on Sone, 
                  making it easily accessible from all parts of the city and surrounding areas in Rohtas district.
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Landmarks Near Us:</h4>
                  <ul className="space-y-1">
                    <li>• Near Kala Niketan (main landmark)</li>
                    <li>• Opposite Baba Market</li>
                    <li>• Thana Chowk area</li>
                    <li>• Dehri Bazaar Super Market</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Transportation:</h4>
                  <ul className="space-y-1">
                    <li>• Auto-rickshaw easily available</li>
                    <li>• Bus stop nearby</li>
                    <li>• Parking space available</li>
                    <li>• Walking distance from main market</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Service Areas</h3>
              <p className="text-gray-600 mb-4">
                We proudly serve clients from across Rohtas district and surrounding areas:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Dehri on Sone</span>
                </div>
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Sasaram</span>
                </div>
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Rohtas</span>
                </div>
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Bikramganj</span>
                </div>
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Nokha</span>
                </div>
                <div className="p-3 rounded-lg bg-ledico-primary/5 text-center">
                  <span className="text-ledico-primary font-medium">Karakat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-8">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="card">
              <h3 className="font-semibold text-ledico-primary mb-2">Do I need an appointment?</h3>
              <p className="text-gray-600">
                While walk-ins are welcome, we recommend booking an appointment to ensure availability, 
                especially for bridal services and during weekends.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ledico-primary mb-2">What are your payment options?</h3>
              <p className="text-gray-600">
                We accept cash, UPI payments, and card payments for your convenience.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ledico-primary mb-2">Do you provide home services?</h3>
              <p className="text-gray-600">
                Yes, we offer on-location services for bridal makeup and special occasions. 
                Contact us to discuss your requirements and pricing.
              </p>
            </div>
            <div className="card">
              <h3 className="font-semibold text-ledico-primary mb-2">How far in advance should I book for bridal services?</h3>
              <p className="text-gray-600">
                For bridal services, we recommend booking at least 2-4 weeks in advance, 
                especially during wedding season (October to March).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary to-ledico-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Visit Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Experience the best beauty and spa services in Dehri on Sone. Contact us today!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-ledico-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Appointment
            </Link>
            <a href={`tel:+91${SITE.phone}`} className="border-2 border-white bg-transparent px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-ledico-primary transition-colors">
              Call: {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}