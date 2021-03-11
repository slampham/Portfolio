import { useState } from 'react'

function useToggle(startState=false) {
  const [state, setState] = useState(startState);
  function toggle() {
    setState(prevState => !prevState);
  }

  return [state, toggle];
}

export default useToggle
