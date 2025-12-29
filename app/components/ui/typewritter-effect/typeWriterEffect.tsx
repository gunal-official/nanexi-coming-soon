"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "We Build",
    },
    {
      text: " Intelligent",
    },
    {
      text: "Software",
    },
    {
      text: "That",
    },
    {
      text: "Scales.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 p-3 dark:text-neutral-200 text-xs sm:text-base  ">
        For startups and growing businesses using AI, automation, and data.
      </p>
          {/* <a href="https://calendly.com/" target="_blank">
            <span className=" cursor-pointer font-semibold text-center item-center flex justify-center">
              Book a Strategy Call
            </span>
          </a>
          {/* Right arrow icon (react-icons) */}
          {/* <HiOutlineArrowRight className="w-5 h-5" /> */}
    </div>
  );
}
