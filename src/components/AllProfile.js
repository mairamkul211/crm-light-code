import Mentor from "./Mentor";
import Cours from "./Courses";
import EndCourse from "./EndCourse";
import LearningFormat from "./LearningFormat";
import { Navigate, Route, Routes } from "react-router";
import Certificate from "./Certificate";
import Navigation from "./Navigation";
import Student from "./Student";
import styled from "styled-components";

function AllProfile() {
  return (
    <GlobalBlock>
      <Navigation />
      <Routes>
        <Route>
          <Route path="/*" element={<Navigate to="Mentor" />} />
          <Route path="Mentor" element={<Mentor />} />
          <Route path="Student" element={<Student />} />
          <Route path="Cours" element={<Cours />} />
          <Route path="EndCourse" element={<EndCourse />} />
          <Route path="LearningFormat" element={<LearningFormat />} />
          <Route path="Certificate" element={<Certificate />} />
        </Route>
      </Routes>
    </GlobalBlock>
  );
}

export default AllProfile;

const GlobalBlock = styled.div`
  display: flex;
`;
