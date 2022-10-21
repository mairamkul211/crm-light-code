import React from 'react'
import styled from 'styled-components'

const Input = ({onChange , placeholder}) => {
  return <StyledInput type="text" onChange={onChange} placeholder={placeholder} />
}

const StyledInput = styled.input`
width: 280px;
height: 40px;
background-color: #0B345A;
border-radius: 2px;
outline: none;
border: none;
color: white;
padding: 5px 5px 5px 10px;
&::placeholder {
      height: 19px;
      font-family: 'Inter';
      font-size: 18px;
      color: #c4c4c4;
   }
`

export default Input
