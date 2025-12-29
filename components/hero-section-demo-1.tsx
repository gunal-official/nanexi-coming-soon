"use client";
import { motion } from "motion/react";
import { PointerHighlight } from "./ui/pointer-highlight";
export default function FivethSections() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl bg-gradient-to-br dark:from-neutral-900 dark:via-neutral-950 dark:to-blue-950 flex-col items-center justify-center">
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-700/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 py-10 md:py-20">
        <div className="mx-auto max-w-lg py-20 text-center">
          <div className="text-2xl font-bold tracking-tight rounded-2xl md:text-5xl">
            <span className="block mb-2 text-gray-700 dark:text-gray-300">
              Welcome to the future of development
            </span>
            <PointerHighlight>
              <span className="font-extrabold text-blue-600 dark:text-blue-400">
                Empowering innovation with AI-driven software solutions.
              </span>
            </PointerHighlight>
            
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-1 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <video
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
              autoPlay
              muted
              loop
              src="https://res.cloudinary.com/dc3mdr2ol/video/upload/v1767004569/Were_building_something_202512291605_sbr16_bbzhbx.mp4"
            ></video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
