import React from 'react'
import './header.css'
import teslaLogo from '../teslaPng/teslaLogoSmall.svg'
import Hamburger from './hamburger'

const Header = () => {
    return (
        <div className='header'>

        <div className='header-logo'>
            <img className='logo' src={teslaLogo} alt='tesla logo'/>
        </div>

       <div className='header-center'>
           <p>Model S</p>
           <p>Model 3</p>
           <p>Model X</p>
           <p>Model Y</p>
           <p>Solar Roof</p>
           <p>Solar Panel</p>
       </div>

       <div className='header-right'>
           <p>Shop</p>
           <p>Tesla Account</p>
           <Hamburger />
       </div>


        </div>
    )  
}

export default Header