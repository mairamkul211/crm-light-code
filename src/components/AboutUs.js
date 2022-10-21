import React from "react";
import styled from "styled-components";
import UserImage from '../assets/images/UserIcon.png'

const AboutUs = ({ array }) => {
  return (
    <GlobalContainer>
      {array.map((data) => {
        return (
          <>
            <Container>
              <Title>{data.title}</Title>
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
            <GlobalContainerFeedback>
                <Title2>{data.title2}</Title2>
              <ContainerFeedback>
                <FirstFeedbackBlock>
                    <p></p>
                    <ImgUser src={UserImage} />
                </FirstFeedbackBlock>
                <SecondFeedbackBlock>
                    <p></p>
                    <ImgUser src={UserImage} />
                </SecondFeedbackBlock>
                <ThirdFeedbackBlock>
                    <p></p>
                    <ImgUser src={UserImage} />
                </ThirdFeedbackBlock>
              </ContainerFeedback>
            </GlobalContainerFeedback>
          </>
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
`;

const Title = styled.span`
  width: 150px;
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  line-height: 48px;
  color: #eeeeee;
  display: flex;
  border: 1px solid red;
`;
const Title2 = styled.span`
  width: 350px;
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  margin-left: 18px;
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

const ImgUser = styled.img`
width: 100px;
height: 100px;
border-radius: 0px 10px 0px 10px;
border: 1px solid grey;
display: flex;
justify-content: space-between;
`

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

const GlobalContainerFeedback = styled.div`
  width: 100%;
  height: 390px;
  background-color: #05071f;
  margin-top: 40px;

`;

const ContainerFeedback = styled.div`
width: 1480px;
margin-left: 18px;
display: flex;
justify-content: space-between;
align-items: flex-start;
margin-top: 15px;
`

const FirstFeedbackBlock = styled.div`
width: 370px;
height: 280px;
background-color: #D9D9D9;
border: 1px solid black;
display: flex;
justify-content: space-between;
border-radius: 10px;
margin-top: 20px;
`
const SecondFeedbackBlock = styled.div`
width: 370px;
height: 280px;
background-color: #D9D9D9;
border: 1px solid black;
display: flex;
justify-content: space-between;
border-radius: 10px;
margin-top: 20px;
`
const ThirdFeedbackBlock = styled.div`
width: 370px;
height: 280px;
background-color: #D9D9D9;
border: 1px solid black;
display: flex;
justify-content: space-between;
border-radius: 10px;
margin-top: 20px;
`

export default AboutUs;
