import React from "react";

export function Card({
  url = "#",
  name = "No name",
  img = "/images/innova-logo.png",
}) {
  return (
    <a
      href={url}
      className="inline-block h-60 p-4 w-48 flex-none transform rounded-lg shadow-md transition overflow-hidden border border-gray-100 hover:-translate-y-4 hover:shadow-xl"
    >
      <img className="object-cover w-full max-h-48" src={img} alt={name} />
      <span className="block py-4 text-center">
        <p>{name}</p>
      </span>
    </a>
  );
}
