import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Brain,
  FlaskConical,
  GraduationCap,
  Palette,
  Users,
} from "lucide-react";

const learningAreas = [
  {
    number: "01",
    title: "Languages & communication",
    description:
      "Developing confident communication, thoughtful expression and the ability to understand different perspectives.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Science & discovery",
    description:
      "Exploring the world through observation, experimentation, questions and evidence.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Mathematics & reasoning",
    description:
      "Building logical thinking, problem-solving skills and confidence with complex ideas.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Creative expression",
    description:
      "Making space for imagination, artistic exploration and original ways of thinking.",
    icon: Palette,
  },
  {
    number: "05",
    title: "Collaboration",
    description:
      "Learning to listen, share ideas, work with others and contribute to common goals.",
    icon: Users,
  },
  {
    number: "06",
    title: "Personal development",
    description:
      "Growing self-awareness, resilience, responsibility and the confidence to take initiative.",
    icon: GraduationCap,
  },
];

export default function AcademicsPage() {
  return (
    <div className="inner-page academics-page">
      <section className="inner-hero academics-hero">
        <div className="inner-hero-image academics-hero-image" />
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <span className="section-index">NORTHSTAR / ACADEMICS</span>
          <p className="eyebrow">THINK DEEPLY. EXPLORE WIDELY.</p>
          <h1>
            Knowledge
            <br />
            with <em>purpose.</em>
          </h1>
          <p>
            Learning that builds strong foundations, opens
            new perspectives and connects ideas to the world.
          </p>
          <a href="#learning-approach" className="inner-hero-scroll">
            EXPLORE OUR APPROACH <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      <section className="academics-intro section-pad" id="learning-approach">
        <div className="inner-aside">
          <span className="section-index">01 / OUR APPROACH</span>
        </div>
        <div>
          <p className="eyebrow">LEARNING THAT GOES FURTHER</p>
          <h2>
            Not just knowing the answer.
            <br />
            <em>Understanding the question.</em>
          </h2>
          <div className="academics-intro-bottom">
            <p>
              We believe meaningful learning goes beyond memorising
              information. Students should be able to investigate,
              connect ideas, communicate what they understand and
              apply their knowledge in practical ways.
            </p>
            <p>
              Our academic experience is designed to encourage
              intellectual curiosity while developing the skills
              and habits that support lifelong learning.
            </p>
          </div>
        </div>
      </section>

      <section className="learning-areas section-pad">
        <div className="learning-areas-heading">
          <div>
            <span className="section-index">02 / AREAS OF GROWTH</span>
            <p className="eyebrow">A BROAD LEARNING EXPERIENCE</p>
            <h2>
              Many ways
              <br />
              <em>to discover.</em>
            </h2>
          </div>
          <p>
            A rich education gives students opportunities to
            build knowledge, develop skills and discover
            interests that may shape their future.
          </p>
        </div>

        <div className="learning-area-list">
          {learningAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="learning-area" key={area.number}>
                <span className="learning-area-number">{area.number}</span>
                <div className="learning-area-icon">
                  <Icon size={26} strokeWidth={1.4} />
                </div>
                <div className="learning-area-copy">
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <ArrowUpRight className="learning-area-arrow" size={20} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="academics-feature">
        <div className="academics-feature-image" />
        <div className="academics-feature-content">
          <span className="section-index">03 / LEARNING IN ACTION</span>
          <p className="eyebrow">FROM IDEAS TO EXPERIENCE</p>
          <h2>
            Make connections.
            <br />
            <em>Make discoveries.</em>
          </h2>
          <p>
            Projects, discussions, practical activities and
            collaborative experiences help students connect
            what they learn with the world around them.
          </p>
          <Link href="/facilities" className="light-link">
            Explore our learning spaces <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="academic-support section-pad">
        <div>
          <span className="section-index">04 / EVERY LEARNER MATTERS</span>
          <p className="eyebrow">GROWTH IS PERSONAL</p>
          <h2>
            Different strengths.
            <br />
            <em>Shared opportunity.</em>
          </h2>
        </div>
        <div className="academic-support-copy">
          <p>
            Students bring different experiences, interests
            and ways of learning. A supportive educational
            environment recognises those differences and
            encourages every learner to keep progressing.
          </p>
          <Link href="/admissions" className="text-link">
            Join our learning community <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      <section className="academics-cta section-pad">
        <span className="section-index">YOUR NEXT STEP</span>
        <h2>
          Find the right
          <br />
          <em>place to grow.</em>
        </h2>
        <Link href="/admissions" className="final-cta-link">
          Explore admissions <ArrowUpRight size={18} />
        </Link>
      </section>
    </div>
  );
}