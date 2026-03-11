import PredictionTemplate from "@/components/Prediction/PredictionPowdery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PowderyScan | Mustard Disease Detection",
  description: "AI-powered detection of powdery mildew severity in mustard plants.",
};

// DEFINE YOUR 8 POWDERY SAMPLE IMAGES HERE
const powderySamples = [
  "/images/blog/Sample/mustard_powdery/DSC_0005.JPG", // Replace with your actual 8 powdery samples
  "/images/blog/Sample/mustard_powdery/DSC_0006.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0027.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0033.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0064.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0068.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0070.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0105.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0128.JPG",
  "/images/blog/Sample/mustard_powdery/DSC_0187.JPG",
];

const PowderyScanPage = () => {
  return (
    <PredictionTemplate
      title={<><span className="text-primary italic">PowderyScan:</span> Mustard Powdery Analyzer</>}
      description="Identify powdery mildew infestation on mustard crops. Select a sample or upload your own image for instant analysis."
      sampleImages={powderySamples}
    />
  );
};

export default PowderyScanPage;