"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function SplashScreen() {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-center"
      >
        <motion.h1 className="lg:text-6xl md:text-5xl tracking-widest text-3xl text-trust font-bold">
          Welcome to
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, rotateY: "180deg" }}
          animate={{ opacity: 1, rotateY: "0deg" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/logo.jpeg"
            alt="Sarthak Construction Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
          className="lg:text-3xl md:text-2xl text-xl text-gold"
        >
          Building Dreams into Reality
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
