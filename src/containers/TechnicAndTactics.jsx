import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function TechnicAndTactics() {
  return (
    <main>
      <Header title="Techniek en tactiek" showBackHome />
      <div>
        <Content />
      </div>
      <Footer />
    </main>
  );
}
