import React from "react";
import Navbar_comp from "./Navbar_comp";
import { Container } from "react-bootstrap";
import First from "./First";
import Third from './Third';
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Footer_ from "./Footer_";

function App() {
  return <Container fluid width="100vw" style={{ margin: '0 0 0 0', padding: '0 0 0 0' }}>  
    <Navbar_comp />
    <First />
    <Third />
    <Fourth />
    <Fifth />
    <Footer_/>
  </Container>;
}

export default App;
