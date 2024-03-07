"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { jobData } from "@/data/jobData";

interface JobData {
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

export default function JobPage({ params }: any) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState<JobData>()

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
    <div className="h-auto w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="z-10 container mx-auto overflow-y-auto max-h-[200rem] text-center">
          <div className="text-3xl mt-32 font-bold mb-5 text-center">
            Exciting Job Opportunity
          </div>
          {data && (
            <>
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
                  <span className="text-4xl ml-2 block">
                    {data.job_title}
                  </span>
                </div>
              )}
              <p className="mb-10 text-justify">{data.job_description}</p>
              {data.job_highlights.Qualifications && (
                <div className="mx-auto mb-10 flex flex-col items-center">
                  <h1 className="text-2xl mb-5">
                    Qualifications:
                  </h1>
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

              <div className="mb-5 mx-auto">
                <strong className="">Location:</strong>{" "}
                {data.job_country}
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
