import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <NavLink to='/'>
                <Link component='button'>Welcome</Link>
                <Link component='button'>Welcome</Link>
            </NavLink>
        </div>
    )
}