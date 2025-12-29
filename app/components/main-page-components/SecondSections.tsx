import { features } from "./websites-contents/CredibilitySections";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

// Credibilty sections
const CredibilitySection = () => {
  // Animation controls for each card
  const controlsArray = features.map(() => useAnimation());

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".credibility-card");
      cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          controlsArray[idx].start({ opacity: 1, y: 0, scale: 1 });
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsArray]);

  return (
    <section className="min-h-screen bg-slate-100 bg-linear-to-r py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Built for Founders Who Want
            <span className="block mt-2 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Speed & Scale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're selling confidence, not features. Here's why the best founders
            trust us with their vision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature: any, index: any) => (
            <motion.div
              key={index}
              className="group relative credibility-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={controlsArray[index]}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease:"easeIn",
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-500 hover:border-gray-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Glow */}
                <div
                  className={`absolute inset-0 bg-linear-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-r ${feature.color} mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-r ${feature.color} blur-xl opacity-20`}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
