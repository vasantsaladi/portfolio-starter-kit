import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard";

export default function Page() {
  return (
    <>
      {/* Intro Section */}
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex justify-center mb-4 md:mb-0 md:w-1/2">
                <Image
                  src="/image/LinkedInPic.jpg"
                  alt="Vasant Saladi"
                  width={384}
                  height={512}
                  className="h-72 md:h-96 w-auto rounded-md object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Vasant Saladi
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  AI Engineer | Data Analyst | Data Scientist
                </p>
                <p className="text-lg text-gray-500 mb-4">
                  Hello, I'm Vasant, a Computer and Information Science student
                  at the University of Maryland, specializing in Data Science.
                  I'm passionate about leveraging technology to solve real-world
                  problems through data science and machine learning. Contact me
                  if you'd like to work together!
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a
                    href="https://www.linkedin.com/in/vs6"
                    className="text-gray-500 hover:text-gray-800 transition duration-500"
                  >
                    <i data-feather="linkedin" className="w-6 h-6"></i>
                  </a>
                  <a
                    href="https://github.com/vasantsaladi"
                    className="text-gray-500 hover:text-gray-800 transition duration-500"
                  >
                    <i data-feather="github" className="w-6 h-6"></i>
                  </a>
                  <a
                    href="https://vasantresume.tiiny.site"
                    className="text-gray-500 hover:text-gray-800 transition duration-500"
                  >
                    <i data-feather="file-text" className="w-6 h-6"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container max-w-screen-lg mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="House_Hackers"
              imageSrc="/image/house_hackers.png"
              description="Tool to help first-time home buyers find their ideal zip code in Fairfax County by analyzing various factors."
              liveLink="https://househackers.vercel.app"
              githubLink="https://github.com/0ETERATION1/house_hackers"
            />
            <ProjectCard
              title="Heisenberg.ai"
              imageSrc="/image/durg_creation _ml.png"
              description="An AI platform revolutionizing pharmaceutical drug creation using chembl database and machine learning."
              liveLink="https://www.heisenbergai.us"
              githubLink="https://github.com/vasantsaladi/drugdiscovery"
            />
            {/* Add more ProjectCard components for other projects */}
          </div>
        </div>
      </section>
    </>
  );
}
