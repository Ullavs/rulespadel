import React from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import copy from "../copy";

export function Home() {
  return (
    <>
      <main>
        <Header title={copy.home.title} subtitle={copy.home.subtitle} />
        <div>
          <p className="box">
            <strong>{copy.home.introductionStrong}</strong>
            {copy.home.introduction}
            <br />
            {copy.home.introductionEnd}
          </p>
          <ul role="list" className="card-grid">
            <Card
              href="/spelregels"
              title={copy.home.rulesTitle}
              body={copy.home.rulesCardBody}
            />
            <Card
              href="/materiaal"
              title={copy.home.gearTitle}
              body={copy.home.gearCardBody}
            />
            <Card
              href="/speelveld"
              title={copy.home.playingFieldTitle}
              body={copy.home.playingFieldCardBody}
            />
            <Card
              href="/techniekentactiek"
              title={copy.home.technicAndTacticsTitle}
              body={copy.home.technicAndTacticsCardBody}
            />
            <Card
              href="/padelinnederland"
              title={copy.home.padelInNLTitle}
              body={copy.home.padelInNLCardBody}
            />
            <Card
              href="/worldpadeltour"
              title={copy.home.worldPadelTourTitle}
              body={copy.home.worldPadelTourCardBody}
            />
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
}
