import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata = {
  title: "KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions",
  description: "AI-powered mustard crop health monitoring and disease prediction system by ACAI Amity University and ICAR-NIBSM",
  openGraph: {
    title: "KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions",
    description: "AI-powered mustard crop health monitoring and disease prediction",
    url: "https://krishaksakha.netlify.app/",
    siteName: "KrishakSakha",
    images: [
      {
        url: "https://krishaksakha.netlify.app/images/logo/acai_logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "KrishakSakha Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KrishakSakha - AI-Powered Analytics",
    description: "AI-powered mustard crop health monitoring",
    images: ["https://krishaksakha.netlify.app/images/logo/acai_logo-removebg-preview.png"],
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands />
      <Features />
      <Video />
      
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
