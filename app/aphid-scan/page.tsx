import PredictionTemplate from "@/components/Prediction/PredictionTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AphidScan | Mustard Disease Detection",
  description: "AI-powered detection of aphid infestation severity in mustard plants.",
};

// DEFINE YOUR 8 APHID SAMPLE IMAGES HERE
const aphidSamples = [
  "/images/blog/Sample/mustard_aphid/DS.JPG", 
  "/images/blog/Sample/mustard_aphid/DS2.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_0018.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_022.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_0039.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_0043.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_0061.JPG",
  "/images/blog/Sample/mustard_aphid/DSC_0064.JPG"
];

const AphidScanPage = () => {
  return (
    <PredictionTemplate
      title={<><span className="text-primary italic">AphidScan:</span> Mustard Aphid Analyzer</>}
      description="Upload an image of a mustard plant leaf to detect and classify the severity of aphid infestation using our AI model."
      sampleImages={aphidSamples}
    />
  );
};

export default AphidScanPage;
