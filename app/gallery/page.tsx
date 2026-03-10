import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery - Beauty Transformations",
  description: `Photo gallery of ${SITE.name} - bridal makeovers, beauty transformations, spa treatments, and client before & after photos from Dehri on Sone, Bihar.`,
  openGraph: { title: "Gallery | Ledico Beauty Parlour & Spa", description: "Beauty transformations, bridal makeovers, and spa treatments." },
};

export default function GalleryPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Gallery", url: "/gallery" }]} />
      <div className="section-padding bg-white">
        <div className="container-custom">
          <h1 className="heading-xl text-center text-ledico-primary">Beauty Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Glimpses of our beautiful transformations, bridal makeovers, spa treatments, and happy clients.
          </p>
        </div>
      </div>
      <Gallery preview={false} />
    </>
  );
}
