"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

const Socials = () => {
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
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1689d8]" />

            <p className="text-sm font-semibold uppercase tracking-wider text-[#1689d8]">
              Stay Connected
            </p>

            <span className="w-8 h-[2px] bg-[#1689d8]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2540]">
            Join the{" "}
            <span className="text-[#1689d8]">Conversation</span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base sm:text-lg text-[#607087] leading-relaxed">
            Follow WikiClub Tech for community updates, events, learning
            opportunities, and open-source activities.
          </p>

          {/* Accent */}
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#19b99a] to-[#1689d8]" />
        </motion.div>

        {/* =========================
            SOCIAL CARDS
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* =========================
              INSTAGRAM
          ========================== */}
          <motion.div
            className="
              group
              bg-[#f7fbff]
              border
              border-[#e4edf5]
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            {/* Icon */}
            <div
              className="
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-2xl
                bg-pink-50
                text-pink-600
                group-hover:bg-pink-600
                group-hover:text-white
                transition-all
                duration-300
              "
            >
              <FaInstagram className="text-2xl" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-[#0b2540]">
              Follow on Instagram
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-[#607087] leading-7">
              Discover community events, developer resources, activities, and
              stories from WikiClub Tech.
            </p>

            {/* Link */}
            <Link
              href="https://www.instagram.com/wikiclubtech.uu/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                text-sm
                font-semibold
                text-[#1689d8]
                hover:text-[#0b6eae]
                transition-colors
              "
            >
              Follow us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* =========================
              LINKEDIN
          ========================== */}
          <motion.div
            className="
              group
              bg-[#f7fbff]
              border
              border-[#e4edf5]
              rounded-2xl
              p-7
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            whileHover={{ y: -5 }}
          >
            {/* Icon */}
            <div
              className="
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-2xl
                bg-blue-50
                text-blue-600
                group-hover:bg-blue-600
                group-hover:text-white
                transition-all
                duration-300
              "
            >
              <FaLinkedin className="text-2xl" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-[#0b2540]">
              Join on LinkedIn
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm sm:text-base text-[#607087] leading-7">
              Connect with the WikiClub Tech community and stay updated with
              our latest activities.
            </p>

            {/* Link */}
            <Link
              href="https://www.linkedin.com/company/wikiclubtechuu/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                text-sm
                font-semibold
                text-[#1689d8]
                hover:text-[#0b6eae]
                transition-colors
              "
            >
              Follow us
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* =========================
              NEWSLETTER
          ========================== */}
          <motion.div
            className="h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <NewsletterForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Socials;