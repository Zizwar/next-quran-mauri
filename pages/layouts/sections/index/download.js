import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Container, Row, Col } from 'reactstrap'
import { devs } from '../../../../database/layouts/app/ar';

const Download = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, []);

    return (
        <section className="app1 download">
            <Container>
                <Row>
                    <Col lg="5" md="6" data-aos="fade-right" data-aos-delay="100">
                        <div className="center-content center-mobile">
                            <img alt="" className="img-fluid" src="/wino/screenshot/mushaf_mauri_devs.jpg" />
                        </div>
                    </Col>
                    <Col lg="6" md="6" className="offset-lg-1">
                        <div className="center-text">
                            <div>
                                <div className="download-img">
                                    <div className="set-relative">

                                        <div className="set-abs elipse center-abs">
                                            <img alt="" src="/assets/images/app_landing1/download/Ellipse.png" />
                                        </div>
                                    </div>
                                    <div className="center-img-content m-l-15">
                                        <h3 className="m-b-5">{devs.title}</h3>

                                    </div>
                                </div>
                                <div className="information">
                                    <p>{devs.text}</p>
                                </div>
                                <div className="link-horizontal">
                                    <ul>
                                        <li>
                                            <a className="icon-btn" href="https://github.com/Zizwar/mushaf-mauri">
                                                <i aria-hidden="true" className="fa fa-github center-content shadow"></i>
                                                <h6 className="text-center font-primary">Github</h6>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon-btn" href="https://exp.host/@zizwar/MushafMauri">
                                                <i aria-hidden="true" className="fa fa-circle center-content shadow"></i>
                                                <h6 className="text-center font-primary">Expo</h6>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



export default Download;