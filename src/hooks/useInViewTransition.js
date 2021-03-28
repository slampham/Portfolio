import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion' 

function useInViewTransition(threshold=.2) {
  const controls = useAnimation()
  const [ref, inView] = useInView({threshold})

  useEffect(() => {
    if (inView) {
      controls.start('show')
    }
  }, [controls, inView])

  return { controls, ref }
}

export default useInViewTransition
