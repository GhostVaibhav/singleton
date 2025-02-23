"use client";

import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-900 text-white font-[family-name:var(--font-source-code)]">
      <div className="md:sticky md:top-0 md:h-fit">
        <h1 id="about" className="text-2xl p-8 font-bold tracking-tighter">
          About Me
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="p-8 pt-0 md:pl-32 md:pt-16 text-lg flex flex-col gap-2 tracking-tighter">
          <p>
            Hi, my name is Vaibhav Sharma! I am a Software Engineer currently
            working with Nielsen with a Bachelor of Technology in Computer
            Science from Vellore Institute of Technology, Vellore. I am a keen
            learner proficient in C, C++, HTML, CSS, Python, JavaScript, React,
            TailwindCSS, Bootstrap, Git, Docker, deployment tools (Heroku,
            Netlify, etc.) and various CI/CD tools (GitHub Actions, TravisCI,
            CircleCI, etc.). My hobbies include playing sports like Cricket,
            Badminton and Football.
          </p>
          <p>
            I&#39;m also interested in creating music, challenging puzzles,
            reading and doing a lot of different things from a variety of
            domains in Computer Science.
          </p>
          <p>You can have a look at my work experience below.</p>
        </div>
        <section className="relative min-h-screen flex flex-col overflow-hidden tracking-tighter">
          <div className="w-full max-w-6xl md:ml-8 px-8 md:px-0">
            <div className="flex flex-col justify-start divide-y divide-slate-100">
              <div className="w-full max-w-3xl">
                <div className="-my-6">
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium italic text-indigo-400 mb-1 sm:mb-0">
                      Nielsen
                    </div>
                    <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="px-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-fit mb-1 sm:mb-2 text-emerald-800 bg-emerald-100 rounded-full">
                        Jul 2024 - Present
                      </time>
                      <div className="text-xl font-bold text-slate-100">
                        Member of Technical Staff - 1
                      </div>
                    </div>
                    <div className="text-slate-200"></div>
                  </div>
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium italic text-indigo-400 mb-1 sm:mb-0">
                      Agoda
                    </div>
                    <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="px-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-fit mb-1 sm:mb-2 text-emerald-800 bg-emerald-100 rounded-full">
                        Mar 2024 - Jul 2024
                      </time>
                      <div className="text-xl font-bold text-slate-100">
                        Software Engineer Intern
                      </div>
                    </div>
                    <div className="text-slate-200"></div>
                  </div>
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium italic text-indigo-400 mb-1 sm:mb-0">
                      Samsung R&D Institute India
                    </div>
                    <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="px-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-fit mb-1 sm:mb-2 text-emerald-800 bg-emerald-100 rounded-full">
                        Mar 2023 - Mar 2024
                      </time>
                      <div className="text-xl font-bold text-slate-100">
                        Samsung Prism Research Intern
                      </div>
                    </div>
                    <div className="text-slate-200"></div>
                  </div>
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium italic text-indigo-400 mb-1 sm:mb-0">
                      Bitnine Global Inc.
                    </div>
                    <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="px-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-fit mb-1 sm:mb-2 text-emerald-800 bg-emerald-100 rounded-full">
                        May 2023 - Nov 2023
                      </time>
                      <div className="text-xl font-bold text-slate-100">
                        Associate Software Developer
                      </div>
                    </div>
                    <div className="text-slate-200"></div>
                  </div>
                  <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium italic text-indigo-400 mb-1 sm:mb-0">
                      Bitnine Global Inc.
                    </div>
                    <div className="flex flex-col items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="px-2 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-fit h-fit mb-1 sm:mb-2 text-emerald-800 bg-emerald-100 rounded-full">
                        Nov 2022 - May 2023
                      </time>
                      <div className="text-xl font-bold text-slate-100">
                        Software Engineer Intern
                      </div>
                    </div>
                    <div className="text-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
