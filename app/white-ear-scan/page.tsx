import PredictionTemplate from "@/components/Prediction/PredictionWheatEar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhiteEarScan | Wheat Disease Detection",
  description: "AI-powered detection of white ear severity in wheat plants.",
};

// DEFINE YOUR 8 WHITE EAR SAMPLE IMAGES HERE
const whiteEarSamples = [
  "/images/blog/Sample/wheat_white_ear/14a.JPG", // Replace with your actual 8 white ear samples
  "/images/blog/Sample/wheat_white_ear/D.JPG",
  "/images/blog/Sample/wheat_white_ear/DSC_0004.JPG",
  "/images/blog/Sample/wheat_white_ear/DSC_0098.JPG",
  "/images/blog/Sample/wheat_white_ear/IMG_20250218_095215.jpg",
  "/images/blog/Sample/wheat_white_ear/IMG_20250218_101815.jpg",
  "/images/blog/Sample/wheat_white_ear/IMG_20250218_113735.jpg",
  "/images/blog/Sample/wheat_white_ear/IMG_20250307_151831.jpg",
];

const WhiteEarScanPage = () => {
  return (
    <PredictionTemplate
      title={<><span className="text-primary italic">WhiteEarScan:</span> Wheat Infestation Analyzer</>}
      description="Determine the health of wheat crops by analyzing images for White Ear infestation severity."
      sampleImages={whiteEarSamples}
    />
  );
};

export default WhiteEarScanPage;