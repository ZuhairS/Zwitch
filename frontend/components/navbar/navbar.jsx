import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

const unloggedNav = () => (
  <nav className="login-signup">
    <Link to="/login"><h3>Log In</h3></Link>
    <Link to="/signup"><h3>Sign Up</h3></Link>
  </nav>
);

const loggedNav = (currentUser, logout) => (
	<nav className="nav-username-logout">
    <h4 id="nav-username">{currentUser.username}</h4>
    <button id="logout-button" onClick={logout}>Log Out</button>
	</nav>
);

const Navbar = ({ currentUser, logout }) => {
  const loggedRender = currentUser ? loggedNav(currentUser, logout) : unloggedNav();

  return (
    <nav className="main-nav">

      <nav className="left-nav">
        <Link to="/">
    			<h1 id="logo">
            <FontAwesome name='twitch'/>
            Zwitch
          </h1>
        </Link>
				<NavLink exact strict to="/channels">
          <h3>Browse</h3>
        </NavLink>
      </nav>

      <nav className="right-nav">
        { loggedRender }
      </nav>

    </nav>

  );

};

export default Navbar;
