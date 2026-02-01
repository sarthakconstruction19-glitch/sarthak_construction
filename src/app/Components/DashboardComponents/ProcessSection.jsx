import { FileText, Key, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: 1,
    title: "Site Experience",
    desc: "Visit the site, check materials, and meet our engineers personally.",
    icon: <MapPin className="h-8 w-8 text-white" />,
  },
  {
    id: 2,
    title: "Transparent Deal",
    desc: "RERA-compliant agreement with zero hidden charges.",
    icon: <FileText className="h-8 w-8 text-white" />,
  },
  {
    id: 3,
    title: "Live Updates",
    desc: "Get weekly video updates on WhatsApp. Watch your home take shape.",
    icon: <Smartphone className="h-8 w-8 text-white" />,
  },
  {
    id: 4,
    title: "Timely Delivery",
    desc: "We adhere to strict timelines so you can plan your Griha Pravesh.",
    icon: <Key className="h-8 w-8 text-white" />,
  },
];

export default function ProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={`bg-linear-to-b from-[#000000] to-[#120069] px-6 py-20`}
    >
      <div
        className={`${inView ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"} mx-auto transition-transform duration-700`}
      >
        <div className="mb-16 text-center">
          <h2 className="md:text-heading-tab-3 text-heading-sm-4 lg:text-heading-lg-3 text-white">
            Your Journey to a <span className="text-gold">Dream Home</span>
          </h2>
          <p className="text-text-muted mt-4">
            We’ve simplified the construction process into 4 transparent steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative flex flex-col items-center text-center"
            >
              <span className="group-hover:text-gold/20 absolute -top-6 hidden font-bold text-gray-100 opacity-30 transition-colors select-none lg:block lg:text-9xl">
                {step.id}
              </span>

              {/* Icon Circle */}
              <div className="group-hover:bg-gold relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-trust relative z-10 text-xl font-bold">
                {step.title}
              </h3>
              <p className="text-text-muted relative z-10 mt-2 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-center gap-6">
        <h2 className="md:text-heading-tab-3 text-heading-sm-4 lg:text-heading-lg-3 text-white">
          Why to invest in <span className="text-gold">REAL ESTATE</span>
        </h2>
        <h1 className="text-heading-lg-3 font-ubuntu text-white uppercase"></h1>
        <div className="grid grid-cols-1 text-white shadow-md shadow-black md:p-2 lg:grid-cols-2">
          <Image
            src={"/licensed-image.jfif"}
            className="mx-auto"
            width={700}
            height={100}
            alt="Real estate"
          />
          <div className="mt-6 cursor-default *:hover:bg-black lg:mt-0 lg:shadow-xl">
            <p className="p-3 md:p-6">
              <span className="text-heading-sm-4 md:text-heading-tab-4 lg:text-heading-lg-4">
                Beat Inflation
              </span>
              <p className="text-para-sm-2 md:text-para-tab-2 lg:text-para-lg-2 text-gray-400">
                While cash loses value over time, real estate is a tangible
                asset that appreciates. Historically, property prices in
                developing urban hubs have consistently outperformed inflation
                rates, securing your purchasing power for the future.
              </p>
            </p>
            <p className="p-3 md:p-6">
              <span className="text-heading-sm-4 md:text-heading-tab-4 lg:text-heading-lg-4">
                Guaranteed Passive Income
              </span>
              <p className="text-para-sm-2 md:text-para-tab-2 lg:text-para-lg-2 text-gray-400">
                Unlike gold or stocks, a property doesn&apos;t just sit there;
                it pays you back. With rising demand for rental housing in smart
                cities, you can generate a steady, monthly rental income that
                grows every year.
              </p>
            </p>
            <p className="p-3 md:p-6">
              <span className="text-heading-sm-4 md:text-heading-tab-4 lg:text-heading-lg-4">
                Save While You Invest
              </span>
              <p className="text-para-sm-2 md:text-para-tab-2 lg:text-para-lg-2 text-gray-400">
                Smart investors know the power of Section 24 and 80C. Avail
                significant tax deductions on your home loan interest and
                principal repayment, effectively lowering the actual cost of
                your property purchase.
              </p>
            </p>
            <p className="p-3 md:p-6">
              <span className="text-heading-sm-4 md:text-heading-tab-4 lg:text-heading-lg-4">
                Stability & Control
              </span>
              <p className="text-para-sm-2 md:text-para-tab-2 lg:text-para-lg-2 text-gray-400">
                The stock market can fluctuate wildly in a single day. Real
                estate offers stability. It is a physical asset you control,
                immune to the daily volatility of digital trading markets.
              </p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
