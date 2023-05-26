import React from "react";
import Slider from "./imageSlider";

export default function Projects() {
  return (
    <div id="projects" className="container flex flex-col min-h-[100vh]">
      <div className="w-5/6 lg:w-4/6 mx-auto my-12 md:my-28">
        <div className="flex flex-col overflow-hidden text-sm md:text-base gap-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="title text-left flex-1">
              <span className="text-[var(--green-bright)]">/ </span>my-creations
            </h1>
            <div className="flex-1"></div>
          </div>

          {/* Row 2 - experience */}
          <div className="w-full">
            {/* <Slider
              images={[
                "https://picsum.photos/200/300",
                "https://picsum.photos/200/300",
              ]}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
