import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";

export function PlayingField() {
  return (
    <main>
      <Header title="Het speelveld" />
      <ContentContainer />
      <Footer />
    </main>
  );
}
