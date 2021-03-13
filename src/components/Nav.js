import React from 'react'
import useToggle from '../hooks/useToggle'
import MenuBar from './MenuBar'
import SideMenu from './SideMenu'

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <>
      <MenuBar onClick={toggle} />
      <SideMenu {...{menuOpen, onClick: toggle} } />
    </>
  )
}

export default Nav
