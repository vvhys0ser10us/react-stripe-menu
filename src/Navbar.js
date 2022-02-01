import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSide, openSubMenu, closeSubMenu } = useGlobalContext()
  const displayMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.right + tempBtn.left) / 2
    const bottom = tempBtn.bottom - 3
    openSubMenu(page, { center, bottom })
  }

  const closeMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubMenu()
    }
  }

  return (
    <nav
      className="nav"
      onMouseOver={(e) => {
        closeMenu(e)
      }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="btn toggle-btn" onClick={openSide}>
            <FaBars></FaBars>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displayMenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn" onMouseOver={displayMenu}>
          Sign in
        </button>
      </div>
    </nav>
  )
}

export default Navbar
