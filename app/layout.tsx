"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import DefaultSeo from 'next-seo';
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
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <DefaultSeo
          title="KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions"
          description="AI-powered mustard crop health monitoring and disease prediction system by ACAI Amity University and ICAR-NIBSM"
          canonical="https://krishaksakha.netlify.app"
          openGraph={{
            type: 'website',
            url: 'https://krishaksakha.netlify.app',
            title: 'KrishakSakha - AI-Powered Analytics for Smarter Farmer Decisions',
            description: 'AI-powered mustard crop health monitoring and disease prediction',
            images: [
              {
                url: 'https://krishaksakha.netlify.app/images/logo/acai_logo-removebg-preview.png',
                width: 1200,
                height: 630,
                alt: 'KrishakSakha Logo',
              },
            ],
            siteName: 'KrishakSakha',
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />
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
