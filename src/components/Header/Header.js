import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../../UserContext/UserContext';
import './Header.css';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user?.email)
    console.log(user?.uid)

    const handleLogOut = () => {
        logOut()
        .then( () => {

        })
        .catch(error => {
            console.log(error)
        });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {user?.email && user?.uid 
                ?
                <Link onClick={handleLogOut} to=''>Logout</Link>
                :
                <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                </>
            }
                
                {user?.email}
            </div>
        </nav>
    );
};

export default Header;