import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full items-center justify-center h-auto">
      <ul className="flex items-center justify-center gap-4 p-4">
        <li className="text-2xl">
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4"
          >
            Home
          </Link>
        </li>
        <li className="text-2xl">
          <Link
            href="/projects"
            className="transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4"
          >
            Projects
          </Link>
        </li>
        <li className="text-2xl">
          <Link
            href="/contact"
            className="transition-colors duration-200 hover:text-blue-600 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
