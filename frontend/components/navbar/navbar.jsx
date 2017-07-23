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
    <div id='username-image'>
      <img src={currentUser.profile_image_url} />
      <div id='username-notification'>
        <h4 id="nav-username">{currentUser.username}</h4>
        <div id='status'>
          <span id='notification-box'></span>
          <h6>Online</h6>
        </div>
      </div>
    </div>

    <button id="logout-button" onClick={logout}>Log Out</button>
	</nav>
);

const Navbar = ({ currentUser, logout }) => {
  const loggedRender = currentUser ? loggedNav(currentUser, logout) : unloggedNav();

  return (
    <nav className="main-nav">

      <nav className="left-nav">
        <Link to="/">
          <div id='logo'>
            <FontAwesome name='twitch' size='2x' id='twitch'/>
      			<h1>Zwitch</h1>
          </div>
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
