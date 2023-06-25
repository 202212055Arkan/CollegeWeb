import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Search from './Search';
import  { useState } from 'react';
import '../CSS/mainNavbar.css';

function MainNavbar({ user }) {
  
    const [activeLink, setActiveLink] = useState(null);
    const handleLogOut = () => {
    localStorage.removeItem('JWTtoken');
    window.location.reload();
  };

  const navLinkStyles = {
    color: "white",
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "transform 0.3s, color 0.3s",
  };
  
  const navLinkHoverStyles = {
    ...navLinkStyles,
    color: "#EED016",
    transform: "scale(1.1)",
  };

  return (
    <div>
      <div className='main-navbar-height'>
        <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#20262E"}}>
          <Container className="nav-container">
            <Navbar.Brand href="/"  style={{ overflow: "hidden"}}>
              {/* <img height={70} width={80} src='https://res.cloudinary.com/dofftzsmf/image/upload/v1684658496/logo_w6k1js.png' className=" " /> */}
             {/* <div className='margin-logo'> */}
             <img  height={50}   width={100}
             style={{marginTop:"0px",marginLeft:"10px"}}
              src='https://res.cloudinary.com/dofftzsmf/image/upload/v1685876348/CollegeWeb_logo/finalNoBG_g6pin3.png' className=" " />

             {/* </div> */}
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
            {/* <div style={{border:'solid',width:'100%'}}> */}
            <Search   />
            {/* </div> */}
           <div className='margin-nav-list'>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-link-container">
              <Link
                    className='nav-link nav-link-custom '
                    to="/"
                    style={navLinkStyles}
                    onMouseEnter={(e) => {
                        e.target.style.color = navLinkHoverStyles.color;
                        e.target.style.transform = navLinkHoverStyles.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = navLinkStyles.color;
                        e.target.style.transform = "scale(1)";
                    }}
                    >
                  Home
                </Link>
                <Link
                    className='nav-link nav-link-custom'
                    to="/colleges"
                    style={navLinkStyles}
                    onMouseEnter={(e) => {
                        e.target.style.color = navLinkHoverStyles.color;
                        e.target.style.transform = navLinkHoverStyles.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = navLinkStyles.color;
                        e.target.style.transform = "scale(1)";
                    }}
                    >
                  Colleges
                </Link>
                <Link
                    className='nav-link nav-link-custom'
                    to="/contactus"
                    style={navLinkStyles}
                    onMouseEnter={(e) => {
                        e.target.style.color = navLinkHoverStyles.color;
                        e.target.style.transform = navLinkHoverStyles.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = navLinkStyles.color;
                        e.target.style.transform = "scale(1)";
                    }}
                    >
                  Contact Us
                </Link>
                <Link
                    className='nav-link nav-link-custom'
                    to="/aboutus"
                    style={navLinkStyles}
                    onMouseEnter={(e) => {
                        e.target.style.color = navLinkHoverStyles.color;
                        e.target.style.transform = navLinkHoverStyles.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = navLinkStyles.color;
                        e.target.style.transform = "scale(1)";
                    }}
                    >
                  About Us
                </Link>
                {user ? (
                  <div className='nav-link text-light' style={{color:"white"}}>
                    <button className='btn m-0 p-0 text-secondary' cursor="pointer" onClick={handleLogOut}>
                      logOut
                    </button>
                  </div>
                ) : (
                  <div className='nav-link' style={{ textDecoration: 'none' }}>
                    <Link className='text-light' to="/login">
                      Login /
                    </Link>
                    <Link className=' text-light ms-1 ' to="/signup">
                      SignUp
                    </Link>
                  </div>
                )}
                
              </Nav>
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default MainNavbar;
