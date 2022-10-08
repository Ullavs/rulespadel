import React from "react";

export function Button({ title, href }) {
  return (
    <a className="test-button" href={href}>
      {title}
    </a>
  );
}
