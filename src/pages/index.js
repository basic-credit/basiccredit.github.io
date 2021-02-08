import React from 'react';
import { Row, Col } from 'react-bootstrap';

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
          <p>
            Basic Credit is a decentralized protocol to borrow & lend without
            upfront collateral.
          </p>
          <Image />
        </Col>
      </Row>
    </div>
  </Layout>
);

export default IndexPage;
