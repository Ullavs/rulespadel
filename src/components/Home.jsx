import React from "react";
import { Card } from "./Card";
import { Test } from "./Test";
import { TestButton } from "./TestButton";

export function Home() {
  return (
    <main>
      <h1>
        Welcome to <span className="text-gradient">Astro</span>
      </h1>
      <TestButton title="Test 1" href="/" />
      <TestButton title="Test 2" href="/ulla" />
      <TestButton title="Test 3" href="https://ullavs.nl" />
      <TestButton title="Test Ulla" />
      <Test />
      <p className="instructions">
        To get started, open the directory <code>src/pages</code> in your
        project.
        <br />
        <strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message
        above.
      </p>
      <ul role="list" className="link-card-grid">
        <Card
          href="https://docs.astro.build/"
          title="Documentation"
          body="Learn how Astro works and explore the official API docs."
        />
        <Card
          href="https://astro.build/integrations/"
          title="Integrations"
          body="Supercharge your project with new frameworks and libraries."
        />
        <Card
          href="https://astro.build/themes/"
          title="Themes"
          body="Explore a galaxy of community-built starter themes."
        />
        <Card
          href="https://astro.build/chat/"
          title="Community"
          body="Come say hi to our amazing Discord community. ❤️"
        />
      </ul>
    </main>
  );
}
