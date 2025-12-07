"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      // 1️⃣ Send Email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // 2️⃣ Save submission to JSON via API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(templateParams),
      });

      alert("Message sent and saved successfully!");
      setFormData({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Failed to send or save message. Please check console for details."
      );
    }
  };


  return (
    <section className="container" id="contact">
      <div className="contact-section text-light p-2">
        <div className="row align-items-center about-section">

          {/* Left side video */}
          <div className="col-md-6 text-center">
            <video
              src="videos/contact-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="contact-video rounded shadow"
              width="600"
              height="600"
            />
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h2 className="mb-4">Contact Me</h2>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact No"
                  value={formData.contact}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
