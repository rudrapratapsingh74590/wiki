"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================================
            MAIN FOOTER
        ================================= */}
        <div className="py-14 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* ================================
                BRAND
            ================================= */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <Image
                  src="/logo.svg"
                  alt="WikiClub Tech Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />

                <div>
                  <h2 className="text-xl font-bold text-white">
                    WikiClub Tech
                  </h2>

                  <p className="text-sm text-slate-300">
                    United University
                  </p>
                </div>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-300">
                A community of tech enthusiasts and learners building,
                learning, and contributing together.
              </p>
            </div>

            {/* ================================
                QUICK LINKS
            ================================= */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/blogs"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Blogs
                </Link>

                <Link
                  href="/teams"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Teams
                </Link>

                <Link
                  href="/validator"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Validator
                </Link>

                <Link
                  href="/contributors"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Contribution Board
                </Link>
              </div>
            </div>

            {/* ================================
                RESOURCES
            ================================= */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/pyq"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  PYQ
                </Link>

                <Link
                  href="/privacy-policy"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-of-service"
                  className="text-sm text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* ================================
                CONTACT & FOLLOW
            ================================= */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                Contact & Follow
              </h3>

              {/* Email */}
              <a
                href="mailto:wikiclub@united.edu.in"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  text-sm
                  text-slate-300
                  hover:text-cyan-300
                  transition-colors
                "
              >
                <FaEnvelope />
                <span>wikiclub@united.edu.in</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/wikiclubtech.uu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    bg-[#163a5c]
                    text-slate-300
                    hover:bg-pink-600
                    hover:text-white
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram className="text-lg" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/wikiclubtechuu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    rounded-full
                    bg-[#163a5c]
                    text-slate-300
                    hover:bg-blue-600
                    hover:text-white
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaLinkedin className="text-lg" />
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* ================================
            BOTTOM BAR
        ================================= */}
        <div className="border-t border-[#234563] py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} WikiClub Tech. All rights reserved.
            </p>

            <p className="text-sm text-slate-400">
              Built with{" "}
              <span className="font-medium text-cyan-300">
                community & collaboration
              </span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;