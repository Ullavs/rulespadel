import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function Gear() {
  return (
    <main>
      <Header title="Het materiaal" />
      <BackHome />
      <ContentContainer title="Padelracket" />
      <ContentContainer title="Padelballen" />
      <Footer />
    </main>
  );
}
