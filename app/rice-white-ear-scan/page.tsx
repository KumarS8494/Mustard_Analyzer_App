import PredictionWheatEar from "@/components/Prediction/PredictionWheatEar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rice White Ear Scan | Rice Disease Detection",
  description: "AI-powered detection of white ear symptoms in rice crops.",
};

const riceWhiteEarSamples = [
  "/images/blog/Sample/rice_white_ear/1_2.jpg",
  "/images/blog/Sample/rice_white_ear/1.jpg",
  "/images/blog/Sample/rice_white_ear/3_1.jpg",
  "/images/blog/Sample/rice_white_ear/IMG_20240424_095844_Copy.jpg",
  "/images/blog/Sample/rice_white_ear/IMG_20240424_101918_2.jpg",
  "/images/blog/Sample/rice_white_ear/IMG_20240424_101918.jpg",
  "/images/blog/Sample/rice_white_ear/IMG_20240424_101953.jpg",
  "/images/blog/Sample/rice_white_ear/IMG_20240424_121602_1.jpg",
];

const RiceWhiteEarScanPage = () => {
  return (
    <PredictionWheatEar
      title={
        <>
          <span className="text-primary italic">Rice White Ear Scan:</span>{" "}
          Rice Disease Analyzer
        </>
      }
      description="Upload an image of a rice crop to detect white ear symptoms using our AI model."
      sampleImages={riceWhiteEarSamples}
      endpoint="rice"
    />
  );
};

export default RiceWhiteEarScanPage;
