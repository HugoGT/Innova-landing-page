import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "/images/innova-logo.png",
}) {
  return (
    <div className="flex flex-col border rounded-lg shadow-md overflow-hidden hover:-translate-y-4">
      <a href={url} className="">
        <img className="w-96 h-80 object-cover" src={img} alt={name} />
        <p className="block p-4 text-center font-semibold">{name}</p>
      </a>
    </div>
  );
}
