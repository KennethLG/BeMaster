import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars, setEpisodesShow } from "../actions";
import { State } from "../interfaces/State";
import { CharCard } from "./CharCard";
import { Filters } from "./Filters";
import { InfoCard } from "./InfoCard";

export const Body = () => {

  const chars = useSelector((state: State) => state.chars);
  const show = useSelector((state: State) => state.show);
  const filter = useSelector((state: State) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chars.length === 0) {
      dispatch(getChars(filter));
    }
    console.log(show);
  }, [filter]);

  useEffect(()=> {
    if (chars.length !== 0) {
      dispatch(setEpisodesShow(chars[show].episode));
    }
  }, [show]);

  useEffect(()=> {
    
  }, [filter]);

  return (
    <div className="Body">
      {
        chars.length !== 0 && 
        <>
          <Filters />
          <CharCard />
          <InfoCard />
        </>
      }
    </div>
  );
}