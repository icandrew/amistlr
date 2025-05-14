"use client";

// External libraries
import { motion } from "framer-motion";

// Internal components
import HeroAurora from "@/components/HeroAurora";
import { ScrollBasedVelocityDemo } from "@/components/ScrollBasedVelocityDemo";
import { DockDemo } from "@/components/DockDemo";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { cardDemoData, CardDemo } from "@/components/cards-demo-3";

// Animation variants for cards
const cardGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// Main Home component
import { useEffect, useState } from "react";

export default function Home() {
  // Hydration guard: only render after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* Main container for the landing page */}
      <div
        className="flex flex-col items-center justify-center min-h-screen py-8 pb-16 gap-8 sm:px-8 sm:py-16 sm:pb-20 md:gap-12 md:px-16 md:py-20 font-[family-name:var(--font-geist-sans)] bg-background"
      >
        {/* Hero Section */}
        <section className="w-full flex items-center justify-center min-h-[100dvh] px-6 pt-8 pb-0 sm:pt-12 sm:pb-0 md:mt-16">
          <HeroAurora />
        </section>

        {/* Spacer to push cards below the fold on mobile only */}
        <div className="block md:hidden" style={{ minHeight: '40vh' }} />

        {/* Card Grid Section */}
        <section className="w-full px-6 mt-0 sm:mt-12 md:mt-16">
          <motion.div
            variants={cardGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center"
          >
            {cardDemoData.map((card, index) => (
              <motion.div
                key={index}
                variants={cardItemVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-full h-[300px] md:h-[320px] lg:h-[400px]"
              >
                <CardDemo
                  image={card.image}
                  title={card.title}
                  description={card.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Scroll-based Animation Demo */}
        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <ScrollBasedVelocityDemo />
        </section>

        {/* Features Section */}
        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <FeaturesSectionDemo />
        </section>

        {/* Aurora Background Demo */}
        <section className="w-full px-6 mt-8 sm:mt-12 md:mt-16">
          <AuroraBackgroundDemo />
        </section>
      </div>

      {/* Dock at the bottom of the page */}
      <DockDemo />
    </>
  );
}
