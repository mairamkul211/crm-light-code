import styled from "styled-components";
import AdminHeader from "./headers/AdminHeader";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Courses() {
  return (
    <Container>
      <AdminHeader title="Курсы" />
      <StyledTable>
        <div className="title">
          <p>1 ФИО студента</p>
          <p>Python developer</p>
          <p>Frontend developer</p>
          <p>Flutter developer</p>
          <p>UX/UI дизайнер</p>
          <p>Java developer</p>
          <p>C# developer</p>
        </div>
        {[...Array(2)].map(() => {
          return (
            <div className="flex">
              <div className="user">
                <p>User Name</p>
                <p>javacsript</p>
                <p>08.40.3221</p>
                <p>ofline</p>
                <p>vawesvbw</p>
                <p>vawesvbw</p>
                <p>vawesvbw</p>
              </div>
              <span>
                <AiOutlineEdit />
                <AiOutlineDelete />
              </span>
            </div>
          );
        })}
      </StyledTable>
    </Container>
  );
}

export default Courses;

const Container = styled.div`
  margin: 0 auto;
  width: 1360px;
  height: 610px;
  background: #ffffff;
  overflow: auto;
`;

const StyledTable = styled.div`
  width: 1200px;
  margin-top: 22px;
  margin-left: 50px;
  & .title {
    display: flex;
    & > p {
      width: 134px;
      text-align: center;
      margin-left: 30px;
    }
  }
  & .user {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-around;
    align-items: center;
    border-radius: 2px;
    margin-bottom: 30px;
    & > p {
        background-color: #e5e5e5;
        height: 100%;
        width: 100%;
        border: 5px solid white;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
  & .flex {
    display: flex;
    align-items: center;
    & span {
      width: 60px;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      position: relative;
      left: 60px;
      bottom: 20px;
    }
  }
`;
