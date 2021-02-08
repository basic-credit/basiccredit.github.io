/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        <Container fluid>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
