import React from "react";
import styled from "styled-components";
import tiktok from "../../assets/icons/twitter.svg";
import twitter from "../../assets/icons/tiktok.svg";
import instagram from "../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <svg
            width="32"
            height="42"
            viewBox="0 0 32 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 41.5814C14.8542 41.5814 13.8736 41.175 13.0583 40.3621C12.2417 39.5479 11.8333 38.5695 11.8333 37.4271H20.1667C20.1667 38.5695 19.759 39.5479 18.9438 40.3621C18.1271 41.175 17.1458 41.5814 16 41.5814ZM7.66667 35.35V31.1957H24.3333V35.35H7.66667ZM8.1875 29.1185C5.79167 27.6992 3.89097 25.7951 2.48542 23.4064C1.07847 21.0177 0.375 18.4213 0.375 15.6171C0.375 11.2898 1.89444 7.61183 4.93333 4.58336C7.97083 1.5535 11.6597 0.0385742 16 0.0385742C20.3403 0.0385742 24.0292 1.5535 27.0667 4.58336C30.1056 7.61183 31.625 11.2898 31.625 15.6171C31.625 18.4213 30.9222 21.0177 29.5167 23.4064C28.1097 25.7951 26.2083 27.6992 23.8125 29.1185H8.1875ZM9.4375 24.9643H22.5625C24.125 23.8565 25.3319 22.489 26.1833 20.8619C27.0333 19.2348 27.4583 17.4866 27.4583 15.6171C27.4583 12.4322 26.3472 9.7319 24.125 7.51628C21.9028 5.30066 19.1944 4.19286 16 4.19286C12.8056 4.19286 10.0972 5.30066 7.875 7.51628C5.65278 9.7319 4.54167 12.4322 4.54167 15.6171C4.54167 17.4866 4.96736 19.2348 5.81875 20.8619C6.66875 22.489 7.875 23.8565 9.4375 24.9643Z"
              fill="white"
            />
          </svg>
          <p>Light Сode</p>
        </FooterLogo>
        <FooterContacts>
          <p>Контакты: +996 777 12 55 66</p>
        </FooterContacts>
        <FooterIcons>
          <img src={tiktok} alt="TikTok" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </FooterIcons>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: center;
  color: #eee;
  margin-top: 60px;
`;
const FooterContent = styled.div`
  background: #04030a;
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width:1440px){
    width: 100%;
  }
`;
const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    margin-left: 10px;
    cursor: pointer;
  }
`;
const FooterContacts = styled.div`
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 48px;
    cursor: pointer;
  }
`;
const FooterIcons = styled.div`
  img {
    height: 50px;
    width: auto;
    margin-left: 50px;
  }
`;