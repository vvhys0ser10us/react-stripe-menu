import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const openSide = () => {
    setIsSideOpen(true)
  }

  const openSubMenu = () => {
    setIsSubMenuOpen(true)
  }

  const closeSide = () => {
    setIsSideOpen(false)
  }

  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideOpen,
        isSubMenuOpen,
        closeSide,
        closeSubMenu,
        openSide,
        openSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, useGlobalContext, AppProvider }
