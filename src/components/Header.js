import React from "react";
import styled from "styled-components";

// 링크타고 이동할 수 있는 useNavigate
// Link를 써도 페이지 이동을 시킬 수 있지만 단순하게 이동만 시켜야 하는 경우 Link를 사용하면 좋고 useNavigate를 사용하면 특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 useNavigate를 사용한다.
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const Menu = styled.div`
  font-size: 13pt;
  margin-right: 40px;
`;

const Header = () => {
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
        <Menu onClick={directToHome}>HOME</Menu>
        <Menu onClick={directToAboutMe}>ABOUT ME</Menu>
        <Menu onClick={directToProject}>PROJECT</Menu>
        <Menu onClick={directToContact}>CONTACT</Menu>
      </Wrapper>
    </>
  );
};

export default Header;
