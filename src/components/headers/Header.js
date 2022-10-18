import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Header() {
  const stylednav = {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineheight: "24px",
    color: "#000000",
    textDecoration: "none",
  };
  return (
    <StyledHeader>
      <NavLink style={stylednav}>Logo</NavLink>
      <NavLink style={stylednav}>Наши курсы</NavLink>
      <NavLink style={stylednav}>О нас</NavLink>
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
  background: #d9d9d9;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
