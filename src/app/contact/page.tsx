import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageMotion from "@/components/sections/PageMotion";
import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <PageMotion>
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-image" data-page-parallax />
          <div className="contact-hero-overlay" />
          <div className="contact-hero-content">
            <span className="section-index">NORTHSTAR / 07 — CONTACT</span>
            <p className="eyebrow">EVERY GREAT CONNECTION STARTS SOMEWHERE</p>
            <h1>
              Let`s
              <br />
              <em>connect.</em>
            </h1>
            <p>
              Have a question, want to arrange a visit or simply want to learn
              more? We are ready to listen.
            </p>
            <a href="#contact-details" className="contact-hero-link">
              FIND YOUR WAY TO US <ArrowDown size={15} />
            </a>
          </div>
          <span className="contact-hero-caption">WE ARE HERE TO HELP</span>
        </section>

        <section className="contact-intro section-pad">
          <div className="contact-intro-aside page-reveal">
            <span className="section-index">01 / SAY HELLO</span>
            <MessageCircle size={24} strokeWidth={1.2} />
          </div>
          <div className="contact-intro-copy page-reveal">
            <p className="eyebrow">LET`S MAKE THE FIRST CONNECTION</p>
            <h2>
              No question is too small. We are here to{" "}
              <em>help.</em>
            </h2>
            <p>
              Whether you are a prospective parent, current family, student or
              community partner, we would be glad to hear from you.
            </p>
          </div>
        </section>

        <section id="contact-details" className="contact-details section-pad">
          <div className="contact-details-heading page-reveal">
            <span className="section-index">02 / REACH NORTHSTAR</span>
            <p className="eyebrow">CHOOSE HOW TO CONNECT</p>
            <h2>
              We are just
              <br />
              a message <em>away.</em>
            </h2>
          </div>

          <div className="contact-methods">
            <a
              href="mailto:admissions@northstar.example"
              className="contact-method page-reveal"
            >
              <span className="contact-method-icon"><Mail size={21} /></span>
              <span className="eyebrow">EMAIL US</span>
              <strong>admissions@northstar.example</strong>
              <span className="contact-method-bottom">
                SEND AN EMAIL <ArrowUpRight size={15} />
              </span>
            </a>

            <a
              href="tel:+254700000000"
              className="contact-method page-reveal"
            >
              <span className="contact-method-icon"><Phone size={21} /></span>
              <span className="eyebrow">CALL THE SCHOOL</span>
              <strong>+254 700 000 000</strong>
              <span className="contact-method-bottom">
                CALL OUR TEAM <ArrowUpRight size={15} />
              </span>
            </a>

            <div className="contact-method page-reveal">
              <span className="contact-method-icon"><Clock3 size={21} /></span>
              <span className="eyebrow">OFFICE HOURS</span>
              <strong>Monday – Friday</strong>
              <span className="contact-method-bottom">
                HOURS TO BE CONFIRMED
              </span>
            </div>
          </div>
        </section>

        <section className="contact-form-section section-pad">
          <div className="contact-form-aside page-reveal">
            <span className="section-index">03 / YOUR MESSAGE</span>
            <div className="contact-form-aside-mark">
              <span>LET`S</span>
              <strong>TALK.</strong>
            </div>
            <p>
              Tell us what is on your mind. We will help you find the right
              direction.
            </p>
          </div>
          <div className="contact-form-wrap page-reveal">
            <ContactForm />
          </div>
        </section>

        <section className="contact-location">
          <div className="contact-location-copy section-pad page-reveal">
            <span className="section-index">04 / FIND US</span>
            <p className="eyebrow">COME AND EXPERIENCE THE CAMPUS</p>
            <h2>
              Some conversations
              <br />
              are better <em>in person.</em>
            </h2>
            <p>
              We welcome prospective families to arrange a visit and discover
              the Northstar environment.
            </p>
            <Link href="/admissions" className="text-link">
              EXPLORE ADMISSIONS <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="contact-map-art" aria-label="Illustrative campus location graphic">
            <div className="map-grid" />
            <div className="map-road map-road-one" />
            <div className="map-road map-road-two" />
            <div className="map-road map-road-three" />
            <div className="map-park map-park-one" />
            <div className="map-park map-park-two" />
            <div className="map-location-pin">
              <MapPin size={27} fill="currentColor" />
              <span>NORTHSTAR</span>
            </div>
            <span className="map-label map-label-one">MAIN ROAD</span>
            <span className="map-label map-label-two">CAMPUS AREA</span>
            <span className="map-compass">N ↑</span>
            <small>ILLUSTRATIVE MAP — LOCATION TO BE ADDED</small>
          </div>
        </section>

        <section className="contact-final section-pad">
          <span className="section-index">05 / UNTIL WE MEET</span>
          <div className="contact-final-copy page-reveal">
            <p className="eyebrow">WE LOOK FORWARD TO HEARING FROM YOU</p>
            <h2>
              Your next
              <br />
              chapter could
              <br />
              start <em>here.</em>
            </h2>
            <Link href="/admissions" className="portal-cta">
              TAKE THE FIRST STEP <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </PageMotion>
  );
}