/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import student from "../assets/images/student1.png";
import student2 from "../assets/images/student2.png";
import student3 from "../assets/images/student3.png";

function StudentFeedback() {
  return (
    <Container>
      <p>“Отзывы наших учеников”</p>
      <div className="position">
        <Cart>
          <img src={student} alt="photo" />
        </Cart>
        <Cart>
          <img src={student2} alt="photo" />
        </Cart>
        <Cart>
          <img src={student3} alt="photo" />
        </Cart>
      </div>
    </Container>
  );
}

export default StudentFeedback;

const Container = styled.div`
  width: 100%;
  height: 724px;
  background: rgba(217, 217, 217, 0.46);
  border-radius: 10px;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    padding: 50px 40px;
  }
  & .position {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Cart = styled.div`
  width: 460px;
  height: 360px;
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 10px;
  display: flex;
  justify-content: end;
  & img {
    width: 150px;
    height: 150px;
    border-radius: 0px 10px 0px 0px;
  }
`;
