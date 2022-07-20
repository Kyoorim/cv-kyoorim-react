import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

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

const Title = styled.div`
  font-size: 30pt;
  margin: 40px 0px;
`;

const AboutMe = () => {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <Contents>
          <Title>ABOUT ME</Title>
        </Contents>
      </Wrapper>
    </>
  );
};

export default AboutMe;
