import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'

var settings = {
    centerMode: true,
    centerPadding: '140px',
    infinite: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                centerPadding: "0",
                padding: "0",
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                centerPadding: "160px",
                padding: "20px",
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                dots: true
            }
        }
    ]
};

const ScreenShots = () => {
    return (
        <section className="app1 screenshot bg-theme" id="screenshot">
            <Container>
                <Row>
                    <Col lg="6" md="8" className="offset-lg-3 offset-md-2 m-b-10">
                        <div className="title title1">
                            <div className="main-title">
                                <h2 className="text-white">لقطات الشاشة</h2>
                            </div>
                            <div className="sub-title">

                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="set-relative">
                    <Col xs="12">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <Slider className="screenshot-slider"  {...settings}>
                                    {Array.apply(null, { length: 10 }).map((_,index) =>
                                        <div className="item">
                                            <img alt="" className="img-fluid" src={`/wino/screenshot/mushaf_mauris_screenshot(${index+5}).jpg`} />
                                        </div>)
                                    }

                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ScreenShots;