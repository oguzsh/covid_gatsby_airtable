import React from "react"
import PropTypes from "prop-types"
import { Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container className="mt-5">{children}</Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
