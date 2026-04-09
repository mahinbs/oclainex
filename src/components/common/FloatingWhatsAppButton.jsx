import { FaWhatsapp } from "react-icons/fa6";
import { companyDetails } from "../../content/constant";

const FloatingWhatsAppButton = () => {
  const digits = companyDetails.phone.replace(/\D/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(
    "Hi! I'd like to chat with Oclainex."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[9998] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black md:bottom-7 md:right-7 md:h-[3.75rem] md:w-[3.75rem]"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-[1.85rem] md:text-[2rem]" aria-hidden />
    </a>
  );
};

export default FloatingWhatsAppButton;
