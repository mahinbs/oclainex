import banner from "../assets/videos/aboutus.mp4";
import CountUp from "react-countup";
import aboutUsImg from "../assets/images/about-us.png";
import SubHeading from "../components/common/SubHeading";
import { Link } from "react-router-dom";
import ourVisionImg from "../assets/images/our vision.png";
import ourMissionImg from "../assets/images/our mission.png";
import whyWeExistImg from "../assets/images/why we exist.png";
import OurCoreValues from "../components/website/OurCoreValues";
import { lazy } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
const PageBanner = lazy(() => import("../components/website/PageBanner"));

const AboutUs = () => {
  return (
    <div className="mt-[4.5rem]">
      <PageBanner
        banner={banner}
        title="About Us"
        links={[{ title: "Home", url: "/" }, { title: "About Us" }]}
      />
      <section className="py-14 relative min-h-screen flex items-center bg-tertiary/40">
        <div className="wrapper grid lg:grid-cols-[40%_1fr] items-center gap-10 text-grayClr z-10 relative">
          <div data-aos="fade-up" className="flex justify-start">
            <img
              loading="lazy"
              src={aboutUsImg}
              className="object-contain sm:scale-110 w-full aspect-square max-h-[60vh] lg:aspect-auto"
              alt=""
            />
          </div>
          <div className="space-y-4">
            <SubHeading heading="Who We Are" className="text-white" />
            <h2 data-aos="fade-up" className="text1 capitalize">
              Your Partner in{" "}
              <span className="text-stroke-gray text-stroke-white">
                Progress and innovation
              </span>
            </h2>
            <p data-aos="fade-up" className="desc text-white/70">
              Oclainex is a full-stack technology partner for organizations that
              need predictable delivery across <b className="text-white">AI</b>
              , <b className="text-white">mobile</b>, <b className="text-white">web</b>,{" "}
              <b className="text-white">cloud</b>, and{" "}
              <b className="text-white">data platforms</b>.
              <br />
              We pair senior practitioners with pragmatic governance—security
              reviews, documentation, and operational handover—so the software
              you launch continues to earn trust after go‑live.
            </p>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 gap-7 py-4 text-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Innovating for Tomorrow</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
                <p className="capitalize">Future-Ready Tech Solutions</p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-7"
            >
              {[
                { number: 200, suffix: "+", title: "Projects Completed" },
                { number: 150, suffix: "+", title: "Satisfied Clients" },
                { number: 2, suffix: "+", title: "Years of Experience" },
                { number: 100, suffix: "%", title: "Success Rate" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start text-center gap-2"
                >
                  <span className="text2">
                    <CountUp
                      end={item.number}
                      suffix={item.suffix}
                      enableScrollSpy
                      scrollSpyOnce
                      duration={2}
                    />
                  </span>
                  <p className="uppercase text-sm text-white/70">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F0F0] text-black">
        <div
          data-aos="fade-up"
          className="wrapper py-8 px-3 grid md:grid-cols-[45%_1fr] gap-7 md:gap-16"
        >
          <img
            loading="lazy"
            src={ourVisionImg}
            className="object-contain aspect-video h-full w-full rounded-md"
            alt=""
          />
          <div className="space-y-6">
            <SubHeading heading="Our Vision" className="text-primary" />
            <p className="desc">
              To make world‑class software delivery accessible: resilient systems,
              inclusive UX, and measurable outcomes—whether you are digitizing a
              legacy process or launching a net‑new product. Our vision is that
              every Oclainex engagement leaves teams more capable, not more
              dependent.
            </p>
            <div>
              <Link
                to="/contact"
                className="btn-fullrounded flex items-center gap-2 bg-primary text-white hover:bg-primary/80 w-fit capitalize"
              >
                get in touch <FaArrowRightLong className="mt-[.15rem]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wrapper pt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16">
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text2 text-primary">
              Our <br /> Mission
            </h3>
            <img
              loading="lazy"
              src={ourMissionImg}
              className="md:hidden block object-cover aspect-[6/4] h-fit w-full rounded-sm"
              alt="Our Vision"
            />
            <p className="desc !text-white">
              Ship software that survives real users and real regulators—through
              collaborative discovery, testable milestones, and transparent
              reporting. We invest in knowledge transfer, automation, and
              observability so your roadmap accelerates long after the initial
              launch window.
            </p>
          </div>
          <img
            loading="lazy"
            data-aos="fade-up"
            src={ourMissionImg}
            className="hidden md:block object-cover aspect-[6/4] h-full w-full rounded-xl"
            alt="Our Vision"
          />
        </div>
      </section>
      <OurCoreValues />
      <section className="pt-7 wrapper space-y-5">
        <div className="grid md:grid-cols-2 gap-7 md:gap-14">
          <div className="flex flex-col overflow-hidden rounded-xl">
            <img
              loading="lazy"
              src={whyWeExistImg}
              alt="Why we exist"
              className="aspect-[6/4] w-full object-cover h-full"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text2 text-primary">Why We Exist</h2>
            <p className="desc">
              Technology decisions compound—for better or worse. Oclainex exists
              to shorten the distance between strategy and shipping: clear
              architectural choices, honest capacity planning, and secure,
              scalable delivery. <br /> <br />
              Whether you need a customer-facing mobile experience, a
              revenue-critical web platform, IoT telemetry, or AI automation, we
              anchor
              every sprint to outcomes you can read in analytics and revenue.
            </p>
          </div>
        </div>
        <p className="desc">
          Security, craftsmanship, and client outcomes are not separate tracks—they
          are one delivery system. We document assumptions, automate repetitive
          quality checks, and rehearse incident response basics before launch.{" "}
          <br />
          Philosophy: technology should expand optionality—new markets, faster
          cycles, safer operations—without hiding complexity behind opaque
          vendors. That is why Oclainex emphasizes transferable code, open
          standards where possible, and mentoring alongside execution.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
