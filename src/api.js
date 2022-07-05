// Base URL
const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

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
const pupular_games = `games?key=${API_KEY}&page_size=20`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released-rating&page_size=20`;

export const popularGamesURL = () => `${BASE_URL}${pupular_games}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcoming_games}`;
export const newGamesURL = () => `${BASE_URL}${new_games}`;

// Game details
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}?key=${API_KEY}`;
// Game screenShots
export const gameScreenshotsURL = (game_pk) =>
  `${BASE_URL}games/${game_pk}/screenshots?key=${API_KEY}`;
// Search Games
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?key=${API_KEY}&search=${game_name}&page_size=10`;
