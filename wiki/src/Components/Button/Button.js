import React from 'react'
import { ButtonContainer } from './styled'

const Button = ({ onClick }) => {
  return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
  )
}

export default Button