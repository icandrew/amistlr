import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-2.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-3.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-4.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/proj-5.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
            <Image
              src="/proj-1.webp"
              alt="project 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover bg-neutral-200 md:h-44 lg:h-60 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            />
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
