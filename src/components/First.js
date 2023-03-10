import React from "react";
import { Col,Button, Row } from 'react-bootstrap';
import hero from '../assets/hero.jpg';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../sass/first.scss'
import search from '../assets/search.svg'
import scalefusion from '../assets/scalefusion.png'
import hexnode from '../assets/hexnode.png'

function First() {
    return <div style={{marginTop:'45px'}}>
        <Row className="row1">
            <Col >
                <div className="para1">
                    Discover, buy & sell the software you need to grow your business
                </div>
                <div className="para2">
                    TechBag gives you industry- specific software buying advice no matter where you are in the process
                </div>
                <div className="para3">
                     <InputGroup className="mb-3">
                        <Form.Control
                            style={{borderColor:'none',boxShadow:"none",height:'40px',borderTop:'2px solid #000',borderLeft:'2px solid #000',borderBottom:'2px solid #000',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px',borderRight:'none',paddingLeft:'40px',backgroundColor:'white'}}
                        placeholder="Search Products"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        />
                         <Button style={{borderTop:'2px solid #000',height:'40px',borderRight:'2px solid #000',borderBottom:'2px solid #000',borderTopRightRadius:'10px',borderBottomRightRadius:'10px',borderLeft:'none',backgroundColor:'white'}}  id="button-addon2">
                            <img style={{paddingRight:'30px'}} alt='search' src={search}/>
                        </Button>
                    </InputGroup>
                    
                </div>
            </Col>
            <Col className="d-none d-lg-block">
                <img src={hero} alt='hero' width='100%'/>
            </Col>
        </Row>
        <Row className="row2">
            <div className="divh1">Popular Software</div>
            <Col xs={12} md={5} className="d-grid gap-0" >
                <Button className="btn" style={{hover:'border',textAlign:'left',marginBottom:'10px',fontWeight:'600',fontSize:'18px',borderRadius:'5px',height:'50px',backgroundColor:'#ed3523',border:'2px solid #ed3523'}} >Enterprise Mobility Management</Button>
                <Button style={{ textAlign:'left',marginBottom:'10px',fontWeight:'600',fontSize:'18px',height: '50px' ,backgroundColor:'white',border:'none',color:'black'}} >Mobile Device Management (MDM)</Button>
                <Button style={{textAlign:'left',marginBottom:'10px',fontWeight:'600',fontSize:'18px', height: '50px' ,backgroundColor:'white',border:'none',color:'black'}} >Email Security</Button>
                <Button style={{textAlign:'left',marginBottom:'10px',fontWeight:'600',fontSize:'18px', height: '50px' ,backgroundColor:'white',border:'none',color:'black'}}>Web Security</Button>
            </Col>
            <Col   >
                {/* <div className="row2_col2"> */}
                <Row>
                    <Col>
                    <img height={195} alt='hexnode'  src={hexnode} />
                    </Col>
                    <Col>
                    <img height={190} alt='scalefusion' src={scalefusion}/>
                    </Col>
                 </Row>
                {/* </div> */}
            </Col>
        </Row>
  </div>;
}

export default First;
