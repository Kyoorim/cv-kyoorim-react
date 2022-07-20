import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Mainimg from "../assets/main.jpeg";

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

const LogoImage = styled.div`
  margin: 10px 0px 40px 0px;
`;

const Desc = styled.div`
  font-size: 20pt;
  margin: 30px 0px;
`;

const Home = () => {
  //  useNavigate는 컴포넌트로 header 만들때 연결해보자
  //   const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Header></Header>
        <Contents>
          <Title>Bonjour Coding🥖</Title>
          <LogoImage>
            <img
              src={Mainimg}
              width={300}
              height={300}
              className="rounded-circle"
            />
          </LogoImage>
          <Desc>불어하는 개발자 이규림입니다</Desc>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Home;
