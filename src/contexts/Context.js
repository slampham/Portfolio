import React, {useState} from 'react'

const Context = React.createContext()

function ContextProvider({children}) {
  const [theme, setTheme] = useState('dark')
  const [refs, setRefs] = useState([])

  function toggleTheme() {
    setTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Context.Provider value={{theme, toggleTheme, refs, setRefs}}>
      {children}
    </Context.Provider>
  )
}

export {Context, ContextProvider}
