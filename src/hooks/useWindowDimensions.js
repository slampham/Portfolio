import { useState, useEffect } from 'react'

function getWindowDims() {
  const { innerWidth: width, innerHeight: height } = window
  return { width, height }
}

export default function useWindowDimensions() {
  const [windowDims, setWindowDims] = useState(getWindowDims())

  useEffect(() => {
    function handleResize() {
      setWindowDims(getWindowDims())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDims
}

