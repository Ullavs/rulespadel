import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function WorldPadelTour() {
  return (
    <main>
      <Header title="World Padel Tour" showBackHome />
      <div>
        <Content />
      </div>
      <Footer />
    </main>
  );
}
