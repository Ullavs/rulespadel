import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Content } from "../components/Content";

export function Rules() {
  return (
    <main>
      <Header title="De spelregels" showBackHome />
      <div>
        <Content
          title="Start spel"
          paragraph1="Padel wordt gespeeld door 4 personen, in teams van 2 tegen 2. Het spel begint met een service vanaf de rechterkant. Diegene die de toss wint, bepaalt welk team begint met serveren. "
        />
        <Content
          title="De service"
          paragraph1="De serveerder slaat diagonaal op naar de ontvanger met daarbij beide voeten achter de achterlijn en naast de imaginaiere verlenging van de middellijn, zonder deze te raken. De opslag is onderhands en de bal moet alvorens te raken 1 keer stuiteren achter de servicelijn."
          paragraph2="Als de opslag eerst in het diagonale servicevak stuit en daarna tegen het glas is deze goed. De opslag is fout als deze na de stuit tegen het hekwerk komt (ook als deze eerst het net raakte). De opslag mag niet zonder stuit worden teruggespeeld, na de return zijn volleys wel toegestaan."
          paragraph3="Als de opslag de netrand raakt en daarna in het juiste servicevak landt, moet je de service herspelen."
        />
        <Content
          title="Wel toegestaan:"
          paragraph1="Je mag wel terugspelen via het eigen glas."
          paragraph2="In de rally mag de bal na de stuit tegen elke wand stuiteren (in tegenstelling tot bij de service)."
          paragraph3="Je mag het net wel overschrijden als de bal na de stuit in de eigen speelhelft terugkeert naar de andere speelhelft."
        />
        <Content
          title="Niet toegestaan / fout:"
          paragraph1="Je mag niet direct via het hekwerk terugspelen."
          paragraph2="Na contact met de wand mag de bal niet opnieuw stuiteren op de grond."
          paragraph3="De bal is uit als deze zonder stuit direct tegen het glas of hekwerk van de tegenstander komt."
          paragraph4="Spelers mogen het net niet aanraken."
          paragraph5="Spelers mogen het net niet overschrijden om een bal die vanuit de andere speelhelft komt terug te slaan."
        />
        <Content
          title="Puntentelling"
          paragraph1="De puntentelling is hetzelfde als bij tennis, namelijk 15, 30, 40 en game, met deuce bij 40-40. Bij deuce moeten twee opeenvolgende punten worden gescoord om de game te winnen."
          paragraph2="De spelers wisselen van helft na de 1e, 3e en de volgende oneven game in de set. Bij de tiebreak wordt elke 6 punten gewisseld."
          paragraph3="Padelwedstrijden zijn meestal “best-of-three”, oftewel tot twee gewonnen sets, waarbij een set gewonnen wordt door het team dat als eerste zes games wint met twee games verschil. Bij 6-6 wordt een tiebreak gespeeld, die gaat tot zeven gewonnen punten met twee punten verschil. Een eventuele derde set kan als supertiebreak worden gespeeld (tot tien punten met twee punten verschil, waarbij de eerst volgende serveerder begint met 1 punt en daarna serveert ieder 2 punten)."
        />
      </div>
      <Footer />
    </main>
  );
}
