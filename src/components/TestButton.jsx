import React from "react";

export function TestButton({ title, href }) {
  return (
    <a className="test-button" href={href}>
      {title}
    </a>
  );
}
