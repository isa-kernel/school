import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Newspaper,
} from "lucide-react";
import PageMotion from "@/components/sections/PageMotion";
import NewsFeed from "@/components/sections/NewsFeed";

const upcomingEvents = [
  {
    date: "15",
    month: "NOV",
    title: "Open campus experience",
    category: "SCHOOL COMMUNITY",
    description:
      "An opportunity for prospective families to discover the Northstar environment.",
  },
  {
    date: "22",
    month: "NOV",
    title: "Creative showcase",
    category: "STUDENT LIFE",
    description:
      "A celebration of student expression, creativity and collaborative work.",
  },
  {
    date: "05",
    month: "DEC",
    title: "End-of-term celebration",
    category: "SCHOOL COMMUNITY",
    description:
      "Recognising the effort, growth and achievements of the school community.",
  },
];

export default function NewsPage() {
  return (
    <PageMotion>
      <main className="news-page">
        <section className="news-hero">
          <div className="news-hero-image" data-page-parallax />
          <div className="news-hero-overlay" />
          <div className="news-hero-content">
            <span className="section-index">NORTHSTAR / 06 — JOURNAL</span>
            <p className="eyebrow">THE LATEST FROM NORTHSTAR</p>
            <h1>
              Stories
              <br />
              worth
              <br />
              <em>sharing.</em>
            </h1>
            <p>
              Discover the ideas, experiences, events and everyday moments
              happening across our learning community.
            </p>
            <a href="#latest-stories" className="news-hero-link">
              READ THE JOURNAL <ArrowDown size={15} />
            </a>
          </div>
          <span className="news-hero-caption">THE NORTHSTAR JOURNAL / VOL. 01</span>
        </section>

        <section className="news-intro section-pad">
          <div className="news-intro-aside page-reveal">
            <span className="section-index">01 / THE JOURNAL</span>
            <Newspaper size={25} strokeWidth={1.2} />
          </div>
          <div className="news-intro-copy page-reveal">
            <p className="eyebrow">A WINDOW INTO OUR COMMUNITY</p>
            <h2>
              Every day has a story. Here are{" "}
              <em>some of ours.</em>
            </h2>
            <p>
              From classroom discoveries to community events, this is where
              we share the moments that make Northstar what it is.
            </p>
          </div>
        </section>

        <section id="latest-stories" className="news-journal-section section-pad">
          <div className="news-journal-heading page-reveal">
            <span className="section-index">02 / LATEST STORIES</span>
            <div>
              <p className="eyebrow">READ, EXPLORE, DISCOVER</p>
              <h2>
                The school
                <br />
                <em>journal.</em>
              </h2>
            </div>
            <p>
              Browse updates and stories from across academics, student life
              and the wider school community.
            </p>
          </div>

          <NewsFeed />
        </section>

        <section className="events-section">
          <div className="events-heading section-pad page-reveal">
            <span className="section-index">03 / WHAT`S COMING UP</span>
            <div>
              <p className="eyebrow">SAVE A DATE</p>
              <h2>
                Moments
                <br />
                <em>ahead.</em>
              </h2>
            </div>
            <p>
              A look at some of the events and experiences on our illustrative
              school calendar.
            </p>
          </div>

          <div className="events-list section-pad">
            {upcomingEvents.map((event, index) => (
              <article className="event-row page-reveal" key={event.title}>
                <div className="event-date">
                  <strong>{event.date}</strong>
                  <span>{event.month}</span>
                </div>
                <div className="event-copy">
                  <span className="eyebrow">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <span className="event-index">
                  EVENT / 0{index + 1}
                </span>
                <CalendarDays size={20} strokeWidth={1.3} />
              </article>
            ))}
          </div>
        </section>

        <section className="news-subscribe section-pad">
          <div className="news-subscribe-mark page-reveal">
            <Clock3 size={35} strokeWidth={1} />
            <span>STAY IN THE LOOP</span>
          </div>
          <div className="news-subscribe-copy page-reveal">
            <p className="eyebrow">MORE FROM OUR COMMUNITY</p>
            <h2>
              Keep up with
              <br />
              <em>what matters.</em>
            </h2>
            <p>
              Have a question about an event, school update or story? Get in
              touch with our team.
            </p>
            <Link href="/contact" className="text-link">
              CONTACT NORTHSTAR <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </PageMotion>
  );
}