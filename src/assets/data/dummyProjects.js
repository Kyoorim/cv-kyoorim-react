import cv1 from "../cv-react-1.png";
import cv2 from "../cv-react-2.png";
import cv3 from "../cv-react-3.png";
import macaron1 from "../macaron-1.png";
import macaron2 from "../macaron-2.png";
import macaron3 from "../macaron-3.png";
import macaron4 from "../macaron-4.png";

export const Projectsdata = [
  {
    id: 1,
    date: "2022-07-26",
    github: "https://github.com/Kyoorim/cv-kyoorim-react",
    title: "자기소개 페이지",
    subtitle: "개인 프로젝트",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    skill: ["React", "styled-components"],
    image: [
      {
        idx: 1,
        pic: cv1,
      },
      {
        idx: 2,
        pic: cv2,
      },
      {
        idx: 3,
        pic: cv3,
      },
    ],
  },
  {
    id: 2,
    date: "2022-07-26",
    github: "//github.com/Kyoorim",
    title: "Macaron français",
    subtitle: "개인 프로젝트",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    skill: ["React", "styled-components"],
    image: [
      {
        idx: 1,
        pic: macaron1,
      },
      {
        idx: 2,
        pic: macaron2,
      },
      {
        idx: 3,
        pic: macaron3,
      },
      {
        idx: 3,
        pic: macaron4,
      },
    ],
  },
  {
    id: 3,
    date: "2022-07-26",
    github: "//github.com/Kyoorim",
    title: "강아지 캘린더",
    subtitle: "개인 프로젝트",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    skill: ["React", "styled-components", "Firebase"],
    image: [
      {
        idx: 1,
        pic: cv1,
      },
      {
        idx: 2,
        pic: macaron1,
      },
    ],
  },
];
