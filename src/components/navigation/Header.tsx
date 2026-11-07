"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/student-life" },
  { label: "News", href: "/news" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Northstar Academy home"
          onClick={closeMenu}
        >
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">
            NORTHSTAR
            <small>ACADEMY</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="header-cta">
          Get in touch <ArrowUpRight size={16} />
        </Link>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-top">
          <span>EXPLORE NORTHSTAR</span>
          <span>MENU / 01</span>
        </div>

        <nav aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span className="mobile-nav-number">
                0{index + 1}
              </span>
              <span>{item.label}</span>
              <ArrowUpRight size={19} />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="mobile-contact-link"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          Start a conversation <ArrowUpRight size={18} />
        </Link>
      </div>
    </header>
  );
}