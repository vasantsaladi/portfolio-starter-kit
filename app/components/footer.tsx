function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="py-10 md:py-16 bg-gray-800">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            © {new Date().getFullYear()} Vasant Saladi. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/vs6"
              className="text-gray-400 hover:text-white transition duration-500"
            >
              <i data-feather="linkedin" className="w-6 h-6"></i>
            </a>
            <a
              href="https://github.com/vasantsaladi"
              className="text-gray-400 hover:text-white transition duration-500"
            >
              <i data-feather="github" className="w-6 h-6"></i>
            </a>
            <a
              href="https://vasantresume.tiiny.site"
              className="text-gray-400 hover:text-white transition duration-500"
            >
              <i data-feather="file-text" className="w-6 h-6"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
