import React from 'react'
import './header.css'
import LOGO from '../../assets/logo.svg'
const Header = () => {
	return (
		<nav className='container header__container'>
			<img className='header__logo' src={LOGO} alt='my travel journal.'></img>
			<h3 className='header__title'>my travel journal.</h3>
		</nav>
	)
}

export default Header
