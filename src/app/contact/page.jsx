import Navbar from "@/components/Navbar";
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center p-4 bg-black w-screen min-h-screen">
      <section className="flex flex-col items-center p-6 w-full max-w-xl mt-10 bg-white rounded-2xl">
        <h2 className="text-3xl text-black font-bold mb-6 text-center">
          Contact
        </h2>
        <p className="text-black text-lg mb-8 text-center">
          If you want to get in touch with me, you can do so through the
          following links:
        </p>
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <a
            href="https://www.linkedin.com/in/martin-villalo-ruiz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black rounded-2xl shadow-md px-6 py-4 text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200 font-semibold text-lg justify-center"
          >
            <FaLinkedin className="w-6 h-6" />
            LinkedIn
          </a>
          <a
            href="mailto:martinevruiz10@gmail.com"
            className="flex items-center gap-3 bg-black rounded-2xl shadow-md px-6 py-4 text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200 font-semibold text-lg justify-center"
          >
            <FaEnvelope className="w-6 h-6" />
            Email
          </a>
        </div>
      </section>
    </div>
  );
}
