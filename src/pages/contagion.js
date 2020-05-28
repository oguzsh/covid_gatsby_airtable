import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"

import { useStaticQuery, graphql } from "gatsby"

const ContagionPage = () => {
  const data = useStaticQuery(graphql`
    query ContagionQuery {
      contagion: allAirtable(filter: { table: { eq: "Contagion" } }) {
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
      <SEO title="Contagion" />
      <Row className="text-center">
        <Col md={8} style={{ margin: "auto" }}>
          <span className="subTitle">
            {data.contagion.nodes[0].data.subTitle}
          </span>
          <h1 className="title">{data.contagion.nodes[0].data.title}</h1>
          <p className="desc">{data.contagion.nodes[0].data.desc}</p>
        </Col>
      </Row>
      {data.contagion.nodes.map((item, i) => (
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

export default ContagionPage
