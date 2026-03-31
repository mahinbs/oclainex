import React from "react";
import {
  aiDevelopmentPortfolio,
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../../content/constant";
import SubHeading from "../common/SubHeading";

const portfolioByPage = {
  web: webDevelopmentPortfolio,
  app: appDevelopmentPortfolio,
  ai: aiDevelopmentPortfolio,
};

const headlineByPage = {
  web: "Selected Web Launches",
  app: "Selected Mobile Launches",
  ai: "Selected AI Launches",
};

const Portfolio = ({ page }) => {
  const portfolio = portfolioByPage[page] ?? appDevelopmentPortfolio;
  const headline = headlineByPage[page] ?? headlineByPage.app;

  return (
    <div className="wrapper py-10 space-y-4">
      <div className="flex flex-col items-center">
        <SubHeading heading="Portfolio" className="text-white" />
        <h2 data-aos="fade-up" className="text1 text-center">
          {headline}
        </h2>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-wrap justify-center gap-4 pt-5"
      >
        {portfolio.map((item) => {
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
                <p className="text4 text-black text-center uppercase font-semibold font-outfit">
                  {item.title}
                </p>
              </div>
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
    </div>
  );
};

export default Portfolio;
