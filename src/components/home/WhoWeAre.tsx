"use client";

import React from "react";
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
              className="group w-full max-w-[180px] rounded-2xl border border-slate-100 bg-[#f7fbff] px-5 py-7 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${stats.iconBg} ${stats.iconColor}`}
              >
                <stats.icon size={22} strokeWidth={2} />
              </div>

              <h3 className="mt-5 text-2xl font-extrabold text-[#0b2540]">
                {stats.value}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {stats.label}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
