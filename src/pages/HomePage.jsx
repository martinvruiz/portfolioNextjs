"use client";

import ContactPage from "@/components/ContactPage";
import TechnicalSkill from "@/components/TechnicalSkill";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen max-w-screen bg-blue-950">
      <motion.div
        className="flex justify-center items-center flex-col pb-4 md:flex-row bg-black/30 rounded-2xl w-xs md:w-2xl lg:w-4xl "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="w-[50%] flex items-center justify-center">
          <Image
            src="/MVR-removebg.png"
            width={300}
            height={300}
            alt="Logo of Martin Villalo Ruiz"
          />
        </div>
        <div className="w-[50%] text-center flex flex-col items-center">
          <h1 className="md:text-4xl font-semibold py-2">
            Martin Villalo Ruiz
          </h1>
          <p className="md:max-w-md md:text-2xl font-bold md:px-4">
            Frontend Developer
          </p>
        </div>
      </motion.div>

      <motion.div
        className="text-center rounded-2xl p-2 my-6 w-xs md:w-2xl lg:w-4xl bg-black/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold py-2 pt-4">About me</h3>
        <p className="text-lg px-4 pb-2">
          I'm a frontend developer with a passion for creating modern,
          responsive, and intuitive web applications. I'm always looking to
          learn and grow, whether through personal projects, freelance work, or
          collaborating with others. I value clean code, good design, and user
          experience.
        </p>
        <p className="text-lg font-semibold px-4 pb-2">
          Based in Buenos Aires, Argentina.
        </p>
      </motion.div>

      <motion.div
        className="text-center rounded-2xl w-xs md:w-2xl lg:w-4xl p-2 mb-6 bg-black/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold">Technical Skills</h3>
        <TechnicalSkill />
      </motion.div>

      <motion.div
        className="text-center rounded-2xl w-xs md:w-2xl lg:w-4xl p-2 mb-12 bg-black/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <ContactPage />
      </motion.div>
    </div>
  );
}
