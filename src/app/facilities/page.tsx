import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Dumbbell,
  FlaskConical,
  Leaf,
  Music2,
  Palette,
  Presentation,
  Utensils,
} from "lucide-react";
import PageMotion from "@/components/sections/PageMotion";

const spaces = [
  {
    number: "01",
    title: "Learning studios",
    description:
      "Flexible learning spaces designed for discussion, collaboration and focused study.",
    icon: Presentation,
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    position: "learning",
  },
  {
    number: "02",
    title: "Science laboratories",
    description:
      "Spaces for experimentation, investigation and practical discovery.",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    position: "science",
  },
  {
    number: "03",
    title: "Library & reading",
    description:
      "A welcoming environment for independent reading, research and imagination.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=85",
    position: "library",
  },
  {
    number: "04",
    title: "Sports & recreation",
    description:
      "Room to move, compete, play and develop confidence through activity.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85",
    position: "sports",
  },
  {
    number: "05",
    title: "Creative arts",
    description:
      "Places for music, expression, performance and creative exploration.",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    position: "arts",
  },
  {
    number: "06",
    title: "Outdoor spaces",
    description:
      "Outdoor environments that encourage movement, connection and fresh thinking.",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    position: "outdoor",
  },
];

export default function FacilitiesPage() {
  return (
    <PageMotion>
      <main className="facilities-page">
        <section className="facilities-hero">
          <div className="facilities-hero-image" data-page-parallax />
          <div className="facilities-hero-overlay" />
          <div className="facilities-hero-content">
            <span className="section-index">NORTHSTAR / 04 — CAMPUS</span>
            <p className="eyebrow">SPACE TO THINK. ROOM TO GROW.</p>
            <h1>
              Beyond
              <br />
              the <em>classroom.</em>
            </h1>
            <p>
              Explore the spaces that support curiosity, creativity,
              collaboration and the everyday experience of learning.
            </p>
            <a href="#campus-spaces" className="facilities-hero-link">
              EXPLORE THE CAMPUS <ArrowDown size={15} />
            </a>
          </div>
          <span className="facilities-hero-caption">A CAMPUS BUILT FOR POSSIBILITY</span>
        </section>

        <section className="facilities-intro section-pad">
          <span className="section-index page-reveal">01 / THE ENVIRONMENT</span>
          <div className="facilities-intro-copy page-reveal">
            <p className="eyebrow">EVERY SPACE HAS A PURPOSE</p>
            <h2>
              Learning doesn`t happen in one{" "}
              <em>place.</em>
            </h2>
            <p>
              The environment around a student can shape how they think,
              interact and discover. We believe learning spaces should invite
              exploration and make room for different ways of growing.
            </p>
          </div>
        </section>

        <section className="campus-map-section">
          <div className="campus-map-heading section-pad page-reveal">
            <span className="section-index">02 / CAMPUS EXPLORER</span>
            <div>
              <p className="eyebrow">TAKE A CLOSER LOOK</p>
              <h2>
                A campus of
                <br />
                <em>possibilities.</em>
              </h2>
            </div>
            <p>
              Explore a selection of spaces and discover how each supports
              the wider learning experience.
            </p>
          </div>

          <div className="campus-explorer">
            <div className="campus-explorer-scene">
              <div className="campus-ground" />
              <div className="campus-building campus-building-main">
                <span>LEARNING CENTRE</span>
              </div>
              <div className="campus-building campus-building-lab">
                <span>SCIENCE</span>
              </div>
              <div className="campus-building campus-building-library">
                <span>LIBRARY</span>
              </div>
              <div className="campus-building campus-building-sports">
                <span>SPORTS</span>
              </div>
              <div className="campus-green-space" />
              <div className="campus-path" />
              <span className="campus-pin campus-pin-one">01</span>
              <span className="campus-pin campus-pin-two">02</span>
              <span className="campus-pin campus-pin-three">03</span>
              <span className="campus-pin campus-pin-four">04</span>
              <span className="campus-compass">N ↑</span>
            </div>

            <div className="campus-map-legend">
              <span><i className="legend-building" /> LEARNING SPACES</span>
              <span><i className="legend-green" /> OUTDOOR AREAS</span>
              <span><i className="legend-path" /> CAMPUS PATHWAYS</span>
              <small>ILLUSTRATIVE CAMPUS CONCEPT</small>
            </div>
          </div>
        </section>

        <section id="campus-spaces" className="facility-spaces section-pad">
          <div className="facility-spaces-heading page-reveal">
            <span className="section-index">03 / THE SPACES</span>
            <p className="eyebrow">DESIGNED AROUND LEARNING</p>
            <h2>
              Places that
              <br />
              <em>inspire more.</em>
            </h2>
          </div>

          <div className="facility-space-list">
            {spaces.map((space) => {
              const Icon = space.icon;

              return (
                <article
                  className={`facility-space facility-space-${space.position} page-reveal`}
                  key={space.number}
                >
                  <div className="facility-space-image">
                    <div
                      className="facility-space-photo"
                      style={{ backgroundImage: `url("${space.image}")` }}
                    />
                    <span className="facility-space-number">{space.number}</span>
                  </div>

                  <div className="facility-space-copy">
                    <div className="facility-space-icon"><Icon size={22} /></div>
                    <span className="eyebrow">CAMPUS SPACE / {space.number}</span>
                    <h3>{space.title}</h3>
                    <p>{space.description}</p>
                    <span className="facility-space-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="facilities-detail-band">
          <div className="facilities-detail-image" data-page-parallax />
          <div className="facilities-detail-overlay" />
          <div className="facilities-detail-content section-pad page-reveal">
            <span className="section-index">04 / EVERYDAY EXPERIENCE</span>
            <p className="eyebrow">THE DETAILS MATTER</p>
            <h2>
              Spaces that
              <br />
              make room
              <br />
              for <em>everyone.</em>
            </h2>
            <p>
              From places to eat and gather to areas for music, movement and
              quiet reflection, a school campus should support the whole
              student experience.
            </p>
          </div>
        </section>

        <section className="facilities-amenities section-pad">
          <div className="facilities-amenities-heading page-reveal">
            <span className="section-index">05 / BEYOND THE LESSON</span>
            <h2>
              More ways
              <br />
              to <em>belong.</em>
            </h2>
          </div>

          <div className="amenities-grid">
            <div className="amenity-item page-reveal">
              <Utensils size={24} />
              <h3>Dining spaces</h3>
              <p>Spaces for students to gather, recharge and connect.</p>
            </div>
            <div className="amenity-item page-reveal">
              <Music2 size={24} />
              <h3>Performance spaces</h3>
              <p>Places for expression, music, presentations and celebration.</p>
            </div>
            <div className="amenity-item page-reveal">
              <Leaf size={24} />
              <h3>Outdoor learning</h3>
              <p>Opportunities to explore, observe and learn beyond four walls.</p>
            </div>
          </div>
        </section>

        <section className="facilities-cta section-pad">
          <span className="section-index">06 / SEE IT FOR YOURSELF</span>
          <div className="facilities-cta-copy page-reveal">
            <p className="eyebrow">COME EXPERIENCE NORTHSTAR</p>
            <h2>
              Some things
              <br />
              are better
              <br />
              <em>experienced.</em>
            </h2>
            <Link href="/contact" className="portal-cta">
              ARRANGE A VISIT <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    </PageMotion>
  );
}