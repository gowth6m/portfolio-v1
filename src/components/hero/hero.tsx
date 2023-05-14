import React from "react";
import TypingText from "./typingText";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center align-middle gap-4">
      <h1 className="text-white text-3xl w-full text-center md:text-left">
        Hi, I&apos;m <span className="text-[var(--green-bright)]">Gowtham</span>
        .
      </h1>
      <TypingText className="text-center md:text-left" />
      <div className="flex justify-center align-middle md:justify-start">
        <button className="pri-btn">Say hi!</button>
      </div>
    </div>
  );
}
