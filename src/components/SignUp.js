import styled from "styled-components";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

function SignUp() {
  const [state, setState] = useState(false);
  console.log(state);
  return (
    <Container>
      <div>
        <p className="mentor">Ментор</p>
        <p className="exit">Вход</p>
      </div>
      <form>
        <input type='text' placeholder="Логин" />
        <span>
          {state === false ? (
            <AiOutlineEyeInvisible onClick={() => setState(true)} />
          ) : (
            <AiOutlineEye onClick={() => setState(false)} />
          )}
        </span>
        <input placeholder="Пароль" type={state ? 'text' : 'password'} />
        <button>Войти</button>
      </form>
    </Container>
  );
}

export default SignUp;

const Container = styled.div`
  width: 500px;
  position: relative;
  height: 500px;
  background: rgba(255, 255, 255, 0.9);
  margin: 0 auto;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  & div {
    margin-top: 50px;
  }
  & .mentor {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  & .exit {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 51px;
    margin-left: 50px;
  }
  & input {
    width: 400px;
    height: 45px;
    background: #d9d9d9;
    border: 1px solid rgba(4, 3, 10, 0.39);
    margin-top: 23px;
    font-size: 16px;
    color: #000000;
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 17px;
    }
  }
  & button {
    width: 400px;
    height: 45px;
    padding: 5px;
    font-size: 16px;
    color: #eeeeee;
    background: #0b345a;
    border: 1px solid #0b345a;
    margin-top: 77px;
  }
  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
  }
  & span {
    font-size: 25px;
    position: absolute;
    left: 400px;
    top: 293px;
  }
`;
