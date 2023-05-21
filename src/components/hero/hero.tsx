import React from "react";
import TypingText from "./typingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="container w-full h-[100svh] flex flex-col justify-center align-middle items-center">
      <div className="flex flex-col space-y-6 w-5/6 mx-auto mt-24 md:mt-0">
        <h1 className="text-[var(--white)] text-6xl w-full text-center md:text-left font-bold">
          Hi, I&apos;m{" "}
          <span className="text-[var(--green-bright)]">Gowtham</span>.
        </h1>

        <TypingText className="text-[var(--light-slate)] text-3xl text-center md:text-left font-semibold" />

        <div className="md:w-3/6">
          <p className="text-[var(--slate)] text-base text-center md:text-left">
            I&apos;m a software engineer and artist based in London, UK. I have
            an interest in full stack development, machine learning,
            human-computer interactions and the vast realm of everything in
            between.
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
