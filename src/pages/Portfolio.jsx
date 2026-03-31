import { lazy, useMemo, useState } from "react";
import banner from "../assets/videos/services.mp4";
import { allProjects } from "../content/constant";
import ArrowButton from "../components/common/ArrowButton";
import SubHeading from "../components/common/SubHeading";

const PageBanner = lazy(() => import("../components/website/PageBanner"));
const WhyWorkWithUs = lazy(() => import("../components/common/WhyWorkWithUs"));

const FILTERS = [
  { key: "all", label: "All" },
  { key: "Web Development", label: "Web" },
  { key: "App Development", label: "App" },
  { key: "AI Development", label: "AI" },
];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return allProjects;
    return allProjects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="Portfolio"
        links={[{ title: "Home", url: "/" }, { title: "Portfolio" }]}
      />
      <section className="wrapper py-10 md:py-14 space-y-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-3">
          <SubHeading heading="Our Work" className="text-white" />
          <h2 className="text2">Projects across web, mobile, and AI</h2>
          <p className="desc text-white/70">
            Explore live builds we&apos;ve shipped—filter by discipline to match
            what you&apos;re planning next.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3"
          role="tablist"
          aria-label="Filter portfolio by category"
        >
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={active === key}
              onClick={() => setActive(key)}
              className={`btn-rounded px-5 sm:px-6 transition-all duration-300 ${
                active === key
                  ? "bg-primary text-black border-primary"
                  : "bg-transparent text-white border border-white/35 hover:border-primary"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {filtered.map((item) => {
            const cardClass =
              "rounded-lg w-[calc(100%/2-1rem)] md:w-[calc(100%/3-1rem)] lg:w-[calc(100%/4-1rem)] aspect-square overflow-hidden relative group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary";
            const inner = (
              <>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/50 via-transparent to-primary/50 z-[1]" />
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="object-cover h-full w-full group-hover:scale-[135%] group-hover:rotate-[-25deg] transition-all duration-300"
                />
                <div className="group-hover:translate-y-full transition-all duration-300 p-4 absolute bottom-0 left-0 w-full bg-primary z-[2]">
                  <p className="text4 text-black text-center uppercase font-semibold font-outfit line-clamp-3">
                    {item.title}
                  </p>
                </div>
                <span className="absolute top-3 left-3 z-[2] text-[0.65rem] uppercase tracking-wide bg-black/70 text-white px-2 py-1 rounded">
                  {item.category.replace(" Development", "")}
                </span>
              </>
            );
            return item.link ? (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div key={item.id} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center desc text-white/60 py-8">
            No projects in this category yet.
          </p>
        )}

        <div className="flex justify-center pt-4">
          <ArrowButton
            to="/contact-us"
            className="border border-primary hover:bg-primary"
          >
            Start a project like these
          </ArrowButton>
        </div>
      </section>
      <WhyWorkWithUs />
    </div>
  );
};

export default Portfolio;
