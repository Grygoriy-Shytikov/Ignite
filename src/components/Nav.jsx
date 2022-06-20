import React, { useState } from "react";
// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../animation";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

import logo from "../img/logo.svg";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
    toggleDisableBtn();
  };

  const toggleDisableBtn = () => {
    if (textInput.length > 0) {
    }
  };

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearch = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearch}>
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </StyledLogo>
      <form id="search-form" className="search">
        <input
          value={textInput}
          onChange={inputHandler}
          type="text"
          placeholder="Popular Games"
        />
        <button form="search-form" onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;

  form {
    margin-top: 1rem;
    width: 50%;
    margin: 0 auto;

    display: flex;
    align-items: center;
  }

  input {
    width: 100%;
    border: 1px solid #ff7676;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  button {
    height: 2.3rem;
    font-size: 1rem;
    border: 1px solid #ff7676;
    padding: 0.5rem 2rem;
    background: #ff7676;
    color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1440px) {
    form {
      width: 80%;
    }
  }

  @media (max-width: 1280px) {
    padding: 0rem 2rem;

    form {
      width: 100%;
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;
