import styled from "styled-components";

function Contack() {
  return (
    <Container>
      <div>
        <p>1. Ваше имя</p>
        <p>2. Номер телефона</p>
      </div>
      <div className="inputPosition">
        <input type="text" />
        <input type="number" />
      </div>
      <button>Отправить</button>
      <p className="text">Оставьте свой номер, а мы вам перезвоним </p>
    </Container>
  );
}

export default Contack;

const Container = styled.div`
  width: 100%;
  height: 509.43px;
  background: #0b345a;
  border-radius: 10px;
  display: flex;
  & button {
    width: 342px;
    height: 86.21px;
    background: #d9d9d9;
    border-radius: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    position: relative;
    top: 360px;
    right: 580px;
  }
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #e5e5e5;
    padding: 20px 40px;
  }
  & input {
    width: 335px;
    height: 50.94px;
    background: #d9d9d9;
    border-radius: 10px;
    margin-top: 60px;
  }
  & .inputPosition {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
  & .text {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    width: 342px;
    height: 145.97px;
    position: relative;
    top: 110px;
  }
`;
