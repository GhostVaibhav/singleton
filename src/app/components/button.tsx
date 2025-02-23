"use client";

import React, { FormEventHandler, MouseEventHandler } from "react";
import { IconType } from "react-icons";
import { FaArrowDown } from "react-icons/fa";

interface ScriptProps {
  icon: IconType;
  label: string;
  backgroundColor: string;
  borderColor: string;
  pullDownArrow?: boolean;
  properties?: string;
  progress?: boolean;
  onClick: MouseEventHandler;
  onSubmit?: FormEventHandler;
}

export default function Button(props: ScriptProps) {
  return (
    <button
      className={`relative m-2 text-white font-bold outline-none text-xl ${
        props.properties ?? ""
      }`}
      onClick={props.onClick}
      onSubmit={props.onSubmit ?? (() => {})}
    >
      <div
        className={`absolute inset-x-0 h-full -bottom-3 ${props.backgroundColor} rounded-lg`}
      ></div>
      <div
        className={`relative ${props.borderColor} rounded-lg py-4 px-10 transition-all duration-75 hover:translate-y-0 active:translate-y-3`}
      >
        <div className="flex items-center justify-center">
          {props.progress ? (
            <div className="py-[0.7rem] w-full">
              <div
                className={`h-1.5 w-full rounded-lg ${props.borderColor} overflow-hidden`}
              >
                <div className="progress w-full h-full bg-slate-600 left-right"></div>
              </div>
            </div>
          ) : (
            <>
              <props.icon className="mx-2" />
              {props.label}
            </>
          )}
          {props.pullDownArrow ? (
            <div className="mx-2">
              <FaArrowDown />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </button>
  );
}
