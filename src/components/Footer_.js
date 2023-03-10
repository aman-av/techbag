import React from "react";
import '../sass/footer_.scss'
import { Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import scorecard from '../assets/scorecard.png'
function Footer_() {
    return <div className="footer">
        
      <Row>
            <Col lg={3} style={{textAlign:'center',alignSelf:'center',}}><img width='256px' height='100px' src={scorecard}  /></Col>      
            <Col style={{display:'flex',justifyContent:'space-around',paddingTop:'40px'}}>
                <img max-width='150px' height='48px' src={logo} />
                <div style={{alignSelf:'center',fontSize:'20px',fontWeight:'bold'}}>Ready to get Started?</div>
                <div className="getstarted">Get Started</div>
            </Col>      
        </Row>
        <Row className="foot_centre">
            For any queries, contact us at info@thetechbag.com
        </Row>
        <Row className="foot_options">
            <Col lg={6} style={{display:'flex',paddingBottom:'20px',justifyContent:'space-around'}}>
                <div>About Us</div>
                <div>Browse All Categories</div>
                <div>T&C</div>
            </Col>
            <Col lg={6} style={{display:'flex',justifyContent:'space-around'}}>
                <div>Follow Us</div>
                <div>Cookie Policy</div>
                <div>Privacy Policy</div>
            </Col>
        </Row>
  </div>;
}

export default Footer_;
