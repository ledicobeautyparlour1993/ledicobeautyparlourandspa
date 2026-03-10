import type { Metadata } from "next";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Sitemap of all pages on Ledico Beauty Parlour & Spa website.",
  robots: { index: true, follow: true },
};

export default function SitemapPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <h1 className="heading-xl text-ledico-primary">Sitemap</h1>
        <p className="mt-4 text-gray-600">
          All pages on the Ledico Beauty Parlour & Spa website. You can also use the XML sitemap at{" "}
          <a href="/sitemap.xml" className="text-ledico-primary hover:underline">
            /sitemap.xml
          </a>{" "}
          for search engines.
        </p>
        <ul className="mt-10 space-y-2">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href || "/"}
                className="text-gray-700 hover:text-ledico-primary hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/sitemap.xml" className="text-gray-700 hover:text-ledico-primary hover:underline">
              XML Sitemap (for search engines)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
