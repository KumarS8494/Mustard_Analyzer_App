"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Suman Kumar",
    designation: "Project Research Scientist, Amity Centre for Artificial Intelligence (ACAI), Amity University, Noida.",
    content: "",
    image: "/images/testimonials/sk_profile.jpeg",
    star: 5,
  },
  {
    id: 2,
    name: "Dr. Pankaj Sharma",
    designation: "Joint Director, ICAR-National Institute of Biotic Stress Management, Chhattisgarh.",
    content: "",
    image: "/images/testimonials/Dr-Pankaj-Sharma-1.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Dr. Rakesh Chandra Joshi",
    designation: "Assistant Professor, Amity Centre for Artificial Intelligence (ACAI), Amity University, Noida.",
    content: "",
    image: "/images/testimonials/Rakesh_Chandra_Joshi.jpg",
    star: 5,
  },
  {
    id: 4,
    name: "Dr. Malay Kishore Dutta",
    designation: "Professor, Amity Centre for Artificial Intelligence (ACAI), Amity University, Noida.",
    content: "",
    image: "/images/testimonials/director-pic.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      
      <div className="container">
        <SectionTitle
          title="Our Team Members"
          paragraph="Meet the researchers and experts leading the MustardSense initiative at ACAI (Amity University) & ICAR-National Institute of Biotic Stress Management."
          center
        />

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-10"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-[#1D2144] rounded-lg shadow-lg p-4 h-full">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background SVG */}
      <div className="absolute right-0 top-5 z-[-1]">
        <svg width="238" height="531" viewBox="0 0 238 531" fill="none">
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
};

export default Testimonials;