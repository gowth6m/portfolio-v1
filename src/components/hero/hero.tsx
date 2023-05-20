import React from "react";
import TypingText from "./typingText";
import BackgroundAnimation from "../misc/backgroundAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="container w-full flex flex-col justify-center align-middle">
      <BackgroundAnimation color={"white"} />

      <div className="my-20 flex flex-col space-y-6">
        <h1 className="text-[var(--white)] text-6xl w-full text-center md:text-left font-museo">
          Hi, I&apos;m{" "}
          <span className="text-[var(--green-bright)]">Gowtham</span>.
        </h1>

        <TypingText className="text-[var(--slate)] text-3xl text-center md:text-left" />

        <div className="w-3/6">
          <p className="text-[var(--slate)] text-base text-center md:text-left">
            I&apos;m a software engineer and artist based in London, UK. I have
            an interest in full stack development, machine learning,
            human-computer interactions and explore the vast realm of everything
            in between.
          </p>
        </div>

        <div className="flex justify-center align-middle md:justify-start">
          <button className="pri-btn flex flex-row justify-center align-middle gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="h-[25px]" />
            <div className="text-base">Say hi!</div>
          </button>
        </div>
      </div>
    </div>
  );
}
