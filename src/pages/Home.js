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
  animation: balloons 10s ease-in-out infinite;
  transform-origin: bottom center;

  @keyframes balloons {
    0%,
    100% {
      transform: translateY(0) rotate(-2deg);
    }
    75% {
      transform: translateY(-50px) rotate(-8deg);
    }
    50% {
      transform: translateY(-75%) rotate(4deg);
    }
    /* 25% {
      transform: translateY(-125px) rotate(2deg);
    } */
  }
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
  top: 5%;
`;

const Title = styled.div`
  font-size: 30pt;
  margin: 20px 0px;
  background-color: white;
  z-index: 3;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const MovingEiffel = styled.div`
  background-color: white;
  width: 420px;
  height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  animation: rotate_image 8s ease-in-out infinite;
  transform-origin: 50% 50%;

  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LogoImage = styled.div`
  /* margin: 10px 0px 40px 0px; */
  position: absolute;
  bottom: 60px;

  img {
    box-shadow: 0px 1px 14px 3px rgba(0, 0, 0, 0.4);
  }
`;

const Desc = styled.div`
  font-size: 20pt;
  margin: 30px 0px;
  background-color: white;
  z-index: 3;
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
