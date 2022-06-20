import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

// ACTION CREATOR
export const loadGameDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL"
  })
  // Fetch Axios
  const gameDetailData = await axios.get(gameDetailsURL(id));
  const gameScreenshotsData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: gameDetailData.data,
      screenshots: gameScreenshotsData.data.results,
    },
  });
};
