import blogData from "@/components/Blog/blogData"; // Update this path to where your blogData is actually located
import PredictionTemplate from "@/components/Prediction/PredictionTemplate"; // The reusable component we made
import { Metadata } from "next";

// Dynamic Metadata so the browser tab matches the specific scanner
export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const id = parseInt(params.id);
  const scannerData = blogData.find((blog) => blog.id === id);
  return {
    title: scannerData ? `${scannerData.title} | AI Analyzer` : "Scanner Not Found",
    description: scannerData?.paragraph || "AI Crop Analysis",
  };
}

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  
  // 1. Find the specific data from your blogData array based on the URL ID
  const scannerData = blogData.find((blog) => blog.id === id);

  // Fallback if someone types a wrong ID in the URL
  if (!scannerData) {
    return (
      <section className="pb-[120px] pt-[150px]">
        <div className="container text-center">
          <h1 className="text-3xl font-bold">Scanner Not Found</h1>
        </div>
      </section>
    );
  }


  // 3. Render the interactive template using the data we found
  return (
    <PredictionTemplate
      title={scannerData.title}
      description={scannerData.paragraph}
      sampleImages={[scannerData.image]}
    />
  );
};

export default BlogDetailsPage;