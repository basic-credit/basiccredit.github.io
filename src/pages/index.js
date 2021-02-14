import React from 'react';
import styled from 'styled-components'
import { Row, Col, Nav, Button } from 'react-bootstrap';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { externalLinks } from '../common/externalLinks';
import './index.css';

const StyledItemRow = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0rem;
  width: 100%;
  & > *:not(:first-of-type) {
    margin-top: 12px;
  }
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    & > * {
      margin-bottom: 12px;
    }
    & > *:not(:first-of-type) {
      margin-top: 0;
      margin-left: 12px;
    }
  }
  @media (min-width: 960px) {
    box-sizing: border-box;
    transition: right 0.25s ease;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <Row className="justify-content-center">
        <Col md="6">
          <h1>Decentralized Collateral Free Loans</h1>
          <h2>
            Basic Credit is a decentralized protocol to borrow and lend without
            upfront collateral.
          </h2>
        </Col>
      </Row>
      <Row className="button-section">
        <StyledItemRow>
          <Button href={externalLinks.basicCreditApp} variant="primary" size="lg">Use Basic Credit</Button>
          <Link to="/funding">
            <Button variant="outline-primary" size="lg">Fund Project</Button>
          </Link>
          <Link to="/documentation">
            <Button variant="outline-primary" size="lg">Documentation</Button>
          </Link>
        </StyledItemRow>
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
      </Row>
      <Row className="section justify-content-center">
        <Col className="text-right" md="6">
          <h2>Zero Upfront Collateral</h2>
          <p>
            Basic Credit lets you borrow money based on your monthly income
            rather than upfront collateral that you can provide and helps you
            invest in high quality assets with long term potential
          </p>
          <Button variant="outline-dark">Learn More</Button>
        </Col>
      </Row>
    </div>
  </Layout>
);

export default IndexPage;
