import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import { Projectsdata } from "../assets/data/dummyProjects";

import { ReactComponent as Github } from "../icon/github-brands.svg";

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
  margin: 40px 40px;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;

  div.projectList {
    display: flex;
    margin-bottom: 40px;
    /* box-sizing: border-box; */
    padding: 10px 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0px 30px;
    padding: 0;
    min-width: 150px;
  }

  &.leftList {
  }

  &.rightList {
  }

  li {
    display: inline-block;
    margin-bottom: 8px;

    &.date {
      font-size: 20px;
    }

    &.github {
      color: gray;
      font-size: 12px;
    }

    &.title {
      font-size: 20px;
    }
    &.subtitle {
      color: gray;
      font-size: 15px;
    }
  }
`;

const Project = () => {
  const content = Projectsdata;
  const keywords = content.skill;
  // const keywords = content.keywords.map((keyword, index) => <span key={index}>{keyword}</span>)
  //<div className={styles.keywords}>{keywords}</div>
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
            pariatur.
          </Intro>
          <Projects>
            {Projectsdata.map((item) => (
              <React.Fragment key={item.id}>
                <div className="projectList">
                  <ul className="leftList">
                    <li className="date">{item.date}</li>
                    <a href={item.github} className="github">
                      <Github width="20" height="20" />
                      Github
                    </a>
                  </ul>
                  <ul className="rightList">
                    <li className="title">{item.title}</li>
                    <li className="subtitle">{item.subtitle}</li>
                    <li className="detail">{item.detail}</li>
                    <li className="skill">{item.skill}</li>
                    <li className="image">{item.image}</li>
                  </ul>
                </div>
              </React.Fragment>
            ))}
          </Projects>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Project;
