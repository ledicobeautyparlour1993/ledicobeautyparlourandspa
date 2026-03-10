import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spa Treatments & Wellness",
  description: `Premium spa treatments and wellness services at ${SITE.name} in Dehri on Sone. Relaxing massages, body treatments, aromatherapy, and rejuvenating spa packages.`,
  openGraph: { title: "Spa Treatments | Ledico Beauty Parlour & Spa", description: "Premium spa and wellness treatments." },
};

const SPA_FACILITIES = [
  "Private Treatment Rooms",
  "Steam Room",
  "Relaxation Lounge",
  "Aromatherapy Suite",
  "Massage Therapy Room",
  "Hygienic Environment",
];

const SPA_TREATMENTS = [
  {
    category: "Body Massages",
    treatments: ["Swedish Massage", "Deep Tissue Massage", "Hot Stone Massage", "Aromatherapy Massage", "Relaxation Massage"]
  },
  {
    category: "Body Treatments",
    treatments: ["Body Scrub", "Body Wrap", "Body Polishing", "Detox Treatment", "Moisturizing Treatment"]
  },
  {
    category: "Facial Spa",
    treatments: ["Anti-aging Facial", "Hydrating Facial", "Deep Cleansing", "Brightening Treatment", "Acne Treatment"]
  },
  {
    category: "Wellness Packages",
    treatments: ["Bridal Spa Package", "Stress Relief Package", "Detox Package", "Couple's Spa", "Day Spa Package"]
  }
];

export default function SpaPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Spa Treatments", url: "/spa" }]} />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="heading-xl text-ledico-primary">Spa Treatments & Wellness</h1>
            <p className="mt-6 text-lg text-gray-600">
              Escape to tranquility with our premium spa treatments designed to rejuvenate your body, 
              mind, and spirit. Experience ultimate relaxation in our serene spa environment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-primary">
                Book Spa Treatment
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding bg-white">
        <div className="container-custom max-w-6xl space-y-16">
          {/* Spa Facilities */}
          <section>
            <h2 className="heading-lg text-center text-ledico-primary mb-8">Our Spa Facilities</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SPA_FACILITIES.map((facility) => (
                <div
                  key={facility}
                  className="rounded-lg bg-ledico-primary/10 px-6 py-4 text-center font-medium text-ledico-primary"
                >
                  {facility}
                </div>
              ))}
            </div>
          </section>

          {/* Spa Treatments */}
          <section>
            <h2 className="heading-lg text-center text-ledico-primary mb-12">Spa Treatment Menu</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {SPA_TREATMENTS.map((category, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold text-ledico-primary text-xl mb-4">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.treatments.map((treatment, j) => (
                      <li key={j} className="flex items-center gap-3 p-3 rounded-lg bg-ledico-primary/5 hover:bg-ledico-primary/10 transition-colors">
                        <span className="text-ledico-secondary">✨</span>
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Spa Benefits */}
          <section className="rounded-2xl border-2 border-ledico-secondary/30 bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5 p-8">
            <h2 className="heading-lg text-center text-ledico-primary mb-8">Benefits of Our Spa Treatments</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/20 flex items-center justify-center">
                  <span className="text-2xl">😌</span>
                </div>
                <h3 className="font-semibold text-ledico-primary mb-2">Stress Relief</h3>
                <p className="text-gray-600 text-sm">Reduce stress and tension with our relaxing treatments</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/20 flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-semibold text-ledico-primary mb-2">Skin Rejuvenation</h3>
                <p className="text-gray-600 text-sm">Revitalize and refresh your skin with expert care</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/20 flex items-center justify-center">
                  <span className="text-2xl">💆‍♀️</span>
                </div>
                <h3 className="font-semibold text-ledico-primary mb-2">Muscle Relaxation</h3>
                <p className="text-gray-600 text-sm">Relieve muscle tension and improve circulation</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-ledico-primary/20 flex items-center justify-center">
                  <span className="text-2xl">🧘‍♀️</span>
                </div>
                <h3 className="font-semibold text-ledico-primary mb-2">Mental Wellness</h3>
                <p className="text-gray-600 text-sm">Achieve mental clarity and emotional balance</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary to-ledico-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Relax and Rejuvenate?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Book your spa treatment today and experience the ultimate in relaxation and wellness
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-ledico-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Spa Treatment
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
