import React from 'react'
import { NavLink } from 'react-router-dom'
import { PATH } from './Routes'


function Header() {
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR} > PreJunior  </NavLink>
            <NavLink to={PATH.JUNIOR} > Junior  </NavLink>
            <NavLink to={PATH.JUNIORPLUS} > JuniorPlus  </NavLink>
        </div>
    )
}

export default Header
