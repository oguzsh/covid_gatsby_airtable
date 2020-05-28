import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"

const PreventionPage = () => {
  const data = useStaticQuery(graphql`
    query PreventionQuery {
      prevention: allAirtable(filter: { table: { eq: "Prevention" } }) {
        nodes {
          data {
            subTitle
            title
            desc
            sectionTitle
            sectionDesc
            sectionImage {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Prevention" />
      <Row className="text-center">
        <Col md={8} style={{ margin: "auto" }}>
          <span className="subTitle">
            {data.prevention.nodes[2].data.subTitle}
          </span>
          <h1 className="title">{data.prevention.nodes[2].data.title}</h1>
          <p className="desc">{data.prevention.nodes[2].data.desc}</p>
        </Col>
      </Row>

      {data.prevention.nodes.map((item, i) => (
        <Row className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <Col md={3} className="text-md-right text-center text-xs-center">
            <img
              src={item.data.sectionImage[0].url}
              alt="Image"
              width="150"
              height="150"
              className="img-fluid m-3"
            />
          </Col>
          <Col md={5} className="text-md-left text-center">
            <h2>{item.data.sectionTitle}</h2>
            <p>{item.data.sectionDesc}</p>
          </Col>
        </Row>
      ))}
    </Layout>
  )
}

export default PreventionPage
