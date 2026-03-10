import Link from "next/link";
import { getBreadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

interface BreadcrumbProps {
  items: { name: string; url: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems = [{ name: "Home", url: "/" }, ...items];
  const schema = getBreadcrumbSchema(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="container-custom py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          {fullItems.map((item, i) => (
            <li key={item.url} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i === fullItems.length - 1 ? (
                <span className="font-medium text-ledico-primary">{item.name}</span>
              ) : (
                <Link href={item.url} className="hover:text-ledico-primary">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
