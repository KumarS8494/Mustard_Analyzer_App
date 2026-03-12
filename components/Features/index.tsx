"use client";
import { motion } from "framer-motion";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container text-justify">
        
        {/* Replacement for SectionTitle: Wide, Centered, and Animated */}
        <div className="mx-auto mb-16 max-w-[1100px] text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]"
          >
            Main Features of Mustard Sans App
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base font-medium leading-relaxed text-body-color md:text-lg"
          >
            MustardSense provides an integrated, dual-stream deep learning paradigm designed to 
            bridge the gap between post-harvest mustard quality assessment and real-time field diagnostics.
          </motion.p>
        </div>

        {/* Features Grid with Staggered Entrance */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Features;