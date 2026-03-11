import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, paragraph, tags } = blog;

  // 1. Add this helper function to figure out which folder to go to
  const getScannerLink = (blogId: number) => {
    if (blogId === 1) return "/aphid-scan";
    if (blogId === 2) return "/powdery-scan";
    if (blogId === 3) return "/white-ear-scan";
    return "/blog-details"; // Fallback just in case
  };

  // 2. Generate the correct link
  const destination = getScannerLink(id);

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      
      {/* UPDATE THIS LINK */}
      <Link
        href={destination}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-4 top-4 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={image} alt="image" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      </Link>
      
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          {/* UPDATE THIS LINK TOO */}
          <Link
            href={destination}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;