import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function PlayingField() {
  return (
    <main>
      <Header title="Het speelveld" />
      <BackHome />
      <ContentContainer />
      <Footer />
    </main>
  );
}
