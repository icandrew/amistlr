import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">AI Timeline Launch</h3>
          <p className="text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-3">
            Launched AI-powered timeline, introducing smart history tracking and advanced analytics for our users.
          </p>
          <ul className="mb-10 pl-5 list-disc text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            <li>Automated event detection and categorization</li>
            <li>Real-time collaboration features</li>
            <li>Advanced filtering and search</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 w-full md:gap-8 md:grid-cols-2 md:w-full">
            {[1,2,3,4].map(i => (
              <div className="relative w-full aspect-[1/1]" key={i}>
                <Image
                  src={`/thumb${i}.jpeg`}
                  alt={`Timeline thumb ${i}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover bg-neutral-200 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Aceternity UI & Pro Released</h3>
          <p className="text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-3">
            Released Aceternity UI and Pro, empowering teams to build beautiful, accessible interfaces faster.
          </p>
          <ul className="mb-10 pl-5 list-disc text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            <li>Over 30 new reusable components</li>
            <li>Dark mode and accessibility improvements</li>
            <li>Comprehensive documentation and examples</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 w-full md:gap-8 md:grid-cols-2 md:w-full">
            {[5,6,7,1].map(i => (
              <div className="relative w-full aspect-[1/1]" key={i}>
                <Image
                  src={`/thumb${i}.jpeg`}
                  alt={`Timeline thumb ${i}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover bg-neutral-200 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Open Source & Partnerships</h3>
          <p className="text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-3">
            Formed key partnerships and launched multiple open-source UI libraries for the community.
          </p>
          <ul className="mb-10 pl-5 list-disc text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            <li>Collaborated with 5+ companies</li>
            <li>First 1,000 GitHub stars reached</li>
            <li>Community-driven feature requests</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 w-full md:gap-8 md:grid-cols-2 md:w-full">
            {[2,3,4,5].map(i => (
              <div className="relative w-full aspect-[1/1]" key={i}>
                <Image
                  src={`/thumb${i}.jpeg`}
                  alt={`Timeline thumb ${i}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover bg-neutral-200 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Project Inception</h3>
          <p className="text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-3">
            Project inception: set vision for design, accessibility, and a seamless developer experience.
          </p>
          <ul className="mb-10 pl-5 list-disc text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            <li>Initial design system drafted</li>
            <li>Core team assembled</li>
            <li>First UI prototypes tested</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 w-full md:gap-8 md:grid-cols-2 md:w-full">
            {[6,7,1,2].map(i => (
              <div className="relative w-full aspect-[1/1]" key={i}>
                <Image
                  src={`/thumb${i}.jpeg`}
                  alt={`Timeline thumb ${i}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover bg-neutral-200 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">Changelog</h3>
          <p className="text-base md:text-lg font-normal text-neutral-800 dark:text-neutral-200 mb-3">
            Deployed timeline demo, maximized image usage, and improved UI/UX polish.
          </p>
          <ul className="mb-10 pl-5 list-disc text-sm md:text-base text-neutral-700 dark:text-neutral-300">
            <li>Added grid-based image layouts</li>
            <li>Improved responsiveness and accessibility</li>
            <li>Enhanced visual polish and documentation</li>
          </ul>
          <div className="grid grid-cols-2 gap-4 w-full md:gap-8 md:grid-cols-2 md:w-full">
            {[3,4,5,6].map(i => (
              <div className="relative w-full aspect-[1/1]" key={i}>
                <Image
                  src={`/thumb${i}.jpeg`}
                  alt={`Timeline thumb ${i}`}
                  fill
                  sizes="100vw"
                  className="rounded-lg object-cover bg-neutral-200 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },


  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
