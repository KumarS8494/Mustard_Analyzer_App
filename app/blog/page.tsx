import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page | Mustard Sans App",
  description: "This is Blog Page for Mustard Sans App",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Test Mustard plant leaf for diseases"
        description="Empowering Farmers with AI-driven Crop Health Insights."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="prediction-card-grid mx-auto max-w-5xl px-4">
            {blogData.map((blog) => (
              <div key={blog.id} className="h-full">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
