import styled from "styled-components";
import AdminHeader from "./headers/AdminHeader";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

function Mentor() {
  return (
    <Container>
      <AdminHeader title="Mentor" />
      <StyledTable>
        <div className="title">
          <p>ФИО студента</p>
          <p>Наименование курса</p>
          <p>Дата окончания курса</p>
          <p>Формат обучения</p>
          <p>Сертификат</p>
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

export default Mentor;

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
    justify-content: space-around;
    & > p {
      width: 134px;
      text-align: center;
    }
  }
  & .user {
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: space-around;
    align-items: center;
    background-color: #e5e5e5;
    border-radius: 2px;
    margin-bottom: 30px;
    & > p {
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
