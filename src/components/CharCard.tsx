import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChars } from "../actions";
import { State } from "../interfaces/State";

export const CharCard = () => {

  const chars = useSelector((state:State) => state.chars);
  const show = useSelector((state:State) => state.show);

  const dispatch = useDispatch();

  useEffect(()=> {
    if (chars.length === 0) {
      dispatch(getChars());
    }
  });

  useEffect(()=> {
    console.log(chars);
  }, [chars])

  return(
    <div className="chars-card">
        <div className="card">
          {
            chars.length !== 0 && 
            <div className="char-name"> { chars[show].name }</div>
          }
        </div>
    </div>
  )
}