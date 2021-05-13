import React from "react";
import { CharCard } from "./CharCard";
import { InfoCard } from "./InfoCard";

export const Body = () => {
  return (
    <div className="Body">
      <CharCard />
      <InfoCard />
    </div>
  );
}