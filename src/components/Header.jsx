import React from "react";
import { BackHome } from "./BackHome";

export function Header({ title, subtitle, showBackHome }) {
  return (
    <header>
      <a className="header-link" href="/">
        <img
          className="logo"
          src="public\logo-rulespadel.webp"
          width="512"
          height="512"
        />
        <div>
          <h1>
            <span className="text-gradient">{title}</span>
          </h1>
          <h2>{subtitle}</h2>
        </div>
      </a>
      {showBackHome && <BackHome />}
    </header>
  );
}
