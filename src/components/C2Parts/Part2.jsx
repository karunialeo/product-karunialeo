import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Part2() {
    return (
        <Container>
            <Row className="d-lg-flex my-5">
                <Col xs={12} lg={6} className="part1-img">
                    <Image className='img-fluid' src="/img/c2part2.png" alt="management" />
                </Col>
                <Col className="carousel-text d-flex flex-column justify-content-center">
                    <h5 className='fw-bold my-3'>Easier decision making for</h5>
                    <h1 className='fw-bold'>Customer Support</h1>
                    <p className='fs-5'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-yellow.png' alt='tick-yellow' /></Col>
                        <Col>Never worry about overpaying for your energy again. </Col>
                    </Row>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-red.png' alt='tick-red' /></Col>
                        <Col>We will only switch you to energy companies that we trust and will treat you right</Col>
                    </Row>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-blue.png' alt='tick-blue' /></Col>
                        <Col>We track the markets daily and know where the savings are.</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
  }
  
export default Part2