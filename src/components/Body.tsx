import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars, getEpisodes } from "../actions";
import { State } from "../interfaces/State";
import { CharCard } from "./CharCard";
import { InfoCard } from "./InfoCard";

export const Body = () => {

  const chars = useSelector((state: State) => state.chars);
  const episodes = useSelector((state: State) => state.episodes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chars.length === 0) {
      dispatch(getChars());
    }
    if (episodes.length === 0) {
      dispatch(getEpisodes());
    }
  });

  return (
    <div className="Body">
      {
        chars.length !== 0 && 
        <>
          <CharCard />
          <InfoCard />
        </>
      }
    </div>
  );
}