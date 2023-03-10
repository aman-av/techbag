import React from "react";
import NavbarComp from "./NavbarComp";
import { Container } from "react-bootstrap";
import First from "./First";
import Third from './Third';
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Footer from "./Footer";

function App() {
  return <Container fluid width="100vw" style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}>  
    <NavbarComp />
    <First />
    <Third />
    <Fourth />
    <Fifth />
    <Footer/>
  </Container>;
}

export default App;
