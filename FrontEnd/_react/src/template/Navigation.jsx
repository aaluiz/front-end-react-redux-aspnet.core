import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand" >BASIC APP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >Home
              <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link to="/feature" className="nav-link" >Feature</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;