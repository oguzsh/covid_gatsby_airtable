import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Row, Col } from "react-bootstrap"

import Fever from "../assets/fever.svg"
import Cough from "../assets/cough.svg"
import Breath from "../assets/breath.svg"

const SymptonsPage = () => (
  <Layout>
    <SEO title="Symptons" />
    <Row className="text-center">
      <Col md={8} style={{ margin: "auto" }}>
        <span className="subTitle">COVID-19</span>
        <h1 className="title">Symptons of Coronavirus</h1>
        <p className="desc">
          The most common symptoms of COVID-19 are fever, tiredness, and dry
          cough. Some patients may have aches and pains, nasal congestion, runny
          nose, sore throat, or diarrhea. These symptoms are usually mild and
          begin gradually. Also the symptoms may appear 2-14 days after
          exposure.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <Fever width={200} height={200} />
      </Col>
      <Col md={5}>
        <h1>Fever</h1>
        <p>
          <span className="font-weight-bold">High Fever</span> – this means you
          feel hot to touch on your chest or back. It is a common sign and also
          may appear in 2-10 days if you affected..
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right">
        <Cough width={200} height={300} />
      </Col>
      <Col md={5}>
        <h1>Cough</h1>
        <p>
          <span className="font-weight-bold">Continuous cough</span> – this
          means coughing a lot for more than an hour, or 3 or more coughing
          episodes in 24 hours.
        </p>
      </Col>
    </Row>

    <Row className="d-flex align-items-center justify-content-center mt-5">
      <Col md={3} className="text-md-right text-xs-center">
        <Breath width={200} height={300} />
      </Col>
      <Col md={5}>
        <h1>Shortness of breath</h1>
        <p>
          <span className="font-weight-bold">Difficulty breathing</span> –
          Around 1 out of every 6 people who get COVID-19 becomes seriously ill
          and develops difficulty breathing or shortness of breath.
        </p>
      </Col>
    </Row>
  </Layout>
)

export default SymptonsPage
