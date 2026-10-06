"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaBars,
  FaTimes,
  FaEllipsisV,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Teams", href: "/teams" },
  { label: "Validator", href: "/validator" },
  { label: "Achievement Board", href: "/contributors" },
  { label: "Events", href: "/events" },
];

const resources = [
  {
    label: "PYQ",
    href: "/pyq",
  },
];

const programs = [
  {
    label: "Chai with Wiki",
    href: "#",
  },
  {
    label: "Road to Wiki",
    href: "#",
  },
];

const overflowItems = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openOverflow, setOpenOverflow] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
    setOpenOverflow(false);
  };

  const closeMenus = () => {
    setOpenDropdown(null);
    setOpenOverflow(false);
    setMobileOpen(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        border-gray-100
        bg-white/95
        backdrop-blur-md
        shadow-sm
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={closeMenus}
            className="group flex items-center shrink-0"
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <Image
                src="/WikiClub_New.png"
                alt="WikiClub Tech Logo"
                width={240}
                height={80}
                priority
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </motion.div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    group
                    relative
                    rounded-lg
                    px-3.5
                    py-2
                    text-[14px]
                    font-semibold
                    transition-all
                    duration-200
                    ease-out
                    ${
                      active
                        ? "bg-sky-50 text-sky-600"
                        : `
                          text-gray-600
                          hover:bg-sky-50
                          hover:text-sky-600
                          hover:-translate-y-[1px]
                        `
                    }
                  `}
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>

                  {active && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="
                        absolute
                        left-1/2
                        bottom-0
                        h-[3px]
                        w-5
                        -translate-x-1/2
                        rounded-full
                        bg-sky-500
                      "
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("resources")}
                className={`
                  relative
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  px-3.5
                  py-2
                  text-[14px]
                  font-semibold
                  transition-all
                  duration-200
                  ease-out
                  ${
                    openDropdown === "resources"
                      ? `
                        bg-sky-50
                        text-sky-600
                        -translate-y-[1px]
                      `
                      : `
                        text-gray-600
                        hover:bg-sky-50
                        hover:text-sky-600
                        hover:-translate-y-[1px]
                      `
                  }
                `}
              >
                <span>Help Desk</span>

                <motion.span
                  animate={{
                    rotate: openDropdown === "resources" ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <FaChevronDown className="text-[10px]" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openDropdown === "resources" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="
                      absolute
                      right-0
                      top-full
                      mt-2
                      w-48
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-100
                      bg-white
                      p-1.5
                      shadow-xl
                      shadow-gray-200/50
                    "
                  >
                    {resources.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="
                          block
                          rounded-lg
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-gray-600
                          transition-all
                          duration-200
                          hover:bg-sky-50
                          hover:text-sky-600
                          hover:translate-x-1
                        "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown("programs")}
                className={`
                  relative
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  px-3.5
                  py-2
                  text-[14px]
                  font-semibold
                  transition-all
                  duration-200
                  ease-out
                  ${
                    openDropdown === "programs"
                      ? `
                        bg-sky-50
                        text-sky-600
                        -translate-y-[1px]
                      `
                      : `
                        text-gray-600
                        hover:bg-sky-50
                        hover:text-sky-600
                        hover:-translate-y-[1px]
                      `
                  }
                `}
              >
                <span>Programs</span>

                <motion.span
                  animate={{
                    rotate: openDropdown === "programs" ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <FaChevronDown className="text-[10px]" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openDropdown === "programs" && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="
                      absolute
                      right-0
                      top-full
                      mt-2
                      w-52
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-100
                      bg-white
                      p-1.5
                      shadow-xl
                      shadow-gray-200/50
                    "
                  >
                    {programs.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="
                          block
                          rounded-lg
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-gray-600
                          transition-all
                          duration-200
                          hover:bg-sky-50
                          hover:text-sky-600
                          hover:translate-x-1
                        "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.a
              href="https://forms.gle/FGoyrEHC1CuP9hPSA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -2,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="
                ml-2
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-sky-500
                px-5
                py-2.5
                text-[14px]
                font-bold
                text-white
                shadow-md
                shadow-sky-200/50
                transition-all
                duration-300
                hover:shadow-lg
                hover:shadow-sky-300/60
              "
            >
              Join Us
            </motion.a>

            <div className="relative ml-1">
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                onClick={() => {
                  setOpenOverflow((prev) => !prev);
                  setOpenDropdown(null);
                }}
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    openOverflow
                      ? "bg-sky-50 text-sky-600"
                      : `
                        text-gray-500
                        hover:bg-sky-50
                        hover:text-sky-600
                      `
                  }
                `}
                aria-label="More"
              >
                <FaEllipsisV className="text-sm" />
              </motion.button>

              <AnimatePresence>
                {openOverflow && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                    className="
                      absolute
                      right-0
                      top-full
                      mt-2
                      w-52
                      overflow-hidden
                      rounded-xl
                      border
                      border-gray-100
                      bg-white
                      p-1.5
                      shadow-xl
                      shadow-gray-200/50
                    "
                  >
                    {overflowItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={closeMenus}
                        className="
                          block
                          rounded-lg
                          px-4
                          py-2.5
                          text-sm
                          font-semibold
                          text-gray-600
                          transition-all
                          duration-200
                          hover:bg-sky-50
                          hover:text-sky-600
                          hover:translate-x-1
                        "
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              lg:hidden
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-gray-700
              transition-all
              duration-200
              hover:bg-sky-50
              hover:text-sky-600
            "
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaTimes />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <FaBars />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-gray-100
              "
            >
              <div className="py-4">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className={`
                        relative
                        block
                        rounded-lg
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        transition-all
                        duration-200
                        ${
                          active
                            ? `
                              bg-sky-50
                              text-sky-600
                              translate-x-1
                            `
                            : `
                              text-gray-600
                              hover:bg-sky-50
                              hover:text-sky-600
                              hover:translate-x-1
                            `
                        }
                      `}
                    >
                      {item.label}

                      {active && (
                        <motion.span
                          layoutId="mobile-active-indicator"
                          className="
                            absolute
                            left-0
                            top-2
                            bottom-2
                            w-1
                            rounded-r-full
                            bg-sky-500
                          "
                        />
                      )}
                    </Link>
                  );
                })}

                <button
                  type="button"
                  onClick={() =>
                    toggleDropdown("mobile-resources")
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      openDropdown === "mobile-resources"
                        ? `
                          bg-sky-50
                          text-sky-600
                        `
                        : `
                          text-gray-600
                          hover:bg-sky-50
                          hover:text-sky-600
                        `
                    }
                  `}
                >
                  <span>Help Desk</span>

                  <motion.span
                    animate={{
                      rotate:
                        openDropdown === "mobile-resources"
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openDropdown === "mobile-resources" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="ml-4 overflow-hidden"
                    >
                      {resources.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="
                            block
                            rounded-lg
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-gray-500
                            transition-all
                            duration-200
                            hover:bg-sky-50
                            hover:text-sky-600
                            hover:translate-x-1
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() =>
                    toggleDropdown("mobile-programs")
                  }
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      openDropdown === "mobile-programs"
                        ? `
                          bg-sky-50
                          text-sky-600
                        `
                        : `
                          text-gray-600
                          hover:bg-sky-50
                          hover:text-sky-600
                        `
                    }
                  `}
                >
                  <span>Programs</span>

                  <motion.span
                    animate={{
                      rotate:
                        openDropdown === "mobile-programs"
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openDropdown === "mobile-programs" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="ml-4 overflow-hidden"
                    >
                      {programs.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMenus}
                          className="
                            block
                            rounded-lg
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-gray-500
                            transition-all
                            duration-200
                            hover:bg-sky-50
                            hover:text-sky-600
                            hover:translate-x-1
                          "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.a
                  href="https://forms.gle/FGoyrEHC1CuP9hPSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    mt-3
                    block
                    rounded-full
                    bg-gradient-to-r
                    from-cyan-500
                    to-sky-500
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-bold
                    text-white
                    shadow-md
                    shadow-sky-200/50
                  "
                >
                  Join Us
                </motion.a>

                <div className="mt-2 border-t border-gray-100 pt-2">
                  {overflowItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenus}
                      className="
                        block
                        rounded-lg
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-gray-500
                        transition-all
                        duration-200
                        hover:bg-sky-50
                        hover:text-sky-600
                        hover:translate-x-1
                      "
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;