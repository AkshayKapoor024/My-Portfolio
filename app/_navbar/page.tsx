"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar isBordered className="sticky top-0 z-50 bg-white">

        {/* Brand */}
        <a href="#hero">
          <NavbarBrand className="hover:cursor-pointer">
            <p className="text-inherit text-2xl flex justify-center items-center">
              <span className="text-[#f45a33]" style={{ fontWeight: "bold" }}>
                A
              </span>
              <span className="text-[#22c3ad]" style={{ fontWeight: "bold" }}>
                K
              </span>
            </p>
          </NavbarBrand>
        </a>

        {/* Desktop Menu */}
        <NavbarContent className="hidden lg:flex gap-5" justify="end">
          <NavbarItem>
            <Link
              href="#aboutme"
              className="text-sm text-gray-500 hover:text-[#f45a33] hover:underline hover:underline-offset-4 transition-all duration-150"
              style={{ fontWeight: "500" }}
            >
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="#skills"
              className="text-sm text-gray-500 hover:text-[#f45a33] hover:underline hover:underline-offset-4 transition-all duration-150"
              style={{ fontWeight: "500" }}
            >
              Skills
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="#projects"
              className="text-sm text-gray-500 hover:text-[#f45a33] hover:underline hover:underline-offset-4 transition-all duration-150"
              style={{ fontWeight: "500" }}
            >
              Projects
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="#futuregoals"
              className="text-sm text-gray-500 hover:text-[#f45a33] hover:underline hover:underline-offset-4 transition-all duration-150"
              style={{ fontWeight: "500" }}
            >
              Goals
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link
              href="#contactme"
              className="text-sm text-gray-500 hover:text-[#f45a33] hover:underline hover:underline-offset-4 transition-all duration-150"
              style={{ fontWeight: "500" }}
            >
              Contact
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Button
              as={Link}
              className="bg-[#f45a33] text-white shadow-[0_4px_5px_#f45a3370]"
              style={{ fontWeight: "500" }}
              href="#contactme"
            >
              Hire Me
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-[#00000008] hover:bg-[#00000015] transition-all"
          >
            <img
              width="28"
              height="28"
              src={
                isOpen
                  ? "https://img.icons8.com/ios/50/f45a33/delete-sign--v1.png"
                  : "https://img.icons8.com/ios/50/f45a33/menu--v1.png"
              }
              alt="menu"
            />
          </button>
        </div>
      </Navbar>

      {/* Mobile Menu Panel */}
      {/* Mobile Menu Panel */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="lg:hidden fixed top-[64px] z-50 left-0 w-full bg-white shadow-xl ring-1 ring-[#00000010] px-6 py-8 flex flex-col gap-6 "
    >
      <Link
        href="#aboutme"
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:text-[#f45a33] font-medium transition-all"
      >
        About
      </Link>

      <Link
        href="#skills"
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:text-[#f45a33] font-medium transition-all"
      >
        Skills
      </Link>

      <Link
        href="#projects"
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:text-[#f45a33] font-medium transition-all"
      >
        Projects
      </Link>

      <Link
        href="#futuregoals"
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:text-[#f45a33] font-medium transition-all"
      >
        Goals
      </Link>

      <Link
        href="#contactme"
        onClick={() => setIsOpen(false)}
        className="text-gray-600 hover:text-[#f45a33] font-medium transition-all"
      >
        Contact
      </Link>

      <Button
        as={Link}
        href="#contactme"
        onClick={() => setIsOpen(false)}
        className="bg-[#f45a33] text-white w-full shadow-[0_4px_5px_#f45a3370]"
      >
        Hire Me
      </Button>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}
