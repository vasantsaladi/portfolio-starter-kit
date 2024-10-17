import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  liveLink: string;
  githubLink: string;
}

export function ProjectCard({
  title,
  imageSrc,
  description,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">
        <Link href="#" className="hover:underline">
          {title}
        </Link>
      </h2>
      <Link href="#" className="block mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={225}
          className="rounded-md"
        />
      </Link>
      <p className="text-gray-500 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a
          href={liveLink}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Live Project
        </a>
        <a
          href={githubLink}
          className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}
