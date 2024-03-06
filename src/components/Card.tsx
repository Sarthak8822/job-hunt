"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

interface Job {
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_description: string;
  job_apply_link: string;
  job_country: string;
}

export function Card({ job }: { job: Job }) {
  console.log(job.employer_name);
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {job.employer_logo && (
          <Image
            loader={() => job.employer_logo}
            src={job.employer_logo}
            alt="employer_logo"
            height="400"
            width="400"
            className="object-contain"
          />
        )}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {job.employer_name}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {job.job_title}
        </p>
        {job.job_country && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {job.job_country}
          </p>
        )}
        <div className="flex justify-center items-center">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            More
          </button>
        </div>
      </BackgroundGradient>
    </div>
  );
}
