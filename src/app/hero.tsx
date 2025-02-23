"use client";

import React from "react";
import Button from "./components/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdPersonOutline } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <div className="flex justify-center bg-slate-900">
      <div className="min-h-screen max-w-screen-md">
        <div className="min-h-screen min-w-full flex flex-col items-center justify-center font-[family-name:var(--font-source-code)]">
          <h1 className="flex flex-wrap justify-center w-full text-white text-5xl m-8 font-bold tracking-tighter">
            Vaibhav Sharma
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              icon={FaLinkedinIn}
              backgroundColor="bg-blue-600"
              borderColor="bg-blue-500"
              label="LinkedIn"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/ghost-vaibhav/",
                  "_blank"
                );
              }}
            />
            <Button
              icon={FaGithub}
              backgroundColor="bg-gray-600"
              borderColor="bg-gray-500"
              label="GitHub"
              onClick={() => {
                window.open("https://github.com/GhostVaibhav", "_blank");
              }}
            />
            <Button
              icon={SiLeetcode}
              backgroundColor="bg-amber-600"
              borderColor="bg-amber-500"
              label="LeetCode"
              onClick={() => {
                window.open("https://leetcode.com/ghostvaibhav/", "_blank");
              }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Button
              icon={MdPersonOutline}
              backgroundColor="bg-green-600"
              borderColor="bg-green-500"
              label="About Me"
              pullDownArrow={true}
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Button
              icon={GrProjects}
              backgroundColor="bg-yellow-600"
              borderColor="bg-yellow-500"
              label="Projects"
              pullDownArrow={true}
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Button
              icon={IoCallOutline}
              backgroundColor="bg-red-600"
              borderColor="bg-red-500"
              label="Contact Me!"
              pullDownArrow={true}
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
