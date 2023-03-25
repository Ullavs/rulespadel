import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {currentYear}, made by{" "}
      <a href="https://ullavs.nl" className="text-gradient">
        ullavs.nl
      </a>{" "}
      using{" "}
      <a href="https://astro.build/" className="text-gradient">
        Astro
      </a>
    </div>
  );
}
