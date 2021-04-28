import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { about } from '../../../../database/layouts/app/ar';
const { opensource, noAds, free, text, title, scalable } = about;
const About = () => (
    <section className="app1 about bg-theme">
        <Container>
            <Row>
                <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
                    <div className="title title">
                        <div className="main-title">
                            <h2 className="text-white">{title}</h2>
                        </div>
                        <div className="sub-title">
                            <p className="text-white para">{text}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl="7" lg="6" sm="12">
                    <Row className="set-padding">
                        <Col sm="6" className="counters">
                            <div className="abouts">
                                <div>
                                    <img alt="" className="service-img img-fluid"
                                        src="/assets/images/app_landing1/about/Ellipse-3-copy.png" />
                                    <h3 className="text-white">{free}</h3>

                                </div>
                            </div>
                        </Col>
                        <Col sm="6" className="counters">
                            <div className="abouts">
                                <div>
                                    <img alt="" className="service-img img-fluid"
                                        src="/assets/images/app_landing1/about/close.png" />
                                    <h3 className="text-white">{noAds}</h3>
                                </div>
                            </div>
                        </Col>
                        <Col sm="6" className="counters">
                            <div className="abouts">
                                <div>
                                    <img alt="" className="service-img img-fluid"
                                        src="/assets/images/app_landing1/about/love.png" />
                                    <h3 className="text-white">{opensource}</h3>
                                </div>
                            </div>
                        </Col>

                        <Col sm="6" className="counters">
                            <div className="abouts">
                                <div>
                                    <img alt="" className="service-img img-fluid"
                                        src="/assets/images/app_landing1/about/coffee.png" />
                                    <h3 className="text-white">{scalable}</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        <div className="set-abs mobile mobile-img bottom-0">
            <div className="set-relative">
                <img alt="" className="img-fluid mobile-screen" src="/assets/images/app_landing1/screen-shot/mushaf-mauri2.jpg" />
                <div className="set-abs mobile rectangle r-2  center-content bottom-0">
                    <img alt="" className="img-fluid" src="/assets/images/app_landing1/icons/1-2.png" />
                </div>
                <div className="set-abs mobile rectangle center-content bottom-0">
                    <img alt="" className="img-fluid" src="/assets/images/app_landing1/Ellipse-2-copy-241.png" />
                </div>
                <div className="set-abs mobile center-content galaxy bottom-0">
                </div>
            </div>
        </div>
    </section>
)


export default About;