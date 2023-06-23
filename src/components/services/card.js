import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "/images/innova-logo.png",
  description = "No description",
}) {
  return (
    <a href={url} className="">
      <div className="border border-gray-400 rounded-lg p-6 shadow-md h-[32rem] overflow-y-auto">
        <div className="flex w-full h-4/5">
          <img
            className="max-h-full m-auto object-contain"
            src={img}
            alt={name}
          />
        </div>
        {/* <h3 className="block py-4 text-center font-semibold">{name}</h3>
      <p>{description}</p> */}
        <details class="block text-center mt-8" close>
          <summary class="text-lg font-semibold leading-6 text-slate-900font-semibold select-none list-none">
            {name}
          </summary>
          <div class="mt-3 text-sm leading-6 text-slate-60">
            <p>{description}</p>
          </div>
        </details>
      </div>
    </a>
  );
}
