import styled from "styled-components";
import vidio from "../assets/images/vidio.svg";
import information from "../assets/images/information.svg";
import { useState } from "react";
import Modal from "./UI/Modal";

function Infonrmation() {
  const [modal, setModal] = useState(false);

  const handleClose = () => setModal(false);

  return (
    <Container>
      <div>
        <p className="course">
          “Курсы программирования Бишкек Light Code” с видеоконтентом
        </p>
        <img src={vidio} alt="img" onClick={() => setModal(true)} />
        <Modal open={modal} handleClose={handleClose}>
          <video
            width="960"
            height="615px"
            controls=""
            autoplay=""
            name="media"
          >
            <source
              src="https://lightcode-bishkek.xyz/static/media/v2.4f96f663.mp4"
              type="video/mp4"
            />
          </video>
        </Modal>
      </div>
      <div>
        <p>“Light Code” с текстовой информацией</p>
        <img src={information} alt="information img" />
      </div>
    </Container>
  );
}

export default Infonrmation;

const Container = styled.div`
  margin: 0 auto;
  width: 1440px;
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
    font-size: 35px;
    line-height: 48px;
    height: 105.24px;
    color: #ffffff;
  }
  & > div > img {
    cursor: pointer;
  }
  & .course {
    width: 600px;
  }
`;
