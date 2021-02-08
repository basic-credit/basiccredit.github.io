import React from 'react';
import { Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <Row className="justify-content-center">
        <Col md="6" className="text-center">
          <h1>Decentralized Collateral Free Loans</h1>
          <h2>
            Basic Credit is a decentralized protocol to borrow and lend without
            upfront collateral.
          </h2>
          <Nav className="home-nav justify-content-center">
            <Link to="/faq">
              <Nav.Link className="btn btn-outline-light btn-lg" as="span">
                Fund Project
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link
                className="home-nav-right-button btn btn-outline-light btn-lg"
                as="span"
              >
                Litepaper
              </Nav.Link>
            </Link>
          </Nav>
        </Col>
      </Row>
      <Row className="section justify-content-center">
        <Col md="6">
          <h2>Decentralized Identity</h2>
          <p>
            Basic Credit implements a unique first of its kind peer to peer
            identity verification system where all your data is completely under
            your control
          </p>
          <Button variant="outline-light">Learn More</Button>
        </Col>
        <Col md="6">
          <Image />
        </Col>
      </Row>
      <Row className="section justify-content-center">
        <Col md="6">
          <Image />
        </Col>
        <Col className="text-right" md="6">
          <h2>Zero Upfront Collateral</h2>
          <p>
            Basic Credit lets you borrow money based on your monthly income
            rather than upfront collateral that you can provide and helps you
            invest in high quality assets with long term potential
          </p>
          <Button variant="outline-light">Learn More</Button>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default IndexPage;
