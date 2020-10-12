import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='/index' className='NavBar-link'>ROUTES INDEX</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <Link to='/userpage' className="Navbar-link">{`${props.user.name.toUpperCase()}'S USERPAGE`}</Link>
    </div>
    :
    <div>
      <Link to='/index' className='NavBar-link'>ROUTES INDEX</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;