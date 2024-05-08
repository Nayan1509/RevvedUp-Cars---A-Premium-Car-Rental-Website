import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to RevvedUP Rentals</h2>
              <p className="section__description">
              Welcome to RevvedUp Rentals, where we fuel your passion for driving with an exhilarating lineup of premium cars 
              ready to ignite your senses and elevate your driving experience to new heights. At RevvedUp Rentals, we understand 
              that driving isn't just about getting from point A to point B—it's about the thrill of the journey, the connection 
              between man and machine, and the pure joy of the open road. That's why we're dedicated to providing car enthusiasts 
              like you with access to the finest selection of high-performance vehicles that are meticulously maintained and 
              designed to turn heads wherever you go. Whether you're a gearhead craving the adrenaline rush of a powerful sports car, 
              an aficionado of luxury seeking the refined elegance of a prestige vehicle, or simply someone who appreciates the finer 
              things in life, RevvedUp Rentals has the perfect ride for every occasion.
              
              <br/>Rev up your engines and let's hit the road!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Hassle Free Pick-Up and Drop at your Desired Location
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Advance Booking upto 10 days.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Wide Range of exotic cars from muscle to luxury
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Clean and serviced cars
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
