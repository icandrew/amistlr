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
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center -mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
          Ship{" "}
          <span className="relative inline-block">
            <AuroraText>beautiful</AuroraText>
            <span className="absolute right-[-0.8em] -bottom-3">
              <LottieWreath />
            </span>
          </span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-6xl text-muted-foreground">
            lorem ipsum dolor sit amet adipisicing elit.
          </span>
        </h1>
      </div>
    </div>
  );
}