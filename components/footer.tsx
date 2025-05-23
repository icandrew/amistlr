"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
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

        <div className="w-full px-6 mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <Link href="/" className="text-black font-semibold text-sm uppercase tracking-wider">
                Avanté
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <NavLink href="/" active>
                Home
              </NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/frequently-asked-questions">FAQs</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E5E5E5]">
        <div className="w-full px-6 mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-700">© 2025 Avanté by Disha Shah. All rights reserved.</p>

            <div className="flex items-center">
              <NavLink href="/privacy-policy">Privacy Policy</NavLink>
              <div className="h-4 w-px bg-[#C2C2C2] mx-2"></div>
              <NavLink href="/terms-and-conditions">Terms &amp; Conditions</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
  active?: boolean
}

function NavLink({ href, children, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-full text-sm hover:bg-black/5 transition-colors ${active ? "font-semibold" : ""}`}
    >
      {children}
    </Link>
  )
}
