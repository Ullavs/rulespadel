import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function PlayingField() {
  return (
    <main>
      <Header title="Het speelveld" showBackHome />
      <div>
        <Content
          title="Dimensies"
          paragraph1="Het speelveld van padel is rechthoekig en meet 10 meter breed en 20 meter lang. Het veld is verdeeld door een net in twee gelijke delen. Het servicevak is vanaf het net 6.95 meter lang."
        />
        <Content title="Wanden" paragraph1="" />
        <Content title="Ondergrond" paragraph1="" />
      </div>
      <Footer />
    </main>
  );
}
