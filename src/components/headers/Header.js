import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  const stylednav = {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "24px",
    lineheight: "44px",
    color: "#D9D9D9",
    textDecoration: "none",
  };
  return (
    <StyledHeader>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-lightbulb-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"></path>
        </svg>
        <p>Light Сode</p>
      </div>
      <NavLink to="/ourCourses" style={stylednav}>Наши курсы</NavLink>
      <NavLink to="/footer" style={stylednav}>О нас</NavLink>
      <NavLink style={stylednav}>Отзывы</NavLink>
      <NavLink style={stylednav}>Контакты</NavLink>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  font-family: "Inter";
  width: 100%;
  height: 124px;
  background: #0A0A12;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
    color: #ffffff;
    & p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 44px;
      margin-left: 5px;
      padding-right: 369px;
    }
  }
`;
