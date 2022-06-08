import React from 'react'
import * as S from './Navigation.styles'

const Navigation = () => {
  return (
    <S.Nav>
        <S.StyledLink to='/'>Home</S.StyledLink>
        <S.StyledLink to='/addtask'>Add Task</S.StyledLink>
    </S.Nav>
  )
}

export default Navigation