import axios from "axios";
import { config } from "../config";

export const getCharsAction = (state: any) => {
  return {
    type: "GET_CHARS",
    payload: state
  }
}

export const getChars = (filters: any) => async (dispatch: any) => {

  let filtersList: string = "";


  let chars;
  try {
    const response = await axios.get(`${config.api}/character`);
    chars = response.data.results;
  } catch (error) {
    chars = [];
  }
  dispatch(getCharsAction(chars));
}


export const setCharAction = (state: any) => {
  return {
    type: "SET_CHAR",
    payload: state
  }
}

export const setChar = (state:any) => async (dispatch: any) => {
  await dispatch(setCharAction(state));
}

export const setCharEpisodesAction = (state: any) => {
  return {
    type: "SET_CHAR_EPISODES",
    payload: state
  }
}

export const setEpisodesShow = (charEpisodes: any[]) => async (dispatch: any) => {
  let data: any[] = [];
  try {

    for await (const i of charEpisodes) {
      const response = await axios.get(i);
      data.push(response.data);
    }
  } catch (error) {
    console.error(error);
  }

  dispatch(setCharEpisodesAction(data));
}

export const setFilterAction = (state: any) => {
  return {
    type: "SET_FILTER",
    payload: state
  }
}

export const setFilter = (state: any) => async (dispatch: any) => {
  dispatch(setFilterAction(state));
}