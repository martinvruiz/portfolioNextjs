"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectContainer({
  image,
  title,
  description,
  link,
  index = 0,
}) {
  return (
    <motion.div
      className="w-xs md:w-2xl lg:w-4xl h-auto bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 p-6 group flex flex-col md:flex-row items-center gap-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="overflow-hidden rounded-xl w-full h-60 md:h-full flex items-center justify-center bg-gray-200">
          <Image
            src={image}
            alt={title}
            width={320}
            height={240}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left flex-1">
        <h4 className="text-2xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600 mb-4 flex-1">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200"
        >
          <span>Go to</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
