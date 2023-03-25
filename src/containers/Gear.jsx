import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";

export function Gear() {
  return (
    <main>
      <Header title="Het materiaal" />
      <ContentContainer title="Padelracket" />
      <ContentContainer title="Padelballen" />
      <Footer />
    </main>
  );
}
