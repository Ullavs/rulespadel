import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function PadelInNL() {
  return (
    <main>
      <Header title="Padel in Nederland" />
      <BackHome />
      <ContentContainer />
      <Footer />
    </main>
  );
}
