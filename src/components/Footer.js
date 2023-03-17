import React from "react";
import '../css/footer_.css'
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import scorecard from '../assets/scorecard.png'
function Footer() {
    return <div className="footer">
        
      <Row>
            <Col lg={3} style={{textAlign:'center',alignSelf:'center',}}><img width='256px' alt="scorecard" height='100px' src={scorecard}  /></Col>      
            <Col xs={12} lg={3} style={{margin:'2% 0 2% 0',textAlign:'center'}}><img max-width='150px' height='48px' alt="logo" src={logo} /></Col>
            <Col sm={6} lg={3} className="ready">Ready to get Started?</Col>
            <Col sm={6} lg={3}><div className="getstarted" >Get Started</div></Col>
        </Row>
        <Row className="foot_centre">
            <div>
            For any queries, contact us at info@thetechbag.com
            </div>
        </Row>
        <Row className="foot_options">
            <Col xs={6} sm={4} className="features">About Us</Col>
            <Col xs={6} sm={4}className="features">Browse All Categories</Col>
            <Col xs={6} sm={4} className="features">T&C</Col>
            <Col xs={6} sm={4}className="features">Follow Us</Col>
            <Col xs={6} sm={4}className="features">Cookie Policy</Col>      
            <Col xs={6} sm={4}className="features">Privacy Policy</Col>
        </Row>
        <Row  className="d-sm-none">Copyright © 2021 by TechBag Digital Private Limited. All Rights Reserved.</Row>
  </div>;
}

export default Footer;
