import styled from "styled-components";
import { useState } from "react";

import { ReactComponent as ProfileLogo } from "../icon/profile.svg";
import { ReactComponent as Work } from "../icon/work.svg";
import { ReactComponent as Skills } from "../icon/skills.svg";
import { ReactComponent as Education } from "../icon/education.svg";
import { ReactComponent as Certificate } from "../icon/certificate.svg";
import { ReactComponent as Project } from "../icon/project.svg";
import { ReactComponent as Xmark } from "../icon/circle-xmark.svg";
import React from "react";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 0px 20px;
`;

const ProfileList = styled.div`
  border: var(--border);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  flex-basis: 23.5%;
  flex-shrink: 1;
  flex-grow: 1;
  /* @media screen and (max-width: 1023px) {
    flex-basis: 49%;
  } */
  @media screen and (max-width: 769px) {
    flex-basis: 100%;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
`;

const Emoji = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Body = styled.div``;

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  color: black;
  padding: 30px 90px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 15px;
  animation: modal-show 0.5s;

  div.closeBtn {
    z-index: 10;
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
  }

  @keyframes modal-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Profile = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = (event) => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <ProfileContainer>
        <ProfileList>
          <Emoji onClick={openModalHandler}>
            <ProfileLogo className="logo" />
          </Emoji>
          <Title>Profile</Title>
          {modalOpen ? (
            <ModalBackdrop>
              <ModalView>
                <div onClick={openModalHandler} className="closeBtn">
                  <Xmark width="25" height="25" />
                </div>
                <div onClick={openModalHandler}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </div>
              </ModalView>
            </ModalBackdrop>
          ) : null}
          <Body></Body>
        </ProfileList>
        <ProfileList>
          <Emoji>
            <Work className="logo" />
          </Emoji>
          <Title>Work Experience</Title>
          <Body></Body>
        </ProfileList>
        <ProfileList>
          <Emoji>
            <Skills className="logo" />
          </Emoji>
          <Title>Skills</Title>
          <Body></Body>
        </ProfileList>
        <ProfileList>
          <Emoji>
            <Education className="logo" />
          </Emoji>
          <Title>Education</Title>
          <Body></Body>
        </ProfileList>
        <ProfileList>
          <Emoji>
            <Certificate className="logo" />
          </Emoji>
          <Title>Certificate</Title>
          <Body></Body>
        </ProfileList>
        <ProfileList>
          <Emoji>
            <Project className="logo" />
          </Emoji>
          <Title>Project</Title>
          <Body></Body>
        </ProfileList>
      </ProfileContainer>
    </>
  );
};

export default Profile;
