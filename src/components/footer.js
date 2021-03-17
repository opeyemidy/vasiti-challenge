import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function header() {
  return (
    <div style={{ background: '#25201D', color: '#fff' }}>
      <Container className="pb-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div>
              <img
                src="/img/mask-group.png"
                alt=""
                style={{ marginTop: '-47px', maxWidth: '100%' }}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="pt-5">
              <h1
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 'bold',
                  fontSize: '40px',
                }}
              >
                Be a member of our community 🎉
              </h1>
              <p
                style={{
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                }}
              >
                We’d make sure you’re always first to know what’s
                <br /> happening on Vasiti—thus, the world.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5" xs={2} md={5}>
          <Col>
            <h5
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Company
            </h5>
            <ul className="footer-list">
              <li>About us</li>
              <li>Term of Use</li>
              <li>Privacy Policy</li>
              <li>Press & Media</li>
            </ul>
          </Col>
          <Col>
            <h5
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Products
            </h5>
            <ul className="footer-list">
              <li>Marketplace</li>
              <li>Magazine</li>
              <li>Seller</li>
              <li>Wholesale</li>
              <li>Services</li>
            </ul>
          </Col>
          <Col>
            <h5
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Careers
            </h5>
            <ul className="footer-list">
              <li>Become a Campus Rep</li>
              <li>Become a Vasiti Influencere</li>
              <li>Become a Campus writer</li>
              <li>Become an Affiliate</li>
            </ul>
          </Col>

          <Col>
            <h5
              style={{
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                fontSize: '16px',
              }}
            >
              Get in touch
            </h5>
            <ul className="footer-list">
              <li>Contact us</li>
              <li>Partner with us</li>
              <li>Advertise with us</li>
              <li>Help/FAQs</li>
            </ul>
          </Col>
          <Col>
            <h5>Join our community</h5>
            <div className="social-icon mb-5">
              <img src="/img/fb.png" alt="" />
              <img src="/img/ig.png" alt="" />
              <img src="/img/tw.png" alt="" />
              <img src="/img/in.png" alt="" />
            </div>
            <p
              style={{
                fontFamily: 'Roboto',
                fontSize: '14px',
              }}
            >
              Email Newsletter
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
