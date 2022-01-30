import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function FeatureType1({title, subtitle, paragraph1, subtitle2, paragraph2, subtitle3, paragraph3, textSmall, textLarge, image, imageSmall, imageLarge}) {
    return (
        <Container>
            <Row className="d-lg-flex my-5">
                <Col xs={textSmall} lg={textLarge} className="d-flex flex-column justify-content-center">
                    <h5 className='fw-bold my-3'>{subtitle}</h5>
                    <h1 className='fw-bold'>{title}</h1>
                    <p className='fs-5'>{paragraph1}</p>
                    <h5 className='fw-bold my-3'>{subtitle2}</h5>
                    <p className='fs-5'>{paragraph2}</p>
                    <h5 className='fw-bold my-3'>{subtitle3}</h5>
                    <p className='fs-5'>{paragraph3}</p>
                </Col>
                <Col xs={imageSmall} lg={imageLarge}>
                    <Image className='img-fluid' src={image} alt={title} />
                </Col>
            </Row>
        </Container>
    );
  }
  
export default FeatureType1