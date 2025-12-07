"use client";
import Image from "next/image";
import React from "react";

const projects = [
    {
        title: "Flight Booking Application using MongoDB",
        description:
            "Flight Booking Application stores data using MongoDB queries to identify gaps and increase business growth.",
        image: "/images/project/flight-booking-application.png",
        link: "https://github.com/excelr-projs/book-my-flights",
    },
    {
        title: "Wallet to Wallet Transfer Project using SQL",
        description:
            "Wallet To Wallet Transfer stores data using advanced SQL queries to identify gaps and increase business growth.",
        image: "/images/project/digital-wallet.png",
        link: "https://github.com/excelr-projs/paisa-bhej-fe",
    },
    {
        title: "Hospital Management System Using JDBC",
        description:
            "Hospital Management System stores data using MySQL queries to identify gaps and increase service growth.",
        image: "/images/project/doctor-appointment-booking-app.png",
        link: "https://github.com/ChavvaTharun/Hospital-Management-System-Using-JDBC/tree/main/Hospotal%20Management%20System%20jdbc",
    },
    {
        title: "Employee Management System Project",
        description:
            "Employee Management System stores data using MySQL queries to identify gaps and increase service growth.",
        image: "/images/project/employee-management-system.png",
        link: "https://github.com/ChavvaTharun/Employee-Management-System",
    },
    {
        title: "Resturent Table Booking Project",
        description:
            "Resturent Table Booking Done in Next.js using Typescript and json using Redux concept to store.",
        image: "/images/project/resturent-table-booking.png",
        link: "https://github.com/ChavvaTharun/Restaurant_application-/tree/main/my-kitchen",
    },
    {
        title: "Work Force Manager Project",
        description:
            "Developed a Workforce Management System in PHP featuring complete CRUD operations along with secure admin and employee authentication",
        image: "/images/project/work-force-manager.png",
        link: "https://github.com/ChavvaTharun/work-force-manager",
    },
];

const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="ftco-section container py-16">
            <div className="project-section mx-auto px-4">
                {/* Heading */}
                <div className="project-section-heading text-center mb-12">
                    <div className="section-heading-text">
                        <span className="uppercase tracking-wide mb-2">
                            Projects
                        </span>
                        <h6 className="font-semibold mb-4">Projects</h6>
                    </div>
                    <p className="text-white-600">
                        Sample Projects I Have Developed
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid xl:grid-cols-3  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="ftco-animate">
                            <div className="project-card overflow-hidden duration-300">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <div className="relative w-full h-60">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </a>
                                <div className="p-4 project-description">
                                    <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-600 text-sm">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
