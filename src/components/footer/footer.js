import React from 'react';
import "./footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
  return (

    <div className="footer">
    <div className="back_top">
   Back to Top
    </div>
    <div className="bottom_footer">
  <div className="getToKnow">
  <Container>
  <Row md={4}>
   <Col><h3>Get to Know Us</h3></Col>
    <div className="careers">
    <Col className="infos" xs={6} >Careers</Col>
    <Col className="infos"  >Blog</Col>
    <Col className="infos" >About Amazon</Col>
    <Col className="infos" >Sustainability</Col>
    <Col className="infos" >Investor Relations</Col>
    <Col className="infos" >Amazon Devices</Col>
    <Col className="infos" >Amazon Tours</Col>    </div>
  </Row>
</Container>

  </div>
  <div className="getToKnow">
  <Container>
    <Row md={4}>
    <Col><h3>Make Money With Us</h3></Col>
  <div className="careers">
    <Col className="infos" xs={6} >Sell products  on Amazon</Col>
    <Col className="infos"  >Sell apps on Amazon</Col>
    <Col className="infos" >Become an Affiliate</Col>
    <Col className="infos" >Advertise Your Products</Col>
    <Col className="infos" >Self-Publish with Us</Col>
    <Col className="infos" >Host an Amazon Hub</Col>
    <Col className="infos">See More Make Money with Us </Col>
  </div> 
  </Row>
</Container>

  </div>
  <div className="getToKnow">
  <Container>
  <Row md={4}>
    <Col><h3>Amazon Payment Products</h3></Col>
    <div className="careers">
    <Col className="infos" xs={6} >Amazon Business Card</Col>
    <Col className="infos"  >Shop With Points</Col>
    <Col className="infos" >Reload Your Balance</Col>
    <Col className="infos" >Amazon Currency Converter</Col>
    </div>
  </Row>
</Container>

  </div>
  <div className="getToKnow">
  <Container>
    <Row md={4}>
    <Col><h3>Let Us Help You</h3></Col>
    <div className="careers">
    <Col className="infos" xs={6} >Amazon and COVID-19</Col>
    <Col className="infos"  >Your Account</Col>
    <Col className="infos" >Your Orders</Col>
    <Col className="infos" >Shipping & Replacements</Col>
    <Col className="infos" >Manage Your Content and Devices</Col>
    <Col className="infos" >Amazon Assistent</Col>
    <Col className="infos" >Help</Col>
    </div>
  </Row>
</Container>

  </div>


    </div>


    </div>
  )
}

export default Footer;