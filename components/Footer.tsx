import Link from "next/link";
import { SITE, NAV_LINKS } from "@/lib/site";

const footerNav = NAV_LINKS.filter(
  (l) => ["/", "/about", "/services", "/bridal", "/gallery", "/contact"].includes(l.href)
);

const beautyLinks = [
  { name: "Bridal Packages", href: "/bridal" },
  { name: "Spa Treatments", href: "/spa" },
  { name: "Pricing", href: "/pricing" },
  { name: "Book Appointment", href: "/booking" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="heading-md mb-4 text-ledico-primary">{SITE.name}</h2>
            <p className="text-sm text-gray-600">{SITE.tagline}</p>
            <p className="mt-2 text-sm text-gray-600">{SITE.address.full}</p>
            <p className="mt-1 text-sm text-gray-600">
              <a href={`tel:+91${SITE.phone}`} className="hover:text-ledico-primary">
                +91 {SITE.phone}
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Navigation</h3>
            <ul className="space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-ledico-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Beauty Services</h3>
            <ul className="space-y-2">
              {beautyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition hover:text-ledico-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href={`tel:+91${SITE.phone}`} className="hover:text-ledico-primary">
                  📞 +91 {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/91${SITE.whatsapp}`} className="hover:text-ledico-primary">
                  💬 WhatsApp: +91 {SITE.whatsapp}
                </a>
              </li>
              <li>{SITE.address.full}</li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-ledico-primary">
                  ✉️ {SITE.email}
                </a>
              </li>
              <li className="text-ledico-primary font-medium">
                {SITE.workingHours} • {SITE.workingDays}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} {SITE.name}. All rights reserved. | Premier Beauty Destination in Dehri
          </p>
          <Link
            href="/sitemap-page"
            className="text-sm text-gray-500 hover:text-ledico-primary"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
}
