import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-wrapper indigo darken-4" >
        <Link to="/" className="brand-logo center" ><i className="left material-icons">games</i> Game Insider</Link>
        { props.currentUser && props.authenticated ?
          <ul className="right">
            <li><Link to="/allGames"> Browse Games </Link></li>
            <li><Link to="/feedRead" > Game Chat </Link></li>
            <li> Sign out </li>  
          </ul>
          :
          <ul className="right">
            <li><Link to="/register"> Sign Up</Link></li>
            <li><Link to="/login">Sign in </Link></li>
            <li><Link to="/allGames"> Browse Games </Link></li>
          </ul>
        }
      </div>

    </nav>
  )
}

export default Nav

//"/post/:user_id"  = FeedRead