import React from "react";
import { Link } from "react-router-dom";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
// Redux
import { useDispatch } from "react-redux";
import { loadGameDetail } from "../actions/detailAction";

import { smallImage } from "../util";
import { popup } from "../animation";

const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  // Load Detail Handler
  const dispatch = useDispatch();
  const loadDetaliHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadGameDetail(id));
  };

  const releasedFix = (str) => {
    if (typeof str === "string") {
      return str.split("-").reverse().join(".");
    } else return str;
  };

  return (
    <StyledGame
      layoutId={stringPathId}
      onClick={loadDetaliHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{releasedFix(released)}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;

  h3 {
    margin: 0rem 0.5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Game;
