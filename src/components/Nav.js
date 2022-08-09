import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() { 
    const navStyle = ( { isActive} ) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav>
        <NavLink to='/' style={navStyle}>Home</NavLink>

        <NavLink to='/traditional-heroes' style={navStyle}>Traditional super heroes</NavLink>

        <NavLink to='/query-heroes' style={navStyle}>React-query super heroes</NavLink>
    </nav>
  )
}

export default Nav