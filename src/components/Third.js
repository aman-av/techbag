import React from "react";
import '../css/third.css';
import { Row, Col} from 'react-bootstrap';
import features1 from '../assets/features1.svg'
import features2 from '../assets/features2.svg'
import features3 from '../assets/features3.svg'
import features4 from '../assets/features4.svg'
function Third() {
  return <div >
    <Row className="thirdrow1">
     
      <Col xs={12} xl={4}>
        <div className="third_d1">TechBag's Characteristics</div>
        <div className="third_d2">Heres a taste of what Techbag has to offer</div>
      </Col>
      <Col >
        <div  >
          <Row>
            <Col xl={6}>
              <div className="cards">
                <img className='features1' alt="features1" src={features1}  />
                <div>
                  <h5>Understand Your Choices</h5>
                  <div className='card_para'>We allow YOU to select what is best for you and your company. Look for software that meets your team's size, budget, system, feature needs, and other criteria.</div>
                </div>
              </div>
            </Col>
            <Col xl={6}>
             <div className="cards">
                <img className='features1' alt="features2" src={features2}  />
                <div>
                  <h5>Enjoy Amazing Offers</h5>
                  <div className='card_para'>Save your hard-earned money with the discounts offered by TechBag. Because with us, you get to buy software at a lower price bracket than quoted by the vendors.</div>
                </div>
              </div>
            </Col>
          </Row>
           <Row>
            <Col xs={12} xl={6}>
            <div className="cards">
                <img className='features1' alt="features3" src={features3}  />
                <div>
                  <h5>We empower</h5>
                  <div className='card_para'>We understand how important business decisions may be. As a result, we provide you with unbiased information on each software so that you may make better business decisions.</div>
                </div>
              </div>
            </Col>
            <Col xs={12} xl={6}>
            <div className="cards">
                <img alt="features4" className='features1' src={features4}  />
                <div>
                  <h5>Meet up with Suppliers</h5>
                  <div className='card_para'>Contact the sellers whose products you're interested in directly. You may quickly inquire about their goods, request a demo, or inquire about anything else.</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        
      </Col> 
     </Row>
  </div>;
}

export default Third;
