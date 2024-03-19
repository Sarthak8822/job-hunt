import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-400 font-bold text-3xl pb-6">
              Job<span className="text-blue-400">Hunt</span>
            </p>
            <div className="flex gap-6 pb-5">
              <Link href="https://twitter.com/Sarthak82834021" target="_blank">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.linkedin.com/in/sarthak-modhe" target="_blank">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://github.com/Sarthak8822" target="_blank">
                <FaGithub className="text-2xl cursor-pointer hover:text-gray-500" />
              </Link>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-400 font-bold text-2xl pb-4">Jobs List</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="/Jobslisting">Jobs List</Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-400 font-bold text-2xl pb-4">
              DSA and Interview
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link href="https://takeuforward.org/" target="_blank">
                Striver
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link
                href="https://www.codingninjas.com/studio/problem-lists/love-babbar-dsa-sheet-problems"
                target="_blank"
              >
                Love Babbar
              </Link>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              <Link
                href="https://drive.google.com/file/d/1F2tvjs-xzd0bvF3oyAeupsLlN0gznpW8/view?usp=sharing"
                target="_blank"
              >
                Last minute Interview prep
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-400 font-bold text-2xl pb-4">
              Many more to come...
            </p>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-900">
        <h1 className=" text-gray-400 font-semibold">
          © 2024 All rights reserved | Built with ❤ by {" "}
          <Link href="https://github.com/Sarthak8822">
            <span className="hover:text-blue-400 font-semibold cursor-pointer">
              Me{" "}
            </span>
          </Link>
        </h1>
      </div>
    </>
  );
}

export default Footer;
