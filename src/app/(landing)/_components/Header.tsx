'use client'

import { useState } from 'react'
import { NavBarProvider } from '@/components/context/NavBarContext'
import MenuMobile from './MenuMobile'
import MenuNavBar from './MenuNavBar'


export default function Header (){
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const variables = {
    mobileMenuOpen, 
    setMobileMenuOpen
  }

  return (
    <header className="bg-white">
      <NavBarProvider variables={variables}>
        <MenuNavBar />
        <MenuMobile />
      </NavBarProvider>
    </header>
  )
}