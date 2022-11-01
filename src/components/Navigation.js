import styled from "styled-components";
import mentor from "../assets/icons/Ментор.svg";
import stydents from "../assets/icons/Студент.svg";
import courses from "../assets/icons/Курсы.svg";
import certificate from "../assets/icons/Сертификат.svg";
import expirationDate from "../assets/icons/Дата окончания.svg";
import formOfStudy from "../assets/icons/Форма обучения.svg";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <StyledNav>
      <NavLink to="Mentor">
        <img src={mentor} alt="mentor" />
      </NavLink>
      <NavLink to="Student">
        <img src={stydents} alt="stydents" />
      </NavLink>
      <NavLink to="Cours">
        <img src={courses} alt="course" />
      </NavLink>
      <NavLink to="EndCourse">
        <img src={certificate} alt="certificate" />
      </NavLink>
      <NavLink to="LearningFormat">
        <img src={expirationDate} alt="expirationDate" />
      </NavLink>
      <NavLink to="Certificate">
        <img src={formOfStudy} alt="formOfStudy" />={" "}
      </NavLink>
    </StyledNav>
  );
}
export default Navigation;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  height: 610px;
  background: #0b345a;
  margin: 0 auto;
  & img {
    margin-top: 22px;
  }
`;
