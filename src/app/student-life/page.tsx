import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Heart,
  Music2,
  Palette,
  Trophy,
  Users,
} from "lucide-react";
import PageMotion from "@/components/sections/PageMotion";

const experiences = [
  {
    number: "01",
    category: "SPORT",
    title: "Move with purpose.",
    description:
      "Sport creates opportunities to build teamwork, discipline, confidence and resilience.",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    category: "CREATIVITY",
    title: "Make something meaningful.",
    description:
      "Art, music and creative expression give students room to explore ideas and discover new strengths.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    category: "COMMUNITY",
    title: "Find your people.",
    description:
      "Shared experiences and friendships help create a sense of belonging that extends beyond the classroom.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    category: "DISCOVERY",
    title: "Stay curious.",
    description:
      "Clubs, projects and new experiences encourage students to ask questions and try something different.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=85",
  },
];

const activities = [
  { icon: Trophy, label: "Sports & athletics", number: "01" },
  { icon: Palette, label: "Arts & creativity", number: "02" },
  { icon: Music2, label: "Music & performance", number: "03" },
  { icon: Users, label: "Clubs & community", number: "04" },
];

export default function StudentLifePage() {
  return (
    <PageMotion>
      <main className="student-page">
        <section className="student-hero">
          <div className="student-hero-image" data-page-parallax />
          <div className="student-hero-overlay" />

          <div className="student-hero-content">
            <span className="section-index">NORTHSTAR / 05 — STUDENT LIFE</span>
            <p className="eyebrow">LIFE BEYOND THE LESSON</p>
            <h1>
              Growing
              <br />
              <em>together.</em>
            </h1>
            <p>
              The friendships, discoveries, challenges and moments that make
              school life unforgettable.
            </p>
            <a href="#student-experiences" className="student-hero-link">
              EXPLORE STUDENT LIFE <ArrowDown size={15} />
            </a>
          </div>

          <div className="student-hero-note">
            <span>MORE THAN A SCHOOL DAY</span>
            <span>01 — 04</span>
          </div>
        </section>

        <section className="student-intro section-pad">
          <div className="student-intro-aside page-reveal">
            <span className="section-index">01 / THE EXPERIENCE</span>
            <Heart size={22} strokeWidth={1.2} />
          </div>
          <div className="student-intro-copy page-reveal">
            <p className="eyebrow">A COMMUNITY TO GROW IN</p>
            <h2>
              The best learning
              <br />
              happens in and
              <br />
              <em>out of class.</em>
            </h2>
            <div className="student-intro-bottom">
              <p>
                School life is made up of more than lessons and assignments.
                It is the experience of finding your interests, learning with
                others and becoming more confident in who you are.
              </p>
              <span className="student-handwritten">Find your thing. Find your people.</span>
            </div>
          </div>
        </section>

        <section id="student-experiences" className="student-experiences">
          <div className="student-experiences-heading section-pad page-reveal">
            <span className="section-index">02 / FIND YOUR INTEREST</span>
            <div>
              <p className="eyebrow">A WORLD OF EXPERIENCES</p>
              <h2>
                There is more
                <br />
                than one way to <em>shine.</em>
              </h2>
            </div>
            <p>
              Explore the experiences that help students develop interests,
              confidence and lifelong connections.
            </p>
          </div>

          <div className="experience-track">
            <div className="experience-track-hint">
              <ArrowLeft size={14} />
              <span>SCROLL TO EXPLORE</span>
              <ArrowRight size={14} />
            </div>

            <div className="experience-horizontal">
              {experiences.map((experience) => (
                <article className="experience-panel" key={experience.number}>
                  <div
                    className="experience-panel-image"
                    style={{ backgroundImage: `url("${experience.image}")` }}
                  />
                  <div className="experience-panel-overlay" />
                  <div className="experience-panel-content">
                    <div className="experience-panel-top">
                      <span>{experience.number} / 04</span>
                      <span>{experience.category}</span>
                    </div>
                    <div>
                      <p className="eyebrow">{experience.category}</p>
                      <h3>{experience.title}</h3>
                      <p className="experience-panel-description">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="student-activities section-pad">
          <div className="student-activities-heading page-reveal">
            <span className="section-index">03 / GET INVOLVED</span>
            <p className="eyebrow">EXPLORE WHAT INTERESTS YOU</p>
            <h2>
              Try something.
              <br />
              <em>Discover more.</em>
            </h2>
          </div>

          <div className="student-activity-list">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div className="student-activity page-reveal" key={activity.number}>
                  <span>{activity.number}</span>
                  <Icon size={22} strokeWidth={1.4} />
                  <h3>{activity.label}</h3>
                  <ArrowUpRight size={19} />
                </div>
              );
            })}
          </div>
        </section>

        <section className="student-community">
          <div className="student-community-image" data-page-parallax />
          <div className="student-community-overlay" />
          <div className="student-community-content section-pad page-reveal">
            <span className="section-index">04 / THE PEOPLE</span>
            <p className="eyebrow">EVERYONE HAS A PLACE</p>
            <h2>
              Different
              <br />
              people.
              <br />
              One <em>community.</em>
            </h2>
            <p>
              We believe a strong school community is one where students feel
              welcomed, supported and encouraged to contribute.
            </p>
          </div>
          <span className="student-community-side">BELONGING IS PART OF THE JOURNEY</span>
        </section>

        <section className="student-moments section-pad">
          <div className="student-moments-heading page-reveal">
            <span className="section-index">05 / THE LITTLE THINGS</span>
            <div>
              <p className="eyebrow">MOMENTS THAT STAY WITH YOU</p>
              <h2>
                The memories
                <br />
                <em>we make.</em>
              </h2>
            </div>
            <Camera size={25} strokeWidth={1.2} />
          </div>

          <div className="student-moments-grid">
            <div className="moment-image moment-image-one page-reveal">
              <div />
              <span>DISCOVERY / 01</span>
            </div>
            <div className="moment-quote page-reveal">
              <span>“</span>
              <p>
                Growing is not just about how much you learn. It is also about
                who you become along the way.
              </p>
              <small>THE NORTHSTAR EXPERIENCE</small>
            </div>
            <div className="moment-image moment-image-two page-reveal">
              <div />
              <span>CONNECTION / 02</span>
            </div>
          </div>
        </section>

        <section className="student-cta section-pad">
          <span className="section-index">06 / YOUR NEXT CHAPTER</span>
          <div className="student-cta-content page-reveal">
            <p className="eyebrow">COME BE PART OF IT</p>
            <h2>
              Your story
              <br />
              starts <em>here.</em>
            </h2>
            <p>
              Discover a school community where learning, friendship and
              personal growth come together.
            </p>
            <Link href="/admissions" className="portal-cta">
              EXPLORE ADMISSIONS <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </PageMotion>
  );
}