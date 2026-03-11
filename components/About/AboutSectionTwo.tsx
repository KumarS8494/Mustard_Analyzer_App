import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[1070px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Objectives
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  This research seeks to establish an explainable deep learning framework for the precise classification of powdery mildew and aphid infestation severity in mustard crops utilizing real-field imagery. The goal is to attain superior classification accuracy while maintaining model interpretability and suitability for field deployment.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Methods
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Two multi-class datasets were created in both natural field and laboratory settings, comprising five severity levels for powdery mildew and six severity levels for aphid infestation. A lightweight attention-based deep neural network was developed, integrating an efficient inverted residual backbone with Attention-Guided Squeeze-and-Excitation (AGSE) modules, multi-head self-attention mechanisms, and generalized mean pooling to improve feature discrimination in complex environmental conditions. The robustness of the model was assessed utilizing five independently trained models on a predetermined test set. Performance metrics encompassed accuracy and area under the curve (AUC). Ablation studies were performed to evaluate the impact of attention modules and channel recalibration processes. To improve interpretability, Grad-CAM++ visualization was utilized to emphasize regions affected by illness and pests without necessitating specific object recognition.
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
