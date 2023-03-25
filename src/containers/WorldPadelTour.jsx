import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function WorldPadelTour() {
  return (
    <main>
      <Header title="World Padel Tour" />
      <BackHome />
      <ContentContainer />
      <Footer />
    </main>
  );
}
