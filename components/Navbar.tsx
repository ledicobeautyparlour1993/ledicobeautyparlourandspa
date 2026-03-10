"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const mainLinks = NAV_LINKS.slice(0, 6);
  const moreLinks = NAV_LINKS.slice(6, -1);
  const contactLink = NAV_LINKS[NAV_LINKS.length - 1];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="container-custom flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-ledico-primary md:text-2xl"
          aria-label="Ledico Beauty Parlour & Spa - Home"
        >
          Ledico Beauty Parlour & Spa .
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ledico-primary md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div
          className={`absolute left-0 right-0 top-full max-h-[85vh] overflow-y-auto border-b border-gray-200 bg-white shadow-lg md:static md:flex md:max-h-none md:overflow-visible md:border-0 md:shadow-none md:bg-transparent ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="container-custom flex flex-col gap-1 py-4 md:flex-row md:items-center md:gap-1 md:py-0">
            {mainLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-4 py-2 text-sm font-medium transition md:px-3 md:py-2 ${
                    pathname === item.href
                      ? "bg-ledico-primary text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-ledico-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {moreLinks.length > 0 && (
              <>
                <li className="relative hidden md:block group">
                  <span className="block cursor-default rounded-lg px-3 py-2 text-sm font-medium text-gray-700">
                    More
                  </span>
                  <ul className="invisible absolute left-0 min-w-[200px] rounded-lg border border-gray-200 bg-white py-2 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                    {moreLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-ledico-primary"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {moreLinks.map((item) => (
                  <li key={item.href} className="md:hidden">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-ledico-primary ${
                        pathname === item.href ? "bg-ledico-primary/10 text-ledico-primary" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </>
            )}
            <li className="md:hidden">
              <Link
                href={contactLink.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                  pathname === contactLink.href
                    ? "bg-ledico-primary text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-ledico-primary"
                }`}
              >
                {contactLink.name}
              </Link>
            </li>
            <li className="hidden md:block">
              <Link
                href={contactLink.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-ledico-primary"
              >
                {contactLink.name}
              </Link>
            </li>
            <li className="mt-2 md:ml-2 md:mt-0">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="btn-primary block text-center"
              >
                Book Appointment
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
