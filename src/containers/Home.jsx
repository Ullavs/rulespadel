import React, { useState } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import enCopy from "../copy/en.json";
import nlCopy from "../copy/nl.json";

export function Home() {
  const [language, setLanguage] = useState("en");

  const translations = language === "en" ? enCopy : nlCopy;

  const switchLanguage = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage === "en" ? "nl" : "en";
    });
  };

  return (
    <>
      <main>
        <Header
          title={translations.home.title}
          subtitle={translations.home.subtitle}
        />
        <button className="language-switcher" onClick={switchLanguage}>
          {language === "en" ? "Wijzig naar Nederlands" : "Switch to English"}
        </button>
        <div>
          <p className="box">
            <strong>{translations.home.introductionStrong}</strong>
            {translations.home.introduction}
            <br />
            {translations.home.introductionEnd}
          </p>
          <ul role="list" className="card-grid">
            <Card
              href="/spelregels"
              title={translations.home.rulesTitle}
              body={translations.home.rulesCardBody}
            />
            <Card
              href="/materiaal"
              title={translations.home.gearTitle}
              body={translations.home.gearCardBody}
            />
            <Card
              href="/speelveld"
              title={translations.home.playingFieldTitle}
              body={translations.home.playingFieldCardBody}
            />
            <Card
              href="/techniekentactiek"
              title={translations.home.technicAndTacticsTitle}
              body={translations.home.technicAndTacticsCardBody}
            />
            <Card
              href="/padelinnederland"
              title={translations.home.padelInNLTitle}
              body={translations.home.padelInNLCardBody}
            />
            <Card
              href="/worldpadeltour"
              title={translations.home.worldPadelTourTitle}
              body={translations.home.worldPadelTourCardBody}
            />
          </ul>
        </div>
        <Footer />
      </main>
    </>
  );
}
