import { companyDetails } from "../../content/constant";
import { FaArrowRightLong } from "react-icons/fa6";

/** Team collaboration — Unsplash (free to use under Unsplash License) */
const SECTION_BG_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

const HowWeBuildYourProduct = () => {
  const digits = companyDetails.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Hi! I'd like to chat about building a product with Oclainex."
  )}`;

  return (
    <section className="py-5 md:py-6">
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${SECTION_BG_IMAGE}")` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />

          <div className="relative z-[1] px-5 sm:px-8 md:px-10 py-8 sm:py-9 md:py-10 flex flex-col items-center justify-center text-center gap-5 md:gap-6">
            <div className="max-w-[52rem] w-full">
              <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-tight">
                How we build
              </h2>
              <p className="mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-white/95 font-normal leading-snug max-w-none">
                We prioritize your success, understand your unique needs, and
                deliver tailored solutions that drive your business growth.
              </p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rounded bg-primary text-black hover:brightness-75 min-w-[10rem] flex items-center gap-2 justify-center shrink-0"
            >
              Let&apos;s Chat
              <FaArrowRightLong className="text-lg shrink-0" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildYourProduct;
