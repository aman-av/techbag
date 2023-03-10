import Container from 'react-bootstrap/Container';
import {Nav,Offcanvas} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'
import shopping_bag from '../assets/shopping_bag.svg'
import '../sass/nav.scss';
import React,{useEffect,useState} from 'react';

function NavbarComp() {

  const [isMobile, setIsMobile] = useState(false);
	//choose the screen size
	const handleResize = () => {
		if (document.documentElement.clientWidth >= 768) {
			setIsMobile(false);
		} else {
			setIsMobile(true);
		}
	};

	// create an event listener
	useEffect(() => {
		window.addEventListener("resize", handleResize);
	});
	useEffect(() => {
		handleResize();
  }, []);
  
  if (isMobile === false)
    return (
        <Navbar width="100vw" fluid bg="white" expand="md" style={{ textAlign: 'center', padding: '0 0 0 0', marginTop: '0px', boxShadow: '0 10px 10px -10px rgb(0 0 0/35%)' }}>
          <Container fluid>
            <Navbar.Brand href="#home" style={{ padding: '0 0 0 6.65%' }}>
              <img
                src={logo}
                width="150px"
                height="98px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
            
                className="justify-content-end flex-grow-1 pe-3"
                style={{ maxHeight: '150px', alignItems: 'center', marginRight: '' }}
                navbarScroll
              >
            

                <Nav.Link className='headtext' href="#action1" style={{ color: 'black' }}>Browse Products
                </Nav.Link>
                <Nav.Link href="#action1" style={{ color: 'black' }} className='headtext'>Write a Review</Nav.Link>
                <Nav.Link href="#action1" className='headtext' style={{ color: 'black' }}>Sellers</Nav.Link>
                <Nav.Link href="#action1" className='headtext' style={{ color: 'black' }}>Blog</Nav.Link>
                <Nav.Link href="#action1" className='headtext' style={{ color: 'black' }}><img width={35} height={35} alt='shopping bag' src={shopping_bag} /></Nav.Link>
                <Nav.Link href="#action1" className='headtext'>
                  <button className='loginbtn'>Login</button>
                </Nav.Link>

              </Nav>
          
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
  else return (
     <Navbar width="100vw" fluid bg="white" expand="md" style={{ textAlign: 'center', padding: '0 0 0 0', marginTop: '0px', boxShadow: '0 10px 10px -10px rgb(0 0 0/35%)' }}>
      <Container fluid style={{ height:'98px' }}>
           
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-false`}
              aria-labelledby={`offcanvasNavbarLabel-expand-false`}
              placement='start'
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  
              </Nav>
              </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <div > */}

                {/* </div> */}
          </Container>
          <Navbar.Brand href="#home" style={{position:'absolute',left:'40%' }}>
              <img
                src={logo}
                width="150px"
                height="98px"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
                
                />
            </Navbar.Brand>   
        </Navbar>
  );
}

export default NavbarComp;