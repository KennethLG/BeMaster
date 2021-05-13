const initialState = {
  chars: [],
  show: 0
}

export const reducer = (state = initialState, action: any) => {
  switch(action.type) {

    case "GET_CHARS":
      return {
        ...state,
        chars : action.payload
      }

    default:
      return state;
  }
}