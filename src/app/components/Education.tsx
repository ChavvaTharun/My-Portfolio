"use client";
import React from "react";

const educationData = [
    {
        year: "2020-2023",
        degree: "Bachelor of Engineering",
        institution: "Jawaharlal Nehru Technological University Hyderabad",
    },
    {
        year: "2015-2019",
        degree: "Diploma",
        institution: "State Board of Technical Education & Training",
    },
    {
        year: "2015",
        degree: "School",
        institution: "Secondary School Certificate",
    },
];

function Education() {
    return (
        <section id="education" className="ftco-section education-section-main">
            <div className="container">
                <div className="education-section mx-auto px-4">
                    {/* Heading */}
                    <div className="project-section-heading text-center mb-12">
                        <div className="section-heading-text">
                            <span className="uppercase tracking-wide mb-2">
                                Eduction
                            </span>
                            <h6 className="font-semibold mb-4">Eduction</h6>
                        </div>

                    </div>

                    {/* Education List */}
                    <div className="row">
                        {educationData.map((edu, index) => (
                            <div
                                key={index}
                                className="col-lg-6 col-md-12 mb-4"   // <-- BOOTSTRAP CLASS ADDED
                            >
                                <div className="w-full bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 ftco-animate transition-transform duration-300 hover:scale-105">
                                    <span className="text-blue-400 text-lg font-semibold">
                                        {edu.year}
                                    </span>
                                    <h2 className="text-2xl font-bold text-white mt-1">
                                        {edu.degree}
                                    </h2>
                                    <span className="block text-gray-300 mt-1 text-sm">
                                        {edu.institution}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Download CV Button */}
                    <div className="text-center mt-10">
                        <a
                            href="/chavva-tharun.pdf"
                            download
                            className="inline-block text-white font-semibold py-3 px-6 rounded-lg transition"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
