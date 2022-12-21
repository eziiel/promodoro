import React from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './styles'
import Logo from '../../assets/logo.svg'

import { Timer, Scroll } from 'phosphor-react'

export const Header = () => {
  return (
    <S.HeaderContent>
      <S.LogoHeader src={Logo} alt="" />
      <S.NavHeader>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="history">
          <Scroll size={24} />
        </NavLink>
      </S.NavHeader>
    </S.HeaderContent>
  )
}
