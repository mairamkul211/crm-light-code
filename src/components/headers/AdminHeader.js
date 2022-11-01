import styled from "styled-components";
import Button from "../UI/Button";
import { BsSearch } from "react-icons/bs";

function AdminHeader(props) {
  return (
    <HeaderStyled>
      <div className="search">
        <p>{props.title}</p>
        {props.search === "search" && (
          <>
            <input type={"text"} />
            <span>
              <BsSearch />
            </span>
          </>
        )}
      </div>
      <div className="buttons">
        <Button>Добавить</Button>
        <Button>Редактировать</Button>
      </div>
    </HeaderStyled>
  );
}

export default AdminHeader;

const HeaderStyled = styled.header`
  width: 1360px;
  height: 82px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1.4px 5px black;
  & button {
    width: 125px;
    font-size: 12px;
    height: 25px;
    margin-top: 12px;
  }
  & .search {
    display: flex;
    align-items: center;
    & input {
      width: 198px;
      height: 25px;
      background: #eeeeee;
      border: 1px solid #14181f;
      margin-left: 6px;
    }
    & span {
      position: relative;
      right: 25px;
    }
  }
  & .buttons {
    display: flex;
    flex-direction: column;
  }
  & p {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    font-family: "Inter";
    font-style: normal;
    color: #000000;
    margin-left: 122px;
  }
  & div {
    margin-right: 80px;
    margin-bottom: 10px;
  }
`;
