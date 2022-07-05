import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import Loader from "../components/Loader";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animation";

const Home = () => {
  // Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //Get that data back
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledGameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div className="searched">
            <div className="searched-title">
              <h2>Searched Games</h2>
              <button onClick={clearSearch}>X</button>
            </div>

            <StyledGames>
              {searched.map((game) => (
                <Game
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  released={game.released}
                  image={game.background_image}
                />
              ))}
            </StyledGames>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        {upcoming.length ? (
          <StyledGames>
            {upcoming.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            ))}
          </StyledGames>
        ) : (
          <Loader />
        )}

        <h2>Popular Games</h2>
        {popular.length ? (
          <StyledGames>
            {popular.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            ))}
          </StyledGames>
        ) : (
          <Loader />
        )}

        <h2>New Games</h2>
        {newGames.length ? (
          <StyledGames>
            {newGames.map((game) => (
              <Game
                key={game.id}
                id={game.id}
                name={game.name}
                released={game.released}
                image={game.background_image}
              />
            ))}
          </StyledGames>
        ) : (
          <Loader />
        )}
      </AnimateSharedLayout>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 2rem 0rem;
  }

  .searched-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
      font-family: "Montserrat", sans-serif;
      font-size: 1.5rem;
      height: 2.4rem;
      width: 2.4rem;
      border-radius: 50%;
    }
  }

  @media (max-width: 1280px) {
    padding: 0rem 1rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export default Home;
