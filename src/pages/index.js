import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Button } from "react-bootstrap"

import { useStaticQuery, graphql } from "gatsby"

// Style
import "./index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      overview: allAirtable(filter: { table: { eq: "Overview" } }) {
        nodes {
          data {
            subTitle
            title
            desc
            image {
              url
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        <Col md={6} sm={12}>
          <span className="subTitle">
            {data.overview.nodes[1].data.subTitle}
          </span>
          <h1 className="title">{data.overview.nodes[1].data.title}</h1>
          <p className="desc">{data.overview.nodes[1].data.desc}</p>
          <Button href="/contagion" className="mb-5 p-3" style={{ width: 180 }}>
            Explore Contagion
          </Button>
        </Col>
        <Col md={(6, { offset: 1 })}>
          <img
            src={data.overview.nodes[1].data.image[0].url}
            alt="Image"
            width="500"
            height="300"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col md={(6, { order: 1 })} sm={12}>
          <span className="subTitle">
            {data.overview.nodes[0].data.subTitle}
          </span>
          <h1 className="title">{data.overview.nodes[0].data.title}</h1>
          <p className="desc">{data.overview.nodes[0].data.desc}</p>
        </Col>
        <Col md={(6, { offset: 1 })} className="mt-5">
          <img
            src={data.overview.nodes[0].data.image[0].url}
            alt="Image"
            width="250"
            height="100"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="text-center mt-5 mb-5">
        <Col md={12}>
          <Button
            href="/symptons"
            size="lg"
            className="text-center"
            style={{ width: 200, fontSize: 18, padding: 20 }}
          >
            Explore Symptons
          </Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
