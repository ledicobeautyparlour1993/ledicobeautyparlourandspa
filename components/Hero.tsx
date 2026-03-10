import Link from "next/link";

const headline = "Ledico Beauty Parlour & Spa – Your Beauty, Our Passion";
const subtext =
  "Premier beauty and spa destination in Dehri on Sone, Bihar. Expert beauticians, premium treatments, and personalized care for every occasion.";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/interior ledico beauty parlour best beaty parlour dehri on sone.jpeg')",
        }}
        aria-hidden
      />
      {/* Light overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-ledico-primary/40 via-ledico-primary/30 to-ledico-primary-dark/50"
        aria-hidden
      />
      <div className="container-custom relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="heading-xl max-w-4xl text-white drop-shadow-md">
          {headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/95 sm:text-xl">
          {subtext}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/booking" className="bg-white text-gray-800 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors">
            Book Appointment
          </Link>
          <Link href="/services" className="bg-white text-gray-800 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors">
            View Services
          </Link>
          <Link href="/contact" className="bg-white text-gray-800 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-colors">
            Call Now: 086515 18563
          </Link>
        </div>
      </div>
    </section>
  );
}
