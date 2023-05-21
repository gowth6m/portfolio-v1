import React from "react";
import Logo from "../misc/logo";

export default function NavBar() {
  return (
    <nav className="fixed w-full">
      <div className="mx-auto flex flex-row justify-between align-middle mt-8 px-10">
        <a href="#home" className="text-sm">
          <Logo color="var(--green-bright)" className="h-[40px]"/>
        </a>
        <ul className="flex flex-row space-x-6 text-sm align-middle justify-end">
          <li>
            <a href="#home">
              <span className="text-[var(--green-bright)]">01. </span>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <span className="text-[var(--green-bright)]">02. </span>About Me
            </a>
          </li>
          <li>
            <a href="#projects">
              <span className="text-[var(--green-bright)]">03. </span>Experience
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="text-[var(--green-bright)]">04. </span>Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="text-[var(--green-bright)]">05. </span>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
