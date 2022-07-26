import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { dummyProfiles } from "../assets/data/dummyProfiles";

// import { ReactComponent as ProfileLogo } from "../icon/profile.svg";
// import { ReactComponent as Work } from "../icon/work.svg";
// import { ReactComponent as Skills } from "../icon/skills.svg";
// import { ReactComponent as Education } from "../icon/education.svg";
// import { ReactComponent as Certificate } from "../icon/certificate.svg";
// import { ReactComponent as Project } from "../icon/project.svg";
import { ReactComponent as Xmark } from "../icon/circle-xmark.svg";

const ProfileContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 0px 80px;

  ul.profileList {
    border: var(--border);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 250px;
    flex-basis: 23.5%;
    flex-shrink: 1;
    flex-grow: 1;
    padding: 0px 15px;
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
  }

  li {
    display: inline-block;
    margin-bottom: 10px;

    &.logo {
      font-size: 30px;
      margin-bottom: 25px;
    }
    &.title {
      font-size: 20px;
    }
    &.content {
      font-size: 15px;
      color: gray;
    }
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
        {dummyProfiles.map((item) => (
          <React.Fragment key={item.id}>
            <ul className="profileList">
              <li className="logo" onClick={openModalHandler}>
                {item.image}
              </li>
              <li className="title">{item.title}</li>
              <li className="content">{item.content}</li>
            </ul>
          </React.Fragment>
        ))}
        {modalOpen ? (
          <ModalBackdrop>
            <ModalView>
              <div onClick={openModalHandler} className="closeBtn">
                <Xmark width="25" height="25" />
              </div>
              <div onClick={openModalHandler}>
                {dummyProfiles.map((item) => (
                  <React.Fragment key={item.id}>
                    <ul>
                      <li>{item.detail}</li>
                    </ul>
                  </React.Fragment>
                ))}
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ProfileContainer>
    </>
  );
};

export default Profile;

// <ProfileContainer>
//   <ProfileList>
//     <Emoji onClick={openModalHandler}>
//       <ProfileLogo className="logo" />
//     </Emoji>
//     <Title>Profile</Title>
//     {modalOpen ? (
//       <ModalBackdrop>
//         <ModalView>
//           <div onClick={openModalHandler} className="closeBtn">
//             <Xmark width="25" height="25" />
//           </div>
//           <div onClick={openModalHandler}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//             do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
//           </div>
//         </ModalView>
//       </ModalBackdrop>
//     ) : null
//     <Body></Body>
//   </ProfileList>
//   <ProfileList>
//     <Emoji>
//       <Work className="logo" />
//     </Emoji>
//     <Title>Work Experience</Title>
//     <Body></Body>
//   </ProfileList>
//   <ProfileList>
//     <Emoji>
//       <Skills className="logo" />
//     </Emoji>
//     <Title>Skills</Title>
//     <Body></Body>
//   </ProfileList>
//   <ProfileList>
//     <Emoji>
//       <Education className="logo" />
//     </Emoji>
//     <Title>Education</Title>
//     <Body></Body>
//   </ProfileList>
//   <ProfileList>
//     <Emoji>
//       <Certificate className="logo" />
//     </Emoji>
//     <Title>Certificate</Title>
//     <Body></Body>
//   </ProfileList>
//   <ProfileList>
//     <Emoji>
//       <Project className="logo" />
//     </Emoji>
//     <Title>Project</Title>
//     <Body></Body>
//   </ProfileList>
// </ProfileContainer>
