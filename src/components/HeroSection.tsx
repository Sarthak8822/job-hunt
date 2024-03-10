import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="h-fit md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-5">
          Find the unique jobs all over the globe
        </h1>
        <p className="mt-24 font-normal text-lg md:text-lg text-neutral-300 max-w-lg mx-auto">
          With JobHunt, you can find the right job for you. Explore the world of
          coding with JobHunt
        </p>
        <div className="mt-24">
          <Link href="/Jobslisting">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Find Jobs
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
