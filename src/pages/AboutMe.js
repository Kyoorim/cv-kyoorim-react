import React from "react";
import styled from "styled-components";
import { useState } from "react";

import Nav from "../components/Nav";
import Profile from "../components/Profile";

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  font-size: 10pt;
  margin: 40px 60px;
`;

const Profiles = styled.div`
  font-size: 10pt;
  margin: 40px 20px;
  width: 100%;
`;

const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <Nav></Nav>
        <Contents>
          <Intro>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </Intro>
          <Profiles>
            <Profile />
          </Profiles>
        </Contents>
      </Wrapper>
    </>
  );
};

export default AboutMe;
