import { State } from "../interfaces/State";

const initialState: State = {
  chars: [],
  show: 0,
  charEpisodes: [],
  filter: ""
}

export const reducer = (state = initialState, action: any) => {
  switch(action.type) {

    case "GET_CHARS":
      return {
        ...state,
        chars : action.payload
      }

    case "SET_CHAR":
      return {
        ...state,
        show : action.payload
      }

    case "SET_CHAR_EPISODES":
      return {
        ...state,
        charEpisodes: action.payload
      }

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload
      }

    default:
      return state;
  }
}