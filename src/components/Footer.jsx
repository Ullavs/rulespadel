import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {currentYear}, made by{" "}
      <a href="https://ullavs.nl" className="text-gradient">
        ullavs.nl
      </a>
    </footer>
  );
}
