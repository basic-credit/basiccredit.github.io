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
import './layout.scss';

import Header from './header';
// import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Container fluid>
      <Header />
      <main>
        {children}
      </main>
      {/* <Footer /> */}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
