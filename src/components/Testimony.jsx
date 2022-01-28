import React from 'react'
import {Container, Card, Row, Col, Image} from 'react-bootstrap'

function Testimony() {
    return (
        <div className="testimony">
            <Container className="my-5">
                <h2 className='color-switch text-var-black text-center fw-bolder'>What Clients Say</h2>
                <p className='color-switch text-var-black text-center mt-3 mb-5 col-lg-6 col-sm-12 offset-lg-3 offset-sm-0'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                <Container className='d-lg-flex justify-content-between gap-5'>
                    <Card className='col mb-5 shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star.png" alt="star" className='me-1' />
                            </Card.Text>
                            <Row className='mb-4'>
                                <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                            </Row>
                            <Row className='d-flex align-items-center'>
                                <Col className='col-auto'>
                                    <Image src='/img/testi-img-1.png'/>
                                </Col>
                                <Col>
                                    <h6 className='fw-bold text-var-green'>Karunia Leo Gultom</h6>
                                    <h6 className='fw-bold'>Web Developer</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5 shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star.png" alt="star" className='me-1' />
                            </Card.Text>
                            <Row className='mb-4'>
                                <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                            </Row>
                            <Row className='d-flex align-items-center'>
                                <Col className='col-auto'>
                                    <Image src='/img/testi-img-2.png'/>
                                </Col>
                                <Col>
                                    <h6 className='fw-bold text-var-green'>Karunia Leo Gultom</h6>
                                    <h6 className='fw-bold'>Web Developer</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card className='col mb-5 shadow'>
                        <Card.Body>
                            <Card.Text className='mb-4'>
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star-fill.png" alt="star" className='me-1' />
                                <img src="/img/star.png" alt="star" className='me-1' />
                            </Card.Text>
                            <Row className='mb-4'>
                                <p>Product helps you see how many more days you need to work to reach your financial goal.</p>
                            </Row>
                            <Row className='d-flex align-items-center'>
                                <Col className='col-auto'>
                                    <Image src='/img/testi-img-3.png'/>
                                </Col>
                                <Col>
                                    <h6 className='fw-bold text-var-green'>Karunia Leo Gultom</h6>
                                    <h6 className='fw-bold'>Web Developer</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>
        </div>
    )
}

export default Testimony