import React from "react";
import styled from "styled-components";
import LoaderRolling from "../img/LoaderRolling.svg";

const Loader = () => {
  return (
    <StyledLoader>
      <img src={LoaderRolling} alt="LoaderRolling" />
    </StyledLoader>
  );
};

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  min-height: 50vh;

  img {
    width: 70px;
  }
`;

export default Loader;
