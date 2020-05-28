import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"

import Virus from "../assets/airVirus.svg"
import PersonalContact from "../assets/personalContact.svg"
import TouchObject from "../assets/touchObject.svg"

const ContagionPage = () => (
  <Layout>
    <SEO title="Contagion" />
    <Row className="text-center">
      <Col md={8} style={{ margin: "auto" }}>
        <span className="subTitle">COVID-19</span>
        <h1 className="title">Contagion of Coronavirus</h1>
        <p className="desc">
          Because it's a new illness, we do not know exactly how coronavirus
          spreads from person to person. Similar viruses are spread in cough
          droplets.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <Virus width={200} height={200} />
      </Col>
      <Col md={5}>
        <h1>Air by cough or sneeze</h1>
        <p>
          It can be transmitted by air by coughing and sneezing. So never forget
          to wear a mask.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right">
        <PersonalContact width={200} height={300} />
      </Col>
      <Col md={5}>
        <h1>Personal Contact</h1>
        <p>
          You should pay attention to social distance because not everyone may
          have the same hygiene quality. Be cautious and stay at home.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <TouchObject width={200} height={300} />
      </Col>
      <Col md={5}>
        <h1>Contaminated Objects</h1>
        <p>
          If you need to touch an object, use gloves if possible. Otherwise,
          disinfect the object you touch and your hands.
        </p>
      </Col>
    </Row>
  </Layout>
)

export default ContagionPage
