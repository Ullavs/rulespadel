import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function Rules() {
  return (
    <main>
      <Header title="De spelregels" />
      <BackHome />
      <ContentContainer />
      <Footer />
    </main>
  );
}
