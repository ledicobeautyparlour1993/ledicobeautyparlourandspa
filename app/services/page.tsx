import { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICES_LIST, POPULAR_TREATMENTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Beauty & Spa Services",
  description: `Complete beauty and spa services at ${SITE.name} in Dehri on Sone. Hair styling, facials, manicures, pedicures, waxing, makeup, spa treatments and more.`,
  keywords: [
    "beauty services Dehri",
    "spa treatments Bihar",
    "hair salon Dehri",
    "facial treatment",
    "manicure pedicure",
    "makeup services",
    "waxing Dehri",
    "bridal makeup",
  ],
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">Beauty & Spa Services</h1>
            <p className="mt-6 text-lg text-gray-600">
              Comprehensive beauty treatments and spa services designed to make you look and feel your absolute best. 
              From everyday beauty care to special occasion makeovers, we have everything you need.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-primary">
                Book Appointment
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Treatments */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Most Popular Treatments</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our clients&apos; favorite beauty and spa treatments
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_TREATMENTS.map((treatment, i) => (
              <div key={i} className="card bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5 hover:shadow-xl">
                <h3 className="font-semibold text-ledico-primary text-lg mb-2">{treatment}</h3>
                <p className="text-gray-600 text-sm">Premium quality treatment with expert care and attention to detail.</p>
                <Link href="/booking" className="mt-4 inline-block text-ledico-primary font-medium hover:underline">
                  Book Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Complete Service Menu</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our full range of beauty and spa services
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {SERVICES_LIST.map((category, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-ledico-primary text-xl mb-4">{category.category}</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {category.services.map((service, j) => (
                    <div key={j} className="flex items-center gap-2 p-3 rounded-lg bg-ledico-primary/5 hover:bg-ledico-primary/10 transition-colors">
                      <span className="text-ledico-secondary">✨</span>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-12">Why Choose Our Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">👩‍💄</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Expert Beauticians</h3>
              <p className="text-gray-600 text-sm">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Premium Products</h3>
              <p className="text-gray-600 text-sm">High-quality branded beauty and skincare products</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">🧼</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Hygienic Environment</h3>
              <p className="text-gray-600 text-sm">Sterilized tools and clean, safe treatment rooms</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Personalized Care</h3>
              <p className="text-gray-600 text-sm">Customized treatments based on your needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary to-ledico-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Look Your Best?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Book your appointment today and experience the difference of professional beauty care
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-ledico-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Appointment
            </Link>
            <Link href={`tel:+91${SITE.phone}`} className="border-2 border-white bg-transparent px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-ledico-primary transition-colors">
              Call Now: {SITE.phone}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}