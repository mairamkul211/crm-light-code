import styled from "styled-components";
import { array } from "../helpers/arrayLanguage";

function OurCourses() {
  return (
    <Container>
      <div className="block">
        <p>“Чему мы обучаем?”</p>
        <p>все курсы</p>
      </div>
      <Line />
      <Cart>
        {array.map((el) => {
          return (
            <Show key={el.id}>
              <img src={el.img} alt={el.title} />
              <p>{el.title}</p>
              <p className="hoverText">{el.text}</p>
            </Show>
          );
        })}
      </Cart>
    </Container>
  );
}

export default OurCourses;

const Container = styled.div`
  margin: 0 auto;
  width: 1920px;
  padding: 40px;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
  }
  & .block {
    display: flex;
    justify-content: space-between;
  }
`;
const Line = styled.div`
  width: 1920px;
  margin: 0 auto;
  height: 0px;
  border: 1px solid #ffffff;
`;
const Cart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Show = styled.div`
  width: 600px;
  height: 380px;
  background: rgba(5, 7, 31, 0.45);
  border: 1px solid rgba(23, 117, 203, 0.93);
  backdrop-filter: blur(2px);
  border-radius: 10px;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .hoverText {
    display: none;
  }
  :hover {
    text-align: center;
    & img {
      display: none;
    }
    .hoverText {
      display: block;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 28px;
      width: 545px;
      height: 281px;
      line-height: 48px;
      position: relative;
      bottom: 65px;
    }
  }
`;
