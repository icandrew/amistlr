import { AuroraText } from "@/components/magicui/aurora-text"
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

function LottieWreath() {
  const [wreathData, setWreathData] = useState<object | null>(null);
  useEffect(() => {
    fetch("https://assets.awwwards.com/assets/redesign/images/lottie/laurel-wreath.json")
      .then((res) => res.json())
      .then(setWreathData)
      .catch(() => setWreathData(null));
  }, []);
  if (!wreathData) return null;
  return (
    <Lottie
      animationData={wreathData}
      loop
      autoplay
      style={{ width: '1.2em', height: '1.2em' }}
    />
  );
}

export default function HeroAurora() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 py-8 md:py-8 md:px-8 lg:py-24 lg:px-16"
      style={{ boxSizing: 'border-box' }}
    >
      <h1 className="text-4xl font-bold justify-center text-center tracking-tighter md:text-5xl lg:text-7xl relative inline-block">
        Ship {" "}
        <span className="relative inline-block">
          <AuroraText>beautiful</AuroraText>
          <span className="absolute right-[-0.8em] -bottom-3">
            <LottieWreath />
          </span>
        </span>
        <br />
        lorem ipsum dolor sit amet adipisicing elit.
      </h1>
    </section>
  );
}