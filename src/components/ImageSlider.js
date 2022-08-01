import styled from "styled-components";
import React from "react";
import { useState } from "react";

import { ReactComponent as Xmark } from "../icon/circle-xmark.svg";

const ImgContainer = styled.div`
  margin-top: 20px;
  display: flex;

  img.thumbnail {
    margin-right: 15px;
    border: var(--border);
    border-radius: 10px;
    transform: scale(1);
    transition: transform 0.5s;
    box-shadow: 0px 1px 14px -1px rgba(0, 0, 0, 0.4);

    &:hover {
      transform: scale(1.2); /* 이미지 확대 */
      transition: transform 0.5s; /*  시간 설정  */
    }
  }
`;

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
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
  padding: 30px 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 800px;
  height: 600px;
  position: relative;
  z-index: 10;
  border-radius: 15px;
  animation: modal-show 0.5s;

  div.closeBtn {
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 20px;
    z-index: 20;
  }

  img {
    position: absolute;
    width: 800px;
    height: 600px;
    top: 0;
    left: 0;
    border-radius: 15px;
    z-index: 5;
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

const ImageSlider = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModalHandler = (event) => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <ImgContainer>
        {image.map((picture) => {
          return (
            <img
              className="thumbnail"
              src={picture.pic}
              key={picture.idx}
              width={100}
              height={80}
              style={{ cursor: "pointer" }}
              onClick={openModalHandler}
            />
          );
        })}
        {modalOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView>
              <div onClick={openModalHandler} className="closeBtn">
                <Xmark width="25" height="25" />
              </div>
              <div>
                {image.map((picture, idx) => {
                  return (
                    <img
                      onClick={openModalHandler}
                      key={idx}
                      src={picture.pic}
                    />
                  );
                })}
              </div>
            </ModalView>
          </ModalBackdrop>
        ) : null}
      </ImgContainer>
    </>
  );
};

export default ImageSlider;
