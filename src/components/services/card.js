import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "images/innova-logo.png",
}) {
  return (
    <div className="inline-block h-60 w-48 flex-none transform rounded-lg shadow-md transition overflow-hidden hover:-translate-y-4 hover:shadow-xl">
      <img className="object-cover w-full max-h-48" src={img} alt={name} />
      <span className="block py-4 text-center">
        <a href={url}>{name}</a>
      </span>
    </div>
  );
}
