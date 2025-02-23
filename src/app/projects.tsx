"use client";

import React from "react";
import ProjectPage from "./components/project_page";
import portfolio_image from "./images/portfolio.png";
import markit_image from "./images/markit.png";
import vupdate_image from "./images/vupdate.png";
import redirect_image from "./images/redirect.png";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 text-white font-[family-name:var(--font-source-code)]">
      <div className="md:sticky md:top-0 md:h-fit">
        <h1 id="projects" className="text-2xl p-8 font-bold tracking-tighter">
          My Projects
        </h1>
      </div>
      <div className="flex flex-col">
        <ProjectPage
          projectTitle="Simple"
          image={portfolio_image}
          body="My new personal website created using React and Tailwind CSS"
          githubLink="https://github.com/GhostVaibhav/Simple"
          externalLink="https://ghostvaibhav.com"
        />
        <ProjectPage
          projectTitle="MarkIt"
          image={markit_image}
          body="A cross-platform TODO terminal app"
          githubLink="https://github.com/GhostVaibhav/MarkIt"
        />
        <ProjectPage
          projectTitle="vupdate"
          image={vupdate_image}
          body="The most basic updater for any C++ application"
          githubLink="https://github.com/GhostVaibhav/vupdate"
        />
        <ProjectPage
          projectTitle="Redirections Panel"
          image={redirect_image}
          body="A simple redirections panel created using React and Tailwind CSS, connected with Pulumi and AWS"
          githubLink="https://github.com/GhostVaibhav/redirector-frontend"
          externalLink="https://redirect.ghostvaibhav.com"
        />
      </div>
    </div>
  );
}
