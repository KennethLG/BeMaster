import { State } from "../interfaces/State";

const initialState: State = {
  chars: [],
  show: 0,
  episodes: []
}

export const reducer = (state = initialState, action: any) => {
  switch(action.type) {

    case "GET_CHARS":
      return {
        ...state,
        chars : action.payload
      }

    case "GET_EPISODES":
      return {
        ...state,
        episodes: action.payload
      }

    default:
      return state;
  }
}