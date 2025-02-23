"use client";

import React, { MouseEventHandler } from "react";
import { IconType } from "react-icons";

interface ScriptProps {
  icon: IconType;
  label: string;
  backgroundColor: string;
  borderColor: string;
  onClick: MouseEventHandler;
}

export default function RoundButton(props: ScriptProps) {
  return (
    <button
      className="relative m-2 text-white font-bold text-xl"
      onClick={props.onClick}
    >
      <div
        className={`absolute inset-x-0 h-full -bottom-3 ${props.backgroundColor} rounded-full`}
      ></div>
      <div
        className={`relative ${props.borderColor} rounded-full p-4 transition-all duration-75 hover:translate-y-0 active:translate-y-3`}
      >
        <div className="flex items-center justify-center">
          <props.icon className="m-2" />
          {props.label}
        </div>
      </div>
    </button>
  );
}
