"use client";

import React, { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";

const stats = {
  value: "45+",
  label: "Contributions",
  icon: Code2,
  iconColor: "text-emerald-500",
  iconBg: "bg-emerald-50",
};

const WhoWeAre = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-emerald-500" />
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-slate-500">
                About WikiClub Tech
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-[#0b2540]">
              More Than Just a
              <br />
              <span className="text-[#1689d8]">Tech Club.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              WikiClub Tech at United University is a student-driven community
              that empowers learners to explore open-source technologies,
              contribute to the Wikimedia ecosystem and build real-world
              projects together.
            </p>

            <a
              href="/about"
              className="group inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1689d8] hover:text-[#0b6eae] transition-colors"
            >
              Learn More
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ y: -6 }}
              className="group relative w-full max-w-[320px] min-h-[280px] rounded-3xl border border-slate-100 bg-[#f7fbff] px-8 py-10 text-center shadow-sm transition-transform duration-300"
            >
              <div
                className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-200"
                style={{
                  opacity: isHovered ? 1 : 0,
                  background:
                    "radial-gradient(220px circle at " +
                    mousePosition.x +
                    "% " +
                    mousePosition.y +
                    "%, rgba(96, 165, 250, 0.11), transparent 72%)",
                }}
              />

              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div
                  className={
                    "mx-auto flex h-16 w-16 items-center justify-center rounded-full " +
                    stats.iconBg +
                    " " +
                    stats.iconColor
                  }
                >
                  <stats.icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-[#0b2540]">
                  {stats.value}
                </h3>

                <p className="mt-3 text-sm font-medium text-slate-500">
                  {stats.label}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
