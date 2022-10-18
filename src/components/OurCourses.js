import styled from "styled-components";

function OurCourses() {
  const courses = [
    {
      id: 1,
      name: "Python",
    },
    {
      id: 2,
      name: "Frontend",
    },
    {
      id: 3,
      name: "Flutter",
    },
    {
      id: 4,
      name: "UX/UI",
    },
    {
      id: 5,
      name: "Java",
    },
    {
      id: 6,
      name: "C#",
    },
  ];
  return (
    <StyledWraper>
      <div className="block">
        <p>“Чему мы обучаем?”</p>
        <p>все курсы</p>
      </div>
      <div className="displayCart">
        {courses.map((el) => {
          return <Cart key={el.id}>{el.name}</Cart>;
        })}
      </div>
    </StyledWraper>
  );
}

export default OurCourses;

const StyledWraper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 900px;
  background: rgba(217, 217, 217, 0.66);
  border-radius: 10px;
  & .block {
    width: 100%;
    height: 152.17px;
    border-bottom: 1px solid #000000;
    display: flex;
    justify-content: space-between;
  }
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    padding-left: 40px;
    padding-right: 50px;
  }
  & .displayCart {
    display: grid;
    column-gap: 10px;
    row-gap: 20px;
    grid-template-columns: auto auto auto;
    margin-left: 10px;
    margin-top: 50px;
  }
`;
const Cart = styled.div`
  background: #eeeeee;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 450px;
  height: 280px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;
