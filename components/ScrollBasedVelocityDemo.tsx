import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="relative flex w-full max-w-full flex-col items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16 font-sans">
      <VelocityScroll defaultVelocity={2.5}>Velocity Scroll</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-background" />
    </div>
  );
}
