import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col, Button } from "react-bootstrap"

import NetflixVector from "../assets/netflixVector.svg"

import DoctorVector from "../assets/doctorSvg.svg"

// Style
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col md={6} sm={12}>
        <span className="subTitle">COVID-19 Alert</span>
        <h1 className="title">Stay At Home Quarantine To Stop Corona Virus</h1>
        <p className="desc">
          The best way to prevent and slow down infection is to be informed in
          the best way. Protect yourself and others from infection without
          touching your face by staying at home.
        </p>
        <Button className="mb-5">Learn More</Button>
      </Col>
      <Col md={(6, { offset: 1 })}>
        <NetflixVector width={450} height={300} className="img-fluid" />
      </Col>
    </Row>

    <Row className="mt-5">
      <Col md={(6, { order: 1 })} sm={12}>
        <span className="subTitle">What Is Covid-19</span>
        <h1 className="title">Coronavirus</h1>
        <p className="desc">
          The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
          in December 2019, the outbreak was later recognized as a pandemic by
          the World Health Organization (WHO) on 11 March 2020.
        </p>
      </Col>
      <Col md={(6, { offset: 1 })}>
        <DoctorVector width={250} height={300} className="img-fluid" />
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

export default IndexPage
