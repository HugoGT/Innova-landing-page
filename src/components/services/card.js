import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "/images/innova-logo.png",
  description = "No description",
}) {
  return (
    <a href={url} className="">
      <div className="border border-gray-400 rounded-lg p-4 shadow-md min-h-[32rem] max-h-[32rem] overflow-y-auto">
        <img className="object-cover w-full" src={img} alt={name} />
        <h3 className="block py-4 text-center font-semibold">{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
