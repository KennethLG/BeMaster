import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars, setEpisodesShow } from "../actions";
import { State } from "../interfaces/State";
import { CharCard } from "./CharCard";
import { InfoCard } from "./InfoCard";

export const Body = () => {

  const chars = useSelector((state: State) => state.chars);
  const show = useSelector((state: State) => state.show);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chars.length === 0) {
      dispatch(getChars());
    }
    console.log(show);
  });

  useEffect(()=> {
    if (chars.length !== 0) {
      dispatch(setEpisodesShow(chars[show].episode));
    }
  }, [show]);

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