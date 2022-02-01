import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [location, setLocation] = useState({})

  const openSide = () => {
    setIsSideOpen(true)
  }

  const openSubMenu = (text, coord) => {
    setLocation(coord)
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
        location,
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
