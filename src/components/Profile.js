import styled from "styled-components";

import { ReactComponent as ProfileLogo } from "../icon/profile.svg";
import { ReactComponent as Work } from "../icon/work.svg";
import { ReactComponent as Skills } from "../icon/skills.svg";
import { ReactComponent as Education } from "../icon/education.svg";
import { ReactComponent as Certificate } from "../icon/certificate.svg";
import { ReactComponent as Project } from "../icon/project.svg";

const Wrapper = styled.div``;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
`;

const ProfileList = styled.div`
  width: 25%;
  .logo {
    width: 50px;
    height: 50px;
  }
`;

const Emoji = styled.div``;

const Title = styled.div``;

const Body = styled.div``;

const Profile = () => {
  return (
    <>
      <Wrapper>
        <ProfileContainer>
          <ProfileList>
            <Emoji>
              <ProfileLogo className="logo" />
            </Emoji>
            <Title>Profile</Title>
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
      </Wrapper>
    </>
  );
};

export default Profile;
