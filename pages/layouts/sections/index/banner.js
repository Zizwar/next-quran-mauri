import React from 'react'
import Tilt from 'react-parallax-tilt';
import { Container, Row, Col } from 'reactstrap';
import { cover } from '../../../../database/layouts/app/ar';



const Banner = () => (
    <section className="app1 header" id="home">
        <div className="app1-header bg">
            <Container>
                <Row>
                    <Col lg="6" md="7">
                        <div className="center-text">
                            <div>
                                <div className="header-text">
                                    <h1>{cover.title}</h1>
                                </div>
                                <div className="header-sub-text">
                                    <p className="text-white p-light">{cover.subTitle}</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn" href="https://play.google.com/store/apps/details?id=wino.ma.mushaf.mauri">
                                                <i aria-hidden="true" className="fa fa-android center-content"></i>
                                                <h6 className="text-center text-white">android</h6>
                                            </a>
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <div className="rotate" style={{
                        top: "1% !important",
                        transform: "rotate(0deg) !important",
                        position: "initial !important",
                        zIndex: "0 !important",
                        display: "block !important"
                    }} >
                        <Tilt perspective="20000" transitionSpeed="3000">
                            <img alt="" className="img-fluid" src="/assets/images/app_landing1/intro-mauri.jpg" />
                        </Tilt>
                    </div>
                    <div className="squares" style={{ transform: null, top: 0 }}>
                        <img alt="" className="img-fluid img-1 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                        <img alt="" className="img-fluid img-2 set-abs" src="/assets/images/app_landing1/Ellipse.png" />
                    </div>
                    <div className="animation-circle-inverse">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                </Row>
            </Container>
        </div>
    </section>
)


export default Banner;