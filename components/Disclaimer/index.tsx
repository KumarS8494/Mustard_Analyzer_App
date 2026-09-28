const Disclaimer = () => {
  return (
    <section className="relative z-10 w-full border-y border-yellow/30 bg-yellow/10 dark:border-yellow/20 dark:bg-yellow/[0.07]">
      <div className="flex w-full flex-col items-start gap-4 px-6 py-6 sm:flex-row sm:items-center sm:gap-5 sm:px-10 md:px-[50px] md:py-8">
        {/* Warning icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="shrink-0 text-yellow"
        >
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>

        <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
          <span className="font-bold text-black dark:text-white">
            Agricultural Disclaimer:
          </span>{" "}
          This tool is intended for research and informational purposes only.
          Final disease identification and treatment protocols should be
          verified by a qualified agronomist or plant pathologist before
          application.
        </p>
      </div>
    </section>
  );
};

export default Disclaimer;
