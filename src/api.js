// Base URL
const base_url = "https:/api.rawg.io/api/";
const api_key = `key=${process.env.REACT_APP_API_KEY}`;

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 2}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 2}-${currentMonth}-${currentDay}`;

// Popular, Upcoming and New Games
const pupular_games = `games?${api_key}&page_size=20`;
const upcoming_games = `games?${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?${api_key}&dates=${lastYear},${currentDate}&ordering=-released-rating&page_size=20`;

export const popularGamesURL = () => `${base_url}${pupular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?${api_key}`;
// Game screenShots
export const gameScreenshotsURL = (game_pk) =>
  `${base_url}games/${game_pk}/screenshots?${api_key}`;
// Search Games
export const searchGameURL = (game_name) =>
  `${base_url}games?${api_key}&search=${game_name}&page_size=10`;
