import { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bridal Makeup & Wedding Services",
  description: `Complete bridal makeup and wedding preparation services at ${SITE.name} in Dehri on Sone. Professional bridal packages, pre-wedding treatments, and on-location services available.`,
  keywords: [
    "bridal makeup Dehri",
    "wedding makeup Bihar",
    "bridal services Rohtas",
    "wedding preparation",
    "bridal packages",
    "makeup artist Dehri",
  ],
};

const bridalPackages = [
  {
    name: "Classic Bridal Package",
    price: "₹8,000 - ₹12,000",
    duration: "4-5 hours",
    includes: [
      "Pre-bridal skin preparation",
      "Professional bridal makeup",
      "Hair styling with accessories",
      "Basic nail art",
      "Touch-up kit",
      "1 trial session"
    ]
  },
  {
    name: "Premium Bridal Package",
    price: "₹15,000 - ₹20,000",
    duration: "6-7 hours",
    includes: [
      "Complete pre-wedding skin treatments",
      "HD bridal makeup",
      "Professional hair styling",
      "Mehendi application",
      "Nail art & extensions",
      "Draping assistance",
      "2 trial sessions",
      "On-location service"
    ]
  },
  {
    name: "Luxury Bridal Package",
    price: "₹25,000 - ₹35,000",
    duration: "Full day",
    includes: [
      "7-day pre-wedding beauty regimen",
      "Airbrush HD makeup",
      "Celebrity-style hair styling",
      "Complete mehendi design",
      "Spa treatments",
      "Jewelry styling consultation",
      "3 trial sessions",
      "On-location team service",
      "Photography coordination"
    ]
  }
];

const preWeddingServices = [
  "Facial treatments & skin brightening",
  "Body polishing & spa treatments",
  "Hair treatments & conditioning",
  "Eyebrow shaping & threading",
  "Manicure & pedicure with nail art",
  "Waxing & hair removal",
  "Mehendi design consultation",
  "Diet & skincare consultation"
];

export default function BridalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/10 via-ledico-secondary/10 to-ledico-rose/10">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="heading-xl text-ledico-primary">Bridal Makeup & Wedding Services</h1>
            <p className="mt-6 text-lg text-gray-600">
              Make your special day unforgettable with our comprehensive bridal beauty services. 
              From pre-wedding preparations to your big day, we ensure you look absolutely radiant.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/booking" className="btn-primary">
                Book Bridal Consultation
              </Link>
              <Link href={`tel:+91${SITE.phone}`} className="btn-secondary">
                Call: {SITE.phone}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Bridal Packages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the perfect bridal package for your dream wedding
          </p>
          <div className="grid gap-8 lg:grid-cols-3">
            {bridalPackages.map((pkg, i) => (
              <div key={i} className={`card ${i === 1 ? 'ring-2 ring-ledico-primary' : ''}`}>
                {i === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ledico-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-bold text-ledico-primary text-xl mb-2">{pkg.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-ledico-secondary">{pkg.price}</span>
                  <p className="text-gray-600 text-sm">Duration: {pkg.duration}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-ledico-secondary mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/booking" className="btn-primary w-full text-center">
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Wedding Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-ledico-primary/5">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="heading-lg text-ledico-primary mb-6">Pre-Wedding Beauty Preparation</h2>
              <p className="text-gray-600 mb-8">
                Start your wedding beauty journey with our comprehensive pre-wedding treatments. 
                We recommend beginning 2-4 weeks before your wedding for the best results.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {preWeddingServices.map((service, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-ledico-secondary">✨</span>
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-white">
              <h3 className="font-semibold text-ledico-primary text-lg mb-4">Wedding Timeline Checklist</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="bg-ledico-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">4W</span>
                  <div>
                    <p className="font-medium text-gray-900">4 Weeks Before</p>
                    <p className="text-sm text-gray-600">Start skin treatments, hair care regimen</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-ledico-secondary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">2W</span>
                  <div>
                    <p className="font-medium text-gray-900">2 Weeks Before</p>
                    <p className="text-sm text-gray-600">Bridal makeup trial, final treatments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-ledico-accent text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">1W</span>
                  <div>
                    <p className="font-medium text-gray-900">1 Week Before</p>
                    <p className="text-sm text-gray-600">Final touch-ups, mehendi application</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-ledico-rose text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">D</span>
                  <div>
                    <p className="font-medium text-gray-900">Wedding Day</p>
                    <p className="text-sm text-gray-600">Full bridal makeup & styling</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-4">Our Bridal Work</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See some of our beautiful brides and their stunning transformations
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-ledico-primary/10 to-ledico-secondary/10 rounded-2xl flex items-center justify-center">
                <span className="text-ledico-primary text-4xl">👰</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary/5 to-ledico-secondary/5">
        <div className="container-custom">
          <h2 className="heading-lg text-center text-ledico-primary mb-12">Why Choose Our Bridal Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">👩‍🎨</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Expert Bridal Artists</h3>
              <p className="text-gray-600 text-sm">Specialized in bridal makeup with years of experience</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Camera Ready</h3>
              <p className="text-gray-600 text-sm">HD and photography-friendly makeup techniques</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">On-Location Service</h3>
              <p className="text-gray-600 text-sm">We come to your venue for convenience</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold text-ledico-primary mb-2">Trial Sessions</h3>
              <p className="text-gray-600 text-sm">Perfect your look before the big day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-ledico-primary to-ledico-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-4">Ready to Be a Stunning Bride?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Book your bridal consultation today and let us create the perfect look for your special day
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="bg-white text-ledico-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Consultation
            </Link>
            <a href={`https://wa.me/91${SITE.whatsapp}?text=Hi, I would like to book a bridal consultation at Ledico Beauty Parlour & Spa`} 
               className="border-2 border-white bg-transparent px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-ledico-primary transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}