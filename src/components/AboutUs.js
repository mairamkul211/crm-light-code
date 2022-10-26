import React from "react";
import styled from "styled-components";
import UserImage from '../assets/images/UserIcon.png'
import { data } from "../helpers/arrayInformation"

const AboutUs = () => {
  return (
    <GlobalContainer>
      {data.map((datas) => {
        return (
          <>
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
            <GlobalContainerFeedback>
                <Title2>{datas.feedbacks}</Title2>
              <ContainerFeedback>
                <FirstFeedbackBlock>
                <MiniFeedbackBlock>
                    <UserName>1. {datas.userName1}</UserName>
                    <ImgUser src={UserImage} />
                    </MiniFeedbackBlock>
                    <Hr/>
                    <Feedback>Проходил базовый курс по программированию на Python. Остался очень доволен менторами - очень подробно и обстоятельно рассказывал материал, приводил много примеров как из теории, так и из практики. Программа курса составлена грамотно и поэтапно, что позволяет усваивать материал.</Feedback>
                </FirstFeedbackBlock>
                <SecondFeedbackBlock>
                <MiniFeedbackBlock>
                    <UserName>2. {datas.userName2}</UserName>
                    <ImgUser src={UserImage} />
                    </MiniFeedbackBlock>
                    <Hr/>
                    <Feedback>Очень понравилась подача материала преподавателем, прекрасные примеры, хорошо иллюстрирующие и просто объясняющие самые сложные на первый взгляд понятия. Упор сделан не на тонкости языка, а на основные методы и способы программирования с учетом специфики языка, и это очень правильно!</Feedback>
                </SecondFeedbackBlock>
                <ThirdFeedbackBlock>
                    {/* <p></p> */}
                    <MiniFeedbackBlock>
                    <UserName>3. {datas.userName3}</UserName>
                    <ImgUser src={UserImage} />
                    </MiniFeedbackBlock>
                    <Hr/>
                    <Feedback>Понравилось все. Все просто превосходно. Я долго решался и выбирал, где обучаться, и могу сказать уверенно, что с выбором я не ошибся. Курс на 11 по 10 бальной системе. Лучше я еще не видел. Я очень много чего перечитал до курса,пересмотрел большое количество лекций и видео уроков, но тут рассказали именно то, что нужно!</Feedback>
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
  /* background-color: #04030a; */
`;

const Container = styled.div`
  width: 1480px;
  margin: 0 auto;
  color: white;
`;

const ContainerInformation = styled.div`
  width: 1429px;
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
const Title2 = styled.span`
  width: 350px;
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  color: #eeeeee;
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

const ImgUser = styled.img`
width: 60px;
height: 60px;
border-radius: 8px;
border: 1px solid grey;
margin-top: 5px;
/* display: flex;
justify-content: space-between; */
`

const Feedback = styled.div`
font-size: 17px;
line-height: 28px;
text-align: center;
`

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

const GlobalContainerFeedback = styled.div`
  width: 1429px;
  height: 390px;
  background-color: #05071f;
  margin-top: 40px;
  /* margin-left: 45px; */
  margin: 0 auto;
  text-align: center;
`;

const UserName = styled.span`
font-size: 25px;
margin-top: 15px;
margin-left: 15px;
`

const Hr = styled.hr`
display: flex;
align-items: center;
justify-content: center;
color: black;
`

const ContainerFeedback = styled.div`
width: 1424px;
display: flex;
justify-content: space-around;
margin-top: 15px;
`

const FirstFeedbackBlock = styled.div`
width: 375px;
height: 280px;
background-color: black;
opacity: 0.9;
border: 1px solid #1775CB;
border-radius: 10px;
margin-top: 20px;
color: white;
`
const SecondFeedbackBlock = styled.div`
width: 375px;
height: 280px;
background-color: black;
opacity: 0.9;
border: 1px solid #1775CB;
border-radius: 10px;
margin-top: 20px;
color: white;
`
const ThirdFeedbackBlock = styled.div`
width: 375px;
height: 280px;
background-color: black;
opacity: 0.9;
border: 1px solid #1775CB;
border-radius: 10px;
margin-top: 20px;
color: white;
`

const MiniFeedbackBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export default AboutUs;
