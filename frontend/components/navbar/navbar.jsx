import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const unloggedNav = () => (
  <nav className="login-signup">
    <Link to="/login"><h3>Log In</h3></Link>
    <Link to="/signup"><h3>Sign Up</h3></Link>
  </nav>
);

const loggedNav = (currentUser, logout) => (
	<nav className="nav-username-logout">
    <h4 className="nav-username"> {currentUser.username}</h4>
    <button className="logout-button" onClick={logout}>Log Out</button>
	</nav>
);

const Navbar = ({ currentUser, logout }) => {
  const loggedRender = currentUser ? loggedNav(currentUser, logout) : unloggedNav();

  return (
    <nav className="main-nav">

      <nav className="left-nav">
  			<figcaption id="logo">Zwitch</figcaption>
				<NavLink to="/channels"><h3>Browse Channels</h3></NavLink>
      </nav>

      <nav className="right-nav">
        { loggedRender }
      </nav>

    </nav>

  );

};

export default Navbar;
