"use client"; // Required for Framer Motion in Next.js App Router

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import { motion } from "framer-motion";

const Brands = () => {
  return (
    <section className="pt-5">
      <div className="container-fluid">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              
             {/* Animated Brands */}
              <div className="flex flex-wrap items-center justify-center ">
                {brandsData.map((brand, index) => (
                  <SingleBrand key={brand.id} brand={brand} index={index} />
                ))}
              </div>
                            {/* Animated Heading */}
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-black dark:text-white mr-6 text-center md:text-left"
              >
               In collaboration with the ICAR-National Institute of Biotic Stress Management.
              </motion.h1>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleBrand = ({ brand, index }: { brand: Brand; index: number }) => {
  const { href, image, name } = brand;

  return (
    <motion.div
      // Entrance: Pops up with a tiny delay based on its list position
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1, 
        type: "spring", 
        stiffness: 100 
      }}
      viewport={{ once: true }}
      // Hover: Lifts up and glows slightly
      whileHover={{ y: -8, scale: 1.05 }}
      className="mx-3 flex w-full items-center justify-center py-[15px] sm:mx-4 lg:max-w-[150px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]"
    >
      <a href={href} className="relative h-20 w-60"> 
        <Image src={image} alt={name} fill className="object-contain h-20 w-60 lg:max-w-[300px]" />
      </a>

    </motion.div>
  );
};

export default Brands;