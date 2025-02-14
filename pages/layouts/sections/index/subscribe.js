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
                <Col md="12">
                    <div className="socials-lists m-t-50">
                        <ul className="socials-horizontal justify-content-center">
                            <li>
                                <a href="https://apkpure.com/%D9%85%D8%B5%D8%AD%D9%81-%D9%85%D9%88%D8%B1%D9%8A-%D8%A7%D9%84%D9%82%D8%B1%D8%A7%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85/wino.ma.mushaf.mauri">
                                    <i aria-hidden="true" className="fa fa-android center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/zizwar">
                                    <i aria-hidden="true" className="fa fa-github center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="ibrahimbidi@yahoo.com">
                                    <i aria-hidden="true" className="fa fa-google center-content"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com/Zizwar">
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