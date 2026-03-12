import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Transformations & Success Stories",
  description: `Beautiful transformations and satisfied clients at ${SITE.name}. See our bridal makeovers, beauty treatments, and client testimonials from Dehri on Sone, Bihar.`,
  openGraph: { title: "Client Transformations | Ledico Beauty Parlour & Spa", description: "Beautiful transformations and satisfied clients." },
};

const CLIENT_TESTIMONIALS = [
  {
    name: "Priya Sharma",
    service: "Bridal Package",
    testimonial: "Ledico made my wedding day perfect! The makeup was flawless and lasted all day. Highly recommended!",
    rating: 5
  },
  {
    name: "Anjali Singh", 
    service: "Spa Treatment",
    testimonial: "Amazing spa experience! The massage was so relaxing and my skin feels incredible. Will definitely come back.",
    rating: 5
  },
  {
    name: "Neha Gupta",
    service: "Hair Styling",
    testimonial: "Love my new haircut and color! The stylists really understand what looks good. Great service!",
    rating: 5
  }
];

const ACHIEVEMENTS = [
  {
    title: "500+ Happy Clients",
    description: "We have successfully served over 500 satisfied clients in Dehri and surrounding areas."
  },
  {
    title: "100+ Bridal Makeovers",
    description: "Specialized in bridal makeup with over 100 beautiful brides trusting us for their special day."
  },
  {
    title: "3+ Years of Excellence",
    description: "Consistently providing quality beauty and spa services since our establishment."
  },
  {
    title: "Expert Team",
    description: "Certified beauticians and spa therapists with years of professional experience."
  }
];

export default function TransformationsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Client Transformations", url: "/transformations" }]} />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">Client Transformations & Success Stories</h1>
            <p className="mt-6 text-lg text-gray-600">
              See the beautiful transformations and read testimonials from our satisfied clients. 
              Your beauty journey starts here at Ledico Beauty Parlour & Spa.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl space-y-16">
          {/* Our Achievements */}
          <section>
            <h2 className="heading-lg text-center text-ledico-primary mb-12">Our Achievements</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {ACHIEVEMENTS.map((achievement, i) => (
                <div key={i} className="card text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/10 flex items-center justify-center">
                    <span className="text-2xl text-ledico-primary">🏆</span>
                  </div>
                  <h3 className="font-semibold text-ledico-primary text-lg mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Client Testimonials */}
          <section>
            <h2 className="heading-lg text-center text-ledico-primary mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {CLIENT_TESTIMONIALS.map((testimonial, i) => (
                <div key={i} className="card">
                  <div className="mb-4">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j} className="text-ledico-secondary">⭐</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{testimonial.testimonial}&rdquo;</p>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-ledico-primary">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Transformation Gallery Preview */}
          <section>
            <h2 className="heading-lg text-center text-ledico-primary mb-12">Before & After Transformations</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-ledico-primary text-4xl mb-2 block">✨</span>
                    <span className="text-ledico-primary text-sm font-medium">Transformation {i}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="btn-primary">
                View Full Gallery
              </Link>
            </div>
          </section>

          {/* Special Recognition */}
          <section className="rounded-2xl bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5 p-8">
            <h2 className="heading-lg text-center text-ledico-primary mb-8">Why Clients Choose Us</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <span className="text-3xl mb-3 block">💄</span>
                <h3 className="font-semibold text-ledico-primary mb-2">Expert Makeup Artists</h3>
                <p className="text-gray-600 text-sm">Professional makeup that enhances your natural beauty</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-3 block">🌟</span>
                <h3 className="font-semibold text-ledico-primary mb-2">Quality Products</h3>
                <p className="text-gray-600 text-sm">Premium branded products for the best results</p>
              </div>
              <div className="text-center">
                <span className="text-3xl mb-3 block">😊</span>
                <h3 className="font-semibold text-ledico-primary mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600 text-sm">Dedicated to making every client happy and confident</p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link href="/booking" className="btn-primary mr-4">
              Book Your Transformation
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
