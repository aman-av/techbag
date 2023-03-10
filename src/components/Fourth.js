import React from "react";
import review1 from '../assets/review1.svg'
import review2 from '../assets/review2.svg'
import { Row, Col } from 'react-bootstrap'
import '../sass/fourth.scss'
function Fourth() {
  return <div>
    <Row style={{ margin:'7% 9%'}}>
      <Col lg={5}>
        <div className="fourth_header">
          Are You Using Any Software? Write a Review!
        </div>
        <div className="fourth_para">Reviews come with benefits, such as getting listed as an authentic reviewer and making it easier for others to select the right solution. With robust review mechanism, we make sure that reviews are legitimate, and from an authentic source.</div>
        <div className="custombtn">GIVE A REVIEW</div>
      </Col>
      <Col style={{textAlign:'center',alignSelf:'center'}} className="d-none d-lg-block">
          <img height='auto' alt="review1" width='85%' src={review1} />
      </Col>
    </Row>
    <Row style={{ margin:'7% 9%'}}>
      <Col style={{textAlign:'center',alignSelf:'center'}} className="d-none d-lg-block">
          <img src={review2 } alt='review2' height="auto" width='85%'/>
      </Col>
      <Col lg={5}>
        <div className="fourth_header">
          Are You Selling Software? Get Listed
        </div>
        <div className="fourth_para">
          Are You Selling Software? Get Listed
          This platform is built for Vendors, Startups, and for everyone who wants to list their Solutions online, and reach a wider audience. Connect with the buyers and get the insights.
        </div>
        <div className="custombtn">GET LISTED</div>
      </Col>
    </Row>
  </div>;
}

export default Fourth;
