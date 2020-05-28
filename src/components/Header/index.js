import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

import "./style.css"

import Icon from "../../assets/logo.svg"

const Header = ({ siteTitle }) => (
  <Navbar bg="white" expand="md">
    <Container>
      <Navbar.Brand href="/">
        <div className="container">
          <Icon width={48} height={48} />
          <h4
            style={{
              fontWeight: 700,
              fontSize: 18,
              margin: 8,
              textTransform: "uppercase",
            }}
          >
            {siteTitle}
          </h4>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu" className="justify-content-end">
        <Nav>
          <Nav.Link href="/" active={true}>
            Overview
          </Nav.Link>
          <Nav.Link href="/contagion">Contagion</Nav.Link>
          <Nav.Link href="/symptons">Symptons</Nav.Link>
          <Nav.Link href="/prevention">Prevention</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
