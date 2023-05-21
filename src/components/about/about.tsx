import React from "react";

export default function About() {
  return (
    <div className="container flex flex-col">
      <div className="w-5/6 mx-auto">
        <h1 className="title text-left">
          <span className="text-[var(--green-bright)]">/ </span>about me
        </h1>
        <div className="flex flex-row">
          <p className="flex-1">
            I&apos;m a software engineer and artist based in London, UK. I have
            an interest in full stack development, machine learning,
            human-computer interactions and the vast realm of everything in
            between.
          </p>
          <div className="flex-1 h-[10rem] w-[10rem] bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
}
