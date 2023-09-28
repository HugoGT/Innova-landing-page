import React from "react";

export function NavLink({ url = "#", name = "No name" }) {
  return (
    <li className="py-1 text-gray-800">
      <span>
        <a href={url}>{name}</a>
      </span>
    </li>
  );
}
