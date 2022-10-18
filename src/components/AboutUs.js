/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import photo from "../assets/images/class.png";
import timeImg from "../assets/images/time.png";
import notBook from "../assets/images/notbook.png";

function AboutUs() {
  return (
    <StyledWraper>
      <p className="aboutus">“О нас”</p>
      <StyledBlock>
        <p>Наши преимущества</p>
      </StyledBlock>
      <p className="aboutus">“Вопросы-ответы”</p>
      <div className="position">
        <div className="quastion">
          <p>
            1. Что мне нужно иметь для учебы? - Главное наличие ноутбука и
            желание учиться.
          </p>
        </div>
        <img src={photo} alt="photo" />
      </div>
      <div className="block">
        <img src={timeImg} alt="time" />
        <Block>
          <p>
            “Почему я должен учиться у Вас? Обучение 15 часов, 3 месяца сплошной
            практики, 180 часов за 3 месяца, Обучение 20% теории, 80% практики
            через интерактивы, разборы и реальные кейсы
          </p>
        </Block>
      </div>
      <TwoBlock>
        <div>
          <p>
            “Нужен ли мне свой ноутбук? - Да, необходимо иметь свой ноутбук.
            Характеристики: Минимум 4 Гб оперативной памяти, 2 ядерный
            процессор. В идеале: 8 Гб оперативной памяти и процессор с 4 мя
            ядрами.
          </p>
        </div>
        <img src={notBook} alt="notbook" />
      </TwoBlock>
    </StyledWraper>
  );
}

export default AboutUs;

const StyledWraper = styled.div`
  width: 100%;
  height: 2462px;
  background: rgba(217, 217, 217, 0.17);
  border-radius: 10px;
  & .aboutus {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    padding-top: 50px;
    padding-left: 40px;
  }
  & .quastion {
    width: 562px;
    height: 236px;
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 10px;
    margin-left: 40px;
    display: flex;
    & p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 39px;
      color: #000000;
      padding: 20px 20px;
    }
  }
  & .position {
    display: flex;
    & img {
      width: 580px;
      height: 350px;
      margin-left: 208px;
      position: relative;
      bottom: 60px;
    }
  }
  & .block {
    display: flex;
    justify-content: space-between;
    margin-top: 160px;
    position: relative;
    right: 170px;
    & img {
      width: 580px;
      height: 450px;
      margin-left: 208px;
      position: relative;
      bottom: 60px;
    }
  }
`;
const StyledBlock = styled.div`
  width: 1350px;
  height: 380px;
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 10px;
  margin-left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    color: #000000;
  }
`;
const Block = styled.div`
  width: 615px;
  height: 512px;
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 10px;
  position: relative;
  left: 130px;
  bottom: 60px;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    padding: 30px 20px;
    width: 485px;
  }
`;
const TwoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  padding-left: 40px;
  & div {
    width: 594px;
    height: 512px;
    background: #d9d9d9;
    border: 1px solid #000000;
    border-radius: 10px;
    & p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 48px;
      padding: 20px 20px;
    }
  }
  & img {
    width: 680px;
    height: 400px;
  }
`;
