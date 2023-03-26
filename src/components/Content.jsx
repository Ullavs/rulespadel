import React from "react";

export function Content({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
}) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
      <p>{paragraph4}</p>
      <p>{paragraph5}</p>
    </div>
  );
}
