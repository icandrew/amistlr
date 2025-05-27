"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  })

  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.5])

  return (
    <footer ref={footerRef} className="w-full border-t border-[#F0F6FF]">
      <div className="w-full">
        <div className="relative h-[180px] md:h-[200px] overflow-hidden flex justify-center">
          <motion.div
            className="w-full mx-auto max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl h-full"
            style={{
              y: useTransform(scrollYProgress, [0, 0.1], [40, -40]), // simple parallax
              opacity: logoOpacity,
            }}
          >
            <img
              src="/footer-bg.png"
              alt="Avanté background"
              className="w-full h-full object-contain object-center"
              style={{ objectPosition: "center" }}
            />
          </motion.div>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <div className="w-full px-6 mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">© 2025 Amistlr by Andrew Jake Bagsit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
