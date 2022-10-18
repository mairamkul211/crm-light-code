import styled from "styled-components";
import map from "../assets/images/map.png";

function Map() {
  return (
    <Container>
      <img src={map} alt="map" />
    </Container>
  );
}

export default Map;

const Container = styled.div`
  width: 100%;
  height: 520px;
  border-radius: 10px;
  margin-top: 30px;
  & img {
    width: 100%;
    height: 420px;
  }
`;
