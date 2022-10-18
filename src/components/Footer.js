/* eslint-disable jsx-a11y/img-redundant-alt */
import styled from "styled-components";
import tiktok from "../assets/icons/tiktok.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";

function Footer() {
  return (
    <Container>
      <p>Logo</p>
      <p>телефон</p>
      <div>
        <img src={tiktok} alt="photo" />
        <img src={twitter} alt="photo" />
        <img src={instagram} alt="photo" />
      </div>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 134px;
  background: #d9d9d9;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    padding-left: 40px;
  }
  & img {
    width: 90px;
    height: 90.34px;
    margin-right: 30px;
  }
`;
