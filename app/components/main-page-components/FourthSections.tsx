// How we works
"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import ProcessFlow from "./websites-contents/How-we-works";

export function FourthSections() {
  return (
    <>
      {/* Header */}
      <div className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="flex items-center justify-center space-x-5">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">
              How We
            </h2>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-600 mb-2 tracking-tight">
              Work
            </h2>
          </div>

          <div className="w-full max-w-2xl">
            <PointerHighlight
              rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
              pointerClassName="text-yellow-500"
            >
              <span className="relative z-10 text-xl md:text-2xl font-semibold">
                One-week Sprints | No Billable Hours | Only Outcomes
              </span>
              <p className="relative z-10 text-base md:text-lg text-gray-600 mt-2">
                Just Focused Delivery, Every Week
              </p>
            </PointerHighlight>
          </div>
        </div>
       {/* How-we work components */}
       <ProcessFlow/>
      </div>
    </>
  );
}

//  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full mt-16">
//           {/* 1 */}
//           <WobbleCard
//             containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
//             className=""
//           >
//             <div className="max-w-xs">
//               <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//                 Gippity AI powers the entire universe
//               </h2>
//               <p className="mt-4 text-left  text-base/6 text-neutral-200">
//                 With over 100,000 mothly active bot users, Gippity AI is the
//                 most popular AI platform for developers.
//               </p>
//             </div>
//             <img
//               src="/linear.webp"
//               width={500}
//               height={500}
//               alt="linear demo image"
//               className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
//             />
//           </WobbleCard>

//           {/* -2 */}
//           <WobbleCard containerClassName="col-span-1 min-h-[300px]">
//             <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//               No shirt, no shoes, no weapons.
//             </h2>
//             <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//               If someone yells “stop!”, goes limp, or taps out, the fight is
//               over.
//             </p>
//           </WobbleCard>

//           {/* 3 */}
//           <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
//             <div className="max-w-sm">
//               <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
//                 Signup for blazing-fast cutting-edge state of the art Gippity AI
//                 wrapper today!
//               </h2>
//               <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
//                 With over 100,000 mothly active bot users, Gippity AI is the
//                 most popular AI platform for developers.
//               </p>
//             </div>
//             <img
//               src="/linear.webp"
//               width={500}
//               height={500}
//               alt="linear demo image"
//               className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
//             />
//           </WobbleCard>
//         </div>