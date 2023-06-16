import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import CreateCollege from './CreateCollege';
import Search from './Search';
import Footer from './Footer';
import '../CSS/home.css'

function HomeComponent({ isAdmin, User, setUser }) {
  const [hover, setHover] = useState([false, false, false]);
  const imgSrc = "https://via.placeholder.com/150";
  const imgAlt = "Sample Image";
  const title = "Card Title";
  const createCampus = "Build your perfect college website, showcasing campus, programs, faculty, and student life";
  const explore="Discover your ideal college match. Explore colleges based on  academic programs, and campus culture.";
  const contactus="Have questions or need assistance? Reach out to us and our friendly team will be happy to help!";
  const buttonText = "Click Me";

  const isUser = User !== undefined && User !== null && User !== '';
  const styles = {
    cardContent: {
      padding: '1rem',
    },
    backgroundCover: {
      backgroundColor: '#30D5C8',
    },
    homeContainer: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '2rem',
      backgroundColor: '#27374D',
    },
    card: {
      width: '300px',
      height: '550px',
      // maxHeight:'650px',
      margin: '4rem',
      overflow: 'hidden',
      // borderRadius: '5px',
      border: '1px solid #000',
      borderRadius: '20px',
      backgroundColor: '#DBE2E9',

      // backgroundColor: '#DBD7D2',E7DADA F5F5F5
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.7)',
      // height:"550px"
    },
    cardImage: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    cardButton: {
      // backgroundColor: '#007BFF',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '5px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s',
      fontSize: '1rem',
      cursor: 'pointer',
      marginTop: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    cardButtonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 8px rgba(0, 0, 0, 0.2)',
    },

  };

  const cardDescription = {
    Description: {
      fontFamily: 'cursive',
      fontSize: "1rem",
    },
  };

  const backgroundStyle = {
    backgroundImage: `url(https://res.cloudinary.com/dofftzsmf/image/upload/v1685796896/final_yellow_akr5nk.png)`
    ,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '89.5vh',
  };

  const titleStyle = {
    marginTop: '80px',
    marginLeft: '2vw',
  };

  const subtitleStyle = {
    marginTop: '55px',
  };
  const homeContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '0 6rem'
  };

  function Card({ imgSrc, imgAlt, title, text, buttonText }) {
    return (
      <div className="card">
        <img src={imgSrc} alt={imgAlt} />
        <div className="card-content">
          <h5>{title}</h5>
          <p>{text}</p>
          <button className="card-button">{buttonText}</button>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className='cta' style={backgroundStyle}>
        <Container>
          <Row className='d-flex justify-content-start'>
            <Col>
              <div className='content container row back ms-5 mt-5'>
                <div className='col-8 ml-2 text-left' style={titleStyle}>
                  <h1 className='title'   >
                    The Easy Way to Find  </h1><h1 className='title' >the Perfect College for You</h1>
                  <div className='text-left  mt-4 fs-5  mb-4 ' >
                    {/* <b> */}
                    <h5 className='subtitle' >
                      Unleash Your College Dreams: Discover, Create, and Review with CollegeWeb </h5>
                    <h5 className='subtitle'> Your Gateway to Higher Education Success!


                    </h5>

                    <div className='' style={subtitleStyle}>
                      <CreateCollege isUser={isUser} setUser={setUser} />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={styles.homeContainer}>
        <div style={styles.card}>
          <img style={styles.cardImage} src='https://res.cloudinary.com/dofftzsmf/image/upload/v1685909544/holding_book_farzdj.jpg' alt={imgAlt} />
          <div style={styles.cardContent}>
            {/* <h5>Create Digital Campuses</h5>
             */}
            <b>  <h5 style={{ fontFamily: 'Arial Black', fontSize: '24px', fontWeight: '900px' }}>Create  Campuses</h5></b>

            <p style={{fontFamily:'cursive'}}>{createCampus}</p>
            <button className={`card-button glow-on-hover`}
              style={hover[0] ? { ...styles.cardButton, ...styles.cardButtonHover } : styles.cardButton}
              onMouseEnter={() => {
                const newHover = [...hover];
                newHover[0] = true;
                setHover(newHover);
              }}
              onMouseLeave={() => {
                const newHover = [...hover];
                newHover[0] = false;
                setHover(newHover);
              }}
            >
              Create
            </button>

          </div>
        </div>
        <div style={styles.card}>
          <img style={styles.cardImage} src='https://res.cloudinary.com/dofftzsmf/image/upload/v1685907705/boy_book_w7vqjp.jpg' alt={imgAlt} />
          <div style={styles.cardContent}>
            <b>  <h5 style={{ fontFamily: 'Arial Black', fontSize: '26px', fontWeight: '900px' }}>Explore College</h5></b>
            <p style={{fontFamily:'cursive'}}>{explore}</p>
            <button className={`card-button glow-on-hover`}
              style={hover[1] ? { ...styles.cardButton, ...styles.cardButtonHover } : styles.cardButton}
              onMouseEnter={() => {
                const newHover = [...hover];
                newHover[1] = true;
                setHover(newHover);
              }}
              onMouseLeave={() => {
                const newHover = [...hover];
                newHover[1] = false;
                setHover(newHover);
              }}
            >
              Explore
            </button>
          </div>
        </div>
        <div style={styles.card}>
          <img style={styles.cardImage} src='https://res.cloudinary.com/dofftzsmf/image/upload/v1684659690/ryan-hoffman-ijhzqAm3N1Y-unsplash_io4yzz.jpg' alt={imgAlt} />
          <div style={styles.cardContent}>
            <b>  <h5 style={{ fontFamily: 'Arial Black', fontSize: '26px', fontWeight: '900px' }}>Connect with Us</h5></b>
            <p style={{ fontFamily: 'cursive' }}>{contactus}</p>
            <button className={`card-button glow-on-hover`}
              style={hover[2] ? { ...styles.cardButton, ...styles.cardButtonHover } : styles.cardButton}
              onMouseEnter={() => {
                const newHover = [...hover];
                newHover[2] = true;
                setHover(newHover);
              }}
              onMouseLeave={() => {
                const newHover = [...hover];
                newHover[2] = false;
                setHover(newHover);
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

HomeComponent.propTypes = {
  isAdmin: PropTypes.bool,
  User: PropTypes.any,
  setUser: PropTypes.func,
};

export default HomeComponent;