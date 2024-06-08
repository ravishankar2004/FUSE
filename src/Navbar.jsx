import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [isLoginVisible, setLoginVisible] = useState(true);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    setLoginVisible(false);
    // Additional login logic can be added here
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark -top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand px-2 d-flex">
            <img src="/logo.jpg" className="rounded-5 px-1" alt="erg" style={{ height: '30px' }}></img>
            Fuse
          </Link>
          {/* <Link to="/cryptocurrency" className="nav-link">Cryptocurrency</Link> */}
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#cla">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end p-2 ps-4" id="cla">
            <ul className="navbar-nav">
              <li className="nav-items">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-items">
                <div className="dropdown">
                  <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    News
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li><Link to="/stocks" className="dropdown-item text-primary">Stocks</Link></li>
                    <li><Link to="/crypto" className="dropdown-item text-primary">Cryptocurrency</Link></li>
                  </ul>
                </div>
              </li>
              <li className="nav-items">
                <Link to="/sstocks" className="nav-link">Stocks</Link>
              </li>
              <li className="nav-items">
                <Link to="/cryptocurrency" className="nav-link">Cryptocurrency</Link>
              </li>
            </ul>
          </div>
          <div id="cla" className="navbar-expand-md collapse navbar-collapse justify-content-end p-3">
            <ul className="navbar-nav">
              {isLoginVisible && (
                <li className="nav-items btn btn-outline-light bg-dark mx-auto active py-0 p-3 px-3 me-2 my-1">
                  <span className="nav-link">
                    <Link to="/login" className="text-light" style={{ textDecoration: "none", paddingLeft: "10px" }} onClick={handleLoginClick}>
                      Login
                    </Link>
                  </span>
                </li>
              )}
             
              {/* <li className="nav-items btn btn-outline-light bg-dark mx-auto active py-0 p-3 me-2 my-1">
                <span className="nav-link">
                  <button onClick={handleLogout} className="bg-dark text-light">Logout</button>
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
