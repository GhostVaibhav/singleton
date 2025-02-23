"use client";

import React from "react";
import Button from "./components/button";
import { IoEnterOutline } from "react-icons/io5";
import { useForm } from "@formcarry/react";

export default function Contact() {
  const { state, submit } = useForm({
    id: "rJM8b8RJ5Ob",
    debug: false,
  });

  return (
    <form
      onSubmit={submit}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:w-screen md:items-start md:justify-normal bg-slate-900 text-white font-[family-name:var(--font-source-code)]"
    >
      <div className="md:sticky md:top-0 md:h-fit">
        <h1 id="contact" className="text-2xl p-8 font-bold tracking-tighter">
          Contact Me
        </h1>
      </div>
      <div className="flex md:self-center md:justify-center md:w-full">
        <div className="flex flex-col gap-2 md:w-2/5">
          <div className="relative m-2 text-white font-bold text-xl">
            <div className="absolute inset-x-0 h-full -bottom-3 bg-slate-600 rounded-lg"></div>
            <div className="relative bg-slate-500 rounded-lg py-4 px-8 transition-all duration-75">
              <div>
                <input
                  id="firstName"
                  name="firstName"
                  className="bg-transparent outline-none w-full"
                  placeholder="Name*"
                  required
                />
              </div>
            </div>
          </div>
          <div className="relative m-2  text-white font-bold text-xl">
            <div className="absolute inset-x-0 h-full -bottom-3 bg-slate-600 rounded-lg"></div>
            <div className="relative bg-slate-500 rounded-lg py-4 px-8 transition-all duration-75">
              <div>
                <input
                  id="email"
                  name="email"
                  className="bg-transparent outline-none w-full"
                  placeholder="Email*"
                  type="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="relative m-2 text-white font-bold text-xl">
            <div className="absolute inset-x-0 h-full -bottom-3 bg-slate-600 rounded-lg"></div>
            <div className="relative bg-slate-500 rounded-lg py-4 px-8 transition-all duration-75">
              <div>
                <textarea
                  id="anotherInput"
                  name="anotherInput"
                  rows={5}
                  className="bg-transparent outline-none w-full"
                  placeholder="Message*"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="hidden"
            id="captchaResponse"
            name="g-recaptcha-response"
          />
          {state.submitting ? (
            <Button
              icon={IoEnterOutline}
              backgroundColor="bg-teal-600"
              borderColor="bg-teal-500"
              label="Send"
              onClick={() => {}}
              progress={true}
            />
          ) : state.submitted ? (
            <Button
              icon={IoEnterOutline}
              backgroundColor="bg-teal-600"
              borderColor="bg-teal-500"
              label="Sent!"
              onClick={() => {}}
            />
          ) : state.error ? (
            <Button
              icon={IoEnterOutline}
              backgroundColor="bg-red-600"
              borderColor="bg-red-500"
              label="Send errored"
              onClick={() => {}}
            />
          ) : (
            <Button
              icon={IoEnterOutline}
              backgroundColor="bg-teal-600"
              borderColor="bg-teal-500"
              label="Send"
              onClick={() => {}}
            />
          )}
        </div>
      </div>
    </form>
  );
}
