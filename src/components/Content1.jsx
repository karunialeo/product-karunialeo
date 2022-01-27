import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'

function Content1() {
    return (
        <div className="content1">
            <div className="my-5">
                <h2 className='fw-bolder text-center lh-base py-5'>Product was Built Specifically<br />for You</h2>
                <Container fluid className='content1-fluid'>
                    <Container>
                        <Row className='d-lg-flex justify-content-between pb-5'>
                            <Col sm className='text-center text-lg-start'>
                                <img src="/img/icon1.png" alt="" />
                                <h5 className='fw-bold my-4'>First click tests</h5>
                                <p>While most people enjoy casino gambling,</p>
                            </Col>
                            <Col sm className='text-center text-lg-start'>
                                <img src="/img/icon2.png" alt="" />
                                <h5 className='fw-bold my-4'>Design surveys</h5>
                                <p>Sports betting, lottery and bingo playing for the fun</p>
                            </Col>
                            <Col sm className='text-center text-lg-start'>
                                <img src="/img/icon3.png" alt="" />
                                <h5 className='fw-bold my-4'>Preference tests</h5>
                                <p>The Myspace page defines the individual.</p>
                            </Col>
                            <Col sm className='text-center text-lg-start'>
                                <img src="/img/icon4.png" alt="" />
                                <h5 className='fw-bold my-4'>Five second tests</h5>
                                <p>Personal choices and the overall personality of the person. </p>
                            </Col>
                        </Row>
                    </Container>
                    <Container className='text-center'>
                        <Button className='bg-var-green text-white px-4'>Sign Up Now</Button>
                    </Container>
                </Container>
            </div>
        </div>
    )
}

export default Content1