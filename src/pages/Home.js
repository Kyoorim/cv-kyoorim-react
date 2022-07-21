import React from "react";
import styled from "styled-components";
import Mainimg from "../assets/main.jpeg";
import Eiffel from "../assets/eiffel.png";
import StandingNico from "../assets/nicolas.png";
import Balloon from "../assets/balloon.png";

import Nav from "../components/Nav";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const BalloonContainer = styled.div`
  position: absolute;
  bottom: 20%;
  left: 13%;
`;

const NicoContainer = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 10%;
`;

const Title = styled.div`
  font-size: 30pt;
  margin: 40px 0px;
`;

const ImgContainer = styled.div``;

const MovingEiffel = styled.div`
  position: absolute;
  left: 48%;
  top: 93px;
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
        <Nav></Nav>
        <BalloonContainer>
          <img src={Balloon} width={90} height={180} />
        </BalloonContainer>
        <NicoContainer>
          <img src={StandingNico} width={100} height={200} />
        </NicoContainer>
        <Contents>
          <Title>Bonjour Coding</Title>
          <ImgContainer>
            <MovingEiffel>
              <img src={Eiffel} width={50} height={60} />
            </MovingEiffel>
            <LogoImage>
              <img
                src={Mainimg}
                width={300}
                height={300}
                className="rounded-circle"
              />
            </LogoImage>
          </ImgContainer>
          <Desc>불어하는 개발자 이규림입니다</Desc>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Home;
