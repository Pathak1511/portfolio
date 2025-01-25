import React from "react";

function FeaturedProjects() {
  const projects = [
    {
      title: "Codeflow",
      subtitle: "Real Time Collaborative Code Editor",
      liveLink: "https://editor-sand.vercel.app/",
      repoLink: "https://github.com/Pathak1511/codeflow",
      description:
        "A real-time code editor supporting collaborative development with robust language support (HTML, CSS, JS, C++, Java, Python).",
      icon: "https://editor-sand.vercel.app/assests/main-logo.png",
      bg: "bg-black",
    },
    {
      title: "NPM Package - patexec",
      subtitle: "Custom NPM Package",
      liveLink: "https://www.npmjs.com/package/pat-exec",
      repoLink: "https://github.com/Pathak1511/pat-exec",
      description:
        "Designed to execute code snippets in a containerized environment using Docker, reducing execution time by 50%.",
      icon: "/assests/images/npm.svg",
      bg: "bg-none",
    },
    {
      title: "SaaS Platform API",
      subtitle: "Custom NodeJS API - Express",
      liveLink: "https://documenter.getpostman.com/view/18873680/2s93si1q64",
      repoLink: "https://github.com/Pathak1511/CommunityBackend",
      description:
        "It contains detailed information about the API endpoints, request/response structures, and authentication mechanisms for the SaaS Platform.",
      icon: "/assests/images/postman.svg",
      bg: "bg-none",
    },
  ];

  return (
    <section className="lg:p-4 xl:py-12 xl:px-6" id="project">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl font-semibold text-center mb-4">Projects:</h2>
        <p className="text-center text-gray-900 mb-8">
          Here are a few of my live, real-world projects.
        </p>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-100 rounded-sm shadow-lg max-md:p-3 md:p-4 xl:p-6 hover:shadow-2xl transition duration-300"
            >
              {/* Icon or Image */}
              <div className="max-md:mb-3 md:mb-4 w-10 h-10">
                <img
                  src={project.icon}
                  className={`${project.bg} rounded-[100%]`}
                />
              </div>
              {/* Project Title */}
              <h3 className="max-md:text-base md:text-lg xl:text-xl font-semibold">
                {project.title}
              </h3>
              <p className="text-purple-900 lg:text-sm xl:text-lg mb-2">
                {project.subtitle}
              </p>
              {/* Description */}
              <p className="text-gray-800 mb-4 max-md:text-sm xl:text-base max-md:h-18 md:h-24 lg:h-28 text-left">
                {project.description}
              </p>
              {/* Buttons */}
              <div className="flex space-x-4 max-md:text-sm lg:text-sm xl:text-lg">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-sm  transition cursor-cell"
                >
                  View Live
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-sm hover:bg-gray-400 hover:text-black transition cursor-cell"
                >
                  Github Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
