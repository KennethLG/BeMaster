import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChar } from "../actions"
import { State } from "../interfaces/State";

export const Buttons = () => {

  const [state, setState] = useState({
    next: true,
    prev: true
  });

  const dispatch = useDispatch();
  const show = useSelector((state: State) => state.show);

  const next = () => {
    dispatch(setChar(show + 1));
  }
  const previous = () => {
    dispatch(setChar(show - 1));
  }
/*
  useEffect(() => {
    setState({
      next: (show == episodes.length-1) ? false : true,
      prev: (show == 0) ? false : true
    });
    console.log(state);
  }, [show])
*/
  return (
    <div>
      <button className="button" disabled={!state.prev} onClick={previous}>&lt;</button>
      <button className="button" disabled={!state.next} onClick={next}>&gt;</button>
    </div>
  )
}