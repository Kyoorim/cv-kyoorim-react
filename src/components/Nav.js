import React from "react";
import { useState } from "react";
import styled from "styled-components";

// 링크타고 이동할 수 있는 useNavigate
// Link를 써도 페이지 이동을 시킬 수 있지만 단순하게 이동만 시켜야 하는 경우 Link를 사용하면 좋고 useNavigate를 사용하면 특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용한다.
import { useNavigate } from "react-router-dom";
import { ReactComponent as Bar } from "../icon/bars-solid.svg";

import Nico from "../assets/nicolas2.png";

const Wrapper = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-bottom: var(--border);
  position: relative;

  div {
    font-size: 16pt;
    margin-right: 40px;
    font-weight: 600;
  }

  .blue {
    color: #0e32ff;
  }

  .white {
    color: #d9d9d9;
  }

  .red {
    color: #fe2500;
  }
`;

const NicolasImage = styled.div`
  position: absolute;
  bottom: 0px;
  right: -5px;
  @media screen and (max-width: 768px) {
    right: 10%;
  }
`;

const Menu = styled.div`
  display: flex;
  font-size: 14pt;
  font-weight: 600;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }

  .blue {
    color: 0e32ff;
  }

  .white {
    color: #d9d9d9;
  }

  .red {
    color: #fe2500;
  }
`;

const MenuBar = styled.div`
  /* display: flex;
  flex-direction: column;
  text-align: center;
  height: 50vh; */
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Detail = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  top: 75px;
  right: 0;

  li {
    display: inline-block;
    border: var(--border);
    background-color: white;
    z-index: 5;
    padding: 20px 20px;
  }

  &.show-menu {
    width: 200px;
    height: 80px;
  }

  &.hide-menu {
    opacity: 0;
  }
`;

const Nav = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuClick = () => {
    setIsOpened(!isOpened);
  };

  const navigate = useNavigate();

  const directToHome = () => {
    navigate("/");
  };

  const directToAboutMe = () => {
    navigate("/aboutme");
  };

  const directToProject = () => {
    navigate("/project");
  };

  const directToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <Wrapper>
        <NicolasImage>
          <img src={Nico} width={50} height={60} />
        </NicolasImage>
        <Menu style={{ cursor: "pointer" }}>
          <div className="blue" onClick={directToHome}>
            HOME
          </div>
          <div className="white" onClick={directToAboutMe}>
            ABOUT ME
          </div>
          <div className="red" onClick={directToProject}>
            PROJECT
          </div>
          <div className="black" onClick={directToContact}>
            CONTACT
          </div>
        </Menu>
        <MenuBar>
          <Bar
            width="35"
            height="35"
            style={{ cursor: "pointer" }}
            onClick={handleMenuClick}
          />
        </MenuBar>
        <Detail
          className={isOpened ? "show-menu" : "hide-menu"}
          style={{ cursor: "pointer" }}
        >
          <li onClick={directToHome}>HOME</li>
          <li onClick={directToAboutMe}>ABOUT ME</li>
          <li onClick={directToProject}>PROJECT</li>
          <li onClick={directToContact}>CONTACT</li>
        </Detail>
      </Wrapper>
    </>
  );
};

export default Nav;
