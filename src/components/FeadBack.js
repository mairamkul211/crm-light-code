import styled from "styled-components";
import UserImage from "../assets/images/UserIcon.png";
import { data } from "../helpers/arrayInformation";

function FeedBack() {
  return (
    <GlobalContainer>
      {data.map((datas) => {
        return (
          <GlobalContainerFeedback>
            <Title2>{datas.feedbacks}</Title2>
            <ContainerFeedback>
              <FirstFeedbackBlock>
                <MiniFeedbackBlock>
                  <UserName>1. {datas.userName1}</UserName>
                  <ImgUser src={UserImage} />
                </MiniFeedbackBlock>
                <Hr />
                <Feedback>
                  Проходил базовый курс по программированию на Python. Остался
                  очень доволен менторами - очень подробно и обстоятельно
                  рассказывал материал, приводил много примеров как из теории,
                  так и из практики. Программа курса составлена грамотно и
                  поэтапно, что позволяет усваивать материал.
                </Feedback>
              </FirstFeedbackBlock>
              <SecondFeedbackBlock>
                <MiniFeedbackBlock>
                  <UserName>2. {datas.userName2}</UserName>
                  <ImgUser src={UserImage} />
                </MiniFeedbackBlock>
                <Hr />
                <Feedback>
                  Очень понравилась подача материала преподавателем, прекрасные
                  примеры, хорошо иллюстрирующие и просто объясняющие самые
                  сложные на первый взгляд понятия. Упор сделан не на тонкости
                  языка, а на основные методы и способы программирования с
                  учетом специфики языка, и это очень правильно!
                </Feedback>
              </SecondFeedbackBlock>
              <ThirdFeedbackBlock>
                {/* <p></p> */}
                <MiniFeedbackBlock>
                  <UserName>3. {datas.userName3}</UserName>
                  <ImgUser src={UserImage} />
                </MiniFeedbackBlock>
                <Hr />
                <Feedback>
                  Понравилось все. Все просто превосходно. Я долго решался и
                  выбирал, где обучаться, и могу сказать уверенно, что с выбором
                  я не ошибся. Курс на 11 по 10 бальной системе. Лучше я еще не
                  видел. Я очень много чего перечитал до курса,пересмотрел
                  большое количество лекций и видео уроков, но тут рассказали
                  именно то, что нужно!
                </Feedback>
              </ThirdFeedbackBlock>
            </ContainerFeedback>
          </GlobalContainerFeedback>
        );
      })}
    </GlobalContainer>
  );
}

export default FeedBack;

const GlobalContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Title2 = styled.span`
  width: 350px;
  height: 30px;
  font-family: "Inter";
  font-style: normal;
  font-size: 30px;
  color: #eeeeee;
`;
const ImgUser = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: 1px solid grey;
  margin-top: 5px;
  /* display: flex;
justify-content: space-between; */
`;
const Feedback = styled.div`
  font-size: 17px;
  line-height: 28px;
  text-align: center;
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
`;

const Hr = styled.hr`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;

const ContainerFeedback = styled.div`
  width: 1424px;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const FirstFeedbackBlock = styled.div`
  width: 375px;
  height: 280px;
  background-color: black;
  opacity: 0.9;
  border: 1px solid #1775cb;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
`;
const SecondFeedbackBlock = styled.div`
  width: 375px;
  height: 280px;
  background-color: black;
  opacity: 0.9;
  border: 1px solid #1775cb;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
`;
const ThirdFeedbackBlock = styled.div`
  width: 375px;
  height: 280px;
  background-color: black;
  opacity: 0.9;
  border: 1px solid #1775cb;
  border-radius: 10px;
  margin-top: 20px;
  color: white;
`;

const MiniFeedbackBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
