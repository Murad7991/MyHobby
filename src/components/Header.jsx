import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import logoImage from '../assets/images/logo.png.webp'
const Header = () => {
  return (
    <header>
        <div className='logo-img'>
            <img src={logoImage} alt="logoImage" />
        </div>
        <div className='navigation'>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className='nav-icons'>
                <ShoppingCartIcon/>
                <SearchIcon/>
            </div>
        </div>
    </header>
  )
}

export default Header