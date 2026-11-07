"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Compass,
  GraduationCap,
  Lightbulb,
  MoveUpRight,
  Sparkles,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = {
  hero: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90",
  learning:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=85",
  students:
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
  science:
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  sports:
    "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85",
  campus:
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85",
  art: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=85",
  classroom:
    "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
};

const orbitItems = [
  "Curiosity",
  "Creativity",
  "Confidence",
  "Character",
  "Community",
  "Discovery",
];

const newsItems = [
  {
    category: "CAMPUS LIFE",
    date: "12.09.26",
    title: "A new season of discovery begins at Northstar",
    image: images.students,
  },
  {
    category: "ACADEMICS",
    date: "08.09.26",
    title: "Learning beyond the classroom walls",
    image: images.science,
  },
  {
    category: "COMMUNITY",
    date: "02.09.26",
    title: "Building a community where everyone belongs",
    image: images.sports,
  },
];

export default function HomeExperience() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        root,
      );

      revealItems.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        ".hero-copy > *",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.13,
          ease: "power3.out",
          delay: 0.15,
        },
      );

      gsap.to(".hero-image", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".home-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".orbit-wheel", {
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: ".orbit-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".vehicle-track", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".portal-image",
        { scale: 1.18 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".portal-section",
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div className="home-experience" ref={pageRef}>
      {/* HERO */}
      <section className="home-hero">
        <div className="hero-image-wrap">
          <Image
            src={images.hero}
            alt="Students learning together in a bright classroom"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
        </div>
        <div className="hero-overlay" />

        <div className="hero-topline">
          <span>AN EDUCATION FOR TOMORROW</span>
          <span>01 — A PLACE TO BEGIN</span>
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span /> WELCOME TO NORTHSTAR ACADEMY
          </p>

          <h1>
            The future
            <br />
            belongs to the
            <br />
            <em>curious.</em>
          </h1>

          <div className="hero-bottom">
            <p>
              A place where young minds find their voice,
              discover their strengths and shape what
              comes next.
            </p>

            <Link href="/about" className="hero-discover">
              Discover Northstar
              <span><ArrowUpRight size={19} /></span>
            </Link>
          </div>
        </div>

        <div className="hero-bottom-meta">
          <span>LEARN WITH PURPOSE</span>
          <span className="hero-scroll">
            SCROLL TO EXPLORE <ArrowDown size={14} />
          </span>
          <span>EST. 2026</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section-pad">
        <div className="intro-aside" data-reveal>
          <span className="section-index">01 / OUR PHILOSOPHY</span>
          <span className="small-vertical-label">MORE THAN A SCHOOL</span>
        </div>

        <div className="intro-main">
          <p className="eyebrow" data-reveal>
            EDUCATION SHOULD OPEN DOORS
          </p>

          <h2 data-reveal>
            Not simply a place to learn.
            <br />
            <span>A place to become.</span>
          </h2>

          <div className="intro-bottom" data-reveal>
            <p>
              We believe every learner carries something remarkable.
              Our role is to create the environment, opportunities
              and support that help it come to life.
            </p>

            <Link href="/about" className="text-link">
              What makes us different <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SPIRAL / WHEEL COMPOSITION */}
      <section className="orbit-section">
        <div className="orbit-copy" data-reveal>
          <span className="section-index">02 / THE NORTHSTAR WAY</span>
          <p className="eyebrow">A WHOLE-CHILD APPROACH</p>
          <h2>
            Growth has
            <br />
            <em>many directions.</em>
          </h2>
          <p className="orbit-description">
            Academic excellence is one part of the journey.
            We nurture the confidence, creativity and character
            that help every student move forward.
          </p>
          <Link href="/about" className="text-link">
            Explore our approach <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="orbit-visual" aria-label="Six dimensions of student growth">
          <div className="orbit-wheel">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="orbit-ring orbit-ring-three" />

            {orbitItems.map((item, index) => (
              <div
                className={`orbit-label orbit-label-${index + 1}`}
                key={item}
              >
                <span>0{index + 1}</span>
                {item}
              </div>
            ))}

            <div className="orbit-center">
              <span>N</span>
              <small>THE LEARNER</small>
            </div>
          </div>
          <span className="orbit-caption">EVERYTHING CONNECTS</span>
        </div>
      </section>

      {/* VEHICLE / JOURNEY SPIRAL */}
      <section className="journey-section">
        <div className="journey-heading section-pad">
          <div data-reveal>
            <span className="section-index">03 / THE JOURNEY</span>
            <p className="eyebrow">EVERY STEP MOVES YOU FORWARD</p>
            <h2>
              A journey shaped
              <br />
              <em>around possibility.</em>
            </h2>
          </div>
          <p data-reveal>
            Every student follows a different path.
            We provide the guidance, experiences and
            opportunities to help them find their direction.
          </p>
        </div>

        <div className="vehicle-stage">
          <div className="vehicle-track">
            <div className="vehicle-orbit" />
            {[
              { number: "01", title: "Discover", text: "Ask bigger questions." },
              { number: "02", title: "Explore", text: "Try something unfamiliar." },
              { number: "03", title: "Create", text: "Turn ideas into action." },
              { number: "04", title: "Lead", text: "Make a meaningful impact." },
            ].map((step, index) => (
              <div className={`journey-stop journey-stop-${index + 1}`} key={step.number}>
                <span className="journey-number">{step.number}</span>
                <div className="journey-vehicle">
                  <div className="vehicle-window" />
                  <div className="vehicle-wheel vehicle-wheel-left" />
                  <div className="vehicle-wheel vehicle-wheel-right" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="journey-foot section-pad">
          <span>NO TWO JOURNEYS ARE THE SAME.</span>
          <span>KEEP MOVING FORWARD ↗</span>
        </div>
      </section>

      {/* INFINITE GRID */}
      <section className="infinite-section">
        <div className="infinite-heading section-pad" data-reveal>
          <div>
            <span className="section-index">04 / ENDLESS POSSIBILITIES</span>
            <p className="eyebrow">A WORLD OF OPPORTUNITY</p>
            <h2>
              Room to explore.
              <br />
              <em>Space to grow.</em>
            </h2>
          </div>
          <p>
            Learning doesn`t happen in one room or through
            one subject. It happens everywhere curiosity
            is encouraged.
          </p>
        </div>

        <div className="infinite-grid">
          <div className="infinite-tile tile-feature">
            <Image src={images.learning} alt="Student learning" fill sizes="40vw" />
            <div><span>01</span><strong>Discover new ideas</strong></div>
          </div>
          <div className="infinite-tile tile-quote">
            <Sparkles size={22} />
            <p>“Curiosity is the beginning of every great discovery.”</p>
            <span>THE NORTHSTAR MINDSET</span>
          </div>
          <div className="infinite-tile tile-library">
            <Image src={images.library} alt="School library" fill sizes="30vw" />
            <div><span>02</span><strong>Find your perspective</strong></div>
          </div>
          <div className="infinite-tile tile-green">
            <BookOpen size={28} />
            <span>LEARN</span>
            <strong>Beyond the expected.</strong>
          </div>
          <div className="infinite-tile tile-science">
            <Image src={images.science} alt="Science experiment" fill sizes="30vw" />
            <div><span>03</span><strong>Experiment freely</strong></div>
          </div>
          <div className="infinite-tile tile-orange">
            <Lightbulb size={28} />
            <span>IMAGINE</span>
            <strong>What could be possible?</strong>
          </div>
        </div>
      </section>

      {/* LIQUID / ORGANIC COMPOSITION */}
      <section className="liquid-section">
        <div className="liquid-image">
          <Image
            src={images.art}
            alt="Creative arts and student expression"
            fill
            sizes="50vw"
          />
        </div>
        <div className="liquid-shape" />
        <div className="liquid-content" data-reveal>
          <span className="section-index">05 / BEYOND THE CLASSROOM</span>
          <p className="eyebrow">LEARNING TAKES MANY FORMS</p>
          <h2>
            Different minds.
            <br />
            <em>Infinite ways to shine.</em>
          </h2>
          <p>
            From the arts to athletics, from teamwork to
            independent discovery, students are encouraged
            to explore what makes them unique.
          </p>
          <Link href="/student-life" className="light-link">
            Experience student life <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ISOMETRIC / SPATIAL COMPOSITION */}
      <section className="spatial-section section-pad">
        <div className="spatial-heading" data-reveal>
          <span className="section-index">06 / SPACES THAT INSPIRE</span>
          <p className="eyebrow">THE NORTHSTAR ENVIRONMENT</p>
          <h2>
            Every space has
            <br />
            <em>a purpose.</em>
          </h2>
        </div>

        <div className="spatial-scene">
          <div className="spatial-floor" />
          <div className="spatial-block spatial-block-one">
            <Image src={images.classroom} alt="Learning space" fill sizes="30vw" />
            <span>LEARNING</span>
          </div>
          <div className="spatial-block spatial-block-two">
            <Image src={images.library} alt="Library space" fill sizes="30vw" />
            <span>DISCOVERY</span>
          </div>
          <div className="spatial-block spatial-block-three">
            <Image src={images.sports} alt="Sports and activity space" fill sizes="30vw" />
            <span>PLAY</span>
          </div>
          <div className="spatial-marker spatial-marker-one">01</div>
          <div className="spatial-marker spatial-marker-two">02</div>
          <div className="spatial-marker spatial-marker-three">03</div>
        </div>

        <div className="spatial-footer" data-reveal>
          <p>
            Thoughtfully designed spaces encourage collaboration,
            focus, exploration and a sense of belonging.
          </p>
          <Link href="/facilities" className="text-link">
            Explore our facilities <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* ACADEMICS */}
      <section className="academics-section section-pad">
        <div className="academics-heading" data-reveal>
          <div>
            <span className="section-index">07 / ACADEMIC EXPERIENCE</span>
            <p className="eyebrow">BUILT AROUND THE LEARNER</p>
            <h2>
              Knowledge with
              <br />
              <em>purpose.</em>
            </h2>
          </div>
          <Link href="/academics" className="text-link">
            Discover academics <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="academic-feature">
          <div className="academic-image">
            <Image
              src={images.science}
              alt="Students exploring science"
              fill
              sizes="55vw"
            />
          </div>
          <div className="academic-copy" data-reveal>
            <span className="academic-number">01 — THINK DEEPLY</span>
            <GraduationCap size={27} strokeWidth={1.4} />
            <h3>Learning that connects ideas to the real world.</h3>
            <p>
              We encourage students to question, investigate,
              collaborate and apply their knowledge beyond
              the textbook.
            </p>
            <Link href="/academics" className="circle-link" aria-label="Explore academic programmes">
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>

        <div className="academic-principles">
          <div data-reveal>
            <BookOpen size={22} />
            <span>01</span>
            <h3>Strong foundations</h3>
            <p>Building knowledge, confidence and essential skills.</p>
          </div>
          <div data-reveal>
            <Compass size={22} />
            <span>02</span>
            <h3>Curious thinking</h3>
            <p>Making room for questions, ideas and exploration.</p>
          </div>
          <div data-reveal>
            <Users size={22} />
            <span>03</span>
            <h3>Shared growth</h3>
            <p>Learning through collaboration and community.</p>
          </div>
        </div>
      </section>

      {/* PORTAL COMPOSITION */}
      <section className="portal-section">
        <div className="portal-image-wrap">
          <Image
            src={images.campus}
            alt="A welcoming school campus"
            fill
            sizes="100vw"
            className="portal-image"
          />
        </div>
        <div className="portal-overlay" />
        <div className="portal-frame" />
        <div className="portal-content" data-reveal>
          <span className="section-index">08 / YOUR NEXT CHAPTER</span>
          <p className="eyebrow">STEP INTO SOMETHING MORE</p>
          <h2>
            Your story
            <br />
            starts <em>here.</em>
          </h2>
          <p>
            Discover a community that sees potential,
            encourages ambition and makes room for
            every student`s next chapter.
          </p>
          <Link href="/admissions" className="portal-cta">
            Explore admissions <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* STUDENT LIFE */}
      <section className="student-life-section section-pad">
        <div className="student-life-heading" data-reveal>
          <div>
            <span className="section-index">09 / LIFE AT NORTHSTAR</span>
            <p className="eyebrow">LEARNING IS ONLY THE BEGINNING</p>
            <h2>
              Find your people.
              <br />
              <em>Find your thing.</em>
            </h2>
          </div>
          <Link href="/student-life" className="text-link">
            Explore campus life <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="life-gallery">
          <Link href="/student-life" className="life-card life-card-large">
            <Image src={images.sports} alt="Students participating in sports" fill sizes="55vw" />
            <div className="life-card-overlay" />
            <span>01 / MOVE</span>
            <h3>Find your energy.</h3>
            <ArrowUpRight size={22} />
          </Link>
          <Link href="/student-life" className="life-card life-card-small">
            <Image src={images.art} alt="Creative arts" fill sizes="35vw" />
            <div className="life-card-overlay" />
            <span>02 / CREATE</span>
            <h3>Make something meaningful.</h3>
            <ArrowUpRight size={22} />
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="news-section section-pad">
        <div className="news-heading" data-reveal>
          <div>
            <span className="section-index">10 / THE LATEST</span>
            <p className="eyebrow">HAPPENING AT NORTHSTAR</p>
            <h2>
              Stories worth
              <br />
              <em>sharing.</em>
            </h2>
          </div>
          <Link href="/news" className="text-link">
            All news & events <ArrowUpRight size={17} />
          </Link>
        </div>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article className="news-card" key={item.title} data-reveal>
              <Link href="/news" className="news-image">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span className="news-image-arrow"><ArrowUpRight size={18} /></span>
              </Link>
              <div className="news-meta">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3>
                <Link href="/news">{item.title}</Link>
              </h3>
              <span className="news-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="final-cta section-pad">
        <div className="final-cta-orb" />
        <div className="final-cta-content" data-reveal>
          <span className="section-index">THE NEXT CHAPTER IS YOURS</span>
          <p className="eyebrow">COME AND SEE WHAT`S POSSIBLE</p>
          <h2>
            There is a place
            <br />
            for <em>you here.</em>
          </h2>
          <div className="final-cta-bottom">
            <p>
              Take the first step. Get to know our community
              and discover what learning can become.
            </p>
            <Link href="/admissions" className="final-cta-link">
              Begin your journey <ArrowRight size={19} />
            </Link>
          </div>
        </div>
        <span className="final-cta-side">NORTHSTAR ACADEMY — 2026</span>
      </section>
    </div>
  );
}