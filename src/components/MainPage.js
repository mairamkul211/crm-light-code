import styled from "styled-components";
import AboutUs from "./AboutUs";
import Contack from "./Contack";
import Footer from "./Footer";
import Header from "./headers/Header";
import Map from "./Map";
import OurCourses from "./OurCourses";
import StudentFeedback from "./StudentFeedback";

function MainPage() {
  return (
    <div>
      <Header />
      <StyledMainPage>
        <div>
          <p className="text">
            “Курсы программирования Бишкек Light Code” с видеоконтентом
          </p>
          <p className="twoText">“Light Code” с текстовой информацией</p>
        </div>
        <div className="position">
          <Input type="text" />
          <Input className="twoInput" type="text" />
        </div>
      </StyledMainPage>
      <OurCourses />
      <AboutUs />
      <StudentFeedback />
      <Contack />
      <Map />
      <Footer />
    </div>
  );
}

export default MainPage;

const StyledMainPage = styled.main`
  width: 100%;
  height: 446px;
  left: 0px;
  top: 154px;
  background: rgba(217, 217, 217, 0.46);
  border-radius: 10px;
  display: flex;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    padding: 50px 0 0 40px;
  }
  & .text {
    width: 755px;
  }
  & .twoText {
    width: 604px;
  }
  & .position {
    padding-top: 50px;
  }
  & .twoInput {
    margin-top: 20px;
  }
`;
const Input = styled.input`
  background: #d9d9d9;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 610px;
  height: 163.37px;
`;
