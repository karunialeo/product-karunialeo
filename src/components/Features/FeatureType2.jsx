import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function FeatureType2({subtitle, title, paragraph1, listitem1, listitem2, listitem3, image, imageSmall, imageLarge}) {
    return (
        <Container>
            <Row className="d-lg-flex my-5">
                <Col xs={imageSmall} lg={imageLarge}>
                    <Image className='img-fluid' src={image} alt={title} />
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h5 className='fw-bold my-3'>{subtitle}</h5>
                    <h1 className='fw-bold'>{title}</h1>
                    <p className='fs-5'>{paragraph1}</p>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-yellow.png' alt='tick-yellow' /></Col>
                        <Col>{listitem1}</Col>
                    </Row>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-red.png' alt='tick-red' /></Col>
                        <Col>{listitem2}</Col>
                    </Row>
                    <Row className='d-flex align-items-center mb-3'>
                        <Col sm="auto"><Image src='/img/tick-blue.png' alt='tick-blue' /></Col>
                        <Col>{listitem3}</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
  }
  
export default FeatureType2