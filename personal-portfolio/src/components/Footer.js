import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assests/img/Manasvi.svg";
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/manasvi-sri/"><img src={navIcon1}alt="Linkedin"/></a>
            <a href="https://github.com/grimreapermanasvi"><img src={navIcon2}alt="GitHub"/></a>
            <a href="https://leetcode.com/u/ManasviSrivastava/"><img src={navIcon3}alt="LeetCode"/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}