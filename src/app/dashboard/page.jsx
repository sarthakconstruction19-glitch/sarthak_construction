"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function DashboardPage() {
  // 1. Initialize as NULL (meaning "We don't know yet")
  const [showSplash, setShowSplash] = useState(null);

  useEffect(() => {
    // 2. Check storage immediately on mount
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setShowSplash(false);
    } else {
      setShowSplash(true);

      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (showSplash === null) {
    return null;
  }

  const SplashScreen = () => {
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
              src={"/logo.jpeg"}
              alt="Sarthak Construction Logo"
              width={400}
              height={400}
              className="mx-auto"
            />
          </motion.div>
          <motion.p
            initial={{ translateX: "-100vw" }}
            animate={{ translateX: 0 }}
            transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
            className=" lg:text-3xl md:text-2xl text-xl text-gold"
          >
            Building Dreams into Reality
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden ">
      <AnimatePresence mode="wait">
        {showSplash ? (
          // === SPLASH SCREEN ===
          <SplashScreen />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-text-body lg:p-24 md:p-18 p-5 flex min-h-screen flex-col items-center justify-center  "
          >
            <div className="">
              <h1 className="text-4xl font-bold">
                Welcome to Construction Co.
              </h1>
              <p className="mt-4 text-xl">Building Dreams into Reality</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DashboardPage;
