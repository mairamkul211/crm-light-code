import React from "react";
import styled from "styled-components";

const AboutUs = ({ array }) => {
  return (
    <GlobalContainer>
      {array.map((data) => {
        return (
          <Container>
            <Title>"{data.title}"</Title>
            <ContainerInformation>
              <ContainerMini>
                <TitleBlock>{data.titleBlock}</TitleBlock>
                <Description>{data.description}</Description>
              </ContainerMini>
            </ContainerInformation>
            <ContainerQuestion>
              <FirstBlock>
                <Question1>
                  <span>{data.question}</span>
                </Question1>
                <Image1 src={data.image} />
              </FirstBlock>
              <SecondBlock>
                <Image2 src={data.image2} />
                <Question2>
                  <span>{data.question1}</span>
                </Question2>
              </SecondBlock>
              <ThirdBlock>
                <Question3>
                  <span>{data.question3}</span>
                </Question3>
                <Image3 src={data.image3} />
              </ThirdBlock>
            </ContainerQuestion>
          </Container>
        );
      })}
    </GlobalContainer>
  );
};

const GlobalContainer = styled.div`
  width: 100%;
  background-color: #04030a;
`;

const Container = styled.div`
  width: 1480px;
  margin-left: 18px;
  color: white;
`;

const ContainerInformation = styled.div`
  height: 220px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border: 1px solid #04030a;
  border-radius: 10px;
  background-color: #05071f;
  margin-top: 30px;
`;

const ContainerMini = styled.div`
  width: 1400px;
  height: 180px;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleBlock = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  text-align: start;
  color: #eeeeee;
`;

const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-size: 26px;
  color: #eeeeee;
  text-align: start;
  margin-bottom: 1px;
  /* margin-top: 5px; */
`;

const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #eeeeee;
  display: flex;
`;

const ContainerQuestion = styled.div`
  margin-top: 70px;
`;

const FirstBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SecondBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const ThirdBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Question1 = styled.div`
  width: 380px;
  height: 200px;
  background-color: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #04030a;
`;
const Question2 = styled.div`
  width: 380px;
  height: 200px;
  background-color: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-size: 18px;
  line-height: 30px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #04030a;
`;
const Question3 = styled.div`
  width: 380px;
  height: 200px;
  background-color: #d9d9d9;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #04030a;
`;

const Image1 = styled.img`
  width: 700px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;
const Image2 = styled.img`
  width: 700px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;
const Image3 = styled.img`
  width: 700px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;

export default AboutUs;
