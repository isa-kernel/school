import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Student life", href: "/student-life" },
  { label: "News & events", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Link href="/" className="footer-brand">
            NORTHSTAR<span>.</span>
          </Link>

          <p>
            Growing curious minds.
            <br />
            Preparing them for what&apos;s next.
          </p>
        </div>

        <div className="footer-navigation">
          <span className="footer-label">EXPLORE</span>

          <div className="footer-links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight size={14} />
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <span className="footer-label">LET&apos;S CONNECT</span>

          <a href="mailto:info@northstaracademy.example">
            info@northstaracademy.example
          </a>

          <p>Our doors are open to curious minds.</p>

          <Link href="/contact" className="footer-contact-link">
            Contact the school <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {CURRENT_YEAR} Northstar Academy.</span>
        <span>LEARN. GROW. GO BEYOND.</span>
        <Link href="/">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}