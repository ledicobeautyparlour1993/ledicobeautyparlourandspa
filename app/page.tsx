import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import FacilityCard from "@/components/FacilityCard";
import BeautyExpertCard from "@/components/BeautyExpertCard";
import {
  SITE,
  WHY_LEDICO,
  SERVICES_LIST,
  POPULAR_TREATMENTS,
  BEAUTY_EXPERTS,
  FAQ_ITEMS,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About Ledico */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="heading-lg text-ledico-primary">About Ledico Beauty Parlour & Spa</h2>
            <p className="mt-4 text-gray-600">
              Established in {SITE.established}, Ledico Beauty Parlour & Spa has been the premier beauty destination
              in Dehri on Sone, Bihar. We offer comprehensive beauty and spa services with expert beauticians,
              premium products, and personalized care for every client. From bridal makeovers to daily beauty treatments,
              we make you look and feel your absolute best.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
              <Link href="/booking" className="btn-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ledico */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">
            Why Choose Ledico Beauty Parlour & Spa
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Experience luxury, expertise, and personalized beauty care in the heart of Dehri.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_LEDICO.map((item, i) => (
              <FacilityCard
                key={i}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Popular Treatments</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Our most loved beauty and spa services for every occasion
          </p>
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {POPULAR_TREATMENTS.map((treatment, i) => (
                <div key={i} className="rounded-2xl bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10 p-6 text-center">
                  <h3 className="font-semibold text-ledico-primary">{treatment}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-ledico-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Our Services</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Comprehensive beauty and spa treatments for all your needs.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_LIST.map((category, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-ledico-primary mb-3">{category.category}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {category.services.slice(0, 3).map((service, j) => (
                    <li key={j}>• {service}</li>
                  ))}
                  {category.services.length > 3 && (
                    <li className="text-ledico-secondary font-medium">+ {category.services.length - 3} more</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Beauty Experts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Our Beauty Experts</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Certified professionals with years of experience in beauty and wellness
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BEAUTY_EXPERTS.map((expert, i) => (
              <div key={i} className="rounded-2xl bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10 p-6 text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-ledico-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-ledico-primary">{expert.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{expert.name}</h3>
                <p className="text-sm text-ledico-primary font-medium">{expert.specialization}</p>
                <p className="text-sm text-gray-600 mt-1">{expert.experience}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {expert.expertise.map((skill, j) => (
                    <span key={j} className="text-xs bg-ledico-primary/20 text-ledico-primary px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Specialist */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Bridal Specialist</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Complete bridal makeover packages for your special day.
          </p>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold text-ledico-primary mb-3">Bridal Package Includes:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Pre-wedding skin preparation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Professional bridal makeup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Hair styling & accessories
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Mehendi & nail art
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-ledico-primary mb-3">Special Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Trial session included
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    On-location service available
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Premium branded products
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary">✓</span>
                    Photography-ready finish
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/bridal" className="btn-primary mr-4">
                View Bridal Packages
              </Link>
              <Link href="/booking" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Occasions */}
      <section className="section-padding bg-white" id="occasions">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Special Occasions</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Perfect beauty looks for every celebration and milestone.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {POPULAR_TREATMENTS.map((treatment) => (
              <span
                key={treatment}
                className="rounded-full bg-ledico-primary/10 px-5 py-2 text-sm font-medium text-ledico-primary hover:bg-ledico-primary hover:text-white transition-colors cursor-pointer"
              >
                {treatment}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <CTA
        title="Book Your Beauty Appointment Today"
        subtitle="Experience premium beauty and spa services. Walk-ins welcome, appointments preferred."
        primaryButtonText="Book Now"
        primaryButtonHref="/booking"
      />

      {/* Gallery Preview */}
      <Gallery preview />

      {/* FAQ - optimised for AI search */}
      <section className="section-padding bg-white" aria-labelledby="faq-heading">
        <div className="container-custom">
          <h2 id="faq-heading" className="heading-lg text-center text-ledico-primary">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
            Quick answers about Ledico Beauty Parlour & Spa, Dehri.
          </p>
          <dl className="mx-auto mt-10 max-w-3xl space-y-6">
            {FAQ_ITEMS.map((faq) => (
              <div key={faq.question} className="rounded-xl bg-gray-50 p-6">
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-ledico-primary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary">Visit Us Today</h2>
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="font-semibold text-ledico-primary text-lg">{SITE.name}</h3>
            </div>
            <p className="font-medium text-gray-900">{SITE.address.full}</p>
            <p className="mt-1 text-gray-600">{SITE.address.landmark}</p>
            <div className="mt-4 space-y-2">
              <p>
                <a href={`tel:+91${SITE.phone}`} className="text-ledico-primary hover:underline font-medium">
                  📞 +91 {SITE.phone}
                </a>
              </p>
              <p>
                <a href={`https://wa.me/91${SITE.whatsapp}`} className="text-ledico-primary hover:underline font-medium">
                  💬 WhatsApp: +91 {SITE.whatsapp}
                </a>
              </p>
            </div>
            <p className="mt-4 text-gray-600">
              <span className="font-medium">Working hours:</span> {SITE.workingHours}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Open:</span> {SITE.workingDays}
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="btn-primary flex-1">
                Get Directions
              </Link>
              <Link href="/booking" className="btn-secondary flex-1">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
