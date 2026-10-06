"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { toast } from "sonner";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      toast.success("Thanks for subscribing! You'll hear from us soon.");
      setEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-slate-800 p-7 shadow-sm"
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -5,
      }}
    >
      {/* Decorative glow */}
      <motion.div
        className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-sky-400"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          whileHover={{
            scale: 1.06,
            rotate: -3,
          }}
        >
          <FaEnvelope className="text-2xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          <h3 className="mt-6 text-xl font-bold text-white">
            Subscribe to our Newsletter
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Get the latest news, events, learning opportunities, and updates
            from our community.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 w-full"
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            required
            disabled={submitting}
            className="block w-full box-border rounded-xl border border-gray-700 bg-gray-800/80 px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition-all duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 disabled:cursor-not-allowed disabled:opacity-60"
          />

          <motion.button
            type="submit"
            disabled={submitting}
            className="mt-3 block w-full rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-900/20 transition-all duration-200 hover:from-cyan-400 hover:to-sky-400 disabled:cursor-not-allowed disabled:opacity-50"
            whileHover={{
              scale: submitting ? 1 : 1.02,
            }}
            whileTap={{
              scale: submitting ? 1 : 0.98,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {submitting ? "Subscribing..." : "Subscribe"}
          </motion.button>
        </motion.form>

        <motion.p
          className="mt-4 text-xs text-gray-500"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >
          Stay updated without the noise.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default NewsletterForm;