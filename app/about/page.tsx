import { Metadata } from "next";
import Link from "next/link";
import { SITE, WHY_LEDICO, BEAUTY_EXPERTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} - the premier beauty parlour and spa in Dehri on Sone, Bihar. Our story, expert team, and commitment to beauty excellence since ${SITE.established}.`,
  keywords: [
    "about Ledico Beauty Parlour & Spa",
    "beauty parlour Dehri history",
    "best beauticians Bihar",
    "spa services Rohtas",
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">About Ledico Beauty Parlour & Spa</h1>
            <p className="mt-6 text-lg text-gray-600">
              {SITE.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="heading-lg text-ledico-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Established in {SITE.established}, Ledico Beauty Parlour & Spa has been serving the beauty needs 
                  of Dehri on Sone and surrounding areas in Bihar. What started as a small beauty salon has grown 
                  into the region's most trusted destination for comprehensive beauty and wellness services.
                </p>
                <p>
                  Located in the heart of Dehri at {SITE.address.landmark}, we have built our reputation on 
                  providing exceptional beauty treatments, personalized care, and using only the finest products 
                  and techniques in the industry.
                </p>
                <p>
                  Our commitment to excellence and customer satisfaction has made us the preferred choice for 
                  brides, working professionals, and anyone who values quality beauty care in Rohtas district.
                </p>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To enhance natural beauty and boost confidence through expert beauty treatments, 
                exceptional service, and a relaxing spa experience that makes every client feel special.
              </p>
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading beauty and wellness destination in Bihar, known for innovation, 
                quality, and creating beautiful transformations that last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Why Choose Ledico</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            What sets us apart as the premier beauty destination in Dehri on Sone
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {WHY_LEDICO.map((item, i) => (
              <div key={i} className="card text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                  <span className="text-2xl text-ledico-primary">✨</span>
                </div>
                <h3 className="font-semibold text-ledico-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Meet Our Expert Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Certified beauty professionals dedicated to making you look and feel amazing
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BEAUTY_EXPERTS.map((expert, i) => (
              <div key={i} className="card text-center">
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-ledico-primary/20 to-ledico-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-ledico-primary">{expert.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{expert.name}</h3>
                <p className="text-ledico-primary font-medium text-sm mb-1">{expert.specialization}</p>
                <p className="text-gray-600 text-sm mb-3">{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-1">
                  {expert.expertise.map((skill, j) => (
                    <span key={j} className="text-xs bg-ledico-primary/10 text-ledico-primary px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <h2 className="heading-lg text-center text-ledico-primary mb-8">Our Commitment to You</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="card bg-white">
                <h3 className="font-semibold text-ledico-primary text-lg mb-4">Quality & Safety</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Sterilized tools and equipment for every service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Premium branded products from trusted manufacturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Patch tests for sensitive skin and allergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Clean, hygienic environment maintained at all times</span>
                  </li>
                </ul>
              </div>
              <div className="card bg-white">
                <h3 className="font-semibold text-ledico-primary text-lg mb-4">Customer Experience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Personalized consultation for every client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Comfortable, relaxing atmosphere</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Flexible appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-ledico-secondary mt-1">✓</span>
                    <span>Aftercare guidance and support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="heading-lg text-ledico-primary mb-6">Visit Our Parlour</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">{SITE.address.full}</p>
                  <p className="text-gray-600">{SITE.address.landmark}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600">{SITE.workingHours}</p>
                  <p className="text-gray-600">{SITE.workingDays}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                  <p className="text-gray-600">
                    <a href={`tel:+91${SITE.phone}`} className="text-ledico-primary hover:underline">
                      📞 +91 {SITE.phone}
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href={`https://wa.me/91${SITE.whatsapp}`} className="text-ledico-primary hover:underline">
                      💬 WhatsApp: +91 {SITE.whatsapp}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="card bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Ready to Experience Ledico?</h3>
              <p className="text-gray-600 mb-6">
                Book your appointment today and discover why we're Dehri's most trusted beauty destination.
              </p>
              <div className="space-y-3">
                <Link href="/booking" className="btn-primary w-full text-center">
                  Book Appointment
                </Link>
                <Link href="/services" className="btn-secondary w-full text-center">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}