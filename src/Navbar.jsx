import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { auth } from './firebase'; // Assuming firebase is initialized
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Navbar() {
  const [isLoginVisible, setIsLoginVisible] = useState(true); // Define state
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in using Firebase Authentication
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoginVisible(false); // Hide login button if user is logged in
      } else {
        setIsLoginVisible(true); // Show login button if no user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  const handleLoginClick = () => {
    // You can add any logic related to login here
    console.log("Login button clicked");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate("/"); // Redirect to homepage after logging out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark -top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand px-2 d-flex">
            <img src="/logo.jpg" className="rounded-5 px-1" alt="erg" style={{ height: '30px' }} />
            Fuse
          </Link>

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
              {/* Show logout button if user is logged in */}
              {!isLoginVisible && (
                <li className="nav-items btn btn-outline-light bg-dark mx-auto active py-0 p-3 me-2 my-1">
                  <span className="nav-link">
                    <button onClick={handleLogout} className="bg-dark text-light">Logout</button>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
