import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { LayoutContent } from './styled'

export const DefaultLayout = () => {
  return (
    <LayoutContent>
      <Header />
      <Outlet />
    </LayoutContent>
  )
}
