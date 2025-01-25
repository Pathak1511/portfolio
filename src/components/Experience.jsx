function ExperienceTimeline() {
  const experiences = [
    {
      title: "Software Developer",
      company: "DePronto Infotech",
      duration: "August 2024 - Current",
      achievements: [
        "Led strategic meetings with five stakeholders to define business requirements and developed tailored solutions using React and JavaScript, enhancing functionality and client satisfaction.",
        "Redeveloped and optimized IPROP (ICICI Prudential Return of Premium), IPS (ICICI IProtect Smart), and HLV (Human Life Value) Calculator, driving operational improvements.",
        "Reduced API calls for IPROP by 50% (from 20 to 10), resulting in a significant improvement in performance and user experience.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "NimbleWork",
      duration: "April 2024 - August 2024",
      achievements: [
        "Contributed to the development of the SwiftKanban product as part of an 18-member team over 4 months.",
        "Resolved response data errors in the Tour Trip feature, improving load times by 40% and enhancing user experience, boosting retention rates.",
        "Engineered JUnit test solutions to address sorting inconsistencies in the people list on the product dashboard, improving accuracy and reliability by ensuring 100% error-free sorting in production.",
        "Developed a backend solution to delete attachments older than 1 month, while optimizing memoization in React to minimize component re-rendering.",
      ],
    },
  ];

  return (
    <div className=" pt-12" id="experience">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
        Experience
      </h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute max-md:left-0 md:left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-600"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-12 flex justify-between items-center relative w-full ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Timeline Marker */}
            <div className="absolute max-md:left-0 md:left-[50%] md:right-[50%] translate-x-[-50%] top-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
            {/* Content */}
            <div
              className={`bg-white hover:shadow-2xl transition duration-300 rounded-lg max-md:ml-6 max-md:w-full md:w-[46%] shadow-lg max-md:p-3 md:p-6 max-w-md border lg:mx-2 xl:mx-8 text-left border-gray-200`}
            >
              <h3 className="max-md:text-base md:text-xl font-semibold text-gray-900">
                <span className="text-blue-600">@ {exp.company}</span>
                <br />
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{exp.duration}</p>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                {exp.achievements.map((achievement, idx) => (
                  <li
                    key={idx}
                    className="max-md:text-sm text-gray-700 leading-relaxed text-left text-justify list-disc"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
