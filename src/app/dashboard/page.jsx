"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SplashScreen } from "../Components/DashboardComponents/SplashScreen";
import Dashboard from "../Components/Dashboard";

function DashboardPage() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        {showSplash ? <SplashScreen /> : <Dashboard />}
      </AnimatePresence>
    </div>
  );
}

export default DashboardPage;
