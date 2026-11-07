import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <section className="foundation-screen">
      <div className="foundation-topline">
        <span>AN EDUCATION FOR TOMORROW</span>
        <span>EST. 2026 — YOUR JOURNEY STARTS HERE</span>
      </div>

      <div className="foundation-content">
        <p className="eyebrow">
          WELCOME TO NORTHSTAR ACADEMY
        </p>

        <h1>
          A place to
          <br />
          <span>become more.</span>
        </h1>

        <div className="foundation-bottom">
          <p>
            More curious. More confident. More prepared.
            <br />
            Discover an education that moves you forward.
          </p>

          <Link href="/about" className="foundation-link">
            Discover our story <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      <div className="foundation-scroll">
        <ArrowDown size={16} />
        <span>SCROLL TO EXPLORE</span>
      </div>

      <span className="foundation-index">01 / 08</span>
    </section>
  );
}