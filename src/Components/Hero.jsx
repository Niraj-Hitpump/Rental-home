import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Use useNavigate
import FlashingText from "./FlashingText";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate(); // Create navigate function

  const style = {
    fontFamily: "Poppins, sans-serif",
    zIndex: 10,
    opacity: 1, // Less opacity for the content
  };

  // Image paths
  const images = [
    "images/Blue Simple Life And Family Insurance poster.png",
    "images/catscoming-707581.jpg",
    "images/small-juvenile-bedroom-arrangement.jpg",
    "images/medium-shot-people-working-as-real-estate-agents.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Container fluid className="p-0 m-0 position-relative">
      <Row className="position-relative">
        <Col md={12} className="p-0 m-0">
          <div className="carousel-container">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  className="carousel-image"
                  src={image}
                  alt={`Slide ${index}`}
                />
              ))}
            </div>
          </div>
        </Col>
        <Col
          md={6}
          className="position-absolute top-50 start-0 translate-middle-y text-left text-black p-3"
          style={{ zIndex: 10, opacity: 0.8 }}
        >
          <h1 style={style} className="display-1 font-weight-bold text-3xl md:text-7xl">
            Home For All
          </h1>
          <FlashingText />
          <div className="d-flex gap-2 mt-3">
            <Button
              variant="primary"
              onClick={() => navigate("/login")} // Use navigate function
            >
              Login
            </Button>
            <Button
              variant="primary"
              onClick={() => alert("See Nearby Rooms button clicked!")}
            >
              See Nearby Rooms
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
