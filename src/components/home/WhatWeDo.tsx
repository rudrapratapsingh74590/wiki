"use client";

import React, { MouseEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BookOpen,
  CalendarDays,
  Lightbulb,
  GitBranch,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    title: "Open Source",
    description:
      "Explore real open-source projects, make contributions and learn collaborative development.",
    icon: Code2,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
  },
  {
    title: "Workshops & Sessions",
    description:
      "Take part in practical workshops, technical sessions and hands-on learning activities.",
    icon: BookOpen,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    title: "Technical Events",
    description:
      "Participate in hackathons, coding activities, community events and technology-focused programs.",
    icon: CalendarDays,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
  },
  {
    title: "Projects",
    description:
      "Turn ideas into practical projects and experiment with technologies that solve real problems.",
    icon: Lightbulb,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
  },
  {
    title: "Community Programs",
    description:
      "Join initiatives that encourage knowledge sharing, participation and contribution within the community.",
    icon: GitBranch,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-50",
  },
];

const WhatWeDo = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePositions, setMousePositions] = useState<Record<number, { x: number; y: number }>>({});
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMousePositions((previous) => ({ ...previous, [index]: { x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 } }));
  };
  return (
    <section
      id="what-we-do"
      className="bg-[#f0f8fd] py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ================================
            SECTION HEADER
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#1689d8]" />

            <span className="text-xs font-bold tracking-[0.16em] uppercase text-slate-500">
              What We Do
            </span>

            <span className="w-8 h-[2px] bg-[#1689d8]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2540]">
            Learn. Build.{" "}
            <span className="text-[#1689d8]">Contribute.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            We create practical opportunities for students to explore
            technology, build projects, participate in events and contribute
            to open-source initiatives.
          </p>
        </motion.div>

        {/* ================================
            ACTIVITY CARDS
        ================================= */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const position = mousePositions[index] || { x: 50, y: 50 };

            return (
              <motion.div
                key={activity.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseMove={(event) => handleMouseMove(event, index)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                className="
                  group
                  relative
                  rounded-2xl
                  border
                  border-slate-100
                  bg-white
                  p-6
                  shadow-sm
                  transition-transform
                  duration-300
                "
              >
                <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-200" style={{ opacity: hoveredCard === index ? 1 : 0, background: "radial-gradient(190px circle at " + position.x + "% " + position.y + "%, rgba(96, 165, 250, 0.11), transparent 72%)" }} />

                <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    ${activity.iconBg}
                    ${activity.iconColor}
                  `}
                >
                  <Icon size={23} strokeWidth={2} />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-[#0b2540]">
                  {activity.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {activity.description}
                </p>

                {/* Arrow */}
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-slate-50
                    text-slate-400
                    opacity-0
                    group-hover:opacity-100
                    group-hover:bg-sky-50
                    group-hover:text-sky-600
                    transition-all
                    duration-300
                  "
                >
                  <ArrowUpRight size={15} />
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ================================
            BOTTOM NOTE
        ================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-500">
            Explore technology. Build projects. Contribute to the community.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;