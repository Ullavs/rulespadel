import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function Gear() {
  return (
    <main>
      <Header title="Het materiaal" showBackHome />
      <div>
        <Content
          title="Padelracket"
          paragraph1="Een padelracket heeft geen snaren, maar is geheel van kunststof met gaten in het racketblad geboord. Het racket is maximaal 45,5 x 24 centimeter en het gewicht varieert van 350 tot 400 gram."
          paragraph2="Er zijn 3 vormen padelrackets: rond, traan/druppel of diamant, hierbij is de ronde vorm voor de beginnende speler en de diamant voor de gevorderde. De traan/druppel variant is perfect voor de aanvallende speler."
        />
        <Content
          title="Padelballen"
          paragraph1="De padelbal lijkt op een tennisbal, maar is wat harder."
        />
        <Content
          title="Kleding en schoeisel"
          paragraph1="Dit is hetzelfde als bij tennis."
        />
      </div>
      <Footer />
    </main>
  );
}
