"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { jobData } from "@/data/jobData";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";

interface JobData {
  employer_name: string;
  employer_logo: string;
  job_title: string;
  job_description: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
  };
  job_country: string;
  job_employment_type: string;
  job_apply_link: string;
}

const loadingStates = [
  {
    text: "Searching for this job!",
  },
  {
    text: "Getting the job link",
  },
  {
    text: "Here it is!",
  },
];

export default function JobPage({ params }: any) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<JobData>();

  useEffect(() => {
    const jobId = params.job_id;

    if (jobId) {
      const fetchJobDetails = async () => {
        try {
          setLoading(true);
          const result = await jobData(jobId);
          console.log("result", result);
          const jobsData = await result.data;
          console.log("jobsData", jobsData[0]);
          setData(jobsData[0]);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchJobDetails();
    }
  }, [params.job_id]);

  return (
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden  py-10 md:py-0">
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
      {!loading && (
        <div className="z-10 container mx-auto overflow-y-auto max-h-[200rem] text-center">
          {data && (
            <>
              <div className="text-3xl mt-32 font-bold mb-5 text-center">
                Exciting Job Opportunity
              </div>
              <h1 className="text-5xl font-bold mb-10 text-blue-500">
                {data.employer_name}
              </h1>
              {data.employer_logo && (
                <div className="mb-10 mx-auto flex flex-col items-center">
                  <Image
                    loader={() => data.employer_logo}
                    src={data.employer_logo}
                    alt={data.employer_name}
                    width={100}
                    height={100}
                    className="mx-auto mb-2 rounded-full bg-gray-100 shadow-lg"
                  />
                  <span className="text-4xl ml-2 block">{data.job_title}</span>
                </div>
              )}
              {/* <p className="mb-10 mx-4 text-justify">{data.job_description}</p> */}
              {data.job_highlights.Qualifications && (
                <div className="mx-4 mb-10 flex flex-col items-center">
                  <h1 className="text-2xl mb-5">Qualifications:</h1>
                  <ul className="text-justify mb-5 list-disc mx-auto">
                    {data.job_highlights.Qualifications.map(
                      (qualification: any, index: any) => (
                        <li className="mb-3" key={index}>
                          <span>{qualification}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {data.job_highlights.Responsibilities && (
                <div className="mx-4 mb-10 flex flex-col items-center">
                  <h1 className="text-2xl mb-5">Responsibilities:</h1>
                  <ul className="text-justify mb-5 list-disc mx-auto">
                    {data.job_highlights.Responsibilities.map(
                      (qualification: any, index: any) => (
                        <li className="mb-3" key={index}>
                          <span>{qualification}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

              <div className="mb-5 mx-auto">
                <strong className="">Location:</strong> {data.job_country}
              </div>
              <div className="mb-5 mx-auto">
                <strong className="">Employment Type:</strong>{" "}
                {data.job_employment_type}
              </div>
              <div className="mb-10 mx-auto">
                <strong className="">Apply Now:</strong>{" "}
                <a
                  href={data.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Apply Now
                </a>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
