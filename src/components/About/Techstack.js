import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiReact,
  DiGit,
  DiJavascript1,
  DiHtml5
} from "react-icons/di";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongoose,
  SiTsnode,
  SiBootstrap,
} from "react-icons/si";

import { TbBrandNextjs } from "react-icons/tb";

import { 
  BsFiletypeXml
 } from "react-icons/bs";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMongoose />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTsnode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandNextjs />
      </Col>
    </Row>
  );
}

export default Techstack;
