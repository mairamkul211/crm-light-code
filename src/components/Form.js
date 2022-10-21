import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './UI/Button'
import Input from './UI/Input'
import SnackBar from './UI/Snackbar'

const Form = () => {

    const [snackBar, setSnackBar] = useState(false)

    const clickHandler = () => {
        setSnackBar(true)
    }

  return (
    <GlobalFormContainer>
        <Container>
      <ContainerForm>
        <ContainerUserName>
            <UserName>1. Ваше имя</UserName>
            <Input placeholder="Введите Имя" />
        </ContainerUserName>
        <ContainerUserPhone>
        <UserPhone>2. Номер телефона</UserPhone>
        <Input placeholder="Введите омер телефона" />
        </ContainerUserPhone>
      </ContainerForm>
      <ContainerClick>
      <Button onClick={clickHandler} >Отправить</Button>
      </ContainerClick>
      </Container>
      <ContainerFormTitle>
        <h2>Оставьте свой номер, а мы вам перезвоним !</h2>
      </ContainerFormTitle>
      {snackBar && (
        <SnackBar open="open" onClose={setSnackBar} message="Отправлено"/>
      )}
    </GlobalFormContainer>
  )
}

const GlobalFormContainer = styled.div`
width: 100%;
height: 300px;
background-color: #05071f;
margin-top: 40px;
display: flex;
`

const Container = styled.div`
width: 550px;
height: 270px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ContainerUserName = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 500px;
`
const ContainerUserPhone = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 500px;
margin-top: 50px;
`

const UserName = styled.span`
font-size: 20px;
font-style: normal;
font-family: 'Inter';
color: white;
`
const UserPhone = styled.span`
font-size: 20px;
font-style: normal;
font-family: 'Inter';
color: white;
`

const ContainerForm = styled.div`
width: 1480px;
margin-left: 18px;
color: white;
padding-top: 40px;
`

const ContainerClick = styled.div`
margin-left: 46vh;
width: 190px;
`

const ContainerFormTitle = styled.div`
display: flex;
align-items: center;
margin-left: 80vh;
font-size: 25px;
color: white;
width: 350px;
`

export default Form
