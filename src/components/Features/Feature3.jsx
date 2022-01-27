import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Feature3() {
    return (
        <Container>
            <Row className="d-lg-flex my-5">
                <Col xs={{ order: 'last' }} lg={{ order: 'first' }} className="d-flex flex-column justify-content-center">
                    <h5 className='fw-bold my-3'>Optimisation for</h5>
                    <h1 className='fw-bold'>Collaborative</h1>
                    <p className='fs-5'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                    <h5 className='fw-bold my-3'>Accessory makers</h5>
                    <p className='fs-5'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <h5 className='fw-bold my-3'>Alterationists</h5>
                    <p className='fs-5'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                </Col>
                <Col xs={{ order: 'first' }, 12} lg={{ order: 'last' }, 6} className="part3-img">
                    <Image className='img-fluid' src="/img/feature-3.png" alt="management" />
                </Col>
            </Row>
    </Container>
    );
  }
  
export default Feature3