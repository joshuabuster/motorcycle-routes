import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <ul className="NavBar-container">
      <li><Link to='/' className="NavBar-link">HOME</Link></li>
      <li><Link to='/index' className="NavBar-link">ROUTES INDEX</Link></li>
      <li><Link to='/userpage' className="Navbar-link">{`${props.user.name.toUpperCase()}'S USERPAGE`}</Link></li>
      <li><Link to='' onClick={props.handleLogout} className="NavBar-link" id="logout">LOG OUT</Link></li>
    </ul>
    :
    <ul>
      <li><Link to='/' className="NavBar-link">HOME</Link></li>
      <li><Link to='/index' className="NavBar-link">ROUTES INDEX</Link></li>
      <li><Link to='/login' className="NavBar-link" id="logout">LOG IN</Link></li>
      <li><Link to='/signup' className="NavBar-link" id="logout">SIGN UP</Link></li>
    </ul>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;