import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Button from 'react-bootstrap/Button';
//  import bootstrap css file here
//  import bootstrap sass file on style.css
// https://getbootstrap.com/docs/4.4/getting-started/theming/#sass
// @import "../node_modules/bootstrap/scss/bootstrap";
// import './styles.css';

const Customer = ({ customer }) => {
  const customerStyle = {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '13px',
    color: '#0D019A',
    background: '#EEF8FF',
    borderRadius: '4px',
    padding: '7px',
  };
  const vendorStyle = {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: '13px',
    color: '#049A01',
    background: '#F0FFEE',
    borderRadius: '4px',
    padding: '7px',
  };
  return (
    <Col md={4} className="px-5" style={{ marginBottom: '75px' }}>
      <div>
        <img src={`/img/${customer.image}`} alt="" />
      </div>
      <h2
        style={{
          fontFamily: 'Inter',
          fontWeight: '600',
          fontSize: '24px',
          margin: '15px 0',
          color: '#474747',
        }}
      >
        {customer.name}
      </h2>
      <div>
        <span
          style={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: '15px',
            color: '#535353',
            marginRight: '16px',
          }}
        >
          {customer.location ? 'In' : ''} {customer.location}
        </span>
        <span
          style={customer.type === 'CUSTOMER' ? customerStyle : vendorStyle}
        >
          {customer.type}
        </span>
      </div>
      <p
        style={{
          fontFamily: 'Inter',
          fontSize: '16px',
          color: '#474747',
          margin: '30px',
          marginLeft: '0',
        }}
      >
        Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
        esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit
        aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute
        id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis
        ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
        tempor enim.
      </p>
    </Col>
  );
};

export default function Home() {
  const allCustomers = [
    {
      name: 'Joseph Ike',
      location: 'Ikeja',
      image: 'Ellipse-22.png',
      type: 'CUSTOMER',
    },
    {
      name: 'Adetola Fashina',
      location: 'Ibadan',
      image: 'Ellipse-23.png',
      type: 'CUSTOMER',
    },
    {
      name: 'Emmanuel Fayemi',
      location: 'Akoka',
      image: 'Ellipse-24.png',
      type: 'CUSTOMER',
    },
    {
      name: 'Chisom Obilor',
      location: 'Magodo',
      image: 'Ellipse-25.png',
      type: 'VENDOR',
    },
    {
      name: 'Adunoluwa Adeyemi',
      location: 'Iwo Road',
      image: 'Ellipse-26.png',
      type: 'VENDOR',
    },
    {
      name: 'Chidi Okeke',
      location: 'Somolu',
      image: 'Ellipse-27.png',
      type: 'VENDOR',
    },
    {
      name: 'Temi Obadofin',
      image: 'Ellipse-28.png',
      type: 'VENDOR',
    },
    {
      name: 'Promise Ejiofor',
      image: 'Ellipse-29.png',
      type: 'VENDOR',
    },
    {
      name: 'Feyisola Arinola',
      image: 'Ellipse-30.png',
      type: 'VENDOR',
    },
    {
      name: 'Karen Ibeh',
      image: 'Ellipse-31.png',
      type: 'VENDOR',
    },
    {
      name: 'Oluchi Uzo',
      image: 'Ellipse-32.png',
      type: 'VENDOR',
    },
    {
      name: 'Amos Okafor',
      image: 'Ellipse-33.png',
      type: 'VENDOR',
    },
  ];
  const topCustomers = allCustomers.slice(0, 6);
  const vendors = allCustomers
    .filter((customer) => customer.type === 'VENDOR')
    .slice(3);
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="m-0">
            <Col md={6} className="d-flex align-items-center">
              <div>
                <h1 className="title">
                  Amazing
                  <br />
                  Experiences from Our
                  <br />
                  Wonderful Customers
                </h1>
                <p className="content-1">
                  Here is what customers and vendors are saying about us, you
                  can share your stories with us too.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="/img/Testimonial-image.png"
                style={{ width: '100%' }}
                alt=""
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="section-2 px-5">
        <Col className="sect-2-content-left order-1 order-md-0" md={6}>
          <img
            src="/img/black-beautiful-ladies-smiling.png"
            style={{ width: '100%' }}
            alt=""
          />
        </Col>
        <Col
          md={6}
          className="d-flex align-items-center order-0 order-md-1 mb-5"
          style={{ color: '#fff' }}
        >
          <div>
            <h1
              style={{
                fontFamily: 'Inter',
                fontWeight: 'bold',
                fontSize: '32px',
                marginBottom: '15px',
              }}
            >
              Tolu & Joy’s Experience
            </h1>
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: '500',
                fontSize: '13px',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '4px',
                padding: '7px 10px',
              }}
            >
              CUSTOMER
            </span>
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '18px',
                marginTop: '15px',
              }}
            >
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <div className="text-center">
              <button
                style={{
                  border: '1px solid transparent',
                  borderBottom: '1px solid #FFF',
                  padding: '15px',
                  borderImage: 'url("./img/border.png") 30 round',
                  background: 'transparent',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  color: '#fff',
                }}
                variant="outline-success"
              >
                Share your own story!
              </button>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ height: '75px' }}></Row>
      <Row>
        <Container>
          <Row>
            {topCustomers.map((customer, i) => (
              <Customer key={i} customer={customer} />
            ))}
          </Row>
        </Container>
      </Row>

      <Row>
        <Container>
          <Row className="mx-0">
            <Col
              className="d-flex align-items-center order-1 order-md-0"
              md={6}
            >
              <div>
                <h1
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    fontSize: '32px',
                    color: '#242120',
                    marginBottom: '15px',
                  }}
                >
                  Josiah’s Experience
                </h1>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: '13px',
                    color: '#FF5C00',
                    border: '1px solid rgba(255, 92, 0, 0.4)',
                    borderRadius: '4px',
                    padding: '8px 16px',
                  }}
                  className="my-5"
                >
                  VENDOR
                </span>
                <p
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    color: '#242120',
                    marginTop: '15px',
                  }}
                >
                  I had the best experience shopping with vasiti. Usability of
                  the website was great, very good customer service, an all
                  round great experience. I would definately be coming back! I
                  had the best experience shopping with vasiti. Usability of the
                  website was great, very good customer service, an all round
                  great experience. I would definately be coming back!
                </p>
                <div className="text-center">
                  <button
                    style={{
                      border: '1px solid transparent',
                      borderBottom: '1px solid #FF5C00',
                      padding: '15px',
                      borderImage: 'url("./img/border.png") 30 round',
                      background: 'transparent',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      textTransform: 'uppercase',
                    }}
                    variant="outline-success"
                  >
                    Share your own story!
                  </button>
                </div>
              </div>
            </Col>
            <Col md={6} className="order-0 order-md-1">
              <img
                src="/img/woman-shoppingbag-card-1.png"
                style={{ width: '100%' }}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row style={{ height: '75px' }}></Row>
      <Row>
        <Container>
          <Row>
            {vendors.map((vendor, i) => (
              <Customer key={i} customer={vendor} />
            ))}
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
