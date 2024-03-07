"use client";

import React from "react";
import { Card } from "@/components/Card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { jobsList } from "@/data/jobsList";

interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_description: string;
  job_highlights: {
    Qualifications: string[];
  };
  job_country: string;
  job_employment_type: string;
  job_apply_link: string;
}

export default function Jobslisting() {
  const [query, setQuery] = React.useState("");
  const [jobsData, setJobsData] = React.useState<Job[]>([]);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const jobsAPIResponse = await jobsList(query);
      const list = jobsAPIResponse.data;
      setJobsData(list);
    } catch (error) {
      console.error("Error fetching Jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };

  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
      <div className="z-10 overflow-y-auto max-h-[200rem]">
        <h1 className="text-3xl mt-32 font-bold mb-5 text-center">Jobs List</h1>
        <div className="flex justify-center items-center">
          <form
            className="my-8 mb-4 flex flex-col sm:flex-row items-center gap-2"
            onSubmit={handleSubmit}
          >
            <Input
              id="Search Jobs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for jobs..."
              className="text-black border p-2 mb-2 sm:mb-0 sm:mr-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 px-5"
            />
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-48 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Search Jobs
              <BottomGradient />
            </button>
          </form>
        </div>
        <div className="h-auto overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-4 my-10">
              {jobsData &&
                jobsData.map((job, index) => (
                  <div key={index}>
                    <Card job={job} />
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
