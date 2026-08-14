"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">

      {/* TOP BAR - DESKTOP */}
      <div className="hidden bg-[#061a3a] text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

          <div className="flex items-center gap-6">
            <a href="tel:9971478970" className="hover:text-yellow-400">
              📞 9971478970
            </a>

            <a
              href="mailto:sunriseamity@gmail.com"
              className="hover:text-yellow-400"
            >
              ✉️ sunriseamity@gmail.com
            </a>

            <span>
              📍 F-163, F Block, Sector-2, Greater Noida West
            </span>
          </div>

          <div className="flex gap-4">
            <span>f</span>
            <span>◎</span>
            <span>in</span>
            <span>▶</span>
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-2xl">
              🎓
            </div>

            <div>
              <div className="text-lg font-extrabold leading-tight text-[#061a3a] sm:text-xl">
                Sunrise Academy
              </div>

              <div className="text-[10px] leading-tight text-slate-500 sm:text-xs">
                Admission & Educational Consultancy
              </div>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-6 lg:flex">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-[#061a3a] transition hover:text-yellow-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:9971478970"
              className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-[#061a3a] transition hover:bg-yellow-300"
            >
              Call Now
            </a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border-2 border-[#061a3a] text-2xl text-[#061a3a] lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="border-t border-slate-200 bg-white py-3 lg:hidden">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-slate-100 px-3 py-4 font-semibold text-[#061a3a] hover:bg-slate-50 hover:text-yellow-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:9971478970"
              onClick={() => setOpen(false)}
              className="mx-3 mt-4 mb-2 block rounded-lg bg-yellow-400 px-5 py-4 text-center font-bold text-[#061a3a]"
            >
              📞 Call Now
            </a>

          </div>
        )}

      </div>
    </header>
  );
}