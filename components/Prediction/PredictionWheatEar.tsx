"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ScanningAnimation } from "./ScanningAnimation";

interface PredictionWheatEarProps {
  title: React.ReactNode;
  description: string;
  sampleImages: string[];
}

const PredictionWheatEar = ({
  title,
  description,
  sampleImages,
}: PredictionWheatEarProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const [result, setResult] = useState<{
    severity: string;
    confidence: number;
    remedy: string;
  } | null>(null);

  const [gradcamImage, setGradcamImage] = useState<string | null>(null);
  const [displayConfidence, setDisplayConfidence] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isPaused = false;

    const scrollInterval = setInterval(() => {
      if (!isPaused && container) {
        container.scrollLeft += 1.5;

        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 1
        ) {
          container.scrollLeft = 0;
        }
      }
    }, 30);

    container.addEventListener("mouseenter", () => (isPaused = true));
    container.addEventListener("mouseleave", () => (isPaused = false));

    return () => clearInterval(scrollInterval);
  }, []);

  useEffect(() => {
    if (!result) return;

    let start = 0;
    const end = result.confidence;
    const duration = 1200;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setDisplayConfidence(Number(start.toFixed(1)));
    }, 20);

    return () => clearInterval(timer);
  }, [result]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setSelectedImage(imageUrl);
      setSelectedFile(file);

      setResult(null);
      setGradcamImage(null);
    }
  };

  const handleSampleClick = async (imagePath: string) => {
    setSelectedImage(imagePath);
    setResult(null);
    setGradcamImage(null);

    const response = await fetch(imagePath);
    const blob = await response.blob();
    const file = new File([blob], "sample.jpg", { type: blob.type });

    setSelectedFile(file);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setResult(null);
    setGradcamImage(null);

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const End_Point =
        "https://kumars81-mustard-wheat-disease-api.hf.space/predict/wheat";

      const response = await fetch(End_Point, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResult({
        severity: data.class_name,
        confidence: Number(data.confidence),
        remedy: data.remedy,
      });

      if (data.gradcam_image_base64) {
        setGradcamImage(data.gradcam_image_base64);
      }
    } catch (error) {
      console.error("Prediction error:", error);
    }

    setIsAnalyzing(false);
  };

  const clearSelection = () => {
    setSelectedImage(null);
    setSelectedFile(null);
    setResult(null);
    setGradcamImage(null);
  };

  return (
    <section className="pb-16 pt-28 bg-gray-50 dark:bg-dark min-h-screen">
      <div className="mx-auto max-w-[1600px] px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl mb-4">
            {title}
          </h1>

          <p className="text-body-color text-lg">{description}</p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-2xl shadow-lg p-6 sm:p-10">
          
          {/* LOGIC CHANGE START: Toggle between Upload View, Selected View, and Results Button View */}
          {!selectedImage ? (
            /* PHASE 1: No image selected */
            <div className="flex flex-col items-center">
              <label className="w-full flex flex-col items-center justify-center h-64 border-2 border-dashed border-primary/50 rounded-xl cursor-pointer bg-primary/5 hover:bg-primary/10 transition">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 mb-4 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5
                      5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5
                      a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-primary">
                      Click to upload
                    </span>{" "}
                    or drag and drop
                  </p>
                  <p className="text-sm text-gray-500">JPG, PNG, JPEG</p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>

              <div className="mt-10 w-full">
                <div className="flex items-center mb-6">
                  <hr className="flex-grow border-gray-200" />
                  <span className="px-4 text-sm text-gray-500 uppercase">
                    Sample Images
                  </span>
                  <hr className="flex-grow border-gray-200" />
                </div>
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
                >
                  {[...sampleImages, ...sampleImages].map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSampleClick(src)}
                      className="relative flex-shrink-0 w-28 h-28 rounded-lg overflow-hidden border-2 hover:border-primary transition shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={`Sample ${idx}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : result ? (
            /* PHASE 3: Analysis complete - Show only New Image button above results */
            <div className="flex flex-col items-center mb-6">
              <button
                onClick={clearSelection}
                className="px-6 py-3 rounded-lg border hover:bg-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
              >
                New Image
              </button>
            </div>
          ) : (
            /* PHASE 2: Image selected but not yet analyzed (or currently analyzing) */
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-md mb-6 bg-gray-100">

                  <Image
                    src={selectedImage}
                    alt="Selected"
                    fill
                    className="object-contain p-2"
                  />

                  <ScanningAnimation
                    isVisible={isAnalyzing}
                    color="cyan"
                    duration={2}
                  />

                </div>

              <div className="flex gap-4">
                <button
                  onClick={clearSelection}
                  className="px-6 py-3 rounded-lg border hover:bg-gray-100 dark:text-white dark:border-gray-600"
                >
                  New Image
                </button>

                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-8 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition flex items-center justify-center min-w-[180px] disabled:opacity-50 shadow-md"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Image"}
                </button>
              </div>
            </div>
          )}
          {/* LOGIC CHANGE END */}

          {/* RESULTS */}
          {result && (
            <div className="mt-4 p-6 bg-green-50 border border-green-200 rounded-xl dark:bg-green-900/10 dark:border-green-800">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-6">
                Analysis Results
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Uploaded Image */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                  <p className="text-sm text-gray-500 mb-3">Uploaded Image</p>
                  <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-md mb-6 bg-gray-100 dark:bg-gray-800">

                    <Image
                      src={selectedImage}
                      alt="Selected Image"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Prediction */}
                <div className="flex flex-col gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 mb-1">Detected Condition</p>
                    <div className="dark:text-white">
                        <ReactMarkdown>{result.remedy}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 mb-1">Confidence Score</p>
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                      {displayConfidence}%
                    </div>
                    <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-green-500 h-3 rounded-full"
                        style={{ width: `${displayConfidence}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* GradCAM */}
                {gradcamImage && (
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                    <p className="text-sm text-gray-500 mb-3">GradCAM Visualization</p>
                    <img
                      src={gradcamImage}
                      alt="GradCAM"
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictionWheatEar;