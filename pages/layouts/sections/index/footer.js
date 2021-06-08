import React, { Fragment } from 'react'
import Subscribs from './subscribe';
import {Container,Row,Col} from 'reactstrap'
const Footer = () => (
    <Fragment>
        <Subscribs />
        <div className="app1 copyright">
            <Container>
                <Row>
                    <Col xs="12">
                        <div className="center-content">
                            <div>
                                 <h6 className="copyright-text text-white">mail@ibrahim.contact</h6>
                                <h6 className="copyright-text text-white">Copyright © 2021</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </Fragment>
)


export default Footer;
