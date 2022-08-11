import React from 'react'
import { NavLink } from 'react-router-dom'

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

        <NavLink to='/parallel-queries' style={navStyle}>ParallelQueries</NavLink>

        <NavLink to='/dynamic-parallel' style={navStyle}>DynamicParallel</NavLink>
    </nav>
  )
}

export default Nav