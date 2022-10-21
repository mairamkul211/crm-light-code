import styled from "styled-components";
import lightcod from "../../assets/icons/lightbulb.svg";
import tiktok from "../../assets/icons/tiktok.svg";
import twitter from "../../assets/icons/twitter.svg";
import instagram from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <StyledFooter>
      <div>
        <img className="lightcod" src={lightcod} alt="lightcod" />
        <p>Light Code</p>
      </div>
      <span>Контакты: +996 777 12 55 66</span>
      <div>
        <a href="https://www.tiktok.com/@lightcode.kg">
          <Img src={tiktok} alt="tiktok" />
        </a>
        <a href="https://www.tiktok.com/@lightcode.kg">
          <Img src={twitter} alt="tiwitter" />
        </a>
        <a href="https://www.instagram.com/lightcode.kg/">
          <Img src={instagram} alt="instagram" />
        </a>
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  margin: 0 auto;
  width: 1440px;
  display: flex;
  height: 116px;
  justify-content: space-between;
  align-items: center;
  & div {
    display: flex;
    align-items: center;
  }
  & .lightcod {
    width: 21.25px;
  }
  & p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 44px;
    margin-left: 5px;
    color: #ffffff;
  }
  & span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 48px;
    color: #eeeeee;
    margin-left: 5px;
  }
`;
const Img = styled.img`
  width: 31.25px;
  margin-left: 30px;
`;
