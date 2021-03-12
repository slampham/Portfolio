import React from 'react'
import useToggle from '../hooks/useToggle'
import MenuBar from './MenuBar'
import SideMenu from './SideMenu'
import MenuButton from './MenuButton'

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <>
      <MenuBar />
      <SideMenu menuOpen={menuOpen} />
      <MenuButton menuOpen={menuOpen} onClick={toggle} />
    </>
  )
}

export default Nav
