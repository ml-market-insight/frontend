const CTABanner = () => {
  return (
    <div className="mx-12 rounded-lg border border-lightgrey bg-dark">
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
        <div className="lg:max-w-xl">
          <h2 className="block w-full bg-gradient-to-b from-white to-white/60 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl">
            Un engagement envers la transparence
          </h2>
          <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-white/40">
            Nous nous engageons à fournir un code source de qualité et bien documenté pour vous
            aider à comprendre comment notre simulateur de portefeuille fonctionne.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/ml-market-insight"
            target="_blank"
            type="button"
            className="focus:ring-gray-500 inline-flex items-center rounded-lg border border-zinc-700 bg-[#24292F] px-8 py-3 text-center text-sm font-medium text-white hover:bg-[#050708]/30 focus:outline-none focus:ring-4"
          >
            <svg
              className="me-2 h-4 w-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Voir le code sur Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
