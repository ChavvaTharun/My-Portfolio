"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className='container'>
      <div className="footer-background text-center">
        <p className="mb-2 small">
          © {new Date().getFullYear()} Tharun Chavva. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a
            href="https://github.com/ChavvaTharun"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tharun-chavva"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:tharunchinttu100@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
