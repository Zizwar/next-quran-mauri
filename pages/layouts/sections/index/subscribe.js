import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Subscribs = () => (
    <footer className="app1 subscribe bg">
        <Container>
            <Row>
                <Col lg="6" className="offset-lg-3">
                    <div className="title title1">
                        <div className="main-title">
                            <h2>اشترك في نشرتنا الإخبارية</h2>
                        </div>
                        <div className="sub-title">
                      
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg="8"  className="offset-lg-2">
                    <div className="subscribe">
                        <div className="center-content">
                            <div className="form-group">
                                <div className="d-flex">
                                    <input className="form-control " maxLength="45" name="email"
                                        placeholder="الرجاء إدخال عنوان البريد الإلكتروني الخاص بك" type="email" />
                                    <div className="button-primary">
                                        <button className=" btn btn-default btn-gradient text-white text-uppercase"
                                            type="submit">اشتراك
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <div className="socials-lists m-t-50">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="#">
                                    <i aria-hidden="true" className="fa fa-android center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i aria-hidden="true" className="fa fa-github center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i aria-hidden="true" className="fa fa-google center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)


export default Subscribs;