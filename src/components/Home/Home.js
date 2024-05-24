import React from "react";
import "../Home/Home.css";
import Imgod from "../imgs/Containerod.png"
import Imguy from "../imgs/Containeruy.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Imgantalia from "../imgs/rixos-downtown-antalya.jpg";
import Imgistabul from "../imgs/IMG_20230503_113802.jpg";
import Imgsharmen from "../imgs/cover_original.jpg";
import Imgdubay from "../imgs/2023-04-24.jpg"
export const Home = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="img1">
        <Carousel.Caption>
          <div className="tex-home">
            <h1 className="tex-gozal">
              Take a Glimpse Into The Beautiful City Of:
            </h1>
            <h1 className="tex-antalya">Antalya</h1>
            <Button className="butn-home" variant="primary">
              Go There
            </Button>
          </div>
          
            <Container className="hoe-manyu">
              <Row>
                <Col><img className="df" src={Imgod} alt="First slide" /></Col>
                <Col><img className="df" src={Imguy} alt="First slide" /></Col>
				<Col><Button className="butn-home1" variant="primary">Explore More</Button></Col>
                
              </Row>
            </Container>
         
        </Carousel.Caption>
        <img className="d-block w-100" src={Imgantalia} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item className="img2">
        <img className="d-block w-100" src={Imgistabul} alt="Second slide" />
        <Carousel.Caption>
          <div className="tex-home">
            <h1 className="tex-gozal">
              Take a Glimpse Into The Beautiful City Of:
            </h1>
            <h1 className="tex-antalya">Istanbul</h1>
            <Button className="butn-home" variant="primary">
              Go There
            </Button>
          </div>
          
            <Container className="hoe-manyu">
              <Row>
                <Col><img className="df" src={Imgod} alt="First slide" /></Col>
                <Col><img className="df" src={Imguy} alt="First slide" /></Col>
				<Col><Button className="butn-home1" variant="primary">Explore More</Button></Col>
                
              </Row>
            </Container>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img3">
        <img className="d-block w-100" src={Imgsharmen} alt="Third slide" />
        <Carousel.Caption>
          <div className="tex-home">
            <h1 className="tex-gozal">
              Take a Glimpse Into The Beautiful City Of:
            </h1>
            <h1 className="tex-antalya">Sharm El-Sheikh</h1>
            <Button className="butn-home" variant="primary">
              Go There
            </Button>
          </div>
          
            <Container className="hoe-manyu">
              <Row>
                <Col><img className="df" src={Imgod} alt="First slide" /></Col>
                <Col><img className="df" src={Imguy} alt="First slide" /></Col>
				<Col><Button className="butn-home1" variant="primary">Explore More</Button></Col>
                
              </Row>
            </Container>
         
        </Carousel.Caption>
      </Carousel.Item>
	  <Carousel.Item className="img3">
        <img className="d-block w-100" src={Imgdubay} alt="Third slide" />
        <Carousel.Caption>
          <div className="tex-home">
            <h1 className="tex-gozal">
              Take a Glimpse Into The Beautiful City Of:
            </h1>
            <h1 className="tex-antalya">Dubai</h1>
            <Button className="butn-home" variant="primary">
              Go There
            </Button>
          </div>
          
            <Container className="hoe-manyu">
              <Row>
                <Col><img className="df" src={Imgod} alt="First slide" /></Col>
                <Col><img className="df" src={Imguy} alt="First slide" /></Col>
				<Col><Button className="butn-home1" variant="primary">Explore More</Button></Col>
                
              </Row>
            </Container>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
