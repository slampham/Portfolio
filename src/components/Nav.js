import React from 'react'
import useToggle from '../hooks/useToggle'
import Header from './Header'
import SideMenu from './SideMenu'

function Nav() {
  const [menuOpen, toggle] = useToggle(false);

  return (
    <>
      <Header onClick={toggle} />
      <SideMenu {...{menuOpen, onClick: toggle} } />
    </>
  )
}

export default Nav
