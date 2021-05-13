import axios from "axios";
import { config } from "../config";

export const getCharsAction = (state: any) => {
  return {
    type: "GET_CHARS",
    payload: state
  }
}

export const getChars = () => async (dispatch: any) => {
  let chars;
  try {
    const response = await axios.get(`${config.api}/character`);
    chars = response.data.results;
  } catch (error) {
    chars = [];
  }
  dispatch(getCharsAction(chars));
}

export const getEpisodesAction = (state: any) => {
  return {
    type: "GET_EPISODES",
    payload: state
  }
}

export const getEpisodes = () => async (dispatch: any) => {
  let episodes;
  try {
    const response = await axios.get(`${config.api}/episode`);
    episodes = response.data.results;
  } catch (error) {
    episodes = [];
  }
  dispatch(getEpisodesAction(episodes));
}