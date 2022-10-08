import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";

export function Home() {
  return (
    <main>
      <h1>
        Welkom op <span className="text-gradient">rulespadel.nl</span>
      </h1>
      <h2>
        Dé website om de officiële spelregels van <strong>padel</strong> te
        checken!
      </h2>
      <p className="instructions">
        Padel is de snelst groeiende sport van Nederland! Of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. <code>src/pages</code> in
        your project.
        <br />
        <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message
        above.
      </p>
      <ul role="list" className="link-card-grid">
        <Card
          href=""
          title="Het speelveld"
          body="Kom alles te weten over het speelveld..."
        />
        <Card
          href="https://astro.build/integrations/"
          title="Het spelverloop"
          body="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
        />
        <Card
          href="https://astro.build/integrations/"
          title="De puntentelling"
          body="Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
        />
        <Card
          href="https://astro.build/themes/"
          title="Het materiaal"
          body=" It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
        />
      </ul>
    </main>
  );
}
