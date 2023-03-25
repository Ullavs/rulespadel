import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ContentContainer } from "../components/ContentContainer";
import { BackHome } from "../components/BackHome";

export function TechnicAndTactics() {
  return (
    <main>
      <Header title="Techniek en tactiek" />
      <BackHome />
      <ContentContainer />
      <Footer />
    </main>
  );
}
