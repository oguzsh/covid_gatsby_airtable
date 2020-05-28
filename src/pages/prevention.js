import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"

import WashHands from "../assets/washHands.svg"
import SocialDistance from "../assets/socialDistance.svg"
import TouchFace from "../assets/TouchFace.svg"

const PreventionPage = () => (
  <Layout>
    <SEO title="Prevention" />
    <Row className="text-center">
      <Col md={8} style={{ margin: "auto" }}>
        <span className="subTitle">COVID-19</span>
        <h1 className="title">Prevention of Coronavirus</h1>
        <p className="desc">
          There is currently no vaccine to prevent Coronavirus (COVID-19. The
          best way to prevent illness is to avoid being exposed to this virus.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <WashHands width={200} height={200} />
      </Col>
      <Col md={5}>
        <h2>Wash your hands frequently</h2>
        <p>
          Regularly and thoroughly clean your hands with an alcohol-based hand
          rub or wash them with soap and water for at least 20 seconds.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right">
        <SocialDistance width={200} height={300} />
      </Col>
      <Col md={5}>
        <h2>Maintain social distancing</h2>
        <p>
          Maintain at least ~1.8 meters (6 feet) distance between yourself &
          anyone who is coughing or sneezing.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <TouchFace width={200} height={300} />
      </Col>
      <Col md={5}>
        <h2>Avoid touching face</h2>
        <p>
          Hands touch many surfaces and can pick up viruses. So, hands can
          transfer the virus to your eyes, nose, or mouth and can make you
          sick..
        </p>
      </Col>
    </Row>
  </Layout>
)

export default PreventionPage
