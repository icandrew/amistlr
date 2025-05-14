"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

/**
 * AuroraBackgroundDemo renders a demo section with animated background lights and call-to-action.
 * Uses Framer Motion for entry animation and is responsive.
 */
export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 md:px-20"
      >
        <div className="text-3xl md:text-7xl font-bold text-center font-sans text-foreground">
          Background lights are cool you know.
        </div>
        <div className="font-extralight text-base md:text-4xl text-muted-foreground py-4 font-sans">
          And this, is chemical burn.
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
