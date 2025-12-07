"use client";
import React from "react";

const experienceData = [
  {
    duration: "1.8 Years of Experience as a Front End Developer",
    role: "Front End Developer",
    company: "Evega Technologies",
    projects: ["40+ Web Applications Delivered"],
    technologies: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Type Script",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
      "Git & GitHub",
      "Node.js (Basics)",
      "Express (Basics)",
      "PHP"
    ],
    details: [
      "Built a full-stack flight booking application using React for the frontend and Spring Boot for the backend.",
      "Developed reusable, scalable, and optimized UI components using React and Tailwind CSS.",
      "Implemented fast and dynamic client-side routing using React Router and Next.js routing.",
      "Integrated RESTful APIs for real-time flight data retrieval, booking functionality, and user profile operations.",
      "Implemented secure user authentication and authorization using JWT and Spring Security.",
      "Worked with MongoDB for efficient data storage, indexing, and optimized query handling.",
      "Improved app performance using lazy loading, memoization, and React best practices.",
      "Collaborated with backend teams to ensure seamless API integration and smooth frontend-backend communication.",
      "Worked with Git/GitHub for version control, branching, code reviews, and deployment workflow.",
      "Ensured mobile-first responsive design and cross-browser compatibility.",
      "Optimized SEO performance for web applications using Next.js features like SSR and SSG.",
      "Integrated forms with form validation using libraries like React Hook Form and custom validation logic."
    ]
  },

  {
    duration: "6 Months Internship",
    role: "Full Stack Developer Intern",
    company: "AI Variant",
    projects: [
      "Flight Booking Application",
      "Wallet Transaction Application"
    ],
    technologies: [
      "React.js",
      "Spring Boot",
      "MongoDB",
      "MySQL",
      "React Router",
      "Context API",
      "JWT Authentication",
      "REST APIs"
    ],
    details: [
      "Built a full-stack flight booking application using React for the frontend and Spring Boot for the backend.",
      "Developed reusable and responsive UI components with proper code structure and state management.",
      "Implemented dynamic client-side routing using React Router for a smooth user experience.",
      "Integrated RESTful APIs for real-time flight data fetching, seat availability, and booking operations.",
      "Implemented secure user authentication and authorization using JWT with Spring Security.",
      "Handled database operations and optimized queries using MongoDB for flight data and user information.",

      "Developed a secure wallet transaction application that allows users to send, receive, and track transactions in real time.",
      "Created mobile-friendly UI screens using React with Context API for shared global state management.",
      "Implemented Spring Boot backend with CRUD operations, transaction APIs, and JWT-based authentication.",
      "Designed and managed a relational MySQL schema for user, wallet, and transaction modules.",
      "Enhanced backend security using input validation, error handling, and Spring Security configuration."
    ]
  }
];


function Experience() {
  return (
    <section
      id="experience"
      className="experience-section-main py-20"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="project-section-heading text-center mb-12">
          <div className="section-heading-text">
            <span className="uppercase tracking-wide mb-2">
              Experience
            </span>
            <h6 className="font-semibold mb-4">Experience</h6>
          </div>

        </div>

        {/* Experience List */}
        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="block text-blue-400 text-lg font-semibold mb-2">
                {exp.duration}
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
              <p className="text-blue-300 mb-1 font-medium">{exp.company}</p>
              <p className="text-gray-300 mb-3 italic">{exp.projects.join(", ")}</p>
              <ul className="list-disc list-outside text-gray-300 text-sm space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/20 text-blue-300 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
