import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"

import { Row, Col } from "react-bootstrap"

const SymptonsPage = () => {
  const data = useStaticQuery(graphql`
    query SymptonsQuery {
      symptons: allAirtable(filter: { table: { eq: "Symptons" } }) {
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
      <SEO title="Symptons" />
      <Row className="text-center">
        <Col md={8} style={{ margin: "auto" }}>
          <span className="subTitle">
            {data.symptons.nodes[0].data.subTitle}
          </span>
          <h1 className="title"> {data.symptons.nodes[0].data.title}</h1>
          <p className="desc">{data.symptons.nodes[0].data.desc}</p>
        </Col>
      </Row>

      {data.symptons.nodes.map((item, i) => (
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
            <h1>{item.data.sectionTitle}</h1>
            <p>{item.data.sectionDesc}</p>
          </Col>
        </Row>
      ))}
    </Layout>
  )
}
export default SymptonsPage
