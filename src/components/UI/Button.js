import React from 'react'
import styled from 'styled-components'

const Button = ({onClick, children}) => {
  return (
    <StyledButton onClick={onClick} >{children}</StyledButton>
  )
}

const StyledButton = styled.button`
width: 190px;
height: 50px;
border-radius: 6px;
background-color: #0B345A;
font-size: 15px;
border: none;
color: #000000;
&:hover{
    color: white;
    font-size: 18px;
}
&:active{
    background-color: grey;
    color: white;
}
`

export default Button
