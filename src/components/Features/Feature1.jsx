import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

function Feature1() {
    return (
        <Container>
            <Row className="d-lg-flex my-5">
                <Col xs={{ order: 'last' }} lg={{ order: 'first' }} className="d-flex flex-column justify-content-center">
                    <h5 className='fw-bold my-3'>Effortless Validation for</h5>
                    <h1 className='fw-bold'>Management</h1>
                    <p className='fs-5'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                    <h5 className='fw-bold my-3'>Accessory makers</h5>
                    <p className='fs-5'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                    <h5 className='fw-bold my-3'>Alterationists</h5>
                    <p className='fs-5'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                </Col>
                <Col xs={{ order: 'first' }, 12} lg={{ order: 'last' }, 6}>
                    <Image className='img-fluid' src="/img/feature-1.png" alt="management" />
                </Col>
            </Row>
        </Container>
    );
  }
  
export default Feature1