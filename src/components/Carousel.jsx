import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Carousel() {
    return (
    <Container>
        <Row className="d-lg-flex my-5">
            <Col xs={{ order: 'last' }} lg={{ order: 'first' }} className="carousel-text d-flex flex-column justify-content-center text-center text-lg-start">
                <h1 className='fw-bold'>Work at the speed of thought</h1>
                <p className='fs-5'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                <div className="carousel-links">
                    <a href="/" className='btn bg-var-green px-4 text-white me-3'>Get Started</a>
                    <a href="/" className='text-var-green text-decoration-none'>
                        &#x25B6; <span className='text-decoration-underline'>Watch the Video</span>
                    </a>
                </div>
            </Col>
            <Col xs={{ order: 'first' }, 12} lg={{ order: 'last' }, 6} className="carousel-img">
                <Image className='img-fluid' src="/img/carousel-img.png" alt="carousel" />
            </Col>
        </Row>
    </Container>
    );
  }
  
export default Carousel