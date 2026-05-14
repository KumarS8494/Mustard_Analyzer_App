"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import Head from "next/head";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <title>KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions</title>
        <meta name="description" content="AI-powered mustard crop health monitoring and disease prediction system by ACAI Amity University and ICAR-NIBSM" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://krishaksakha.netlify.app/" />
        <meta property="og:title" content="KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions" />
        <meta property="og:description" content="AI-powered mustard crop health monitoring and disease prediction" />
        <meta property="og:image" content="https://krishaksakha.netlify.app/images/logo/acai_logo-removebg-preview.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KrishakSakha - AI-Powered Analytics" />
        <meta name="twitter:description" content="AI-powered mustard crop health monitoring" />
        <meta name="twitter:image" content="https://krishaksakha.netlify.app/images/logo/acai_logo-removebg-preview.png" />
      </Head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
