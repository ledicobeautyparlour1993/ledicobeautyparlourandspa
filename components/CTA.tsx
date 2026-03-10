import Link from "next/link";
import { SITE } from "@/lib/site";

const whatsappUrl = `https://wa.me/91${SITE.whatsapp}`;

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showPhone?: boolean;
  showWhatsApp?: boolean;
}

export default function CTA({
  title,
  subtitle,
  primaryButtonText = "Apply Now",
  primaryButtonHref = "/booking",
  showPhone = true,
  showWhatsApp = true,
}: CTASectionProps) {
  return (
    <section className="section-padding bg-ledico-primary text-white">
      <div className="container-custom text-center">
        <h2 className="heading-xl">{title}</h2>
        {subtitle && <p className="mt-4 text-lg opacity-95">{subtitle}</p>}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={primaryButtonHref} className="btn-secondary bg-ledico-secondary text-white hover:bg-ledico-secondary-light">
            {primaryButtonText}
          </Link>
          {showPhone && (
            <a
              href={`tel:+91${SITE.phone}`}
              className="btn-outline border-white bg-transparent text-white hover:bg-white hover:text-ledico-primary"
            >
              Call Us
            </a>
          )}
          {showWhatsApp && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white bg-transparent text-white hover:bg-green-500 hover:border-green-500"
            >
              WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
