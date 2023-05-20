import React from "react";
import TypingText from "./typingText";
import BackgroundAnimation from "../misc/backgroundAnimation";

export default function Hero() {
  return (
    <div className="container w-full flex flex-col justify-center align-middle">
      <BackgroundAnimation color={"white"} />

      <div className="my-10">
        <h1 className="text-white text-4xl w-full text-center md:text-left font-museo p-4">
          Hi, I&apos;m{" "}
          <span className="text-[var(--green-bright)]">Gowtham</span>.
        </h1>

        <TypingText className="text-center md:text-left py-4" />

        <div className="flex justify-center align-middle md:justify-start py-4">
          <button className="pri-btn">Say hi!</button>
        </div>
      </div>
    </div>
  );
}
