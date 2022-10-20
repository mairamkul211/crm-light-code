import styled from "styled-components";
import vidio from "../assets/images/vidio.svg";
import information from "../assets/images/information.svg";
import { useState } from "react";

function Infonrmation() {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <div>
        <p>“Курсы программирования Бишкек Light Code” с видеоконтентом</p>
        <img src={vidio} alt="img" onClick={() => setModal(true)} />
        {modal && (
          <Video
            width="960"
            height="615"
            src="https://www.youtube.com/embed/Dz_EZg8jB8g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video>
        )}
      </div>
      <div>
        <p>“Light Code” с текстовой информацией</p>
        <img src={information} alt="information img" />
      </div>
    </Container>
  );
}

export default Infonrmation;

const Video = styled.iframe`
  width: 960;
  height: 615;
  margin: 0 auto;
  z-index: 1;
  position: absolute;
  /* bottom: ; */
`;
const Container = styled.div`
  margin: 0 auto;
  width: 1920px;
  display: flex;
  justify-content: space-between;
  height: 446px;
  padding: 40px;
  background: radial-gradient(
    50% 425.18% at 27.06% 50%,
    #434cc0 0%,
    rgba(5, 7, 31, 0) 100%
  );
  border-radius: 10px;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    width: 755px;
    height: 105.24px;
    color: #ffffff;
  }
  & > div > img {
    cursor: pointer;
  }
`;
