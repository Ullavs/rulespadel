import React from "react";

export function Header({ title, subtitle }) {
  return (
    <a className="header-link" href="/">
      <img
        className="logo"
        src="public\logo-rulespadel.webp"
        width="2048"
        height="2048"
      />
      <div>
        <h1>
          <span className="text-gradient">{title}</span>
        </h1>
        <h2>{subtitle}</h2>
      </div>
    </a>
  );
}
