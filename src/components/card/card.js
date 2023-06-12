import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "images/innova-logo.png",
}) {
  return (
    <div className="inline-block h-60 w-48 flex-none transform rounded-lg shadow-md transition overflow-hidden hover:-translate-y-4 hover:shadow-xl">
      <img className="h-5/6 object-cover w-full" src={img} alt={name} />
      <span className="h-1/6 block py-2 text-center">
        <a href={url}>{name}</a>
      </span>
    </div>
  );
}
