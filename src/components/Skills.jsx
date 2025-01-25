import React from "react";

function Skills() {
  const myskill = {
    frontend: [
      { name: "html", image: "html.svg" },
      { name: "tailwindcss", image: "tailwind.svg" },
      { name: "jQuery", image: "jquery.svg" },
      { name: "bootstrap", image: "bootstrap.svg" },
      { name: "javascript", image: "javascript.svg" },
      { name: "reactjs", image: "reactjs.svg" },
    ],
    backend: [
      { name: "nodejs", image: "nodejs.svg" },
      { name: "spring boot", image: "spring.svg" },
      { name: "mongodb", image: "mongo.svg" },
      { name: "mysql", image: "mysql.svg" },
    ],
    other: [
      { name: "figma", image: "figma.svg" },
      { name: "adobe", image: "adobe.svg" },
      { name: "postman", image: "postman.svg" },
      { name: "docker", image: "docker.svg" },
    ],
  };
  return (
    <div
      id="skills"
      className="flex-1 justify-between items-center my-10 transition-opacity duration-300"
    >
      <h2 className="text-2xl font-semibold text-center mb-6">My Skills</h2>
      <div className="flex gap-8 w-full mx-[auto]">
        {/* Frontend Skills */}
        <div className="flex-1 max-md:w-full md:w-[max-content] justify-center items-center gap-4">
          <h1 className="lg:text-lg xl:text-3xl font-semibold mb-4 text-blue-600 text-center">
            Frontend
          </h1>
          <ul className="max-md:flex-wrap max-md:w-100 max-md:px-4 max-md:gap-4 flex gap-10 justify-center items-center">
            {myskill.frontend.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md max-md:w-20 max-md:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 flex items-center justify-center hover:shadow-2xl transition duration-300"
              >
                <img
                  className="w-full h-full object-contain"
                  src={`/assests/images/${skill.image}`}
                  alt={skill.name}
                />
              </li>
            ))}
          </ul>

          {/* Backend Skills */}
          <h1 className="lg:text-lg xl:text-3xl font-semibold mt-10 mb-4 text-blue-600 text-center">
            Backend
          </h1>
          <ul className="max-md:flex-wrap max-md:w-100 max-md:px-4 max-md:gap-4 flex gap-10 justify-center items-center">
            {myskill.backend.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md max-md:w-20 max-md:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 flex items-center justify-center hover:shadow-2xl transition duration-300"
              >
                <img
                  className="w-full h-full object-contain"
                  src={`/assests/images/${skill.image}`}
                  alt={skill.name}
                />
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h3 className="lg:text-lg xl:text-3xl font-semibold mt-10 mb-4 text-blue-600 text-center">
            Other Tools
          </h3>
          <ul className="max-md:flex-wrap max-md:w-100 max-md:px-4 max-md:gap-4 flex gap-10 justify-center items-center">
            {myskill.other.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md max-md:w-20 max-md:h-20 lg:w-28 lg:h-28 xl:w-40 xl:h-40 flex items-center justify-center hover:shadow-2xl transition duration-300"
              >
                <img
                  className="w-full h-full object-contain"
                  src={`/assests/images/${skill.image}`}
                  alt={skill.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
