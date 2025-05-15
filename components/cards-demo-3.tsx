"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Props for CardDemo component.
 */
export interface CardDemoProps {
  image: string;
  title: string;
  description: string;
}

/**
 * CardDemo displays an image card with overlay, title, and description.
 * Used in card grid demo.
 */

export function CardDemo({ image, title, description }: CardDemoProps) {
  const [revealed, setRevealed] = useState(false);

  // Helper: on mobile/tablet, tap toggles reveal; on desktop, hover works as before
  const handleToggle = (e: React.MouseEvent | React.TouchEvent) => {
    // Only activate on mobile/tablet (md: below 768px)
    if (window.innerWidth < 768) {
      e.stopPropagation();
      setRevealed((r) => !r);
    }
  };

  return (
    <Card
      className={"relative group/card overflow-hidden p-0 w-full h-full"}
      onClick={handleToggle}
      onTouchEnd={handleToggle}
      style={{ touchAction: "manipulation" }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="absolute inset-0 w-full h-full md:h-[400px] rounded-lg shadow-sm object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-start pointer-events-none md:pointer-events-auto">
        <div
          className={cn(
            "w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-300",
            revealed ? "opacity-100" : "opacity-100 md:opacity-0 md:group-hover/card:opacity-100"
          )}
        >
          <div className="px-6 pb-6">
            <CardTitle className="text-white drop-shadow-lg text-left">{title}</CardTitle>
            <CardDescription className="text-neutral-200 dark:text-neutral-300 drop-shadow-md text-left">
              {description}
            </CardDescription>
          </div>
        </div>
      </div>
    </Card>
  );
}

// ✅ Named export
export const cardDemoData = [
  {
    image: "/thumb1.jpeg",
    title: "Damn good card 1",
    description: "A card that showcases a set of tools that you use to create your product.",
  },
  {
    image: "/thumb2.jpeg",
    title: "Damn good card 2",
    description: "A card that showcases a set of tools that you use to create your product.",
  },
  {
    image: "/thumb3.jpeg",
    title: "Damn good card 3",
    description: "A card that showcases a set of tools that you use to create your product.",
  },
  {
    image: "/thumb5.jpeg",
    title: "Damn good card 4",
    description: "A new card with an inspiring image and description for your product.",
  },
  {
    image: "/thumb6.jpeg",
    title: "Damn good card 5",
    description: "Another creative card to enhance your card grid and visual experience.",
  },
  {
    image: "/thumb7.jpeg",
    title: "Damn good card 6",
    description: "A final card to complete the set, demonstrating flexibility and design.",
  },
];

export const Card = ({
  className,
  children,
  onClick,
  onTouchEnd,
  style,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onTouchEnd?: React.TouchEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      style={style}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
