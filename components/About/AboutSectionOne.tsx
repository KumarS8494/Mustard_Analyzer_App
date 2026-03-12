"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AboutSectionOne = () => {
  // State for Carousel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of images for the carousel
  const carouselImages = [
    "/images/blog/Architecture/Working_Flow.jpg",
    "/images/blog/Architecture/Agriculture_Project_NIBSM.png", // Replace with your actual second image
    // "/images/blog/blog-02.jpg", // Replace with your actual third image
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  // 2. Add the Auto-Play Effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 10000); 

    return () => clearInterval(slideInterval);
  }, [currentSlide]); 

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
{/* --- 1. CAROUSEL SECTION --- */}
          <div className="mb-16 w-full">          
            {/* FIX 1: Reduced the height to 40vh on mobile, 50vh on tablet, and 60vh on desktop. Added rounded-xl. */}
            <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden shadow-lg rounded-xl bg-gray-10 dark:bg-gray-800">
              
              <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselImages.map((src, index) => (
                  <div key={index} className="relative h-full w-full flex-shrink-0">
                    <Image
                      src={src}
                      alt={`workflow-slide-${index}`}
                      fill
                      /* FIX 2: Changed from object-cover to object-contain so nothing gets cut off */
                      className="object-contain p-2" 
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-primary"
              >
                &#10094;
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-primary"
              >
                &#10095;
              </button>
              
              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "w-8 bg-primary" : "bg-black/20 dark:bg-white/60 hover:bg-black/50 dark:hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 text-justify">
            
            {/* Box 1: Background */}
            <div className="group w-full rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-dark sm:p-8">
              <h3 className="text-2xl font-bold text-black transition-colors group-hover:text-primary dark:text-white">
                Background
              </h3>
              <p className="mt-4 text-base leading-relaxed text-body-color">
                A prompt and precise evaluation of disease severity in mustard crops, specifically regarding powdery mildew and aphid infestations, is essential for efficient crop protection and precision agriculture. Nonetheless, real-world situations present considerable diversity in illumination, background intricacy, and symptom distribution, complicating precise severity classification. Consequently, resilient and comprehensible automated systems are essential for facilitating extensive agricultural monitoring and decision-making.
              </p>
            </div>

            {/* Box 2: Objectives */}
            <div className="group w-full rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-dark sm:p-8">
              <h3 className="text-2xl font-bold text-black transition-colors group-hover:text-primary dark:text-white">
                Objectives
              </h3>
              <p className="mt-4 text-base leading-relaxed text-body-color">
               This research seeks to establish an explainable deep learning framework for the precise classification of powdery mildew and aphid infestation severity in mustard crops utilizing real-field imagery. The goal is to attain superior classification accuracy while maintaining model interpretability and suitability for field deployment. 
              </p>
            </div>

            {/* Box 3: Methods */}
            <div className="group w-full rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary dark:hover:bg-dark sm:p-8">
              <h3 className="text-2xl font-bold text-black transition-colors group-hover:text-primary dark:text-white">
                Methods
              </h3>
              <p className="mt-4 text-base leading-relaxed text-body-color">
                Two multi-class datasets were created in both natural field and laboratory settings, comprising five severity levels for powdery mildew and six severity levels for aphid infestation. A lightweight attention-based deep neural network was developed, integrating an efficient inverted residual backbone with Attention-Guided Squeeze-and-Excitation (AGSE) modules, multi-head self-attention mechanisms, and generalized mean pooling to improve feature discrimination in complex environmental conditions. The robustness of the model was assessed utilizing five independently trained models on a predetermined test set. Performance metrics encompassed accuracy and area under the curve (AUC). Ablation studies were performed to evaluate the impact of attention modules and channel recalibration processes. To improve interpretability, Grad-CAM++ visualization was utilized to emphasize regions affected by illness and pests without necessitating specific object recognition. 
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;