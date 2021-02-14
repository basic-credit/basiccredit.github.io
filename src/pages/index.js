import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button, Card, CardDeck } from 'react-bootstrap';
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
`;

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
          <Button
            href={externalLinks.basicCreditApp}
            variant="primary"
            size="lg"
          >
            Use Basic Credit
          </Button>
          <Link to="/funding">
            <Button variant="outline-primary" size="lg">
              Fund Project
            </Button>
          </Link>
          <Link to="/documentation">
            <Button variant="outline-primary" size="lg">
              Documentation
            </Button>
          </Link>
        </StyledItemRow>
      </Row>
      <HowSection />
      <MissionSection />
    </div>
  </Layout>
);

export default IndexPage;

const StyledSectionTitle = styled.h1`
  font-size: 48px;
  white-space: wrap;
  overflow-wrap: normal;
  max-width: 900px;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 600px;
    margin-top: 4rem;
  }
  @media (max-width: 640px) {
    width: 100%;
    font-weight: 400;
    margin-top: 4rem;
    text-align: left;
  }
`;

const StyledBodySubText = styled.h3`
  max-width: 960px;
  text-align: center;
  line-height: 160%;
  font-weight: 400;
  font-size: 1.25rem;
  @media (max-width: 640px) {
    text-align: left;
  }
`;

const HowSectionCard = (title, text) => {
  return (
    <Card className="how-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Link>Learn More</Card.Link>
      </Card.Body>
    </Card>
  );
};

const HowSection = () => {
  return (
    <div className="section">
      <Row className="justify-content-center">
        <Col md="6">
          <StyledSectionTitle>How it Works</StyledSectionTitle>
          <StyledBodySubText>
            Using Basic Credit, anyone can borrow money based on their monthly
            income and can use it to invest in high-quality crypto assets.
          </StyledBodySubText>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="9">
          <CardDeck className="styled-card-deck">
            {HowSectionCard(
              'Signup',
              'Join our Basic Network which is an open, community run identity verification platform.'
            )}
            {HowSectionCard(
              'Get Verified',
              'Get your identity & income verified by the community validators. All of your data is always in your control.'
            )}
            {HowSectionCard(
              'Borrow',
              "Once verified you'll automatically get a credit limit which can be borrowed anytime from the lending pool"
            )}
            {HowSectionCard(
              'Invest',
              'Invest the borrowed money in high quality crypto assets & take advantage of the hyper growth that we are seeing in Crypto'
            )}
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
};

const MissionSection = () => {
  return (
    <div className="section">
      <Row className="section justify-content-center">
        <Col className="text-right" md="6">
          <StyledSectionTitle>Basic Credit Mission</StyledSectionTitle>
          <StyledBodySubText>
            Collateral-based lending protocols only enable people with assets
            (rich people). In a truly decentralized financial future, we believe
            it is extremely important to have a protocol where anyone can borrow
            without upfront collateral. Only then can everyone have equal access
            to grow their wealth.
          </StyledBodySubText>
          <StyledBodySubText>Help us build that future!</StyledBodySubText>
        </Col>
      </Row>
    </div>
  );
};
