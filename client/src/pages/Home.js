import React from 'react';
import { Link } from 'react-router-dom';


const Home = (props) => {
  return (
    <div style={{
      backgroundImage: "url('https://res.cloudinary.com/lisakvw/image/upload/v1605283260/Game%20Insider/spaceInvaders_toxtyc.jpg')",
      backgroundSize: "cover", minHeight: "91vh", paddingTop: "5vh"
    }}>
      <header >
      </header>
      <br/>
      <main>
        <Link to="/register">
          <button className="btn waves-effect waves-light indigo darken-4 authBtn" type="submit" name="action">Sign Up
            <i className="material-icons right">send</i>
          </button>
        </Link>
        <Link to="/login">
          <button className="btn waves-effect waves-light indigo darken-4 authBtn" type="submit" name="action">Sign In
            <i className="material-icons right">send</i>
          </button>
        </Link>
      </main>
    </div>
  )
}

export default Home