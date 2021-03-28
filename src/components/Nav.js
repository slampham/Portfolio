import React, { useEffect, useState } from 'react'
import useToggle from '../hooks/useToggle'
import Header from './Header'
import SideMenu from './SideMenu'
import useWindowDimensions from '../hooks/useWindowDimensions'

function Nav() {
  const [menuOpen, toggle] = useToggle(false)
  const windowDims = useWindowDimensions()
  const [windowAtLeastTabletWidth, setwindowAtLeastTabletWidth] = useState(false)

  useEffect(() => {
    setwindowAtLeastTabletWidth(windowDims.width >= 768)
  }, [windowDims])

  return (
    <>
      <Header {...{windowAtLeastTabletWidth, onClick: toggle}} />
      <SideMenu {...{menuOpen, onClick: toggle}} />
    </>
  )
}

export default Nav
