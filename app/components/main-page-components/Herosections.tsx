"use client";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect.tsx/Hero-section-background";
import { TypewriterEffectSmoothDemo } from "../ui/typewritter-effect/typeWriterEffect";
// import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export function HeroSections() {
  return (
    <div className="relative flex min-h-screen  w-full flex-col items-start justify-start overflow-hidden">
      {/* This is ripple effect compoenets */}
      <BackgroundRippleEffect />
      <div className="mt-1 w-full">
        <TypewriterEffectSmoothDemo />
      </div>
    </div>
  );
}
