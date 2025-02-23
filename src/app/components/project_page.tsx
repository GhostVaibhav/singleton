"use client";

import React from "react";
import Button from "./button";
import { FaGithub } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { MdCallMade } from "react-icons/md";

interface ProjectPageProps {
  projectTitle: string;
  image: StaticImageData;
  body: string;
  githubLink: string;
  externalLink?: string;
}

export default function ProjectPage(props: ProjectPageProps) {
  return (
    <div className="tracking-tighter p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">{props.projectTitle}</h1>
      <p className="text-lg">{props.body}</p>
      <Image
        className="border border-white rounded-lg"
        src={props.image}
        alt="Placeholder"
      />
      <div className="flex flex-col md:flex-row gap-2">
        <Button
          icon={FaGithub}
          backgroundColor="bg-gray-600"
          borderColor="bg-gray-500"
          label="View on GitHub"
          onClick={() => {
            window.open(props.githubLink, "_blank");
          }}
          properties="w-full"
        />
        {props.externalLink && (
          <Button
            icon={MdCallMade}
            backgroundColor="bg-amber-600"
            borderColor="bg-amber-500"
            label="Open in new tab"
            onClick={() => {
              window.open(props.externalLink, "_blank");
            }}
            properties="w-full"
          />
        )}
      </div>
    </div>
  );
}
