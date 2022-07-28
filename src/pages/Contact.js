import React from "react";
import styled from "styled-components";

import Nav from "../components/Nav";
import { dummyContacts } from "../assets/data/dummyContacts";

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
  margin: 40px 60px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;
  padding: 0px 80px;

  ul.contactList {
    border: var(--border);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 250px;
    flex-basis: 20%;
    flex-shrink: 1;
    flex-grow: 1;
    padding: 0px 15px;

    @media screen and (max-width: 769px) {
      flex-basis: 100%;
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

const Contact = () => {
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
          <Main>
            {dummyContacts.map((item) => {
              return (
                <ul className="contactList" key={item.id}>
                  <li className="logo">
                    <img src={item.image} width={65} height={65} />
                  </li>
                  <li className="title">{item.title}</li>
                  <li className="content">{item.content}</li>
                </ul>
              );
            })}
          </Main>
        </Contents>
      </Wrapper>
    </>
  );
};

export default Contact;
