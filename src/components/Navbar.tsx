"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/Jobslisting">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Jobs"
          ></MenuItem>
        </Link>
        <MenuItem
          setActive={setActive}
          active={active}
          item="DSA And Interview"
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://takeuforward.org/" target="_blank">
              Striver
            </HoveredLink>
            <HoveredLink href="#">Love Babbar</HoveredLink>
            <HoveredLink
              href="https://drive.google.com/file/d/1F2tvjs-xzd0bvF3oyAeupsLlN0gznpW8/view?usp=sharing"
              target="_blank"
            >
              Last minute Interview Prep
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href="#">
          <MenuItem
            setActive={setActive}
            active={active}
            item="ResumeBuilder"
          ></MenuItem>
        </Link>
        <Link href="#">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Me"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
