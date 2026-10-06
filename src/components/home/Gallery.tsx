"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Images from "@/data/gallery/images";

const images = Images;

const Gallery = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="bg-[#f7fbff] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Label */}
          <p className="text-sm font-semibold uppercase tracking-wider text-[#19b99a] mb-3">
            Our Memories
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2540] mb-4">
            Gallery
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#607087] leading-relaxed">
            A glimpse into our community events, workshops, and activities.
          </p>

          {/* Accent Line */}
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#19b99a] to-[#1689d8]" />
        </motion.div>

        {/* =========================
            MASONRY GALLERY
        ========================== */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="
                group
                relative
                mb-5
                break-inside-avoid
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-sm
                border
                border-[#e4edf5]
              "
              onMouseEnter={() => setHoveredImage(image.src)}
              onMouseLeave={() => setHoveredImage(null)}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.3,
              }}
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="
                    w-full
                    h-auto
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0b2540]/45
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                  "
                />

                {/* Small Gallery Icon */}
                <div
                  className="
                    absolute
                    bottom-4
                    right-4
                    flex
                    items-center
                    justify-center
                    w-9
                    h-9
                    rounded-full
                    bg-white/95
                    text-[#1689d8]
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                    shadow-md
                  "
                >
                  <span className="text-lg">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-[#718198]">
            More memories from the WikiClub Tech community coming soon.
          </p>
        </motion.div>
      </div>

      {/* =========================
          FLOATING IMAGE PREVIEW
      ========================== */}
      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none hidden lg:block"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: cursorPosition.x + 20,
              y: cursorPosition.y - 150,
            }}
            exit={{
              opacity: 0,
              scale: 0.85,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
            }}
          >
            <Image
              src={hoveredImage}
              alt="Gallery preview"
              width={300}
              height={200}
              className="
                rounded-xl
                shadow-2xl
                border-2
                border-white
                object-cover
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;