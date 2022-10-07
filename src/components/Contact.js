import React from "react";
import "../App.css";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <Container>
          <Row>
            <Col>
              <div className="duals">
                <div className="strips">
                  <h3>Phone</h3>
                  <a href="">+923369274333</a>
                </div>
                <div className="strips">
                  <h3>LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/wasif-aleem-350364214">
                    https://www.linkedin.com/in/wasif-aleem-350364214
                  </a>
                </div>
                <div className="strips">
                  <h3>Twitter</h3>
                  <a href="https://twitter.com/wasifaleem2">
                    https://twitter.com/wasifaleem2
                  </a>
                </div>
                <div className="strips">
                  <h3>Email</h3>
                  <a href="gmail.com">wasifaleem2@gmail.com</a>
                </div>
                <div className="strips">
                  <h3>Facebook</h3>
                  <a href="https://www.facebook.com/wasif.aleem.71">
                    https://www.facebook.com/wasif.aleem.71
                  </a>
                </div>
              </div>
            </Col>
            {/* <Col>
              <div className="duals">
                <form className="form">
                  <div className="seperator">
                    <h3>Contact</h3>
                  </div>
                  <div className="seperator">
                    <label>Email</label>
                    <br />
                    <input
                      className="input"
                      type="text"
                      placeholder="enter your email"
                    />
                  </div>
                  <div className="seperator">
                    <label>Description</label>
                    <br />
                    <textarea
                      rows="8"
                      name="description"
                      placeholder="Enter your text here ....."
                    />
                  </div>
                </form>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}
