import React from "react";
import { useHistory } from "react-router-dom";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
import { smallImage } from "../util";
// Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
// Star images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Get starts
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }

    return stars;
  };

  // Get platforn images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "PlayStation 3":
        return playstation;
      case "Xbox 360":
        return xbox;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  // Data
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.gameDetail
  );

  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <motion.h3 className="game-name" layoutId={`title ${pathId}`}>
              {game.name}
            </motion.h3>
            <StyledStats>
              <div>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
            </StyledStats>

            <StyledInfo>
              <h3>Platforms</h3>
              <StyledPlatforms>
                {game.platforms.map((data) => (
                  <div key={data.platform.id} className="platform">
                    <img
                      src={getPlatform(data.platform.name)}
                      title={data.platform.name}
                      alt={`${data.platform.name} icon`}
                    />
                    <h3>{data.platform.name} </h3>
                  </div>
                ))}
              </StyledPlatforms>
            </StyledInfo>

            <StyledMedia>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </StyledMedia>
            <StyledDescription>
              <p>{game.description_raw}</p>
            </StyledDescription>
            <div className="gallery">
              <h3>Screens</h3>
              {screenshots.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt={`${game.name} screenshot`}
                />
              ))}
            </div>
          </StyledDetail>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  @media (max-width: 768px) {
    &::before {
      position: absolute;
      content: "←BACK";
      color: white;
      font-weight: bold;
      left: 0.5rem;
      top: 0.2rem;
    }
  }
`;

const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  margin: 1rem 0;
  background: white;
  position: absolute;
  left: 10%;
  color: #333;

  img {
    width: 100%;
  }

  .game-name {
    font-size: 3rem;
  }

  @media (max-width: 1280px) {
    width: 90%;
    left: 5%;
    padding: 0rem 2rem;

    .game-name {
      padding: 1rem;
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
    border-radius: 0;
    padding: 0rem;
    width: 100%;
    left: 0;

    .gallery {
      h3 {
        margin-left: 0.5rem;
      }
    }
  }
`;

const StyledStats = styled(motion.div)`
  img {
    display: inline;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 1280px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    img {
      width: 1.4rem;
      height: 1.4rem;
    }
  }
`;

const StyledInfo = styled(motion.div)`
  width: 100%;

  @media (max-width: 1280px) {
    width: 100%;
  }

  h3 {
    font-size: 1.5rem;
    padding: 1.5rem 0.5rem 0.5rem;
  }
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;

  .platform {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;

    h3 {
      white-space: nowrap;
      font-size: 1rem;
      padding: 1rem 0;
    }

    img {
      margin: 0 0.5rem;
      display: inline;
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  @media (max-width: 1280px) {
    .platform {
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      h3 {
        font-size: 1rem;
        padding: 0.5rem 0;
      }
    }

    img {
      width: 2rem;
      height: 2rem;
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    .platform {
      h3 {
        font-size: 1rem;
      }
    }

    img {
      width: 1rem;
      height: 1rem;
      margin-left: 0;
    }
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;

  @media (max-width: 768px) {
    margin: 2rem 0.5rem;

    p {
      font-size: 0.8rem;
    }
  }
`;

export default GameDetail;
