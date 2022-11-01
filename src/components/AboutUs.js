import React from "react";
import styled from "styled-components";
import { data } from "../helpers/arrayInformation";

const AboutUs = () => {
  return (
    <GlobalContainer>
      {data.map((datas) => {
        return (
            <Container>
              <ContainerInformation>
                <Title>{datas.title}</Title>
                {/* <ContainerMini>
                  <TitleBlock>{datas.titleBlock}</TitleBlock>
                  <Description>{datas.description}</Description>
                </ContainerMini> */}
                <ContainerQuestion>
                  <FirstBlock>
                    <Question1>
                      <span>{datas.question}</span>
                    </Question1>
                    <Image1 src={datas.imageFeedback} />
                  </FirstBlock>
                  <SecondBlock>
                    <Image2 src={datas.imageFeedback2} />
                    <Question2>
                      <span>{datas.question1}</span>
                    </Question2>
                  </SecondBlock>
                  <ThirdBlock>
                    <Question3>
                      <span>{datas.question3}</span>
                    </Question3>
                    <Image3 src={datas.imageFeedback3} />
                  </ThirdBlock>
                </ContainerQuestion>
              </ContainerInformation>
            </Container>
        );
      })}
    </GlobalContainer>
  );
};

const GlobalContainer = styled.div`
  width: 100%;
  /* background-color: #04030a; */
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  color: white;
`;

const ContainerInformation = styled.div`
  width: 100%;
  border: 1px solid #04030a;
  border-radius: 10px;
  background-color: #05071f;
  margin-top: 1px;
  margin-left: 25px;
`;

const Title = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  line-height: 48px;
  color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align: center;
  display: flex;
  align-items: center;
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
  width: 600px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;
const Image2 = styled.img`
  width: 600px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;
const Image3 = styled.img`
  width: 600px;
  height: 290px;
  border-radius: 12px;
  border: 2px solid white;
`;

export default AboutUs;
