import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'
import shopping_bag from '../assets/shopping_bag.svg'
import '../sass/nav.scss'

function Navbar_comp() {
  return (
    <Navbar width="100vw" fluid bg="white" expand="md" style={{textAlign:'center',padding:'0 0 0 0',marginTop:'0px',boxShadow:'0 10px 10px -10px rgb(0 0 0/35%)'}}>
      <Container fluid>
         <Navbar.Brand href="#home" style={{padding:'0 0 0 6.65%'}}>
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
            style={{ maxHeight: '150px',alignItems:'center',marginRight:'' }}
            navbarScroll
          >
            

            <Nav.Link className='headtext' style={{color:'black'}}>Browse Products
            </Nav.Link>
            <Nav.Link style={{color:'black'}} className='headtext'>Write a Review</Nav.Link>
            <Nav.Link className='headtext' style={{color:'black'}}>Sellers</Nav.Link>
            <Nav.Link className='headtext' style={{color:'black'}}>Blog</Nav.Link>
            <Nav.Link className='headtext' style={{color:'black'}}><img width={35} height={35} src={ shopping_bag} /></Nav.Link>
            <Nav.Link className='headtext'>
              <button className='loginbtn'>Login</button>
            </Nav.Link>

          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar_comp;