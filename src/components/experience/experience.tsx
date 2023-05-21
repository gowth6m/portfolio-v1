import React from "react";

export default function Experience() {
  return (
    <div id="experience" className="container flex flex-col min-h-[100vh]">
      <div className="w-5/6 mx-auto mt-12">
        <div className="flex flex-col overflow-hidden text-sm md:text-base">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="title text-left flex-1 overflow-hidden">
              <span className="text-[var(--green-bright)]">/ </span>experience
            </h1>
            <div className="flex-1"></div>
          </div>

          {/* Row 2 - experience */}
          <div>
            {/* Tabs */}
            <div className="flex flex-col flex-1 bg-slate-400 w-1/6">
                <button>tab 1 <span className="bg-red"></span></button>
                <button>tab 2</button>
            </div>

            {/* Display section */}

            <div className="bg-slate-900 flex-auto">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
