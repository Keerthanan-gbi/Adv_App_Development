import  { useEffect } from 'react';
import "./Navbar.css";
import { Avatar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const gotoProfile = () => {
    navigate('/profile');
  }

  // Placeholder for checking login status
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='headgreen'>
      <div className="responsive-bar">
        <div className="logo">
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30163918/1241-768x591.png" alt="logo" />
        </div>
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <div className="logo">
          <img src="https://play-lh.googleusercontent.com/uL6Iir-cdCjgoMEsUpge35P7hII1JWYgLDBRdh7NATHrj1hwwSjbKfTrZtAtHjIMczU" alt="logo" />
        </div>
        <ul>
          <li><a href="/">🏠 HOME</a></li>
          <li><a href="/adminHome">🧑‍💼 ADMIN PAGE</a></li>
          <li><a href="/AllEvents">📳 PLANS</a></li>
          <li><a href="/MyBookings">📞 CONTACT US</a></li>
          <li><a href="/pro">☎️ ABOUT US</a></li>
          </ul>
         <div className='loggg'>
            {isLoggedIn ? (
              <div onClick={gotoProfile}>
                <Avatar alt="" src="/static/images/avatar/1.jpg" />
                <div className="nav_item" style={{ marginLeft: "-8px", color: "white" }}>
                  {/* Additional content for the profile */}
                </div>
              </div>
            ) : (
              <Button class='txt' href="/login">LOGIN</Button>
            )}
          </div>
        
      </nav>
    </header>
  );
};

export default NavBar;
