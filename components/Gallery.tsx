import Link from "next/link";

const GALLERY_ITEMS = [
  { alt: "Beauty Parlour Interior" },
  { alt: "Bridal Makeup" },
  { alt: "Spa Treatment Room" },
  { alt: "Hair Styling" },
  { alt: "Nail Art" },
  { alt: "Facial Treatment" },
];

export default function Gallery({ preview = true }: { preview?: boolean }) {
  const items = preview ? GALLERY_ITEMS : GALLERY_ITEMS;
  return (
    <section className="section-padding bg-gray-50" id="gallery">
      <div className="container-custom">
        <h2 className="heading-lg text-center text-ledico-primary">Gallery</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-gray-600">
          Glimpses of our beautiful transformations and spa treatments.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6">
          {items.map((img, i) => (
            <div
              key={i}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-ledico-primary/10 shadow-md transition hover:bg-ledico-primary/20"
            >
              <span className="text-center text-sm font-medium text-ledico-primary px-2">
                {img.alt}
              </span>
            </div>
          ))}
        </div>
        {preview && (
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-primary">
              View Full Gallery
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
