import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function PadelInNL() {
  return (
    <main>
      <Header title="Padel in Nederland" showBackHome />
      <div>
        <Content />
      </div>
      <Footer />
    </main>
  );
}
