import React from "react";
import "../App.css";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function About() {
  return (
    <div className="education">
      <Container>
        <div className="education-content">
          <Row>
            <Col>
              <div className="school-box">
                <img className="img" src={require("../media/beacon.jpg")} />
                <h4>Beacon Askari School(O level Campus)</h4>
                <p>O levels</p>
                <p>Year: 2013-2014</p>
                <a
                  href="http://beaconaskarischool.edu.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open School Website
                </a>
              </div>
            </Col>
            <Col>
              <div className="school-box">
                <img className="img" src={require("../media/abgc.jpg")} />
                <h4>Ayesha Bawani Govt. College</h4>
                <p>Intermediate</p>
                <p>Year: 2015-2016</p>
                <a
                  href="https://hamariweb.com/directories/ayesha_bawany_govt._college_edu153.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open School Website
                </a>
              </div>
            </Col>
            <Col>
              <div className="school-box">
                <img className="img" src={require("../media/kiet.jpg")} />
                <h4>PAF KIET</h4>
                <p>Bachelors in Computer Science</p>
                <p>Year: 2017-2021</p>
                <a
                  href="https://kiet.edu.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open School Website
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
