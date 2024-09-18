import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 className="logo"> Shanuka Radeeshan</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shanuka-gunathilaka-6509212b1"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/profile.php?id=61551619196495"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/radeeshanuka?igsh=MXJnMzkwYTdpdHB6cw=="><img src={navIcon3} alt="Icon" /></a>
              
            </div>
            <p>© 2024. Shanuka Radeeshan. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
