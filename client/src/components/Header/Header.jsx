import React, {useState} from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    const [more, setType] = useState('');
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Name
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>    
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link
                        to='/'
                        className='nav-links'
                        // onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                        to='/about'
                        className='nav-links'
                        // onClick={closeMobileMenu}
                        >
                            About Us <i className='fas fa-caret-down' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                        to='/help'
                        className='nav-links'
                        // onClick={closeMobileMenu}
                        >
                            Help/FAQ
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                        to='/login'
                        className='nav-links-mobile'
                        // onClick={closeMobileMenu}
                        >
                            Register/Sign-In
                        </Link>
                    </li>
                </ul>
                <Button />
        </nav>
    );
}


export default Header;