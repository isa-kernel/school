"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: "01",
    category: "COMMUNITY",
    date: "12 OCT 2026",
    title: "Building a community where every learner belongs",
    excerpt:
      "A closer look at the people, shared experiences and values that shape our school community.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: "02",
    category: "ACADEMICS",
    date: "06 OCT 2026",
    title: "Learning through curiosity and discovery",
    excerpt:
      "Why asking questions, exploring ideas and learning by doing matter.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
  {
    id: "03",
    category: "STUDENT LIFE",
    date: "28 SEP 2026",
    title: "The value of creativity beyond the classroom",
    excerpt:
      "Creative activities give students new ways to express themselves and collaborate.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
  {
    id: "04",
    category: "EVENTS",
    date: "18 SEP 2026",
    title: "A celebration of talent, teamwork and possibility",
    excerpt:
      "Celebrating the energy and commitment students bring to shared experiences.",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
  {
    id: "05",
    category: "ACADEMICS",
    date: "09 SEP 2026",
    title: "Creating space for new ideas in science",
    excerpt:
      "Exploration and practical investigation help turn questions into understanding.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
  {
    id: "06",
    category: "COMMUNITY",
    date: "01 SEP 2026",
    title: "Small moments that make a school feel like home",
    excerpt:
      "The everyday interactions that build trust, friendship and belonging.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    featured: false,
  },
];

const categories = ["ALL", "ACADEMICS", "STUDENT LIFE", "COMMUNITY", "EVENTS"];

export default function NewsFeed() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredArticles = useMemo(
    () =>
      activeCategory === "ALL"
        ? articles
        : articles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="news-feed">
      <div className="news-filter" aria-label="Filter news by category">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? "active" : ""}
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="news-feed-grid" aria-live="polite">
        {filteredArticles.map((article, index) => (
          <article
            className={`news-feed-card ${index === 0 ? "news-feed-card-featured" : ""}`}
            key={article.id}
          >
            <Link
              href="/contact"
              className="news-feed-image"
              aria-label={`Enquire about: ${article.title}`}
            >
              <div
                className="news-feed-photo"
                style={{ backgroundImage: `url("${article.image}")` }}
              />
              <span className="news-feed-image-arrow">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <div className="news-feed-meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
            </div>

            <h3>
              <Link href="/contact">{article.title}</Link>
            </h3>
            <p>{article.excerpt}</p>
            <span className="news-feed-number">STORY / {article.id}</span>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <p className="news-empty">No stories found in this category.</p>
      )}

      <div className="news-feed-footer">
        <span>
          SHOWING {filteredArticles.length.toString().padStart(2, "0")} STORIES
        </span>
        <span>THE NORTHSTAR JOURNAL</span>
      </div>
    </div>
  );
}