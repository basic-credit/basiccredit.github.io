import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row className="justify-content-md-center">
      <Col>
        <h1>Decentralized Collateral Free Loans</h1>
        <p>
          Basic Credit is a decentralized protocol to borrow & lend without
          upfront collateral.
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
