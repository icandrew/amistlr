import React from "react";

/**
 * HeroAurora - Animated headline with aurora gradient and line-shadow effect.
 * Uses semantic HTML, accessibility best practices, and maintainable styles.
 */
export default function HeroAurora() {
  // Aurora animated gradient for the word "beautiful"
  const auroraGradient = {
    backgroundImage:
      "linear-gradient(135deg, #FF0080, #7928CA, #0070F3, #38bdf8, #FF0080)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: "10s",
    backgroundSize: "200% auto"
  } as React.CSSProperties;

  // Shadow color for the "record" word
  const shadowStyle = {
    "--shadow-color": "black" as string
  } as React.CSSProperties;

  return (
    <div className="flex w-full justify-center items-center">
      <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-7xl text-center">
      Ship{' '}
      <span className="relative inline-block">
        <span className="sr-only">beautiful</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
          style={auroraGradient}
          aria-hidden="true"
        >
          beautiful
        </span>
      </span>
      <br />
      products in{' '}
      <span
        className="relative z-0 inline-flex after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)] after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)] after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent after:animate-line-shadow italic tracking-tighter font-bold"
        data-text="record"
        style={shadowStyle}
      >
        record
      </span>{' '}
      time
    </h1>
    </div>
  );
}

