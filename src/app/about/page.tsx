import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Heart,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "We encourage learners to ask questions, explore possibilities and remain open to new ideas.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Character",
    description:
      "We value integrity, responsibility, empathy and the confidence to make thoughtful decisions.",
    icon: Heart,
  },
  {
    number: "03",
    title: "Community",
    description:
      "We create an environment where people feel seen, supported and encouraged to contribute.",
    icon: Users,
  },
  {
    number: "04",
    title: "Purpose",
    description:
      "We connect learning to life, helping students discover what matters and how they can make a difference.",
    icon: Compass,
  },
];

export default function AboutPage() {
  return (
    <div className="inner-page about-page">
      <section className="inner-hero about-hero">
        <div className="inner-hero-image about-hero-image" />
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <span className="section-index">NORTHSTAR / OUR STORY</span>
          <p className="eyebrow">MORE THAN A PLACE TO LEARN</p>
          <h1>
            We believe in
            <br />
            <em>what`s possible.</em>
          </h1>
          <p>
            An education should do more than prepare students
            for the next exam. It should prepare them for life.
          </p>
          <a href="#our-belief" className="inner-hero-scroll">
            DISCOVER OUR STORY <ArrowDown size={15} />
          </a>
        </div>
      </section>

      <section className="about-belief section-pad" id="our-belief">
        <div className="inner-aside">
          <span className="section-index">01 / OUR BELIEF</span>
        </div>
        <div className="about-belief-content">
          <p className="eyebrow">THE REASON WE EXIST</p>
          <h2>
            Every learner has a story.
            <br />
            <em>We help them write what`s next.</em>
          </h2>
          <div className="about-belief-bottom">
            <p>
              Northstar Academy is built around a simple belief:
              every student deserves an environment where they
              can explore their interests, develop their abilities
              and grow into their own potential.
            </p>
            <p>
              We bring together meaningful learning, supportive
              relationships and opportunities to discover new
              possibilities—inside and beyond the classroom.
            </p>
          </div>
        </div>
      </section>

      <section className="about-quote">
        <span className="quote-mark">“</span>
        <p>
          We don`t measure education only by what students
          know, but also by what they become capable of doing.
        </p>
        <span className="quote-attribution">THE NORTHSTAR BELIEF</span>
      </section>

      <section className="values-section section-pad">
        <div className="values-heading">
          <div>
            <span className="section-index">02 / WHAT GUIDES US</span>
            <p className="eyebrow">OUR SHARED VALUES</p>
            <h2>
              Principles that
              <br />
              <em>move us forward.</em>
            </h2>
          </div>
          <p>
            These are more than words on a wall. They shape
            how we learn, how we work together and how we
            contribute to the world around us.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article className="value-card" key={value.number}>
                <div className="value-card-top">
                  <span>{value.number}</span>
                  <Icon size={25} strokeWidth={1.4} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <span className="value-card-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-image-band">
        <div className="about-image-band-content">
          <span className="section-index">03 / LOOKING AHEAD</span>
          <h2>
            Rooted in possibility.
            <br />
            <em>Ready for tomorrow.</em>
          </h2>
          <Link href="/academics" className="light-link">
            Discover our academic approach <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="about-next section-pad">
        <div>
          <span className="section-index">CONTINUE EXPLORING</span>
          <h2>
            See what learning
            <br />
            <em>can become.</em>
          </h2>
        </div>
        <div className="about-next-links">
          <Link href="/academics">
            <span>01</span>
            Academics
            <ArrowUpRight size={20} />
          </Link>
          <Link href="/student-life">
            <span>02</span>
            Student life
            <ArrowUpRight size={20} />
          </Link>
          <Link href="/admissions">
            <span>03</span>
            Admissions
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}