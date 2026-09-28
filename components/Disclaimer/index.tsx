import Link from "next/link";

const Disclaimer = () => {
  return (
    <section className="relative z-10 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto flex max-w-[1900px] flex-col items-center text-center">
          <div className="mt-8 rounded-xl border border-yellow-300 bg-yellow-50 px-6 py-4 text-left dark:border-yellow-700 dark:bg-yellow-900/20">
            <p className="text-sm leading-relaxed text-yellow-800 dark:text-yellow-200 sm:text-base">
              <span className="font-semibold">⚠️ Agricultural Disclaimer:</span>{" "}
              This tool is intended for research and informational purposes only.
              Final disease identification and treatment protocols should be verified
              by a qualified agronomist or plant pathologist before application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;