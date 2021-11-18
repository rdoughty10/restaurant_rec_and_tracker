import React, {useState, useEffect} from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './Header.css';
import Axios from 'axios';



const Header = () => {
    const [more, setType] = useState('');
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3001/api/user/get').then((response) => {
          console.log(response)
          if (response.data.loggedIn == true){
            setUser(response.data.user[0])
            setLoggedIn("Logout")
          }else{
            setUser({})
            setLoggedIn("Login/Register")
          }
        });
      }, [])
    
    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                FoodRec
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>    
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link
                    to='/'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/about'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                        About Us <i className='fas fa-caret-down' />
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link
                    to='/help'
                    className='nav-links'
                    onClick={closeMobileMenu}
                    >
                        Help/FAQ
                    </Link>
                </li>
            </ul>
                <Button text={loggedIn}/>
        </nav>
    );
            


    
}


export default Header;