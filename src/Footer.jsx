import React from "react";
import { Container, Typography, Link } from "@mui/material";
import "./Footer.css"
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", padding: "20px 0", marginTop: "50px" }}>
      <Container maxWidth="md">
      <span class="loader"></span>
      <br/>
        <body  style={{ marginTop: "10px",textAlign:"center",color:"pink"}}>
          Made with ❤️ by <Link style={{textDecoration:"none",color:"pink"}} href="https://www.example.com">Sherwin Roger</Link>
        </body>
        <br/>
      </Container>
    </footer>
  );
};

export default Footer;
