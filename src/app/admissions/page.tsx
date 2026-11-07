import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageCircle,
  Send,
  UserCheck,
} from "lucide-react";
import PageMotion from "@/components/sections/PageMotion";

const steps = [
  {
    number: "01",
    title: "Make an enquiry",
    description:
      "Tell us about your child, their current learning stage and the year you are considering.",
    icon: MessageCircle,
    detail: "Start a conversation",
  },
  {
    number: "02",
    title: "Visit the school",
    description:
      "Experience our learning environment, meet our team and explore the campus.",
    icon: GraduationCap,
    detail: "Discover the campus",
  },
  {
    number: "03",
    title: "Submit an application",
    description:
      "Complete the application process and provide the relevant supporting information.",
    icon: ClipboardList,
    detail: "Prepare your documents",
  },
  {
    number: "04",
    title: "Meet our team",
    description:
      "We will guide you through the next steps and discuss the appropriate learning pathway.",
    icon: UserCheck,
    detail: "Get to know us",
  },
];

const documents = [
  "Completed application form",
  "Previous school reports, where applicable",
  "Relevant identification documents",
  "Any additional documents requested by admissions",
];

export default function AdmissionsPage() {
  return (
    <PageMotion>
      <main className="admissions-page">
        <section className="admissions-hero">
          <div className="admissions-hero-image" data-page-parallax />
          <div className="admissions-hero-overlay" />

          <div className="admissions-hero-content">
            <span className="section-index">NORTHSTAR / 03 — ADMISSIONS</span>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h1>
              A place to
              <br />
              <em>belong.</em>
              <br />
              A future to
              <br />
              become.
            </h1>
            <p className="admissions-hero-description">
              Every great journey begins with a first step. Discover how to
              become part of the Northstar community.
            </p>
            <a href="#admission-journey" className="admissions-hero-link">
              EXPLORE THE PROCESS <ArrowDown size={15} />
            </a>
          </div>

          <span className="admissions-hero-side">THE NORTHSTAR JOURNEY · 2026</span>
        </section>

        <section className="admissions-intro section-pad">
          <div className="admissions-intro-aside page-reveal">
            <span className="section-index">01 / BEGIN</span>
            <span className="small-vertical-label">A WELCOMING FIRST STEP</span>
          </div>

          <div className="admissions-intro-copy page-reveal">
            <p className="eyebrow">MORE THAN AN APPLICATION</p>
            <h2>
              Choosing a school is choosing a{" "}
              <em>possibility.</em>
            </h2>
            <div className="admissions-intro-bottom">
              <p>
                We want every family to understand what makes our learning
                community special. Our admissions journey is designed to be
                welcoming, clear and personal.
              </p>
              <Link href="/contact" className="text-link">
                TALK TO OUR TEAM <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section id="admission-journey" className="admission-journey">
          <div className="section-pad admission-journey-heading page-reveal">
            <span className="section-index">02 / THE PROCESS</span>
            <div>
              <p className="eyebrow">FOUR STEPS FORWARD</p>
              <h2>
                Your journey,
                <br />
                <em>made clear.</em>
              </h2>
            </div>
            <p>
              From the first conversation to joining the classroom, we will
              help you understand what comes next.
            </p>
          </div>

          <div className="admission-timeline section-pad">
            <div className="admission-timeline-line" />
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  className={`admission-step admission-step-${index + 1} page-reveal`}
                  key={step.number}
                >
                  <div className="admission-step-marker">
                    <span>{step.number}</span>
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                  <div className="admission-step-copy">
                    <span className="eyebrow">STEP {step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <span className="admission-step-detail">
                      {step.detail} <ArrowUpRight size={13} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="admission-documents section-pad">
          <div className="admission-documents-visual page-reveal">
            <div className="document-orbit document-orbit-one" />
            <div className="document-orbit document-orbit-two" />
            <div className="document-sheet">
              <div className="document-sheet-top">
                <span>NORTHSTAR</span>
                <span>ADMISSIONS / 2026</span>
              </div>
              <FileText size={42} strokeWidth={1} />
              <div className="document-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="document-stamp">
                <Check size={18} />
              </div>
            </div>
            <span className="document-visual-caption">PREPARE FOR YOUR NEXT CHAPTER</span>
          </div>

          <div className="admission-documents-copy page-reveal">
            <span className="section-index">03 / GET PREPARED</span>
            <p className="eyebrow">A LITTLE PREPARATION GOES A LONG WAY</p>
            <h2>
              What to
              <br />
              <em>have ready.</em>
            </h2>
            <p className="admission-documents-description">
              The exact requirements may vary depending on the student`s
              learning stage. Our admissions team can confirm the documents
              needed for your application.
            </p>

            <ul>
              {documents.map((document) => (
                <li key={document}>
                  <span><Check size={13} /></span>
                  {document}
                </li>
              ))}
            </ul>

            <Link href="/contact" className="text-link">
              ASK ABOUT REQUIREMENTS <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>

        <section className="admissions-questions section-pad">
          <div className="admissions-questions-copy page-reveal">
            <span className="section-index">04 / WE ARE HERE</span>
            <p className="eyebrow">QUESTIONS ARE ALWAYS WELCOME</p>
            <h2>
              Let`s make
              <br />
              the first step
              <br />
              <em>together.</em>
            </h2>
            <p>
              Whether you are exploring options or ready to apply, our team is
              happy to help you find the information you need.
            </p>
            <Link href="/contact" className="portal-cta">
              CONTACT ADMISSIONS <Send size={15} />
            </Link>
          </div>

          <div className="admissions-question-mark page-reveal">
            <span>?</span>
            <div className="question-orbit question-orbit-one" />
            <div className="question-orbit question-orbit-two" />
            <small>EVERY QUESTION MATTERS</small>
          </div>
        </section>
      </main>
    </PageMotion>
  );
}