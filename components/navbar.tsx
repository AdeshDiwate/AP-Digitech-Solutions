"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar as BaseNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "/#home" },
  { name: "About Us", link: "/#about" },
  { name: "Features", link: "/#services" },
  { name: "Portfolio", link: "/Portfolio" },
  { name: "Blog", link: "/Blog" },
  { name: "Contact", link: "/#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <BaseNavbar className="fixed top-6">
      {/* Desktop Navigation */}
      <NavBody className="max-w-5xl">
        <Logo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton 
            href="/#contact"
            variant="gradient"
            className="rounded-full px-6"
          >
            Get Started
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav className="max-w-5xl">
        <MobileNavHeader className="px-4 py-2">
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            className="mt-4"
          >
          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-600 transition-colors hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <NavbarButton
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                variant="gradient"
                className="w-full rounded-xl py-3"
              >
                Get Started
              </NavbarButton>
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </BaseNavbar>
  );
}

const Logo = () => (
  <Link
    href="/"
    className="relative z-20 flex items-center text-lg font-semibold tracking-[0.02em] text-slate-900 dark:text-white"
  >
    Rave<span className="text-blue-500">blue</span>
  </Link>
);
