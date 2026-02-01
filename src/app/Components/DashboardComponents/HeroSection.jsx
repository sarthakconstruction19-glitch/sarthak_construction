import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { EXPERIENCE_YEARS, YEAR_OF_ESTABLISHMENT } from "../../../../Constans";

function HeroSection() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <Image
        src="/bg-image.jpeg"
        alt="background_img"
        fill
        priority
        className="object-cover"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 grid min-h-[80vh] grid-cols-1 items-center px-6 lg:min-h-screen lg:grid-cols-2">
        <div id="home" className="text-center text-gray-200 uppercase">
          <motion.h1
            initial={{ opacity: 0, translateY: "-50px" }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="font-orbitron lg:text-heading-lg-1 text-heading-sm-1 md:text-heading-lg-1 mb-4 font-light text-shadow-amber-200"
          >
            Experience luxury living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="lg:text-para-lg-2 md:text-para-tab-2 text-para-sm-2 mx-auto max-w-2xl text-lg font-extralight"
          >
            Vastu-compliant layouts, modern amenities, and timely possession.
          </motion.p>
          <motion.div
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="mt-5 border-[.1px] border-t border-white"
          />
        </div>
      </div>

      <div
        ref={ref}
        className={`${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"} relative left-0 z-10 mx-5 my-2 w-fit bg-[#0000003e] p-6 text-gray-300 backdrop-blur-xs transition-transform duration-700 lg:text-start`}
      >
        {/* Why us */}
        <div id="whyus" className="leading-10">
          <h1 className="md:text-heading-tab-2 lg:text-heading-lg-2 text-heading-sm-2 mb-5 text-gray-200 uppercase">
            Why us
          </h1>

          <ul className="md:text-para-tab-2 text-para-sm-2 lg:text-para-lg-2 list-disc font-extralight text-[#FACC15] uppercase">
            <span>
              Building Gwalior&apos;s Future Since {YEAR_OF_ESTABLISHMENT}{" "}
            </span>
            <li className=""> At Sarthak Constructions</li>
            <li>
              We don&apos;t just build houses; we construct homes where memories
              are made
            </li>
            <li>
              Over {EXPERIENCE_YEARS}+ years of experience in the Gwalior real
              estate market
            </li>
            <li>Committed to using Grade-A materials</li>
            <li>Delivering transparent deals with zero hidden costs.</li>
          </ul>
        </div>

        {/* icon  */}
        <div></div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
