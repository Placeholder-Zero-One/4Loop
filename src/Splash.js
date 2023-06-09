import React, { useRef, useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './CSS/Splash.css';
import carouselData from './CarouselData.json';
import logoImg from './Imgs/4L_LogoLong.png';
import LoginButton from "./Components/LoginButton";

function Splash() {
  const optionsContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const optionsContainer = optionsContainerRef.current;
      if (optionsContainer) {
        const containerHeight = optionsContainer.offsetHeight;
        const carouselImages = optionsContainer.querySelectorAll('.carousel-image');

        carouselImages.forEach((image) => {
          image.style.height = `${containerHeight}px`;
        });
      }
    };

    // Call the handleResize function initially and add a resize event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onRedirectCallback = () => {
    navigate('/home');
  };

  return (
    <Auth0Provider
      domain="mollemira.us.auth0.com"
      clientId="cmBKMx5fz4Qqe6Kd40F5S8K6fXJhD3l1"
      redirectUri="https://fourloop-ppmi.onrender.com/home"
      onRedirectCallback={onRedirectCallback}
    >
      <div className="splash-container">
        <div className="options-container" ref={optionsContainerRef}>
          <div className="carousel-container">
            <div className="carousel-box">
              <Carousel className="carousel" interval={10000} fade controls={false}>
                {carouselData.map((item) => (
                  <Carousel.Item key={item.title}>
                    <div className="carousel-image-container">
                      <img className="carousel-image" src={item.src} alt={item.title} />
                      <div className="user-container">
                        <div className="profile-info">
                          <img className="profile-pic" src={item.profilePic} alt={item.username} />
                          <span className="username">{item.username}</span>
                        </div>
                      </div>
                      <div className="caption-container">
                        <h3 className="caption-title">{item.title}</h3>
                        <p className="caption-text">{item.caption}</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="login-signup-container">
            <img className="logo" src={logoImg} alt="Logo" />
            <LoginButton className="login-button"/>
          </div>
        </div>
      </div>
    </Auth0Provider>
  );
}

export default Splash;
