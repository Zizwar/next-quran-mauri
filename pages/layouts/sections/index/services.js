import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { features } from '../../../../database/layouts/app/ar';
const { title, text, feature } = features;
const Services = () => (
    <section className="services" id="service">
        <Container>
            <Row>
                <Col lg="6" md="8" className="offset-lg-3 offset-md-2">
                    <div className="title">
                        <div className="main-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="sub-title">
                            <p className="para">{text}</p>
                        </div>
                    </div>
                </Col>
                {feature.map(({ title, text, icon }, index) => <Col md="4" key={`ftr${index}`}>
                    <div className="service service-overlay">
                        <div className="img-block">
                            <img alt="" className="service-img img-fluid" src={`/assets/icons/${icon}.png`} />
                        </div>
                        <div className="service-feature">
                            <h4 className="feature-text">{title}</h4>
                            <p>{text}.</p>

                        </div>
                    </div>
                </Col>)

                }
            </Row>
        </Container>
    </section>
)


export default Services;