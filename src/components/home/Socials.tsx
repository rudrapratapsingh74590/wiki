"use client";

import React, { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const Socials = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<Record<number, { x: number; y: number }>>({});

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePositions((previous) => ({
      ...previous,
      [index]: {
        x: ((event.clientX - rect.left) / rect.width) * 100,
        y: ((event.clientY - rect.top) / rect.height) * 100,
      },
    }));
  };

  return (
    <section className="relative bg-white py-20 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1689d8]" />
            <p className="text-sm font-semibold uppercase tracking-wider text-[#1689d8]">
              Stay Connected
            </p>
            <span className="w-8 h-[2px] bg-[#1689d8]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2540]">
            Join the{" "}
            <span className="text-[#1689d8]">Conversation</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#607087] leading-relaxed">
            Follow WikiClub Tech for community updates, events, learning
            opportunities, and open-source activities.
          </p>

          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#19b99a] to-[#1689d8]" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Instagram */}
          <motion.div
            className="group relative bg-[#f7fbff] border border-[#e4edf5] rounded-2xl p-7 shadow-sm transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredCard(0)}
            onMouseMove={(event) => handleMouseMove(event, 0)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -5 }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-200"
              style={{
                opacity: hoveredCard === 0 ? 1 : 0,
                background:
                  "radial-gradient(220px circle at " +
                  (mousePositions[0]?.x ?? 50) +
                  "% " +
                  (mousePositions[0]?.y ?? 50) +
                  "%, rgba(96, 165, 250, 0.12), transparent 72%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <FaInstagram className="text-2xl" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2540]">
                Follow on Instagram
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#607087] leading-7">
                Discover community events, developer resources, activities, and
                stories from WikiClub Tech.
              </p>

              <Link
                href="https://www.instagram.com/wikiclubtech.uu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1689d8] hover:text-[#0b6eae] transition-colors"
              >
                Follow us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="group relative bg-[#f7fbff] border border-[#e4edf5] rounded-2xl p-7 shadow-sm transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseMove={(event) => handleMouseMove(event, 1)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -5 }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-0 rounded-2xl transition-opacity duration-200"
              style={{
                opacity: hoveredCard === 1 ? 1 : 0,
                background:
                  "radial-gradient(220px circle at " +
                  (mousePositions[1]?.x ?? 50) +
                  "% " +
                  (mousePositions[1]?.y ?? 50) +
                  "%, rgba(96, 165, 250, 0.12), transparent 72%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaLinkedin className="text-2xl" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#0b2540]">
                Join on LinkedIn
              </h3>

              <p className="mt-3 text-sm sm:text-base text-[#607087] leading-7">
                Connect with the WikiClub Tech community and stay updated with
                our latest activities.
              </p>

              <Link
                href="https://www.linkedin.com/company/wikiclubtechuu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1689d8] hover:text-[#0b6eae] transition-colors"
              >
                Follow us
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseMove={(event) => handleMouseMove(event, 2)}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -5 }}
          >
            <div
              className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-200"
              style={{
                opacity: hoveredCard === 2 ? 1 : 0,
                background:
                  "radial-gradient(220px circle at " +
                  (mousePositions[2]?.x ?? 50) +
                  "% " +
                  (mousePositions[2]?.y ?? 50) +
                  "%, rgba(96, 165, 250, 0.14), transparent 72%)",
              }}
            />

            <div className="relative z-10 h-full">
              <NewsletterForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Socials;
